import { html, css, LitElement, PropertyDeclaration } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { createRef, ref, Ref } from 'lit/directives/ref.js';

/**
 * Widget element for giscus.
 */
@customElement('giscus-widget')
export class GiscusWidget extends LitElement {
  private GISCUS_SESSION_KEY = 'giscus-session';
  private GISCUS_DEFAULT_HOST = 'https://giscus.app';
  private ERROR_SUGGESTION = `Please consider reporting this error at https://github.com/giscus/giscus/issues/new.`;

  private __session = '';
  private _iframeRef: Ref<HTMLIFrameElement> = createRef();
  private messageEventHandler = this.handleMessageEvent.bind(this);

  get iframeRef() {
    return this._iframeRef?.value;
  }

  static styles = css`
    :host,
    iframe {
      width: 100%;
      border: none;
      min-height: 150px;
      color-scheme: light dark;
    }

    iframe.loading {
      opacity: 0;
    }
  `;

  /**
   * Host of the giscus server.
   */
  @property({ reflect: true })
  host: string = this.GISCUS_DEFAULT_HOST;

  /**
   * Repo where the discussion is stored.
   */
  @property({ reflect: true })
  repo!: Repo;

  /**
   * ID of the repo where the discussion is stored.
   */
  @property({ reflect: true })
  repoId?: string;

  /**
   * Category where the discussion will be searched.
   */
  @property({ reflect: true })
  category?: string;

  /**
   * ID of the category where new discussions will be created.
   */
  @property({ reflect: true })
  categoryId?: string;

  /**
   * Mapping between the parent page and the discussion.
   */
  @property({ reflect: true })
  mapping?: Mapping;

  /**
   * Search term to use when searching for the discussion.
   */
  @property({ reflect: true })
  term?: string;

  /**
   * Use strict title matching.
   */
  @property({ reflect: true })
  strict: BooleanString = '0';

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
   * Whether the iframe should be loaded lazily or eagerly.
   */
  @property({ reflect: true })
  loading: Loading = 'eager';

  constructor() {
    super();
    this.setupSession();
    window.addEventListener('message', this.messageEventHandler);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener('message', this.messageEventHandler);
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
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
    if (event.origin !== this.host) return;

    const { data } = event;
    if (!(typeof data === 'object' && data.giscus)) return;

    if (this.iframeRef && data.giscus.resizeHeight) {
      this.iframeRef.style.height = `${data.giscus.resizeHeight}px`;
    }

    if (!data.giscus.error) return;

    const message: string = data.giscus.error;

    if (
      message.includes('Bad credentials') ||
      message.includes('Invalid state value') ||
      message.includes('State has expired')
    ) {
      // Might be because token is expired or other causes
      if (localStorage.getItem(this.GISCUS_SESSION_KEY) !== null) {
        localStorage.removeItem(this.GISCUS_SESSION_KEY);
        this.__session = '';
        console.warn(`${this._formatError(message)} Session has been cleared.`);
        // Reload iframe
        this.update(new Map());
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

  private sendMessage<T>(message: T) {
    this.iframeRef?.contentWindow?.postMessage({ giscus: message }, this.host);
  }

  private updateConfig() {
    const setConfig: ISetConfigMessage = {
      setConfig: {
        repo: this.repo,
        repoId: this.repoId,
        category: this.category,
        categoryId: this.categoryId,
        term: this.getTerm(),
        number: +this.getNumber(),
        strict: this.strict === '1',
        reactionsEnabled: this.reactionsEnabled === '1',
        emitMetadata: this.emitMetadata === '1',
        inputPosition: this.inputPosition,
        theme: this.theme,
        lang: this.lang,
      },
    };

    this.sendMessage(setConfig);
  }

  firstUpdated() {
    this.iframeRef?.addEventListener('load', () =>
      this.iframeRef?.classList.remove('loading')
    );
  }

  requestUpdate(
    name?: PropertyKey,
    oldValue?: unknown,
    options?: PropertyDeclaration<unknown, unknown>
  ): void {
    // Only rerender (update) on initial load or if the host changes.
    if (!this.hasUpdated || name === 'host') {
      super.requestUpdate(name, oldValue, options);
      return;
    }
    // After loaded, just update the config without rerendering.
    this.updateConfig();
  }

  private getMetaContent(property: string, og = false) {
    const ogSelector = og ? `meta[property='og:${property}'],` : '';
    const element = document.querySelector<HTMLMetaElement>(
      ogSelector + `meta[name='${property}']`
    );

    return element ? element.content : '';
  }

  private _getCleanedUrl() {
    const url = new URL(location.href);
    url.searchParams.delete('giscus');
    return url;
  }

  private getTerm() {
    switch (this.mapping) {
      case 'url':
        return `${this._getCleanedUrl()}`;
      case 'title':
        return document.title;
      case 'og:title':
        return this.getMetaContent('title', true);
      case 'specific':
        return this.term || '';
      case 'number':
        return '';
      case 'pathname':
      default:
        return location.pathname.length < 2
          ? 'index'
          : location.pathname.substring(1).replace(/\.\w+$/, '');
    }
  }

  private getNumber() {
    return (this.mapping === 'number' && this.term) || '';
  }

  private getIframeSrc() {
    const url = this._getCleanedUrl().toString();

    const origin = `${url}${this.id ? '#' + this.id : ''}`;

    const description = this.getMetaContent('description', true);
    const backLink = this.getMetaContent('giscus:backlink') || url;

    const params: Record<string, string> = {
      origin,
      session: this.__session,
      repo: this.repo,
      repoId: this.repoId || '',
      category: this.category || '',
      categoryId: this.categoryId || '',
      term: this.getTerm(),
      number: this.getNumber(),
      strict: this.strict,
      reactionsEnabled: this.reactionsEnabled,
      emitMetadata: this.emitMetadata,
      inputPosition: this.inputPosition,
      theme: this.theme,
      description,
      backLink,
    };

    const host = this.host || this.GISCUS_DEFAULT_HOST;
    const locale = this.lang ? `/${this.lang}` : '';
    const searchParams = new URLSearchParams(params);

    return `${host}${locale}/widget?${searchParams}`;
  }

  render() {
    return html`
      <iframe
        title="Comments"
        scrolling="no"
        class="loading"
        ${ref(this._iframeRef)}
        src=${this.getIframeSrc()}
        loading=${this.loading}
        allow="clipboard-write"
        part="iframe"
      ></iframe>
    `;
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
  | 'light_tritanopia'
  | 'dark'
  | 'dark_high_contrast'
  | 'dark_protanopia'
  | 'dark_tritanopia'
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
  | 'nl'
  | 'pl'
  | 'pt'
  | 'ro'
  | 'ru'
  | 'tr'
  | 'vi'
  | 'zh-CN'
  | 'zh-TW'
  | GenericString;

type Loading = 'lazy' | 'eager';
interface ISetConfigMessage {
  setConfig: {
    theme?: Theme;
    repo?: string;
    repoId?: string;
    category?: string;
    categoryId?: string;
    term?: string;
    description?: string;
    backLink?: string;
    number?: number;
    strict?: boolean;
    reactionsEnabled?: boolean;
    emitMetadata?: boolean;
    inputPosition?: InputPosition;
    lang?: Lang;
  };
}
