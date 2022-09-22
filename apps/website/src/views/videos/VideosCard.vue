<template lang="pug">
  q-card.videos-card(
    :flat="true",
    :bordered="true")
    .videos-card__player(v-if="play")
      iframe(
        :src="url",
        width="100%",
        height="293",
        allow="accelerometer; autoplay;",
        frameborder="0")
    .videos-card__cover.text-green-3(
      v-if="!play",
      @click="startPlay")
      q-img.videos-card__image(
        :src="video.external.cover.url",
        :draggable="false")
      q-icon.videos-card__play(:name="mdiPlaySpeed")
</template>

<script lang="ts" setup>
  import { mdiPlaySpeed } from '@mdi/js';
  import type { Video } from '#/api/query';

  // Defines the props.
  const props = defineProps<{
    video: Video;
  }>();

  // Determine whether play.
  let play: boolean = $ref(false);

  // Create url to the video.
  const url: string = $computed(() => {
    return `https://www.youtube.com/embed/${props.video.external.code}?controls=0&autoplay=1`;
  });

  // Handler to start the play.
  function startPlay(): void {
    play = true;
  }
</script>

<style lang="sass" scoped>
  @use '~@stylize/sass-mixin' as *

  .videos-card
    &__player
      height: 100%
      +flex-col-center

    &__play
      font-size: 4rem
      +absolute-center(1)

      :deep(path)
        fill: currentColor

    &__cover
      +after
        background: rgba(0, 0, 0, 0.3)
        +absolute-cover

      +support-hover
        &:hover
          cursor: pointer

          +after
            background: rgba(0, 0, 0, 0.5)
</style>
