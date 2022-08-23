import { LinkHref, parseLinkHref } from '../link';
import { File, parseFileWrapper } from '../file';
import { getAttributes, getData } from '#/api/helpers';
import type codegen from '#/api/typings';

/**
 * Describes the Media.
 */
export interface Media extends Omit<codegen.Media, 'link' | 'image'> {
  link: LinkHref;
  image: File;
}

/**
 * Parse the Media Props.
 * @param raw GraphQL Props.
 */
export function parseMedia(raw: codegen.Media): Media {
  return raw && { ...raw, link: parseLinkHref(raw.link), image: parseFileWrapper(raw.image) };
}

/**
 * Parse the Media Entity.
 * @param raw GraphQL Entity.
 */
export function parseMediaEntity(raw: codegen.MediaEntity): Media {
  return parseMedia(getAttributes(raw));
}

/**
 * Parse the Media Entities.
 * @param raw GraphQL Entities.
 */
export function parseMediaEntities(raw: codegen.MediaEntityResponseCollection): Media[] {
  return getData(raw)?.map((entity: codegen.MediaEntity): Media => parseMediaEntity(entity));
}
