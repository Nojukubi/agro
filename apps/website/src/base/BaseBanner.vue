<template lang="pug">
  .base-banner.q-py-xl(:class="cssClasses")
    .base-banner__graphic(:style="imgStyle")
    .base-banner__body(:style="widthStyle")
      .base-banner__content.text-body2.q-pt-xs(
        v-if="data.content",
        v-html="data.content")
      .base-banner__actions.q-pt-md(:class="cssActionsClasses")
        template(v-for="action in data.actions")
          base-link(:link="action")
</template>

<script lang="ts" setup>
  import BaseLink from './BaseLink.vue';
  import type { Block } from '#/api/query';
  import type { CSSProperties } from 'vue';

  // Defines the props.
  const props = defineProps<{
    data: Block;
  }>();

  // Determine the Css classes based on context.
  const cssClasses: unknown = $computed(() => ({
    [`base-banner--${props.data.align_content}`]: true,
    [`base-banner--${props.data.type.toLowerCase() ?? 'cover'}`]: true
  }));

  // Determine the Css classes based on context.
  const cssActionsClasses: unknown = $computed(() => ({
    [`base-banner--${props.data.align_actions}`]: true
  }));

  // Determine the Css styles based on context.
  const widthStyle: CSSProperties = $computed(() => ({
    'max-width': props.data.width
  }));

  // Determine the Css styles based on context.
  const imgStyle: CSSProperties = $computed(() => ({
    'background-image': `url('${props.data.image?.url}')`
  }));
</script>

<style lang="sass" scoped>
  @use '~@stylize/sass-mixin' as *
  @use '#/styles/vars' as *

  .base-banner
    width: 100%
    position: relative
    box-sizing: border-box
    min-height: 400px
    padding: $offset * 3
    +flex-col(center flex-start)

    +media('>=sm')
      padding: $offset * 2 $offset * 3

    &--side
      gap: $offset * 4

    &--side &__graphic,
    &--cover &__graphic
      background-size: cover
      background-position: center

    &--cover &__graphic
      +absolute-cover($z: 0)

    &--cover#{&}--center
      align-items: center

    &--side#{&}--left
      +flex(row-reverse)

    &--side#{&}--right
      +flex-row

    &--side &__body,
    &--side &__graphic
      flex: 1 0 0

    &--side &__graphic
      align-self: stretch
      border-radius: 8px

      +media('<sm')
        display: none

    &__body
      +relative($z: 2)

    &__title
      font-size: 3rem

    &__actions
      width: 100%
      gap: $offset * 2
      +flex-row

    &__actions#{&}--left
      justify-content: flex-start

    &__actions#{&}--center
      justify-content: center

    &__actions#{&}--right
      justify-content: flex-end
</style>
