<template lang="pug">
  .article-view.q-pa-lg(v-if="post")
    h1.article-view__title
      | {{ post.text }}
    q-img.q-mb-lg(
      fit="cover",
      :src="post.image?.url",
      :draggable="false")
    .article-view__content(
      v-if="post.content",
      v-html="post.content")
  base-loading(v-else)
</template>

<script lang="ts" setup>
  import { useRoute, useRouter } from 'vue-router';
  import { onBeforeMount, onServerPrefetch, watch } from 'vue';
  import BaseLoading from '#/base/BaseLoading.vue';
  import { usePostQuery } from '#/api/query';
  import { useLocaleEntity } from '#/compose/useLocaleEntity';
  import type { Router, RouteLocationNormalized } from 'vue-router';

  // Composable to handle the Router.
  const router: Router = useRouter();

  // Composable to handle the Route.
  const route: RouteLocationNormalized = useRoute();

  // Composable to handle the Post Query.
  const { post, execPostQuery } = usePostQuery();

  // Composable to handle the Post l10n.
  const { localized } = $(useLocaleEntity($$(post)));

  // Registers the hook called before mounted.
  onBeforeMount(loadArticle);

  // Registers the hook called on server prefetch.
  onServerPrefetch(loadArticle);

  // Load the Post from server based on defined ID.
  async function loadArticle(): Promise<void> {
    return execPostQuery(route.params.id as string);
  }

  // Watch the changes of lang to reload entity.
  watch($$(localized), (): void => {
    localized ? localeRedirect(localized.id) : localeNotFound();
  });

  // Redirect to other entity based on the locale.
  function localeRedirect(id: string): void {
    router.push({ ...route, replace: true, params: { id } });
  }

  // Redirect to other view in case the entity not found.
  function localeNotFound(): void {
    router.push({ name: 'home', replace: true });
  }
</script>

<style lang="sass" scoped>
  @use '~@stylize/sass-mixin' as *

  .article-view
    :deep(img)
      width: 100%
</style>
