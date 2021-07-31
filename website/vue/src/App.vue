<template>
  <main>
    <h1>utterances-vue-component</h1>

    <p>This page works vue3</p>

    <div className="space-x-2">
      <a href="/">Home</a>
      <a href="/react">React</a>
      <a href="/svelte">Svelte</a>
    </div>
    <Utterances
      repo="giscus/giscus-component"
      theme="github-light"
      issue-term="pathname"
    />
  </main>
</template>

<script setup lang="ts">
import { Utterances } from 'utterances-vue-component'
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
