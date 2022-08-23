<template lang="pug">
  .medias-view.q-pa-lg(v-if="medias")
    h1.medias-view__title
      | {{ t('views.medias.title') }}
    base-grid.medias-view__cards
      template(
        v-for="media in medias",
        :key="media.link?.url")
        q-card.medias-view__card(
          v-if="media.link",
          :flat="true",
          :bordered="true")
          q-img.medias-view__image(
            :src="media.image?.url",
            :draggable="false")
          q-card-section
            a.medias-view__link(
              :href="media.link.url",
              target="__blank")
              | {{ media.link.text }}
          q-card-actions.medias-view__actions
            q-btn.bg-grey-3(
              :flat="true",
              :href="media.link.url",
              target="__blank",
              text-color="dark",
              :label="t('general.read')")
  base-loading(v-else)
</template>

<script lang="ts" setup>
  import { useI18n } from 'vue-i18n';
  import { onBeforeMount, onServerPrefetch } from 'vue';
  import BaseGrid from '#/base/BaseGrid.vue';
  import BaseLoading from '#/base/BaseLoading.vue';
  import { useMediasQuery } from '#/api/query';
  import type { Composer } from 'vue-i18n';

  // Composable to handle the I18n.
  const { t }: Composer = useI18n();

  // Composable to handle the Medias Query.
  const { medias, execMediasQuery } = useMediasQuery();

  // Registers the hook called before mounted.
  onBeforeMount(loadMedias);

  // Registers the hook called on server prefetch.
  onServerPrefetch(loadMedias);

  // Load the Medias from server based on current lang.
  async function loadMedias(): Promise<void> {
    return execMediasQuery();
  }
</script>

<style lang="sass" scoped>
  @use '~@stylize/sass-mixin' as *

  .medias-view
    &__card
      +flex-col

    &__actions
      flex-grow: 1
      +flex-col(flex-end flex-end)
</style>
