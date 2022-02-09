<script lang="ts">
  import { onMount } from 'svelte'

  import {
    addDefaultStyles,
    createErrorMessageListener,
    formatError,
    getIframeSrc,
    GISCUS_SESSION_KEY
  } from '../../@shared/util'
  import type { GiscusProps } from '../../@shared/types'

  export let repo: GiscusProps['repo']
  export let repoId: GiscusProps['repoId']
  export let category: GiscusProps['category'] = ''
  export let categoryId: GiscusProps['categoryId'] = ''
  export let mapping: GiscusProps['mapping']
  export let term: GiscusProps['term'] = ''
  export let lang: GiscusProps['lang'] = 'en'
  export let theme: GiscusProps['theme'] = 'light'
  export let reactionsEnabled: GiscusProps['reactionsEnabled'] = '1'
  export let emitMetadata: GiscusProps['emitMetadata'] = '0'
  export let inputPosition: GiscusProps['inputPosition'] = 'bottom'

  let session = ''
  $: src = getIframeSrc({
    repo,
    repoId,
    category,
    categoryId,
    mapping,
    term,
    lang,
    theme,
    reactionsEnabled,
    emitMetadata,
    inputPosition,
    session
  })

  onMount(() => {
    const origin = location.href
    const url = new URL(origin)
    const savedSession = localStorage.getItem(GISCUS_SESSION_KEY)
    session = url.searchParams.get('giscus') || ''

    if (session) {
      localStorage.setItem(GISCUS_SESSION_KEY, JSON.stringify(session))
      url.searchParams.delete('giscus')
      history.replaceState(undefined, document.title, url.toString())
    } else if (savedSession) {
      try {
        session = JSON.parse(savedSession || '') || ''
      } catch (e) {
        session = ''
        localStorage.removeItem(GISCUS_SESSION_KEY)
        console.warn(`${formatError(e?.message)} Session has been cleared.`)
      }
    }
  })

  onMount(addDefaultStyles)

  let iframe: HTMLIFrameElement

  onMount(() => {
    const listener = createErrorMessageListener(() => (session = ''), iframe)
    window.addEventListener('message', listener)
    return () => window.removeEventListener('message', listener)
  })
</script>

<div class="giscus">
  <iframe title="Comments" class="giscus-frame" {src} bind:this={iframe} />
</div>
