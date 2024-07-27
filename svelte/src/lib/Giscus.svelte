<script lang="ts">
  import { onMount } from 'svelte';
  import type {
    AvailableLanguage,
    BooleanString,
    InputPosition,
    Loading,
    Mapping,
    Theme,
  } from '.';

  export let id: string;
  export let host = 'https://giscus.app';
  export let repo: `${string}/${string}`;
  export let repoId: string;
  export let category: string;
  export let categoryId: string;
  export let mapping: Mapping = 'pathname';
  export let term: string;
  export let strict: BooleanString = '0';
  export let reactionsEnabled: BooleanString = '1';
  export let emitMetadata: BooleanString = '0';
  export let inputPosition: InputPosition = 'bottom';
  export let theme: Theme = 'light';
  export let lang: AvailableLanguage = 'en';
  export let loading: Loading = 'eager';

  let mounted = false;

  onMount(() => {
    mounted = true;
    void import('giscus');
  });
</script>

{#if mounted}
  <giscus-widget
    id="{id}"
    host="{host}"
    repo="{repo}"
    repoid="{repoId}"
    category="{category}"
    categoryid="{categoryId}"
    mapping="{mapping}"
    term="{term}"
    strict="{strict}"
    reactionsenabled="{reactionsEnabled}"
    emitmetadata="{emitMetadata}"
    inputposition="{inputPosition}"
    theme="{theme}"
    lang="{lang}"
    loading="{loading}"
  ></giscus-widget>
{/if}
