import React from 'react'
import ReactDOM from 'react-dom'
import Giscus from '../lib/Giscus'

ReactDOM.render(
  <React.StrictMode>
    <Giscus
      repo="giscus/react-giscus"
      repoId="MDEwOlJlcG9zaXRvcnkzODMxNjMyOTY="
      category="Announcements"
      categoryId="DIC_kwDOFtaboM4B-N2c"
      mapping="specific"
      term="Welcome to react-giscus Discussions!"
      reactionsEnabled="1"
      emitMetadata="0"
      theme="light"
    />
  </React.StrictMode>,
  document.getElementById('root')
)
