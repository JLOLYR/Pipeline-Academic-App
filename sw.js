// Service Worker para Pipeline Académico
// Versión: bump este número cuando cambie el HTML para forzar actualización
const CACHE_VERSION = 'pipeline-v1';
const CACHE_NAME = `pipeline-academico-${CACHE_VERSION}`;

// Recursos a precachear (la app shell)
const PRECACHE_URLS = [
  './',
  './pipeline-academico.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png'
];

// CDN externos (se cachean en runtime)
const RUNTIME_CDN_HOSTS = [
  'fonts.googleapis.com',
  'fonts.gstatic.com',
  'cdnjs.cloudflare.com'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(PRECACHE_URLS))
      .then(() => self.skipWaiting())
      .catch(err => console.warn('SW precache failed:', err))
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const req = event.request;
  // Only handle GET requests
  if (req.method !== 'GET') return;

  const url = new URL(req.url);

  // For API calls (Crossref, etc.) — network only, do NOT cache
  if (url.hostname === 'api.crossref.org' || url.hostname === 'doi.org') {
    return; // let it pass through normally
  }

  // For our own files + CDN: network first, fallback to cache
  const isOwn = url.origin === self.location.origin;
  const isCDN = RUNTIME_CDN_HOSTS.some(h => url.hostname.includes(h));

  if (isOwn || isCDN) {
    event.respondWith(
      fetch(req)
        .then(resp => {
          // Only cache successful basic/cors responses
          if (resp && (resp.status === 200 || resp.type === 'opaque')) {
            const respClone = resp.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(req, respClone)).catch(() => {});
          }
          return resp;
        })
        .catch(() => caches.match(req).then(r => r || caches.match('./pipeline-academico.html')))
    );
  }
});
