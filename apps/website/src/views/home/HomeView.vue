<template lang="pug">
  .home-view(v-if="isQueryReady")
    q-scroll-observer(@scroll="scrollHandler")

    home-banner(
      v-if="banner",
      :banner="banner")

    home-cards.q-pa-lg(
      v-if="highlights",
      :cards="highlights")

    template(
      v-for="banner in other",
      :key="banner.name")
      #other.q-py-lg(v-if="banner")
        BaseBanner(:data="banner")

    base-grid.q-ma-lg(:columns="2")
      blog-card(
        v-for="post in news",
        :key="post.text",
        :post="post")

    base-grid.q-ma-lg(:columns="2")
      blog-card(
        v-for="post in agti",
        :key="post.text",
        :post="post")
</template>

<script lang="ts" setup>
  // prettier-ignore
  import { inject, onBeforeMount,
    onBeforeUnmount, onServerPrefetch } from 'vue';
  import { useHomeQuery } from '#/api/query/home';
  import BaseGrid from '#/base/BaseGrid.vue';
  import BaseBanner from '#/base/BaseBanner.vue';
  import BlogCard from '#/base/blog/BlogCard.vue';
  import HomeCards from './HomeCards.vue';
  import HomeBanner from './HomeBanner.vue';
  import type { Ref } from 'vue';

  // Header styling which depends on view.
  const headerStyling: Ref<string> = inject('headerStyling');

  // prettier-ignore
  // Composable to handle the home query.
  const { banner, news, agti, highlights, other,
    isQueryReady, execHomeQuery } = useHomeQuery();

  // Change the header styling to plain
  headerStyling.value = 'plain';

  // Registers the hook called before mounted.
  onBeforeMount(loadHome);

  // Registers the hook called on server prefetch.
  onServerPrefetch(loadHome);

  // Registers the hook called before unmounted.
  onBeforeUnmount((): void => {
    headerStyling.value = 'flat';
  });

  // Load the Home from server based on current lang.
  async function loadHome(): Promise<void> {
    return execHomeQuery();
  }

  // Handle the scroll and change the header styling.
  function scrollHandler({ direction, position }) {
    if (direction === 'up' && position.top < 10) headerStyling.value = 'plain';
    if (direction === 'down' && position.top >= 10) headerStyling.value = 'flat';
  }
</script>
