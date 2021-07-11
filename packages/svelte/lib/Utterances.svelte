<script lang="ts">
  import { onMount } from "svelte";
  import { createScriptElement, putChildElement } from '../../@shared/util'
  import  type { Repo, Theme,  Issue } from '../../@shared/types'

  type $$Props = Issue

  export let repo: Repo
  export let theme: Theme
  export const label: string = undefined
  export let issue: Issue = (() => {
    return {
      issueTerm: $$props.issueTerm,
      issueNumber: $$props.issueNumber
    } as Issue
  })()


  let divRef: HTMLDivElement | undefined;
  onMount(() => {
    if(!divRef) return
    const scriptEl = createScriptElement({
      repo,
      theme,
      label,
      ...issue,
    })

    divRef = putChildElement(divRef, scriptEl)
  });
</script>

<div bind:this={divRef} />
