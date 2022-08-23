/**
 * Normalize color name.
 * @param color Name.
 */
export function normalizeColor(color: string): string {
  return color?.replaceAll('_', '-');
}
