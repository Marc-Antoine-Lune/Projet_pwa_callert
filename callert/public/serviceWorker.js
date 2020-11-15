const cacheName = 'cache' + '1.0';
let cache = caches.open(cacheName);	


this.addEventListener('install', (evt) => {
  console.log(`sw installé à ${new Date().toLocaleTimeString()}`);
  const cachePromise = caches.open(cacheName).then(cache => {
    return cache.addAll([
        'index.html',
        'index.css',  
        '/home',
        '/profile',
        '/blog',
        '/map',
        '/static/js/main.chunk.js',
        '/static/js/0.chunk.js',
        '/static/js/bundle.js',
        'navDrawer.js'


    ])
    .then(console.log('cache initialisé'))
    .catch(console.err);
});

evt.waitUntil(cachePromise);
});

this.addEventListener('activate', (evt) => {
  console.log(`sw activé à ${new Date().toLocaleTimeString()}`);    
});

	
	
this.addEventListener('fetch', (evt) => {


  console.log('url interceptée', evt.request.url);


  // Strategy: cache only with network callback
  evt.respondWith(
  
      caches.match(evt.request)
          .then(cachedResponse => {   
              if (cachedResponse) {
                  console.log("url depuis le cache", evt.request.url);
                  return cachedResponse;
              }

              // cache Strategy
              return fetch(evt.request).then(
                  function(newResponse) {
                      console.log("url depuis le réseau et mise en cache", evt.request.url);
                      
                      caches.open(cacheName).then(
                          function(cache){
                              cache.put(evt.request, newResponse);
                          }
                      );
                      return newResponse.clone();
                  }
              )
          }
      )
  );
});