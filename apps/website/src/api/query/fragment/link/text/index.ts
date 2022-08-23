import { normalizeColor } from '../../color';
import type codegen from '#/api/typings';

/**
 * Describes the LinkText.
 */
export interface LinkText extends Partial<codegen.ComponentLinkText> {}

/**
 * Parse the LinkText Props.
 * @param raw GraphQL Props.
 */
export function parseLinkText(raw: codegen.ComponentLinkText): LinkText {
  return raw ? { ...raw, color: <any>normalizeColor(raw.color), background: <any>normalizeColor(raw.background) } : {};
}
