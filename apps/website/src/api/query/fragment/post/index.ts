import { File, parseFileWrapper } from '../file';
import { getAttributes, getData } from '#/api/helpers';
import type codegen from '#/api/typings';

/**
 * Describes the Post.
 */
export interface Post extends Omit<codegen.Post, 'image' | 'localizations'> {
  id?: string;
  image?: File;
  localizations?: Post[];
}

/**
 * Parse the Post Props.
 * @param raw GraphQL Props.
 */
export function parsePost(raw: codegen.Post): Post {
  // prettier-ignore
  return raw && { ...raw, image: parseFileWrapper(raw.image),
    localizations: parsePostEntities(raw.localizations) };
}

/**
 * Parse the Post Entity.
 * @param raw GraphQL Entity.
 */
export function parsePostEntity(raw: codegen.PostEntity): Post {
  return raw && { id: raw.id, ...parsePost(getAttributes(raw)) };
}

/**
 * Parse the Post Wrapper.
 * @param raw GraphQL Wrapper.
 */
export function parsePostWrapper(raw: codegen.PostEntityResponse): Post {
  return parsePostEntity(getData(raw));
}

/**
 * Parse the Posts Entities.
 * @param raw GraphQL Entities.
 */
export function parsePostEntities(
  raw: codegen.PostEntityResponseCollection | codegen.PostRelationResponseCollection
): Post[] {
  return getData(raw)?.map((entity: codegen.PostEntity): Post => parsePostEntity(entity));
}
