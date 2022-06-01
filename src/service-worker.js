/* eslint-disable no-restricted-globals */
const statics = self.__WB_MANIFEST

self.addEventListener('install', event =>{
    event.waitUntil(
        caches.open('hello').then( cache => cache.addAll([
            '/',
            'index.html',
            'main.css'
        ]))
    )
    self.skipWaiting()
    console.log('installing!');
})
self.addEventListener('activate', event=>{
    console.log('service worker activating');
})

self.addEventListener('fetch', event =>{
    console.log('You are requesting', event.request.url);
    event.respondWith(
        caches.match(event.request).then(response =>{
            if(response){return response}

            return fetch(event.request)
        })
    )
})

// self.addEventListener("push", event => {
//     const payload = event.data.text();
//     console.log(payload)
//     event.waitUntil(
//       self.registration.showNotification("Lol", {body: payload})
//     )
//   })