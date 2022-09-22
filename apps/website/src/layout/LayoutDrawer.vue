<template lang="pug">
  q-drawer.layout-drawer.q-my-md(
    :modelValue="modelValue",
    :width="300",
    :overlay="true",
    :elevated="true",
    :breakpoint="5000",
    @update:modelValue="updateValue")
    q-list.layout-drawer__list
      q-item.layout-drawer__item(
        :to="{ name: 'home' }",
        v-close-popup)
        q-item-section
          q-item-label
            | {{ t('nav.home') }}

      q-item.layout-drawer__item(
        v-for="{ text, builtin, custom } in availableNavs",
        :to="{ name: builtin?.name ?? custom?.name }",
        v-close-popup)
        q-item-section
          q-item-label
            | {{ text }}
</template>

<script lang="ts" setup>
  import { inject } from 'vue';
  import { useI18n } from 'vue-i18n';
  import type { Composer } from 'vue-i18n';
  import type { Nav } from '#/api/query';

  // Defines the props.
  const props = defineProps<{
    modelValue: boolean;
  }>();

  // Composable to handle the I18n.
  const { t }: Composer = useI18n();

  // Defines the emits.
  const emits = defineEmits<{
    (e: 'update:modelValue', val: boolean): void;
  }>();

  // Configured available navigation.
  const availableNavs: Nav[] = $(inject('availableNavs'));

  // Propagate the update to model value.
  function updateValue(): void {
    emits('update:modelValue', !props.modelValue);
  }
</script>
