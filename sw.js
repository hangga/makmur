/* ==================================================
   SERVICE WORKER — Kuesioner Masjid PWA
   Strategi: Cache-First + Background Update
   ================================================== */

const CACHE_VERSION = "v1.0.0";
const CACHE_NAME = `kuesioner-masjid-${CACHE_VERSION}`;

const ASSETS = [
  "./",
  "./index.html",
  "./styles.css",
  "./script.js",
  "./manifest.json",
  "./icon.svg"
];

/* ---------- INSTALL ---------- */
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(ASSETS))
      .then(() => self.skipWaiting())
  );
});

/* ---------- ACTIVATE ---------- */
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) =>
        Promise.all(
          keys
            .filter((key) => key !== CACHE_NAME)
            .map((key) => caches.delete(key))
        )
      )
      .then(() => self.clients.claim())
  );
});

/* ---------- FETCH ---------- */
self.addEventListener("fetch", (event) => {
  const { request } = event;

  // Hanya tangani GET
  if (request.method !== "GET") return;

  // Hanya same-origin
  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  event.respondWith(
    caches.match(request).then((cached) => {
      const networkFetch = fetch(request)
        .then((response) => {
          // Simpan versi terbaru ke cache
          if (response && response.status === 200 && response.type === "basic") {
            const copy = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
          }
          return response;
        })
        .catch(() => cached); // offline → pakai cache

      // Cache-First: pakai cache dulu, update di background
      return cached || networkFetch;
    })
  );
});

/* ---------- SKIP WAITING (untuk update) ---------- */
self.addEventListener("message", (event) => {
  if (event.data === "SKIP_WAITING") {
    self.skipWaiting();
  }
});