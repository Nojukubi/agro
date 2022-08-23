import { Page, parsePageEntity } from '../page';
import { getAttributes, getData } from '#/api/helpers';
import type codegen from '#/api/typings';

/**
 * Describes the Navigation.
 */
export interface Nav extends Omit<codegen.Nav, 'custom' | 'builtin'> {
  id?: string;
  custom?: Page;
  builtin?: {
    name?: string;
  };
}

/**
 * Parse the Navigation Props.
 * @param raw GraphQL Props.
 */
export function parseNav(raw: codegen.Nav): Nav {
  return raw && { ...raw, custom: parsePageEntity(getData(raw.custom?.page)) };
}

/**
 * Parse the Navigation Entity.
 * @param raw GraphQL Entity.
 */
export function parseNavEntity(raw: codegen.NavEntity): Nav {
  return parseNav(getAttributes(raw));
}

/**
 * Parse the Navigation Entities.
 * @param raw GraphQL Entities.
 */
export function parseNavEntities(raw: codegen.NavEntityResponseCollection): Nav[] {
  return getData(raw)?.map((entity: codegen.NavEntity): Nav => parseNavEntity(entity));
}
