var offlineSiteCache = 'offlineSite';

var resourcesToCache = [
	'index.html',
	'about.html',
	'stylesheets/main.css',
	'stylesheets/parallax.css',
	'stylesheets/main-responsive.css'
	
];

this.addEventListener('install', function(event){

	console.log('Instalando Service Worker');

	event.waitUntil(

		caches.open(offlineSiteCache)
		.then(function(cache){
			return cache.addAll(resourcesToCache);
		})
		.then(function(){
			return self.skipWaiting();
		})

	);

});

this.addEventListener('fetch', function(event){

	event.respondWith(

		fetch(event.request)
		.catch(function(){
			return caches.match(event.request);
		})

	);

});