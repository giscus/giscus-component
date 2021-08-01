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
}

type BooleanString = '0' | '1'

type Session = {
  session: string
}

type Repo = `${string}/${string}`

type Mapping = 'url' | 'title' | 'og:title' | 'specific' | 'number' | 'pathname'

type Theme =
  | 'light'
  | 'dark'
  | 'dark_dimmed'
  | 'dark_high_contrast'
  | 'preferred_color_scheme'
  | 'transparent_dark'
  | `https://${string}`

export type { GiscusProps, Giscus, Session, Repo, Mapping, Theme }
