<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import Giscus from './lib';
</script>

<template>
  <Giscus
    repo="giscus/giscus-component"
    repo-id="MDEwOlJlcG9zaXRvcnkzOTEzMTMwMjA="
    category="Announcements"
    category-id="DIC_kwDOF1L2fM4B-hVS"
    mapping="specific"
    term="Welcome to @giscus/vue component!"
    strict="1"
    reactions-enabled="1"
    emit-metadata="0"
    input-position="top"
    theme="light"
    lang="en"
  />
</template>
