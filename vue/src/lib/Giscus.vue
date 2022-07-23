<script setup lang="ts">
import { onMounted, ref } from 'vue';
import type {
  AvailableLanguage,
  BooleanString,
  InputPosition,
  Loading,
  Mapping,
  Repo,
  Theme,
} from './types';

defineProps<{
  id?: string;
  host?: string;
  repo: Repo;
  repoId: string;
  category?: string;
  categoryId?: string;
  mapping: Mapping;
  term?: string;
  theme?: Theme;
  strict?: BooleanString;
  reactionsEnabled?: BooleanString;
  emitMetadata?: BooleanString;
  inputPosition?: InputPosition;
  lang?: AvailableLanguage;
  loading?: Loading;
}>();

const mounted = ref(false);

onMounted(() => {
  mounted.value = true;
  import('giscus');
});
</script>

<template>
  <giscus-widget
    v-if="mounted"
    :id="id"
    :host="host"
    :repo="repo"
    :repoid="repoId"
    :category="category"
    :categoryid="categoryId"
    :mapping="mapping"
    :term="term"
    :strict="strict"
    :reactionsenabled="reactionsEnabled"
    :emitmetadata="emitMetadata"
    :inputposition="inputPosition"
    :theme="theme"
    :lang="lang"
    :loading="loading"
  />
</template>
