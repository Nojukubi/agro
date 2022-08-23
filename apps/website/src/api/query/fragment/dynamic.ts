// prettier-ignore
import { LinkHref, LinkRoute, LinkSocial, isLinkHref,
  isLinkRoute, isLinkSocial, parseLinkHref,
  parseLinkRoute, parseLinkSocial } from './link';
import type codegen from '#/api/typings';

// Dynamic zone with links.
export type DynamicLink = LinkHref | LinkRoute | LinkSocial;

// prettier-ignore
// Raw dynamic zone with links.
export type RawLink = codegen.ComponentLinkHref |
  codegen.ComponentLinkRoute | codegen.ComponentLinkSocial;

/**
 * Parse the Dynamic Link.
 * @param raw GraphQL Entity.
 */
export function parseDynamicLink(raw: RawLink): DynamicLink {
  if (isLinkHref<codegen.ComponentLinkHref>(raw)) return parseLinkHref(raw);
  else if (isLinkRoute<codegen.ComponentLinkRoute>(raw)) return parseLinkRoute(raw);
  else if (isLinkSocial<codegen.ComponentLinkSocial>(raw)) return parseLinkSocial(raw);
}
