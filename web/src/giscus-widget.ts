import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('giscus-widget')
export class GiscusWidget extends LitElement {
  static styles = css`
    :host {
      width: 100%;
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

  render() {
    return html`
      <h1>${this.repo}!</h1>
      <button part="button">Mapping: ${this.mapping}</button>
      <slot></slot>
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
