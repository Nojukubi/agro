import { getAttributes, getData } from '#/api/helpers';
import type codegen from '#/api/typings';

/**
 * Describes the Page.
 */
export interface Page extends Omit<codegen.Page, 'localizations'> {
  id?: string;
  localizations?: Page[];
}

/**
 * Parse the Page Props.
 * @param raw GraphQL Props.
 */
export function parsePage(raw: codegen.Page): Page {
  return raw && { ...raw, localizations: parsePageEntities(raw.localizations) };
}

/**
 * Parse the Page Entity.
 * @param raw GraphQL Entity.
 */
export function parsePageEntity(raw: codegen.PageEntity): Page {
  return raw && { id: raw.id, ...parsePage(getAttributes(raw)) };
}

/**
 * Parse the Page Wrapper.
 * @param raw GraphQL Wrapper.
 */
export function parsePageWrapper(raw: codegen.PageEntityResponse): Page {
  return parsePageEntity(getData(raw));
}

/**
 * Parse the Page Entities.
 * @param raw GraphQL Entities.
 */
export function parsePageEntities(
  raw: codegen.PageEntityResponseCollection | codegen.PageRelationResponseCollection
): Page[] {
  return getData(raw)?.map((entity: codegen.PageEntity): Page => parsePageEntity(entity));
}
