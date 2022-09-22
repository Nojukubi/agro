import { File, parseFileWrapper } from '../file';
import { getAttributes, getData } from '#/api/helpers';
import type codegen from '#/api/typings';

/**
 * Describes the Video.
 */
export interface Video {
  external: {
    code: string;
    cover: File;
    service: string;
  };
}

/**
 * Parse the Video Props.
 * @param raw GraphQL Props.
 */
export function parseVideo(raw: codegen.Video): Video {
  return raw && { ...raw, external: { ...raw.external, cover: parseFileWrapper(raw.external.cover) } };
}

/**
 * Parse the Video Entity.
 * @param raw GraphQL Entity.
 */
export function parseVideoEntity(raw: codegen.VideoEntity): Video {
  return parseVideo(getAttributes(raw));
}

/**
 * Parse the Video Entities.
 * @param raw GraphQL Entities.
 */
export function parsVideoEntities(raw: codegen.VideoEntityResponseCollection): Video[] {
  return getData(raw)?.map((entity: codegen.VideoEntity): Video => parseVideoEntity(entity));
}
