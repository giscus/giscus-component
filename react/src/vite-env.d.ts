/// <reference types="vite/client" />

import { HTMLAttributes } from 'react';

interface GiscusWidgetAttributes extends HTMLAttributes<HTMLElement> {
  id?: string;
  host?: string;
  repo: `${string}/${string}`;
  repoid: string;
  category?: string;
  categoryid?: string;
  mapping: import('./lib/types').Mapping;
  term?: string;
  theme?: import('./lib/types').Theme;
  strict?: import('./lib/types').BooleanString;
  reactionsenabled?: import('./lib/types').BooleanString;
  emitmetadata?: import('./lib/types').BooleanString;
  inputposition?: import('./lib/types').InputPosition;
  lang?: import('./lib/types').AvailableLanguage;
  loading?: import('./lib/types').Loading;
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'giscus-widget': GiscusWidgetAttributes;
    }
  }
}
