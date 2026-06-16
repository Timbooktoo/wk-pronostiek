const CACHE = 'wk-prono-v4';

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

  const url = new URL(e.request.url);
  const isSameOrigin = url.origin === self.location.origin;
  const isFirebaseSdk = url.hostname === 'www.gstatic.com' && url.pathname.startsWith('/firebasejs/');
  const isStaticCdnAsset = (
    url.hostname === 'fonts.googleapis.com' ||
    url.hostname === 'fonts.gstatic.com' ||
    url.hostname === 'unpkg.com'
  );

  if (isSameOrigin || isFirebaseSdk) {
    e.respondWith(
      fetch(e.request)
        .then(res => {
          const clone = res.clone();
          caches.open(CACHE).then(c => c.put(e.request, clone));
          return res;
        })
        .catch(() => caches.match(e.request))
    );
  } else if (isStaticCdnAsset) {
    e.respondWith(
      caches.match(e.request).then(cached => cached ||
        fetch(e.request).then(res => {
          const clone = res.clone();
          caches.open(CACHE).then(c => c.put(e.request, clone));
          return res;
        })
      )
    );
  } else {
    e.respondWith(fetch(e.request));
  }
});
