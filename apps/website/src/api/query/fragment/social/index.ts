import { File, parseFileWrapper } from '../file';
import { getAttributes, getData } from '#/api/helpers';
import type codegen from '#/api/typings';

/**
 * Describes the Social.
 */
export interface Social extends Omit<codegen.Social, 'icon'> {
  icon: File;
}

/**
 * Parse the Social Props.
 * @param raw GraphQL Props.
 */
export function parseSocial(raw: codegen.Social): Social {
  return raw && { ...raw, icon: parseFileWrapper(raw.icon) };
}

/**
 * Parse the Social Entity.
 * @param raw GraphQL Entity.
 */
export function parseSocialEntity(raw: codegen.SocialEntity): Social {
  return parseSocial(getAttributes(raw));
}

/**
 * Parse the Social Wrapper.
 * @param raw GraphQL Wrapper.
 */
export function parseSocialWrapper(raw: codegen.SocialEntityResponse): Social {
  return parseSocialEntity(getData(raw));
}
