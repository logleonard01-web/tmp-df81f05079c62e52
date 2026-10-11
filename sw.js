if (navigator.userAgent.includes("Firefox")) {
  Object.defineProperty(globalThis, "crossOriginIsolated", {
    value: true,
    writable: false,
  });
}
importScripts(new URL("controller/controller.sw.js", self.location.href).href);

addEventListener("fetch", (e) => {
  if ($scramjetController.shouldRoute(e)) {
    e.respondWith($scramjetController.route(e));
  }
});
