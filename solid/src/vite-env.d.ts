/// <reference types="vite/client" />

export interface GiscusWidgetAttributes {
  id?: string;
  host?: string;
  repo: `${string}/${string}`;
  'repo-id': string;
  category?: string;
  'category-id'?: string;
  mapping: import('./lib/types').Mapping;
  term?: string;
  theme?: import('./lib/types').Theme;
  strict?: import('./lib/types').BooleanString;
  'reactions-enabled'?: import('./lib/types').BooleanString;
  'emit-metadata'?: import('./lib/types').BooleanString;
  'input-position'?: import('./lib/types').InputPosition;
  lang?: import('./lib/types').AvailableLanguage;
  loading?: import('./lib/types').Loading;
}

declare module 'solid-js' {
  namespace JSX {
    interface IntrinsicElements {
      'giscus-widget': GiscusWidgetAttributes;
    }
  }
}
