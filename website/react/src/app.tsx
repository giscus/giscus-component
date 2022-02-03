import { Giscus } from '@giscus/react'

export function App() {
  return (
    <main>
      <h1>@giscus/react</h1>

      <p>This page is running Preact</p>

      <div className="space-x-2">
        <a href="/">Home</a>
        <a href="/vue">Vue</a>
        <a href="/svelte">Svelte</a>
      </div>

      <Giscus
        repo="giscus/react-giscus"
        repoId="MDEwOlJlcG9zaXRvcnkzODMxNjMyOTY="
        category="Announcements"
        categoryId="DIC_kwDOFtaboM4B-N2c"
        mapping="specific"
        term="Welcome to react-giscus Discussions!"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme="light"
        lang="en"
      />
    </main>
  )
}
