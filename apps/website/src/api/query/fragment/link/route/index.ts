import { parseLinkText, LinkText } from '../text';
import { Page, parsePageEntity } from '../../page';
import { getData } from '#/api/helpers';
import type codegen from '#/api/typings';

/**
 * Determine the LinkRoute.
 */
export const LinkRouteTypename = 'ComponentLinkRoute';

/**
 * Describes the LinkRoute.
 */
export interface LinkRoute extends Omit<codegen.ComponentLinkRoute, 'style' | 'custom'> {
  style?: LinkText;
  custom?: Page;
}

/**
 * Check if value is LinkRoute.
 * @param value Value to check.
 */
export function isLinkRoute<T = any>(value: any): value is T {
  return value?.__typename === LinkRouteTypename;
}

/**
 * Parse the LinkRoute Props.
 * @param raw GraphQL Props.
 */
export function parseLinkRoute(raw: codegen.ComponentLinkRoute): LinkRoute {
  return raw && { ...raw, style: parseLinkText(raw.style), custom: parsePageEntity(getData(raw.custom?.page)) };
}
