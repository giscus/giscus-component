import { Utterances } from 'utterances-react-component'
export function App() {
  return (
    <main>
      <h1>utterances-react-component</h1>

      <p>This page works preact</p>

      <div className="space-x-2">
        <a href="/">Home</a>
        <a href="/vue">Vue</a>
        <a href="/svelte">Svelte</a>
      </div>

      <Utterances
        repo="giscus/giscus-component"
        theme="github-light"
        issueTerm="pathname"
      />
    </main>
  )
}
