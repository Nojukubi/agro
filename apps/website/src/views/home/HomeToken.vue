<template lang="pug">
  q-card.home-token(
    :flat="true",
    :bordered="true")
    q-card-section.text-body2
      h3.home-token__title
        | {{ t('wallet.title') }}
      i18n-t.home-token__price(
        tag="div",
        keypath="wallet.price")
        template(v-if="price")
          | {{ price }} USDT [BEP20]
        template(v-else)
          | -

      q-linear-progress(
        size="40px",
        color="green-4",
        track-color="green-1",
        :stripe="true",
        :value="progress")
        .home-token__range.text-green-10
          template(v-if="total && bought")
            | {{ t('wallet.range', [boughtText, totalText]) }}
          template(v-else)
            | {{ t('wallet.progress') }}

    q-card-actions.q-px-md.q-pt-none.q-pb-md
      q-btn.bg-grey-3(
        href="https://agroglorytime.io",
        target="_blank",
        :no-caps="true",
        :unelevated="true",
        :label="t('wallet.action')")
</template>

<script lang="ts" setup>
  import { useI18n } from 'vue-i18n';
  import { onBeforeMount } from 'vue';
  import { formatNumber } from 'accounting';
  // prettier-ignore
  import { getAvailableAmount, getTotalAmount,
    getCurrentPrice } from '#/web3';
  import type { Composer } from 'vue-i18n';

  // Current token price.
  let price: number = $ref();

  // Total amount of tokens.
  let total: number = $ref();

  // Available amount of tokens.
  let available: number = $ref();

  // Composable to handle the I18n.
  const { t }: Composer = useI18n();

  // Amount of bought tokens.
  const bought: number = $computed(() => {
    return total - available || 0;
  });

  // Friendly amount of bought tokens.
  const boughtText: string = $computed(() => {
    return formatNumber(bought, 0, ' ');
  });

  // Current progress of bought tokens.
  const progress: number = $computed(() => {
    return bought / total || 0;
  });

  // Friendly total amount of tokens.
  const totalText: string = $computed(() => {
    return formatNumber(total, 0, ' ');
  });

  // Registers the hook called before mounted.
  onBeforeMount(async (): Promise<void> => {
    total = await getTotalAmount();
    price = await getCurrentPrice();
    available = await getAvailableAmount();
  });
</script>

<style lang="sass" scoped>
  @use '~@stylize/sass-mixin' as *
  @use '#/styles/vars' as *

  .home-token
    +flex-col(space-between)

    &__price
      color: dimgrey
      padding-bottom: $offset

    &__range
      font-size: 0.8rem
      +flex-row-center
      +absolute-cover
</style>
