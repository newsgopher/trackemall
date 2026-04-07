// TrackEmAll Service Worker
// Caches the app shell so it loads instantly and works offline

const CACHE_NAME = 'trackemall-v1';
const CACHE_URLS = [
  '/',
  '/index.html',
  '/card-grader.html',
  '/manifest.json',
  '/icons/icon-192.png',
  '/icons/icon-512.png',
  // Google Fonts — cache them so the app looks right offline
  'https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Noto+Sans+JP:wght@400;700&display=swap',
];

// ── INSTALL: cache the app shell ──
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      // Cache what we can, don't fail install if fonts are unavailable
      return Promise.allSettled(
        CACHE_URLS.map(url => cache.add(url).catch(() => null))
      );
    }).then(() => self.skipWaiting())
  );
});

// ── ACTIVATE: clean up old caches ──
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(key => key !== CACHE_NAME)
          .map(key => caches.delete(key))
      )
    ).then(() => self.clients.claim())
  );
});

// ── FETCH: serve from cache, fall back to network ──
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);

  // Never intercept API calls — always go to network for those
  // (PokeAPI images, Anthropic grader, eBay etc.)
  if (
    url.hostname === 'pokeapi.co' ||
    url.hostname === 'api.anthropic.com' ||
    url.hostname === 'raw.githubusercontent.com' ||
    url.pathname.startsWith('/api/')
  ) {
    return; // let browser handle it normally
  }

  // For everything else: cache-first strategy
  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;

      // Not in cache — fetch from network and cache for next time
      return fetch(event.request).then(response => {
        // Only cache successful GET responses
        if (
          !response ||
          response.status !== 200 ||
          response.type === 'opaque' ||
          event.request.method !== 'GET'
        ) {
          return response;
        }

        const toCache = response.clone();
        caches.open(CACHE_NAME).then(cache => {
          cache.put(event.request, toCache);
        });

        return response;
      }).catch(() => {
        // Network failed and not in cache
        // Return the offline page for navigation requests
        if (event.request.mode === 'navigate') {
          return caches.match('/index.html');
        }
      });
    })
  );
});
