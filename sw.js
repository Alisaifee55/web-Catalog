/* Minimal service worker: lets browsers treat the site as an installable app.
   It deliberately caches NOTHING, so catalogs and replies are always live. */
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function () { /* network as usual */ });
