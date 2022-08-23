<template lang="pug">
  .base-grid(:class="cssClasses")
    slot
</template>

<script lang="ts" setup>
  // Defines the props.
  const props = defineProps<{
    columns?: number;
  }>();

  // Determine the Css classes based on props.
  const cssClasses: string = $computed(() => {
    return `base-grid--col-${props.columns ?? 3}`;
  });
</script>

<style lang="sass" scoped>
  @use '~@stylize/sass-mixin' as *
  @use '#/styles/vars' as *

  .base-grid
    gap: $offset * 3
    display: grid
    grid-template-columns: repeat(1, 1fr)

    +media('>=sm')
      grid-template-columns: repeat(2, 1fr)

    &--col-3
      +media('>=md')
        grid-template-columns: repeat(3, 1fr)

    :deep(.q-img)
      height: $image-height
</style>
