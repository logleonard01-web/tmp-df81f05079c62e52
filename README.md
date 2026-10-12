# breeze

Public snapshot of [breezeontop/svg](https://github.com/breezeontop/svg), licensed under the GNU Affero General Public License v3. See `LICENSE`.

This copy keeps the same pages and games. The address bar stays on the host you opened. Styles, scripts, and images still load from jsDelivr, and the page does not send you to the jsDelivr copy.

The proxy still uses the original API and websocket:

- `https://breezeunb.locker`
- `wss://breezeunb.locker/wind/`

`index.html` and `index.svg` load styles, scripts, images, icons, and other `assets`, `scramjet`, and `controller` files from jsDelivr. The proxy worker is the `sw.js` next to the page that is open. The browser stays on that page.

`https://cdn.jsdelivr.net/gh/logleonard01-web/tmp-df81f05079c62e52@main/`

## Run locally

From this directory:

```bash
python3 -m http.server 8741
```

Open [http://127.0.0.1:8741](http://127.0.0.1:8741).

## Ads

The original direct-link popup is removed, and the banner tags are removed. `index.html` and `index.svg` load only the popunder script from `discussionanymore.com`. That script is the only one that sees the site as `cg.ah.football`. The rest of the page keeps its real address. The script does not open a new window. When it tries to open a link, the link loads in the in-page proxy. The page keeps `window.open` looking native, so the network script still runs, and a click counts even when the browser hides that script's address. If the script never returns a link, the click opens the Adsterra zone link in the proxy instead. Clicks on the home page, games, movies, manga, settings, and inside the browser count. Another click can open another ad after 10 seconds, so the popunder stays around 6 a minute. If it is not armed, it reloads every 12 seconds.
