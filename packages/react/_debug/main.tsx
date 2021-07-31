import React from 'react'
import ReactDOM from 'react-dom'
import Utterances from '../lib/Utterances'

ReactDOM.render(
  <React.StrictMode>
    <Utterances
      repo="giscus/giscus-component"
      theme="github-dark"
      issueTerm="pathname"
    />
  </React.StrictMode>,
  document.getElementById('root')
)
