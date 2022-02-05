import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * Widget element for giscus.
 */
@customElement('giscus-widget')
export class GiscusWidget extends LitElement {
  private GISCUS_SESSION_KEY = 'giscus-session';
  private GISCUS_ORIGIN = 'https://giscus.app';
  private ERROR_SUGGESTION = `Please consider reporting this error at https://github.com/laymonage/giscus/issues/new.`;

  static styles = css`
    :host,
    iframe {
      width: 100%;
      border: none;
    }
  `;

  /**
   * Repo where the discussion is stored.
   */
  @property({ reflect: true })
  repo: Repo = 'giscus/giscus';

  /**
   * ID of the repo where the discussion is stored.
   */
  @property({ reflect: true })
  repoId = 'MDEwOlJlcG9zaXRvcnkzNTE5NTgwNTM=';

  /**
   * Category where the discussion will be searched.
   */
  @property({ reflect: true })
  category = 'General';

  /**
   * ID of the category where new discussions will be created.
   */
  @property({ reflect: true })
  categoryId = 'MDE4OkRpc2N1c3Npb25DYXRlZ29yeTMyNzk2NTc1';

  /**
   * Mapping between the parent page and the discussion.
   */
  @property({ reflect: true })
  mapping: Mapping = 'specific';

  /**
   * Search term to use when searching for the discussion.
   */
  @property({ reflect: true })
  term = 'Welcome to giscus!';

  /**
   * Enable reactions to the main post of the discussion.
   */
  @property({ reflect: true })
  reactionsEnabled: BooleanString = '1';

  /**
   * Emit the discussion metadata periodically to the parent page.
   */
  @property({ reflect: true })
  emitMetadata: BooleanString = '0';

  /**
   * Placement of the comment box (`top` or `bottom`).
   */
  @property({ reflect: true })
  inputPosition: InputPosition = 'bottom';

  /**
   * Theme that giscus will be displayed in.
   */
  @property({ reflect: true })
  theme: Theme = 'light';

  /**
   * Language that giscus will be displayed in.
   */
  @property({ reflect: true })
  lang: Lang = 'en';

  /**
   * Session ID of the current user.
   */
  @property()
  private __session = '';

  constructor() {
    super();
    this.setupSession();
  }

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener('message', this.handleMessageEvent);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener('message', this.handleMessageEvent);
  }

  private _formatError(message: string) {
    return `[giscus] An error occurred. Error message: "${message}".`;
  }

  private setupSession() {
    const origin = location.href;
    const url = new URL(origin);
    const savedSession = localStorage.getItem(this.GISCUS_SESSION_KEY);
    const urlSession = url.searchParams.get('giscus') || '';

    if (urlSession) {
      localStorage.setItem(this.GISCUS_SESSION_KEY, JSON.stringify(urlSession));
      this.__session = urlSession;
      url.searchParams.delete('giscus');
      history.replaceState(undefined, document.title, url.toString());
      return;
    }

    if (savedSession) {
      try {
        this.__session = JSON.parse(savedSession || '') || '';
      } catch (e: any) {
        this.__session = '';
        localStorage.removeItem(this.GISCUS_SESSION_KEY);
        console.warn(
          `${this._formatError(e?.message)} Session has been cleared.`
        );
      }
    }
  }

  private handleMessageEvent(event: MessageEvent) {
    if (event.origin !== this.GISCUS_ORIGIN) return;

    const { data } = event;
    if (!(typeof data === 'object' && data?.giscus?.error)) return;

    const message: string = data.giscus.error;

    if (
      message.includes('Bad credentials') ||
      message.includes('Invalid state value')
    ) {
      // Might be because token is expired or other causes
      if (localStorage.getItem(this.GISCUS_SESSION_KEY) !== null) {
        localStorage.removeItem(this.GISCUS_SESSION_KEY);
        this.__session = '';
        console.warn(`${this._formatError(message)} Session has been cleared.`);
        return;
      }

      console.error(
        `${this._formatError(message)} No session is stored initially. ${
          this.ERROR_SUGGESTION
        }`
      );
    }

    if (message.includes('Discussion not found')) {
      console.warn(
        `[giscus] ${message}. A new discussion will be created if a comment/reaction is submitted.`
      );
      return;
    }

    console.error(`${this._formatError(message)} ${this.ERROR_SUGGESTION}`);
  }

  private _getOgMetaContent(property: string) {
    const element = document.querySelector(
      `meta[property='og:${property}'],meta[name='${property}']`
    ) as HTMLMetaElement;

    return element ? element.content : '';
  }

  private getIframeSrc() {
    const url = new URL(location.href);
    url.searchParams.delete('giscus');

    const origin = url.toString();

    const description = this._getOgMetaContent('description');

    const params: Record<string, string> = {
      origin,
      session: this.__session,
      repo: this.repo,
      repoId: this.repoId,
      category: this.category,
      categoryId: this.categoryId,
      reactionsEnabled: this.reactionsEnabled,
      emitMetadata: this.emitMetadata,
      inputPosition: this.inputPosition,
      theme: this.theme,
      description,
    };

    switch (this.mapping) {
      case 'url':
        params.term = origin;
        break;
      case 'title':
        params.term = document.title;
        break;
      case 'og:title':
        params.term = this._getOgMetaContent('title');
        break;
      case 'specific':
        params.term = this.term;
        break;
      case 'number':
        params.number = this.term;
        break;
      case 'pathname':
      default:
        params.term =
          location.pathname.length < 2
            ? 'index'
            : location.pathname.substring(1).replace(/\.\w+$/, '');
        break;
    }

    const locale = this.lang ? `/${this.lang}` : '';

    const searchParams = new URLSearchParams(params);

    return `${this.GISCUS_ORIGIN}${locale}/widget?${searchParams}`;
  }

  render() {
    return html` <iframe src=${this.getIframeSrc()}></iframe> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'giscus-widget': GiscusWidget;
  }
}

type BooleanString = '0' | '1';

type InputPosition = 'top' | 'bottom';

type Repo = `${string}/${string}`;

type Mapping =
  | 'url'
  | 'title'
  | 'og:title'
  | 'specific'
  | 'number'
  | 'pathname';

type GenericString = string & Record<never, never>;

type Theme =
  | 'light'
  | 'light_high_contrast'
  | 'light_protanopia'
  | 'dark'
  | 'dark_high_contrast'
  | 'dark_protanopia'
  | 'dark_dimmed'
  | 'transparent_dark'
  | 'preferred_color_scheme'
  | `https://${string}`
  | GenericString;

type Lang =
  | 'de'
  | 'gsw'
  | 'en'
  | 'es'
  | 'fr'
  | 'id'
  | 'it'
  | 'ja'
  | 'ko'
  | 'pl'
  | 'ro'
  | 'ru'
  | 'vi'
  | 'zh-CN'
  | 'zh-TW'
  | GenericString;
