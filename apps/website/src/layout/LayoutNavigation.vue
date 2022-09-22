<template lang="pug">
  q-tabs.layout-navigation.text-body2
    q-route-tab.layout-navigation__tab(:to="{ name: 'home' }")
      | {{ t('nav.home') }}
    template(
      v-for="{ text, header, builtin, custom } in navs",
      :key="text")
      q-route-tab.layout-navigation__tab(
        v-if="header",
        :to="{ name: builtin?.name ?? custom?.name }")
        | {{ text }}
</template>

<script lang="ts" setup>
  import { inject } from 'vue';
  import { useI18n } from 'vue-i18n';
  import type { Nav } from '#/api/query';
  import type { Composer } from 'vue-i18n';

  // Composable to handle the I18n.
  const { t }: Composer = useI18n();

  // Configured available navigation.
  const navs: Nav[] = $(inject('availableNavs'));
</script>

<style lang="sass" scoped>
  @use '~@stylize/sass-mixin' as *
  @use '#/styles/vars' as *

  .layout-navigation
    &__tab
      margin: 0 $offset * 0.25
      padding: 0 $offset
</style>
