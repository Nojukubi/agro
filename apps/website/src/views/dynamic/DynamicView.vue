<template lang="pug">
  template(v-if="page")
    dynamic-blog(
      v-if="page.blog?.tag",
      :tag="page.blog.tag",
      :title="page.blog.text")
    dynamic-page(
      v-if="page.static?.id",
      :id="page.id")
</template>

<script lang="ts" setup>
  import { useRoute } from 'vue-router';
  import { useConfigQuery } from '#/api/query';
  import DynamicBlog from './DynamicBlog.vue';
  import DynamicPage from './DynamicPage.vue';
  import type { Page } from '#/api/query';
  import type { RouteLocationNormalized } from 'vue-router';

  // Composable to handle the Route.
  const route: RouteLocationNormalized = useRoute();

  // Composable to handle the Config Query.
  const { pages } = $(useConfigQuery());

  // Find the page based on current route.
  const page: Page = pages.find((page: Page): boolean => {
    return page.name === route.name;
  });
</script>
