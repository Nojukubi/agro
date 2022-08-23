<template lang="pug">
  .dynamic-blog.q-pa-lg
    h1.dynamic-blog__title
      | {{ title }}
    base-grid.dynamic-blog__cards
      blog-card(
        v-for="(post, index) in posts",
        :key="index",
        :post="post")
</template>

<script lang="ts" setup>
  import { onBeforeMount, onServerPrefetch } from 'vue';
  import BaseGrid from '#/base/BaseGrid.vue';
  import BlogCard from '#/base/blog/BlogCard.vue';
  import { useBlogQuery } from '#/api/query';

  // Defines the props.
  const props = defineProps<{
    tag: string;
    title?: string;
  }>();

  // Composable to handle the Blog Query.
  const { posts, execBlogQuery } = useBlogQuery();

  // Registers the hook called before mounted.
  onBeforeMount(loadBlog);

  // Registers the hook called on server prefetch.
  onServerPrefetch(loadBlog);

  // Load the blog from server based on current lang.
  async function loadBlog(): Promise<void> {
    return execBlogQuery(props.tag);
  }
</script>
