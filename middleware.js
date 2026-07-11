import { rewrite } from '@vercel/functions';
import { APP_PATHS } from './src/data/routes.js';

const VALID_PATHS = new Set(APP_PATHS);

function isStaticAsset(pathname) {
  return /\.[a-zA-Z0-9]+$/.test(pathname);
}

function normalizePath(pathname) {
  if (pathname.length > 1 && pathname.endsWith('/')) {
    return pathname.slice(0, -1);
  }
  return pathname;
}

export default function middleware(request) {
  const url = new URL(request.url);
  const normalized = normalizePath(url.pathname);

  if (normalized !== url.pathname) {
    url.pathname = normalized;
    return Response.redirect(url, 301);
  }

  if (isStaticAsset(normalized) || VALID_PATHS.has(normalized)) {
    return;
  }

  return rewrite(new URL('/index.html', request.url), { status: 404 });
}

export const config = {
  matcher: ['/((?!assets/).*)'],
};
