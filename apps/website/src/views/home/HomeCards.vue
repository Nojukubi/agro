<template lang="pug">
  .home-cards
    home-card(
      v-for="card in cards",
      :key="card?.name",
      :data="card")
</template>

<script lang="ts" setup>
  import HomeCard from './HomeCard.vue';
  import type { Block } from '#/api/query';

  // Defines the props.
  const props = defineProps<{
    cards: Block[];
  }>();
</script>

<style lang="sass" scoped>
  @use '~@stylize/sass-mixin' as *
  @use '#/styles/vars' as *

  .home-cards
    gap: $offset * 2
    box-sizing: border-box
    +flex-col

    +media('>=md')
      +flex-row(center)

    +media('>=md' 'h>800px')
      min-height: 30vh

    :deep(.home-card)
      flex: 1 0 0
</style>
