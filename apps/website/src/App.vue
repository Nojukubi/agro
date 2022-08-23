<template lang="pug">
  q-layout.app(view="lHh Lpr lff")
    layout-header
    layout-footer(v-if="navs.length")
    q-page-container
      q-page.app__page
        RouterView(:key="route.fullPath")
</template>

<script lang="ts" setup>
  import { useRoute } from 'vue-router';
  import { ref, provide, watch } from 'vue';
  import LayoutHeader from './layout/LayoutHeader.vue';
  import { getLanguage } from './helpers/language';
  import { useConfigQuery } from './api/query';
  import LayoutFooter from '#/layout/LayoutFooter.vue';
  import type { RouteLocationNormalized } from 'vue-router';

  // Define the props.
  const props = defineProps<{
    url: string;
  }>();

  // Current active interface language.
  const language: string = $ref(getLanguage());

  // Composable to handle the Route.
  const route: RouteLocationNormalized = useRoute();

  // Composable to handle the Config Query.
  const { navs, langs, footer, execConfigQuery } = useConfigQuery();

  // Globally provide interface language.
  provide('language', $$(language));
  // Globally provide available navs.
  provide('availableNavs', $$(navs));
  // Globally provide available langs.
  provide('availableLangs', $$(langs));

  // Provide the different header themes based on url.
  provide('headerStyling', ref(props.url === '/' ? 'plain' : 'flat'));

  // Watch changes to language to reload the Config.
  watch($$(language), loadConfig);

  // Load the Config from server based on current lang.
  async function loadConfig(): Promise<void> {
    return execConfigQuery(language);
  }
</script>

<style lang="sass">
  @use '~@stylize/sass-mixin' as *
  @use '#/styles/vars' as *

  .app
    color: $text-color

    h1,
    h2,
    h3
      margin: 0 0 $offset * 2
      line-height: 1.2

    h4,
    h5
      margin: 0 0 $offset
      line-height: 1.2

    h1
      font-size: $h1

    h2
      font-size: $h2

    h3
      font-size: $h3

    a
      color: $text-color
      text-decoration: none

  .q-tabs
    transition: color 0.03s, background-color 0.01s

  .q-focus-helper
    &, &:after, &:before
      transition: background-color 0.1s, opacity 0.1s !important
</style>
