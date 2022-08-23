<template lang="pug">
  q-btn.base-link(
    :square="true",
    :unelevated="true",
    :label="link.text",
    :color="link.style.background",
    :no-caps="!link.style.uppercase",
    :text-color="link.style.color",
    v-bind="getDynamicAttr(link)")
</template>

<script lang="ts" setup>
  // prettier-ignore
  import { isLinkSocial, isLinkRoute,
    isLinkHref } from '#/api/query';
  // prettier-ignore
  import type { DynamicLink, LinkSocial,
    LinkHref, LinkRoute } from '#/api/query';

  // Defines the props.
  const props = defineProps<{
    link: DynamicLink;
  }>();

  // Create the attrs based on the link type.
  function getDynamicAttr(link: DynamicLink) {
    // Create the common base attrs.
    const attrs: Record<string, any> = {
      class: {
        'base-link--underline': link.style.underline
      }
    };

    if (isLinkHref<LinkHref>(link))
      // Assign the LinkHref specific attributes.
      Object.assign(attrs, getLinkHrefAttr(link));
    else if (isLinkRoute<LinkRoute>(link))
      // Assign the LinkRoute specific attributes.
      Object.assign(attrs, getLinkRouteAttr(link));
    else if (isLinkSocial<LinkSocial>(link))
      // Assign the LinkSocial specific attributes.
      Object.assign(attrs, getLinkSocialAttr(link));
    // Returns the created attrs based on the link.
    return attrs;
  }

  // Create the href specific attrs based on the link.
  function getLinkHrefAttr(link: LinkHref) {
    return { target: '__blank', href: link.url };
  }

  // Create the route specific attrs based on the link.
  function getLinkRouteAttr(link: LinkRoute) {
    return { to: { name: link.builtin?.name ?? link.custom?.name } };
  }

  // Create the social specific attrs based on the link.
  function getLinkSocialAttr(link: LinkSocial) {
    // prettier-ignore
    return { target: '__blank', href: link.social.url,
      icon: link.icon ? `img:${link.social.icon?.url}` : undefined };
  }
</script>

<style lang="sass" scoped>
  .base-link
    &--underline
      text-decoration: underline
      text-underline-offset: 1px

    &--center
      justify-self: center
</style>
