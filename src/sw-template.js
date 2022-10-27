importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js"
);

workbox.loadModule("workbox-background-sync");

workbox.precaching.precacheAndRoute(self.__WB_MANIFEST);

const { registerRoute } = workbox.routing;
const { NetworkFirst, NetworkOnly } = workbox.strategies;
const { BackgroundSyncPlugin } = workbox.backgroundSync;

// Gets Offline
const cacheNetworkFirst = [
  "/api/v1/student/getall-students/",
  "/api/v1/user/get-users/",
];

registerRoute(({ request, url }) => {
  // console.log({request, url})
  if (cacheNetworkFirst.includes(url.pathname)) return true;

  return false;
}, new NetworkFirst());

// Posts Offline
const bgSyncPlugin = new BackgroundSyncPlugin("offline-posts", {
  maxRetentionTime: 24 * 60, // Retry for max of 24 Hours (specified in minutes)
});

registerRoute(
  new RegExp(
    "https://atenea-servicio.onrender.com/api/v1/student/create-student"
  ),
  new NetworkOnly({
    plugins: [bgSyncPlugin],
  }),
  "POST"
);
