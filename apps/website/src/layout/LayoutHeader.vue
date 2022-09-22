<template lang="pug">
  q-header.layout-header.q-px-md(
    :height-hint="90",
    :class="`layout-header--${styling}`")
    q-btn.layout-header__menu.q-px-sm(
      :flat="true",
      :icon="mdiMenu",
      @click="drawer = !drawer")
    .layout-header__nav.q-pl-sm
      layout-navigation
    .layout-header__block.q-pl-xs
      layout-wallet
      layout-language
  layout-drawer(v-model="drawer")
</template>

<script lang="ts" setup>
  import { inject } from 'vue';
  import { mdiMenu } from '@mdi/js';
  import LayoutDrawer from './LayoutDrawer.vue';
  import LayoutWallet from './LayoutWallet.vue';
  import LayoutLanguage from './LayoutLanguage.vue';
  import LayoutNavigation from './LayoutNavigation.vue';

  // Determine whether drawer is visible.
  const drawer: boolean = $ref(false);

  // Styling of the header to allow banner background.
  const styling: string = $(inject('headerStyling'));
</script>

<style lang="sass" scoped>
  @use '~@stylize/sass-mixin' as *
  @use '#/styles/vars' as *

  .layout-header
    height: $header__height
    font-weight: normal
    background: var(--header-background)
    transition: background-color 0.2s
    +flex-row($cross: center)

    &, :deep(a)
      color: var(--header-color)

    &--plain
      --header-color: white
      --header-background: transparent

    &--flat
      --header-color: black
      --header-background: white

      +after
        +absolute(100% 0 null 0)
        border-top: 1px solid $border-color

    &__block
      gap: $offset * 0.5
      flex-grow: 1
      +flex-row(flex-end)

    &__nav
      +media('<=md')
        display: none
</style>
