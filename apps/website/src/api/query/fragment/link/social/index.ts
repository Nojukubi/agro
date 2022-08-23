import { parseLinkText, LinkText } from '../text';
import { parseSocialWrapper, Social } from '../../social';
import type codegen from '#/api/typings';

/**
 * Determine the LinkSocial.
 */
export const LinkSocialTypename = 'ComponentLinkSocial';

/**
 * Describes the LinkSocial.
 */
export interface LinkSocial extends Omit<codegen.ComponentLinkSocial, 'style' | 'social'> {
  style: LinkText;
  social: Social;
}

/**
 * Check if value is LinkSocial.
 * @param value Value to check.
 */
export function isLinkSocial<T = any>(value: any): value is T {
  return value?.__typename === LinkSocialTypename;
}

/**
 * Parse the LinkSocial Props.
 * @param raw GraphQL Props.
 */
export function parseLinkSocial(raw: codegen.ComponentLinkSocial): LinkSocial {
  return { ...raw, style: parseLinkText(raw.style), social: parseSocialWrapper(raw.social) };
}
