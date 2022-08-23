import { File, parseFileWrapper } from '../file';
import { DynamicLink, parseDynamicLink } from '../dynamic';
import { getAttributes, getData } from '#/api/helpers';
import type codegen from '#/api/typings';

/**
 * Describes the Block.
 */
export interface Block extends Omit<codegen.Block, 'width' | 'image' | 'actions'> {
  id: string;
  width?: string;
  image?: File;
  actions?: DynamicLink[];
}

/**
 * Parse the Block Props.
 * @param raw GraphQL Props.
 */
export function parseBlock(raw: codegen.Block): Block {
  if (!raw) return;
  // Create the block to add data.
  const block: Block = { ...raw } as any;
  // Max width for block content.
  block.width = raw.width ? `${raw.width}px` : 'auto';
  // Data for populated uploaded image.
  block.image = parseFileWrapper(raw.image);
  // Data for dynamic zone with links.
  block.actions = raw.actions?.map(parseDynamicLink);
  // Returns created block with data.
  return block;
}

/**
 * Parse the Block Entity.
 * @param raw GraphQL Entity.
 */
export function parseBlockEntity(raw: codegen.BlockEntity): Block {
  return raw && { id: raw.id, ...parseBlock(getAttributes(raw)) };
}

/**
 * Parse the Block Wrapper.
 * @param raw GraphQL Wrapper.
 */
export function parseBlockWrapper(raw: codegen.BlockEntityResponse): Block {
  return parseBlockEntity(getData(raw));
}
