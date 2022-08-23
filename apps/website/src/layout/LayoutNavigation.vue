<template lang="pug">
  q-tabs.text-body2
    q-route-tab(:to="{ name: 'home' }")
      | {{ t('nav.home') }}
    q-route-tab(
      v-for="{ text, builtin, custom } in availableNavs",
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
  const availableNavs: Nav[] = $(inject('availableNavs'));
</script>
