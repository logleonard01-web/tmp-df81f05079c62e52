(function () {
  var CDN = "https://cdn.jsdelivr.net/gh/logleonard01-web/tmp-df81f05079c62e52@main/";
  var RAW = "https://raw.githubusercontent.com/logleonard01-web/tmp-df81f05079c62e52/main/version.json";
  var KEY = "breeze_update_attempt";

  function start() {
    var cfg = window.breezeConfig || {};
    var from = cfg.updateFrom || CDN;
    if (from.slice(-1) !== "/") from += "/";
    var ownRepo = !cfg.updateFrom || from === CDN;
    var versionUrl = ownRepo ? RAW : new URL("version.json", from).href;
    var svg = new URL("index.svg", from).href;
    fetch(versionUrl + (versionUrl.indexOf("?") === -1 ? "?t=" : "&t=") + Date.now(), { cache: "no-store" })
      .then(function (res) { return res.ok ? res.json() : null; })
      .then(function (data) {
        if (!data || typeof data.id !== "string" || data.id === cfg.build) return;
        try {
          if (sessionStorage.getItem(KEY) === data.id) return;
          sessionStorage.setItem(KEY, data.id);
        } catch (err) {}
        var target = svg + "?v=" + encodeURIComponent(data.id) + location.hash;
        if (location.href.split("#")[0] === target.split("#")[0]) return;
        location.replace(target);
      })
      .catch(function () {});
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start);
  else start();
})();
