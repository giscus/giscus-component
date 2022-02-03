type GiscusProps = Giscus

type Giscus = {
  repo: Repo
  repoId: string
  category?: string
  categoryId?: string
  mapping: Mapping
  term?: string
  theme?: Theme
  reactionsEnabled?: BooleanString
  emitMetadata?: BooleanString
  inputPosition?: InputPosition
  lang?: Lang
}

type BooleanString = '0' | '1'

type InputPosition = 'top' | 'bottom'

type Session = {
  session: string
}

type Repo = `${string}/${string}`

type Mapping = 'url' | 'title' | 'og:title' | 'specific' | 'number' | 'pathname'

type GenericString = string & Record<never, never>

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
  | GenericString

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
  | GenericString

export type { GiscusProps, Giscus, Session, Repo, Mapping, Theme }
