import { loadEnv } from 'vite';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');

/** Load .env files the same way Vite does (for Node build scripts). */
export function loadViteEnv(mode = process.env.NODE_ENV || 'production') {
  return { ...loadEnv(mode, root, ''), ...process.env };
}
