<template>
  <main>
    <h1>@giscus/vue</h1>

    <p>This page is running Vue</p>

    <div class="space-x-2">
      <a href="/">Home</a>
      <a href="/react">React</a>
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
</template>

<script setup lang="ts">
import { Giscus } from '@giscus/vue'
</script>

<style>
main {
  max-width: 760px;
  margin: 0 auto;
}
.space-x-2 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(0.5rem * var(--tw-space-x-reverse));
  margin-left: calc(0.5rem * calc(1 - var(--tw-space-x-reverse)));
}
</style>
