<template lang="pug">
  .faqs-view.q-pa-lg(v-if="faqs")
    h1.faqs-view__title
      | {{ t('views.faqs.title') }}
    base-list.faqs-view__list(:items="faqs")
      template(#header="{ data }")
        | {{ data.question }}
      template(#default="{ data }")
        .faqs-view__answer(v-html="data.answer")
  base-loading(v-else)
</template>

<script lang="ts" setup>
  import { useI18n } from 'vue-i18n';
  import { onBeforeMount, onServerPrefetch } from 'vue';
  import BaseList from '#/base/BaseList.vue';
  import BaseLoading from '#/base/BaseLoading.vue';
  import { useFaqsQuery } from '#/api/query';
  import type { Composer } from 'vue-i18n';

  // Composable to handle the I18n.
  const { t }: Composer = useI18n();

  // Composable to handle the FAQs Query.
  const { faqs, execFaqsQuery } = useFaqsQuery();

  // Registers the hook called before mounted.
  onBeforeMount(loadFAQs);

  // Registers the hook called on server prefetch.
  onServerPrefetch(loadFAQs);

  // Load the FAQs from server based on current lang.
  async function loadFAQs(): Promise<void> {
    return execFaqsQuery();
  }
</script>
