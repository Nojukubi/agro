<template lang="pug">
  q-btn-dropdown.layout-language(
    :label="activeLang.text",
    :menu-offset="[0, 4]",
    :unelevated="true",
    :dropdown-icon="mdiChevronDown")
    q-list.layout-language__list
      q-item.layout-language__item(
        v-for="{ code, text } in languages",
        v-close-popup,
        :href="createHref(code)",
        @click.prevent="changeLang(code)")
        q-item-section.text-uppercase
          | {{ text }}
</template>

<script lang="ts" setup>
  import { inject } from 'vue';
  import { useRoute } from 'vue-router';
  import { mdiChevronDown } from '@mdi/js';
  import { setI18nLang } from '#/plugins';
  import { setLanguage } from '#/helpers/language';
  import type { Lang } from '#/api/query';
  import type { RouteLocationNormalized } from 'vue-router';

  // Composable to handle the Route.
  const route: RouteLocationNormalized = useRoute();

  // Current active language code.
  let language: string = $(inject('language'));

  // Configured available languages.
  const languages: Lang[] = $(inject('availableLangs'));

  // prettier-ignore
  // Determine the active language.
  const activeLang: Lang = $computed(() => languages
    .find((lang: Lang): boolean => lang.code.toLowerCase() ===
      language.toLowerCase()) ?? languages[0]);

  // Create the href based on lang and path.
  function createHref(lang: string): string {
    return `${lang}${route.fullPath}`;
  }

  // Handler to change currently active user.
  function changeLang(lang: string): void {
    // Store lang into store.
    setLanguage(lang);
    // Change the I18n lang.
    setI18nLang(lang);
    // Reactively change the lan.
    language = lang;
  }
</script>

<style lang="sass" scoped>
  .layout-language
    font-weight: inherit
</style>
