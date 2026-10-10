# breeze

Public snapshot of [breezeontop/svg](https://github.com/breezeontop/svg), licensed under the GNU Affero General Public License v3. See `LICENSE`.

This copy keeps the same pages and games. The upstream auto-update is turned off (`updateFrom` is empty in `index.html` and `index.svg`) so a newer build on the original repo cannot replace this one.

The proxy still uses the original API and websocket:

- `https://breezeunb.locker`
- `wss://breezeunb.locker/wind/`

`index.html` and `index.svg` load styles, scripts, images, icons, and other `assets`, `scramjet`, and `controller` files from jsDelivr. `sw.js` stays on the page host, because a service worker has to be same-origin:

`https://cdn.jsdelivr.net/gh/logleonard01-web/tmp-df81f05079c62e52@main/`

## Run locally

From this directory:

```bash
python3 -m http.server 8741
```

Open [http://127.0.0.1:8741](http://127.0.0.1:8741).

## Ads

The original direct-link popup is removed. `index.html` and `index.svg` still load the Adsterra tags from Cool-GamesV2: a 728×90 banner, a 160×300 banner, and the popunder script, all from `discussionanymore.com`. The popunder does not open a new window. When that script tries to open a link, the link loads in the in-page proxy instead.
