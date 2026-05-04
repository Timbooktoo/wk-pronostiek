const CACHE = 'wk-prono-v1';

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(['.', './index.html'])));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;

  const isSameOrigin = new URL(e.request.url).origin === self.location.origin;

  if (isSameOrigin) {
    // Network-first for the app itself so updates land immediately
    e.respondWith(
      fetch(e.request)
        .then(res => { caches.open(CACHE).then(c => c.put(e.request, res.clone())); return res; })
        .catch(() => caches.match(e.request))
    );
  } else {
    // Cache-first for CDN assets (React, Firebase, fonts) — loads fast, works offline
    e.respondWith(
      caches.match(e.request).then(cached => cached ||
        fetch(e.request).then(res => { caches.open(CACHE).then(c => c.put(e.request, res.clone())); return res; })
      )
    );
  }
});
