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
  | 'preferred_color_scheme'
  | 'transparent_dark'
  | 'noborder_light'
  | 'noborder_dark'
  | 'cobalt'
  | `https://${string}`
  | GenericString;

export type AvailableLanguage =
  | 'ar'
  | 'ca'
  | 'de'
  | 'en'
  | 'es'
  | 'fa'
  | 'fr'
  | 'he'
  | 'id'
  | 'it'
  | 'ja'
  | 'ko'
  | 'nl'
  | 'pl'
  | 'pt'
  | 'ro'
  | 'ru'
  | 'th'
  | 'tr'
  | 'vi'
  | 'uk'
  | 'zh-CN'
  | 'zh-TW'
  | GenericString;

export type Loading = 'lazy' | 'eager';

export interface GiscusProps {
  id?: string;
  host?: string;
  repo: Repo;
  repoId: string;
  category?: string;
  categoryId?: string;
  mapping: Mapping;
  term?: string;
  theme?: Theme;
  strict?: BooleanString;
  reactionsEnabled?: BooleanString;
  emitMetadata?: BooleanString;
  inputPosition?: InputPosition;
  lang?: AvailableLanguage;
  loading?: Loading;
}
