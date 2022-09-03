import * as React from 'react';

export type BooleanString = '0' | '1';

export type InputPosition = 'top' | 'bottom';

export type Repo = `${string}/${string}`;

export type Mapping =
  | 'url'
  | 'title'
  | 'og:title'
  | 'specific'
  | 'number'
  | 'pathname';

export type GenericString = string & Record<never, never>;

export type Theme =
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

export type AvailableLanguage =
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

export type Loading = 'lazy' | 'eager';

export interface GiscusProps {
  className: string;
  style: React.CSSProperties;
  id?: string;
  host?: string;
  /**
   * Choose the repository giscus will connect to. Make sure that:
   * - The **repository is [public](https://docs.github.com/en/github/administering-a-repository/managing-repository-settings/setting-repository-visibility#making-a-repository-public)**, otherwise visitors will not be able to view the discussion.
   * - The **[giscus](https://github.com/apps/giscus) app is installed**, otherwise visitors will not be able to comment and react.
   * - The **Discussions feature is turned on** by [enabling it for your repository](https://docs.github.com/en/github/administering-a-repository/managing-repository-settings/enabling-or-disabling-github-discussions-for-a-repository).
   */
  repo: Repo;
  repoId: string;
  /**
   * Choose the discussion category where new discussions will be created. It is recommended to use a category with the **Announcements** type so that new discussions can only be created by maintainers and giscus.
   */
  category?: string;
  categoryId: string;
  /**
   * Choose the mapping between the embedding page and the embedded discussion.
   *
   * |            Mapping             |                                                             Description                                                      |
   * |--------------------------------|------------------------------------------------------------------------------------------------------------------------------|
   * | `pathname`                     | Giscus will search for a discussion whose title contains the page's `pathname` URL component.                                |
   * | `URL`                          | giscus will search for a discussion whose title contains the page's URL.                                                     |
   * | `<title>`                      | giscus will search for a discussion whose title contains the page's `<title>` HTML tag.                                      |
   * | `og:title`                     | giscus will search for a discussion whose title contains the page's [`<meta property="og:title">`](https://ogp.me/) HTML tag.|
   * | specific term                  | giscus will search for a discussion whose title contains a specific term.                                                    |
   * | any choosen number             | giscus will load a specific discussion by number. This option does not support automatic discussion creation.                |
   */
  mapping: Mapping;
  /**
   * See {@link mapping}
   */
  term?: string;
  theme?: Theme;
  /**
   * Avoid mismatches due to GitHub's fuzzy searching method when there are multiple discussions with similar titles. See the [documentation](https://github.com/giscus/giscus/blob/main/ADVANCED-USAGE.md#data-strict) for more details.
   * @default 0
   */
  strict?: BooleanString;
  /**
   * The reactions for the discussion's main post will be shown before the comments.
   * @default 1
   */
  reactionsEnabled?: BooleanString;
  /**
   * Discussion metadata will be sent periodically to the parent window (the embedding page). For demonstration, enable this option and open your browser's console on this page. See the [documentation](https://github.com/giscus/giscus/blob/main/ADVANCED-USAGE.md#imetadatamessage) for more details.
   * @default 0
   */
  emitMetadata?: BooleanString;
  /**
   * The comment input box will be placed above the comments, so that users can leave a comment without scrolling to the bottom of the discussion.
   * @default bottom
   */
  inputPosition?: InputPosition;
  /**
   * Choose the language giscus will be displayed in. Can't find your language? You can easily [contribute](https://github.com/giscus/giscus/blob/main/CONTRIBUTING.md#adding-localizations) a localization.
   */
  lang?: AvailableLanguage;
  /**
   * Loading of the comments will be deferred until the user scrolls near the comments container. This is done by adding `loading="lazy"` to the `<iframe>` element.
   * @default undefined
   */
  loading?: Loading;
}
