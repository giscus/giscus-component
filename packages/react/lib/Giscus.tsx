import React, { useEffect, useRef, useState } from 'react'
import { GiscusProps } from '@shared/types'
import {
  addDefaultStyles,
  createErrorMessageListener,
  formatError,
  getIframeSrc,
  GISCUS_ORIGIN,
  GISCUS_SESSION_KEY
} from '@shared/util'
import iFrameResizer from 'iframe-resizer'

function GiscusClient(props: GiscusProps) {
  const [session, setSession] = useState('')
  const src = getIframeSrc({ ...props, session })
  const iframe = useRef<HTMLIFrameElement>(null)

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
    if (!iframe.current) return
    iframe.current.addEventListener('load', () =>
      iFrameResizer.iframeResizer(
        { checkOrigin: [GISCUS_ORIGIN] },
        iframe.current as HTMLIFrameElement
      )
    )
  }, [src])

  return (
    <div className="giscus">
      <iframe
        className="giscus-frame"
        title="Comments"
        src={src}
        ref={iframe}
      />
    </div>
  )
}

export default function Giscus(props: GiscusProps) {
  const [isMounted, setIsMounted] = useState(false)
  useEffect(() => setIsMounted(true), [])

  if (!isMounted) return null
  return <GiscusClient {...props} />
}
