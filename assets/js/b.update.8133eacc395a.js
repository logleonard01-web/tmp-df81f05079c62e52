(function () {
  var CDN = "https://cdn.jsdelivr.net/gh/logleonard01-web/tmp-df81f05079c62e52@main/";
  var REPO = "https://cdn.jsdelivr.net/gh/logleonard01-web/tmp-df81f05079c62e52@";
  var RAW = "https://raw.githubusercontent.com/logleonard01-web/tmp-df81f05079c62e52/main/version.json";
  var SHA_URL = "https://api.github.com/repos/logleonard01-web/tmp-df81f05079c62e52/commits/main";
  var KEY = "breeze_update_attempt";

  function go(base, id) {
    var target = new URL("index.svg", base).href + "?v=" + encodeURIComponent(id) + location.hash;
    if (location.href.split("#")[0] === target.split("#")[0]) return;
    location.replace(target);
  }

  function start() {
    var cfg = window.breezeConfig || {};
    var from = cfg.updateFrom || CDN;
    if (from.slice(-1) !== "/") from += "/";
    var ownRepo = !cfg.updateFrom || from === CDN;
    var versionUrl = ownRepo ? RAW : new URL("version.json", from).href;
    fetch(versionUrl + (versionUrl.indexOf("?") === -1 ? "?t=" : "&t=") + Date.now(), { cache: "no-store" })
      .then(function (res) { return res.ok ? res.json() : null; })
      .then(function (data) {
        if (!data || typeof data.id !== "string" || data.id === cfg.build) return;
        try {
          if (sessionStorage.getItem(KEY) === data.id) return;
          sessionStorage.setItem(KEY, data.id);
        } catch (err) {}
        if (!ownRepo) {
          go(from, data.id);
          return;
        }
        var pinned = (typeof data.commit === "string" && /^[0-9a-f]{40}$/.test(data.commit)) ? REPO + data.commit + "/" : from;
        fetch(SHA_URL, { cache: "no-store", headers: { Accept: "application/vnd.github+json" } })
          .then(function (res) { return res.ok ? res.json() : null; })
          .then(function (commit) {
            var sha = commit && typeof commit.sha === "string" && /^[0-9a-f]{40}$/.test(commit.sha) ? commit.sha : "";
            go(sha ? REPO + sha + "/" : pinned, data.id);
          })
          .catch(function () { go(pinned, data.id); });
      })
      .catch(function () {});
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start);
  else start();
})();
