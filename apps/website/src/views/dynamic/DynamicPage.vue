<template lang="pug">
  .dynamic-page.q-pa-lg(
    v-if="page",
    v-html="page.static?.content")
  base-loading(v-else)
</template>

<script lang="ts" setup>
  import { onBeforeMount, onServerPrefetch, watch } from 'vue';
  import { usePageQuery } from '#/api/query';
  import BaseLoading from '#/base/BaseLoading.vue';
  import { useLocaleEntity } from '#/compose/useLocaleEntity';

  // Defines the props.
  const props = defineProps<{
    id: string;
  }>();

  // Composable to handle the Page Query.
  const { page, execPageQuery } = usePageQuery();

  // Composable to handle the Page l10n.
  const { localized } = $(useLocaleEntity($$(page)));

  // Determine the page ID to be loaded.
  const pageId: string = $computed(() => {
    return localized?.id ?? props.id;
  });

  // Registers the hook called before mounted.
  onBeforeMount(loadPage);

  // Registers the hook called on server prefetch.
  onServerPrefetch(loadPage);

  // Watch changes to the localized Page.
  watch($$(localized), (): void => {
    if (localized) loadPage();
  });

  // Load the Page from server based on ID.
  async function loadPage(): Promise<void> {
    return execPageQuery(pageId);
  }
</script>

<style lang="sass" scoped>
  @use '~@stylize/sass-mixin' as *

  .dynamic-page
    :deep(img)
      width: 100%
</style>
