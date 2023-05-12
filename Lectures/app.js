const version = '2';

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(`static-${version}`)
      .then((cache) => cache.addAll(['/styles.css', '/script.js'])),
  );
});

self.addEventListener('activate', (event) => {
  // …delete old caches…
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches
      .match(event.request)
      .then((response) => response || fetch(event.request)),
  );
});