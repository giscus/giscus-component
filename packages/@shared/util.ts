import { Giscus, Session } from './types'

export const GISCUS_SESSION_KEY = 'giscus-session'
export const GISCUS_ORIGIN = 'https://giscus.app'
const ERROR_SUGGESTION = `Please consider reporting this error at https://github.com/laymonage/giscus/issues/new.`

export function formatError(message: string) {
  return `[giscus] An error occurred. Error message: "${message}".`
}

export function getOgMetaContent(property: string) {
  const element = document.querySelector(
    `meta[property='og:${property}'],meta[name='${property}']`
  ) as HTMLMetaElement

  return element ? element.content : ''
}

export function getIframeSrc({
  repo,
  repoId,
  category = '',
  categoryId = '',
  mapping,
  term = '',
  theme = 'light',
  reactionsEnabled = '1',
  emitMetadata = '0',
  inputPosition = 'bottom',
  lang = 'en',
  session,
  origin
}: Giscus & Session & { origin?: string }) {
  const url = new URL(location.href)
  url.searchParams.delete('giscus')

  const cleanedUrl = url.toString()
  origin = origin || cleanedUrl

  const description = getOgMetaContent('description')

  const params: Record<string, string> = {
    origin,
    session,
    theme,
    reactionsEnabled,
    emitMetadata,
    inputPosition,
    repo,
    repoId,
    category,
    categoryId,
    description
  }

  switch (mapping) {
    case 'url':
      params.term = cleanedUrl
      break
    case 'title':
      params.term = document.title
      break
    case 'og:title':
      params.term = getOgMetaContent('title')
      break
    case 'specific':
      params.term = term
      break
    case 'number':
      params.number = term
      break
    case 'pathname':
    default:
      params.term =
        location.pathname.length < 2
          ? 'index'
          : location.pathname.substring(1).replace(/\.\w+$/, '')
      break
  }

  return `${GISCUS_ORIGIN}/${lang}/widget?${new URLSearchParams(params)}`
}

export function addDefaultStyles() {
  const style =
    document.getElementById('giscus-css') || document.createElement('style')
  style.id = 'giscus-css'
  style.textContent = `
    .giscus, .giscus-frame {
      width: 100%;
    }
    .giscus-frame {
      border: none;
      color-scheme: normal;
    }
  `
  document.head.prepend(style)
}

export function createErrorMessageListener(
  resetSession: () => void,
  iframe: HTMLIFrameElement | null = null
) {
  return function (event: MessageEvent) {
    if (event.origin !== GISCUS_ORIGIN) return

    const { data } = event
    if (!(typeof data === 'object' && data.giscus)) return

    if (iframe && data.giscus.resizeHeight) {
      iframe.style.height = `${data.giscus.resizeHeight}px`
    }

    if (!data.giscus.error) return

    const message: string = data.giscus.error

    if (
      message.includes('Bad credentials') ||
      message.includes('Invalid state value')
    ) {
      // Might be because token is expired or other causes
      if (localStorage.getItem(GISCUS_SESSION_KEY) !== null) {
        localStorage.removeItem(GISCUS_SESSION_KEY)
        resetSession()
        console.warn(`${formatError(message)} Session has been cleared.`)
        return
      }

      console.error(
        `${formatError(
          message
        )} No session is stored initially. ${ERROR_SUGGESTION}`
      )
    }

    if (message.includes('Discussion not found')) {
      console.warn(
        `[giscus] ${message}. A new discussion will be created if a comment/reaction is submitted.`
      )
      return
    }

    console.error(`${formatError(message)} ${ERROR_SUGGESTION}`)
  }
}
