// Necesario para poder instalar la app en el celular. No guarda nada: siempre usa la versión publicada.
self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',()=>{});
