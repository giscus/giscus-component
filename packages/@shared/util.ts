import { Utterances } from './types'

const SOURCE = 'https://utteranc.es/client.js'

/**
 * Return HTMLScriptElement for async loading utterance script
 * @param param - `Utterances` setting properties
 * @returns HTMLScriptElement what load utterances script
 */
const createScriptElement = ({
  repo,
  label,
  theme,
  issueTerm,
  issueNumber
}: Utterances): HTMLScriptElement => {
  const scriptEl = document.createElement('script')

  scriptEl.src = SOURCE
  scriptEl.async = true
  scriptEl.setAttribute('repo', repo)
  if (issueTerm) {
    const _issueTerm = Array.isArray(issueTerm)
      ? issueTerm.join(' ')
      : issueTerm

    scriptEl.setAttribute('issue-term', _issueTerm)
  } else if (typeof issueNumber === 'number') {
    scriptEl.setAttribute('issue-number', String(issueNumber))
  }
  scriptEl.setAttribute('crossorigin', 'anonymous')
  scriptEl.setAttribute('theme', theme)

  if (label) {
    scriptEl.setAttribute('label', label)
  }

  return scriptEl
}

const putChildElement = <T extends HTMLElement, U extends HTMLElement>(
  parent: T,
  child: U
): T => {
  parent.childNodes.forEach((node) => node.remove())

  parent.appendChild(child)
  return parent
}

export { createScriptElement, putChildElement }
