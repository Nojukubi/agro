<template lang="pug">
  .base-list
    q-list.base-list__body
      q-expansion-item.q-mb-sm(
        group="listing",
        v-for="item in items",
        :expand-icon="mdiPlus",
        :expanded-icon="mdiMinus")
        template(#header)
          q-item-section
            q-item-label
              slot(
                name="header",
                :data="item")
        q-card.base-list__card(flat)
          q-card-section
            slot(
              name="default",
              :data="item")
</template>

<script lang="ts" setup>
  import { mdiPlus, mdiMinus } from '@mdi/js';

  // Define the props.
  const props = defineProps<{
    items: any[];
  }>();
</script>

<style lang="sass" scoped>
  @use '~@stylize/sass-mixin' as *
  @use '#/styles/vars' as *

  .base-list
    &__card
      border-top: 1px solid $border-color
      border-radius: 0

    :deep(.q-item__label)
      line-height: 1.5 !important

    :deep(.q-expansion-item)
      border: 1px solid $border-color

    :deep(.q-expansion-item--expanded .q-item)
      text-decoration: underline
      text-underline-offset: 2px
</style>
