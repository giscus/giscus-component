type UtterancesProps = Utterances

type Utterances = {
  repo: `${string}/${string}`
  label?: string
  theme: Theme
} & Issue

type Issue =
  | {
      issueTerm: IssueTerm | string[]
      issueNumber?: never
    }
  | {
      issueTerm?: never
      issueNumber: number
    }

type IssueTerm = 'pathname' | 'url' | 'title' | 'og:title'
type Theme =
  | 'github-light'
  | 'github-dark'
  | 'preferred-color-scheme'
  | 'github-dark-orange'
  | 'icy-dark'
  | 'dark-blue'
  | 'photon-dark'
  | 'boxy-light'

export type { UtterancesProps, IssueTerm, Theme, Utterances }
