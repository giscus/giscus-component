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
  lang?: Lang
}

type BooleanString = '0' | '1'

type Session = {
  session: string
}

type Repo = `${string}/${string}`

type Mapping = 'url' | 'title' | 'og:title' | 'specific' | 'number' | 'pathname'

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

type Lang =
  | 'en'
  | 'fr'
  | 'de'
  | 'gsw'
  | 'es'
  | 'it'
  | 'ja'
  | 'ko'
  | 'pl'
  | 'id'
  | 'ro'
  | 'zh-CN'
  | 'zh-TW'
  | string

export type { GiscusProps, Giscus, Session, Repo, Mapping, Theme }
