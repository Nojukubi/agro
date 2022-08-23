<template lang="pug">
  .docs-view.q-pa-lg(v-if="docs")
    h1.docs-view__title
      | {{ t('views.docs.title') }}
    base-list.docs-view__list(:items="docs")
      template(#header="{ data }")
        | {{ data.category }}
      template(#default="{ data }")
        a.docs-view__file(
          v-for="file in data.files",
          :key="file.url",
          :href="file.url",
          target="__blank")
          | {{ file.text }}
  base-loading(v-else)
</template>

<script lang="ts" setup>
  import { useI18n } from 'vue-i18n';
  import { onBeforeMount, onServerPrefetch } from 'vue';
  import BaseList from '#/base/BaseList.vue';
  import BaseLoading from '#/base/BaseLoading.vue';
  import { useDocsQuery } from '#/api/query';
  import type { Composer } from 'vue-i18n';

  // Composable to handle the I18n.
  const { t }: Composer = useI18n();

  // Composable to handle the Docs Query.
  const { docs, execDocsQuery } = useDocsQuery();

  // Registers the hook called before mounted.
  onBeforeMount(loadDocs);

  // Registers the hook called on server prefetch.
  onServerPrefetch(loadDocs);

  // Load the Docs from server based on current lang.
  async function loadDocs(): Promise<void> {
    return execDocsQuery();
  }
</script>
