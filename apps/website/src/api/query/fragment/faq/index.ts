import { getAttributes, getData } from '#/api/helpers';
import type codegen from '#/api/typings';

/**
 * Describes the FAQ.
 */
export interface Faq extends codegen.Faq {}

/**
 * Parse the FAQ Entity.
 * @param raw GraphQL Entity.
 */
export function parseFaqEntity(raw: codegen.FaqEntity): Faq {
  return getAttributes(raw);
}

/**
 * Parse the FAQ Entities.
 * @param raw GraphQL Entities.
 */
export function parseFaqEntities(raw: codegen.FaqEntityResponseCollection): Faq[] {
  return getData(raw)?.map((entity: codegen.FaqEntity): Faq => parseFaqEntity(entity));
}
