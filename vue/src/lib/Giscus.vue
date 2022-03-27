<script setup lang="ts">
import { onMounted } from 'vue';
import type { AvailableLanguage, BooleanString, InputPosition, Loading, Mapping, Repo, Theme } from '.';

defineProps<{
  id?: string;
  repo: Repo;
  repoId: string;
  category?: string;
  categoryId?: string;
  mapping: Mapping;
  term?: string;
  theme?: Theme;
  reactionsEnabled?: BooleanString;
  emitMetadata?: BooleanString;
  inputPosition?: InputPosition;
  lang?: AvailableLanguage;
  loading?: Loading;
}>();

onMounted(() => import('giscus'));
</script>

<template>
  <giscus-widget
    :id="id"
    :repo="repo"
    :repoid="repoId"
    :category="category"
    :categoryid="categoryId"
    :mapping="mapping"
    :term="term"
    :reactionsenabled="reactionsEnabled"
    :emitmetadata="emitMetadata"
    :inputposition="inputPosition"
    :theme="theme"
    :lang="lang"
    :loading="loading"
  />
</template>
