/// <reference types="vite/client" />

interface GiscusWidgetAttributes {
  id?: string;
  repo: `${string}/${string}`;
  repoid: string;
  category?: string;
  categoryid?: string;
  mapping: import('./lib').Mapping;
  term?: string;
  theme?: import('./lib').Theme;
  reactionsenabled?: import('./lib').BooleanString;
  emitmetadata?: import('./lib').BooleanString;
  inputposition?: import('./lib').InputPosition;
  lang?: import('./lib').AvailableLanguage;
  loading?: import('./lib').Loading;
}

declare namespace JSX {
  interface IntrinsicElements {
    'giscus-widget': GiscusWidgetAttributes;
  }
}
