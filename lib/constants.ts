export const BASE_PATH = process.env.NODE_ENV === 'production' ? '/vibe-coding-template' : '';

export function getAssetPath(path: string): string {
  if (!path.startsWith('/')) return path;
  return `${BASE_PATH}${path}`;
}
