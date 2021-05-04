// APP SHELL es lo que una app necesita para que funcione
self.addEventListener('install', e => {
   const cachePromise = caches.open('cache-1').then(cache => {
      return cache.addAll([
        '/', // DEBE IR
        '/index.html',
        '/css/style.css',
        '/img/main.jpg',
        'https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css',
        '/js/app.js'
      ]);
   });
   e.waitUntil(cachePromise);
});

self.addEventListener('fetch', e => {
    // Estrategia Cache only: Usada cuando queremos que todo salga del cache
    // LOs caches se leen por dominio
    e.respondWith(caches.match(e.request));
})
