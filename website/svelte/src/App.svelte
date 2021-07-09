<script lang="ts">
  import { Utterances } from 'utterances-svelte-component'
</script>

<main>
  <h1>utterances-svelte-component</h1>

  <p>This page works svelte</p>

  <div class="space-x-2">

  <a href="/">Home</a>
  <a href="/react">React</a>
  <a href="/vue">Vue</a>
  </div>

  <Utterances repo="TomokiMiyauci/utterances-component" theme="github-light" issueTerm="pathname" label="comment" />
</main>

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
