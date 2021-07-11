type UtterancesProps = Utterances

type Utterances = {
  repo: Repo
  label?: string
  theme: Theme
} & Issue

type Repo = `${string}/${string}`

type Issue =
  | {
      issueTerm: Term | string[]
      issueNumber?: never
    }
  | {
      issueTerm?: never
      issueNumber: number
    }

type Term = 'pathname' | 'url' | 'title' | 'og:title'
type Theme =
  | 'github-light'
  | 'github-dark'
  | 'preferred-color-scheme'
  | 'github-dark-orange'
  | 'icy-dark'
  | 'dark-blue'
  | 'photon-dark'
  | 'boxy-light'

export type { UtterancesProps, Repo, Term, Theme, Utterances, Issue }
