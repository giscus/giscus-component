type GiscusProps = Giscus

type Giscus = {
  repo: Repo
  theme: Theme
  term: string
}

type Repo = `${string}/${string}`

type Term = 'url' | 'title' | 'og:title' | 'specific' | 'number' | 'pathname'

type Theme =
  | 'light'
  | 'dark'
  | 'dark_dimmed'
  | 'dark_high_contrast'
  | 'preferred_color_scheme'
  | 'transparent_dark'
  | `https://${string}`

export type { GiscusProps, Repo, Term, Theme, Giscus }
