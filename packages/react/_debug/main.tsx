import React from 'react'
import ReactDOM from 'react-dom'
import Giscus from '../lib/Giscus'

ReactDOM.render(
  <React.StrictMode>
    <Giscus
      repo="giscus/giscus-component"
      repoId="MDEwOlJlcG9zaXRvcnkzOTEzMTMwMjA="
      category="Announcements"
      categoryId="DIC_kwDOF1L2fM4B-hVS"
      mapping="specific"
      term="Welcome to giscus-component Discussions"
      reactionsEnabled="1"
      emitMetadata="0"
      theme="light"
    />
  </React.StrictMode>,
  document.getElementById('root')
)
