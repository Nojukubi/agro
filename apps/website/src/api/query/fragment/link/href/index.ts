import { parseLinkText, LinkText } from '../text';
import type codegen from '#/api/typings';

/**
 * Determine the LinkHref.
 */
export const LinkHrefTypename = 'ComponentLinkHref';

/**
 * Describes the LinkHref.
 */
export interface LinkHref extends Omit<codegen.ComponentLinkHref, 'style'> {
  style: LinkText;
}

/**
 * Check if value is LinkHref.
 * @param value Value to check.
 */
export function isLinkHref<T = any>(value: any): value is T {
  return value?.__typename === LinkHrefTypename;
}

/**
 * Parse the LinkHref Props.
 * @param raw GraphQL Props.
 */
export function parseLinkHref(raw: codegen.ComponentLinkHref): LinkHref {
  return raw && { ...raw, style: parseLinkText(raw.style) };
}
