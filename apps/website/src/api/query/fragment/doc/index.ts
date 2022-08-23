import { isLinkHref, LinkHref, parseLinkHref } from '../link';
import { getAttributes, getData } from '#/api/helpers';
import type codegen from '#/api/typings';

/**
 * Describes the Document.
 */
export interface Doc extends Omit<codegen.Doc, 'files'> {
  files: LinkHref[];
}

/**
 * Parse the Document Props.
 * @param raw GraphQL Props.
 */
export function parseDoc(raw: codegen.Doc): Doc {
  if (!raw) return;
  // Create the doc to add data.
  const doc: Doc = { ...raw } as any;
  // Parse files included in doc.
  doc.files = raw.files?.map((file: codegen.DocFilesDynamicZone) => {
    if (isLinkHref<codegen.ComponentLinkHref>(file))
      // Parse link to file.
      return parseLinkHref(file);
  });
  // Returns created doc with data.
  return doc;
}

/**
 * Parse the Document Entity.
 * @param raw GraphQL Entity.
 */
export function parseDocEntity(raw: codegen.DocEntity): Doc {
  return parseDoc(getAttributes(raw));
}

/**
 * Parse the Document Entities.
 * @param raw GraphQL Entities.
 */
export function parseDocEntities(raw: codegen.DocEntityResponseCollection): Doc[] {
  return getData(raw)?.map((entity: codegen.DocEntity): Doc => parseDocEntity(entity));
}
