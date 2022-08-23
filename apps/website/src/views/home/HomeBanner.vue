<template lang="pug">
  base-banner.home-banner(:data="banner")
</template>

<script lang="ts" setup>
  import BaseBanner from '#/base/BaseBanner.vue';
  import type { Block } from '#/api/query';

  // Defines the props.
  const props = defineProps<{
    banner: Block;
  }>();
</script>

<style lang="sass" scoped>
  @use '~@stylize/sass-mixin' as *
  @use '#/styles/vars' as *

  .home-banner
    height: 100vh
    margin-top: $header__height * -1

    +media('>=sm')
      height: auto
      min-height: 500px

    +media('>=sm' 'h>800px')
      height: 70vh

    :deep(.base-banner__body)
      padding-top: 60px

      +media('<=xs')
        text-align: center

    :deep(.base-banner__actions)
      +media('<=xs')
        +flex-row-center
</style>
