# breeze

Public snapshot of [breezeontop/svg](https://github.com/breezeontop/svg), licensed under the GNU Affero General Public License v3. See `LICENSE`.

This copy keeps the same pages and games. Auto-update follows this GitHub repo, not the original one. `index.html` and `index.svg` set `updateFrom` to the jsDelivr copy of this repo. Older copies that still have an empty `updateFrom` load `assets/js/b.update.8133eacc395a.js`. That script reads `version.json` on this repo and, when the build id changes, opens the SVG for the latest commit on jsDelivr. The `@main` copy of the SVG can lag behind GitHub, so the update uses the commit link.

The proxy still uses the original API and websocket:

- `https://breezeunb.locker`
- `wss://breezeunb.locker/wind/`

`index.html` and `index.svg` load styles, scripts, images, icons, and other `assets`, `scramjet`, and `controller` files from jsDelivr. The proxy worker is the `sw.js` next to the page that is open, including a commit link. A service worker has to be same-origin with the page, so a host that does not serve `sw.js` opens the jsDelivr SVG and the worker starts there:

`https://cdn.jsdelivr.net/gh/logleonard01-web/tmp-df81f05079c62e52@main/`

## Run locally

From this directory:

```bash
python3 -m http.server 8741
```

Open [http://127.0.0.1:8741](http://127.0.0.1:8741).

## Ads

The original direct-link popup is removed, and the banner tags are removed. `index.html` and `index.svg` load only the popunder script from `discussionanymore.com`. That script does not open a new window. When it tries to open a link, the link loads in the in-page proxy. The page keeps `window.open` looking native, so the network script still runs, and a click counts even when the browser hides that script's address. If the script never returns a link, the click opens the zone link in the proxy instead. Clicks on the home page, games, movies, manga, settings, and inside the browser count. Another click can open another ad after 10 seconds, so the popunder stays around 6 a minute. If it is not armed, it reloads every 12 seconds.
