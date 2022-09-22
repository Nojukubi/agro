<template lang="pug">
  base-loading(v-if="!videos")
  .videos-view.q-pa-lg(v-else)
    h1.videos-view__title
      | Videos
    base-grid.videos-view__cards
      VideosCard(
        v-for="video in videos",
        :key="video.external.url",
        :video="video")
</template>

<script lang="ts" setup>
  import { useI18n } from 'vue-i18n';
  import { onBeforeMount, onServerPrefetch } from 'vue';
  import { useVideosQuery } from '#/api/query';
  import BaseGrid from '#/base/BaseGrid.vue';
  import BaseLoading from '#/base/BaseLoading.vue';
  import VideosCard from './VideosCard.vue';
  import type { Composer } from 'vue-i18n';

  // Composable to handle the I18n.
  const { t }: Composer = useI18n();

  // Composable to handle the Videos Query.
  const { videos, execVideosQuery } = useVideosQuery();

  // Registers the hook called before mounted.
  onBeforeMount(loadVideos);

  // Registers the hook called on server prefetch.
  onServerPrefetch(loadVideos);

  // Load the defined Videos from server.
  async function loadVideos(): Promise<void> {
    return execVideosQuery();
  }
</script>
