<template lang="pug">
  q-footer.layout-footer.q-py-xs.q-pl-md.q-pr-xs
    .row.justify-between
      .layout-footer__copyright
        | © 2020 SevlushFoods
      .layout-footer__links.row.items-center
        base-link.layout-footer__link(
          v-for="link in footer.links",
          :key="link.text",
          :link="link")
</template>

<script lang="ts" setup>
  import BaseLink from '#/base/BaseLink.vue';
  import { useConfigQuery } from '#/api/query';

  // Composable to handle the Config Query.
  const { footer } = useConfigQuery();
</script>

<style lang="sass" scoped>
  @use '~@stylize/sass-mixin' as *
  @use '#/styles/vars' as *

  .layout-footer
    color: inherit
    line-height: 3
    background: white
    border-color: $border-color
    border-style: solid
    border-width: 1px 0

    &__links
      +media('<=600px')
        display: none

    &__link:not(:last-child)
      border-right: 1px solid $border-color
</style>
