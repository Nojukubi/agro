import { homeRoute } from '#/views/home/HomeRoute';
import { docsRoute } from '#/views/docs/DocsRoute';
import { faqsRoute } from '#/views/faqs/FaqsRoute';
import { mediasRoute } from '#/views/medias/MediasRoute';
import { videosRoute } from '#/views/videos/VideosRoute';
import { articleRoute } from '#/views/article/ArticleRoute';
import { createRouter, createWebHistory } from 'vue-router';

// Instance of VueRouter.
export const router = createRouter({
  history: createWebHistory(),
  routes: [homeRoute, docsRoute, faqsRoute, mediasRoute, videosRoute, articleRoute]
});
