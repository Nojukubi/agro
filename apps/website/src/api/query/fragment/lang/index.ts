import { getAttributes, getData } from '#/api/helpers';
import type codegen from '#/api/typings';

/**
 * Describes the Language.
 */
export interface Lang extends codegen.Lang {}

/**
 * Parse the Language Entity.
 * @param raw GraphQL Entity.
 */
export function parseLangEntity(raw: codegen.LangEntity): Lang {
  return getAttributes(raw);
}

/**
 * Parse the Language Entities.
 * @param raw GraphQL Entities.
 */
export function parseLangEntities(raw: codegen.LangEntityResponseCollection): Lang[] {
  return getData(raw)?.map((entity: codegen.LangEntity): Lang => parseLangEntity(entity));
}
