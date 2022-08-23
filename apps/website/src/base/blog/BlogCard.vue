<template lang="pug">
  q-card.blog-card(
    :flat="true",
    :bordered="true")
    router-link(:to="location")
      q-img.blog-card__image(
        fit="cover",
        :src="post.image?.url",
        :draggable="false")

    q-card-section.blog-card__body
      router-link.blog-card__link(:to="location")
        .blog-card__text
          | {{ post.text }}
        .blog-card__date.text-grey
          | {{ createdAt }}
      .blog-card__note.q-pt-md(v-html="post.short")
</template>

<script lang="ts" setup>
  import type { RouteLocationRaw } from 'vue-router';
  import type { Post } from '#/api/query';

  // Defines the props.
  const props = defineProps<{
    post: Post;
  }>();

  // Define the location to the post.
  const location: RouteLocationRaw = $computed(() => {
    return { name: 'article', params: { id: props.post.id } };
  });

  // Create the formatted date.
  const createdAt: string = $computed(() => {
    return new Date(props.post.createdAt).toLocaleDateString();
  });
</script>

<style lang="sass" scoped>
  @use '~@stylize/sass-mixin' as *
  @use '#/styles/vars' as *

  .blog-card
    +flex-col(space-between)

    &__text
      font-weight: 500

    &__body
      flex-grow: 1

    &__link
      gap: $offset * 2
      text-decoration: none
      +flex-row(space-between)
</style>
