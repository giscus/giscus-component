import React, { useEffect, useState } from 'react'
import { GiscusProps } from '@shared/types'
import {
  addDefaultStyles,
  createErrorMessageListener,
  formatError,
  getIframeSrc,
  GISCUS_ORIGIN,
  GISCUS_SESSION_KEY
} from '@shared/util'
import IframeResizer from 'iframe-resizer-react'

function GiscusClient(props: GiscusProps) {
  const [session, setSession] = useState('')
  const src = getIframeSrc({ ...props, session })

  useEffect(() => {
    const origin = location.href
    const url = new URL(origin)
    const savedSession = localStorage.getItem(GISCUS_SESSION_KEY)
    const urlSession = url.searchParams.get('giscus') || ''

    if (urlSession) {
      localStorage.setItem(GISCUS_SESSION_KEY, JSON.stringify(urlSession))
      setSession(urlSession)
      url.searchParams.delete('giscus')
      history.replaceState(undefined, document.title, url.toString())
      return
    }

    if (savedSession) {
      try {
        setSession(JSON.parse(savedSession || '') || '')
      } catch (e: any) {
        setSession('')
        localStorage.removeItem(GISCUS_SESSION_KEY)
        console.warn(`${formatError(e?.message)} Session has been cleared.`)
      }
    }
  }, [])

  useEffect(addDefaultStyles, [])

  useEffect(() => {
    const listener = createErrorMessageListener(() => setSession(''))
    window.addEventListener('message', listener)
    return () => window.removeEventListener('message', listener)
  }, [])

  useEffect(() => {
    const iframes = document.getElementsByClassName('giscus-frame')
    if (!iframes.length) return
    const iframe = iframes[0] as HTMLIFrameElement
    iframe.src = src
  }, [src])

  return (
    <div className="giscus">
      <IframeResizer
        className="giscus-frame"
        title="Comments"
        src={src}
        checkOrigin={[GISCUS_ORIGIN]}
      />
    </div>
  )
}

export default function Giscus({
  repo,
  repoId,
  category,
  categoryId,
  mapping,
  term,
  theme,
  reactionsEnabled,
  emitMetadata,
  lang
}: GiscusProps) {
  const [isMounted, setIsMounted] = useState(false)
  useEffect(() => setIsMounted(true), [])

  if (!isMounted) return null
  return (
    <GiscusClient
      repo={repo}
      repoId={repoId}
      category={category}
      categoryId={categoryId}
      mapping={mapping}
      term={term}
      theme={theme}
      reactionsEnabled={reactionsEnabled}
      emitMetadata={emitMetadata}
      lang={lang}
    />
  )
}
