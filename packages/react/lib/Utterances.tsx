import React, { FC, useRef, useEffect } from 'react'
import { UtterancesProps } from '@shared/types'
import { createScriptElement, putChildElement } from '@shared/util'

const Utterances: FC<UtterancesProps> = ({
  repo,
  label,
  theme,
  issueTerm,
  issueNumber
}) => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return

    const scriptEl = createScriptElement({
      repo,
      label,
      theme,
      issueTerm,
      issueNumber: issueNumber as never
    })

    putChildElement(ref.current, scriptEl)
  }, [])

  return <div ref={ref} />
}

export default Utterances
