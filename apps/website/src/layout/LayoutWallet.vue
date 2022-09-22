<template lang="pug">
  q-btn.layout-wallet(
    href="https://agroglorytime.io",
    target="_blank",
    :unelevated="true",
    :icon="mdiWalletPlusOutline",
    :label="t('wallet.action')")
</template>

<script lang="ts" setup>
  import { useI18n } from 'vue-i18n';
  import { mdiWalletPlusOutline } from '@mdi/js';
  import type { Composer } from 'vue-i18n';

  // Composable to handle the I18n.
  const { t }: Composer = useI18n();
</script>

<style lang="sass" scoped>
  @use '#/styles/vars' as *

  .layout-wallet
    font-weight: normal

    :deep(.q-icon)
      font-size: 1.4em

    :deep(.q-icon.on-left)
      margin-right: $offset * 0.75
</style>
