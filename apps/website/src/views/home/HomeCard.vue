<template lang="pug">
  q-card.home-card(
    :flat="true",
    :bordered="true")
    q-card-section.text-body2(
      v-if="data.content",
      v-html="data.content")
    q-card-actions.q-gutter-md.q-px-md.q-pt-none.q-pb-md
      template(v-for="action in data.actions")
        base-link(:link="action")
</template>

<script lang="ts" setup>
  import BaseLink from '#/base/BaseLink.vue';
  import type { Block } from '#/api/query';

  // Defines the props.
  const props = defineProps<{
    data: Block;
  }>();
</script>

<style lang="sass" scoped>
  @use '~@stylize/sass-mixin' as *
  @use '#/styles/vars' as *

  .home-card
    +flex-col(space-between)
</style>
