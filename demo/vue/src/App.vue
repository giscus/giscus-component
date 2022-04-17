<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import Giscus from '@giscus/vue';
import './styles.css';
</script>

<template>
  <div class="comments-container">
    <Giscus
      id="comments"
      repo="giscus/giscus-component"
      repoId="MDEwOlJlcG9zaXRvcnkzOTEzMTMwMjA="
      category="Announcements"
      categoryId="DIC_kwDOF1L2fM4B-hVS"
      mapping="specific"
      term="Welcome to @giscus/vue component!"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme="light"
      lang="en"
    />
  </div>
</template>
