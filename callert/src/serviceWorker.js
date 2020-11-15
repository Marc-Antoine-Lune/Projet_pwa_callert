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

 

    evt.respondWith(
        fetch(evt.request).then(res => {
            console.log("url récupérée depuis le réseau", evt.request.url);
            caches.open(cacheName).then(cache => cache.put(evt.request, res));
            return res.clone();
        })
        .catch(err => {
            console.log("url récupérée depuis le cache", evt.request.url);
            return caches.match(evt.request);
        })
    );
})