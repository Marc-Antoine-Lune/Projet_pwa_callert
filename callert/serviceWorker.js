const cacheName = 'cache' + '1.0';
	


self.addEventListener('install', (evt) => {
  console.log(`sw installé à ${new Date().toLocaleTimeString()}`);
  const cachePromise = caches.open(cacheName).then(cache => {
    return cache.addAll([
        'index.html',
        'index.css',  
        'Home.js',
        'home.css',
        'Location.js',
        'NavBar.js',

    ])
    .then(console.log('cache initialisé'))
    .catch(console.err);
});

evt.waitUntil(cachePromise);
});

self.addEventListener('activate', (evt) => {
  console.log(`sw activé à ${new Date().toLocaleTimeString()}`);    
});

	
self.addEventListener('fetch', (evt) => {


  console.log('sw intercepte la requête suivante via fetch', evt);
  console.log('url interceptée', evt.request.url);

   evt.respondWith(
      caches.match(evt.request)
          .then(cachedResponse => {
              if (cachedResponse) {
                  return cachedResponse;
              }
              return fetch(evt.request);
          })
  );
});