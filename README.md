# breeze

Public snapshot of [breezeontop/svg](https://github.com/breezeontop/svg), licensed under the GNU Affero General Public License v3. See `LICENSE`.

This copy keeps the same pages and games. The upstream auto-update is turned off (`updateFrom` is empty in `index.html` and `index.svg`) so a newer build on the original repo cannot replace this one.

The proxy still uses the original API and websocket:

- `https://breezeunb.locker`
- `wss://breezeunb.locker/wind/`

If this file is opened on a host that does not have the `assets` folder, the inline script at the top of `index.html` and `index.svg` points every relative stylesheet, script, and image at the GitHub CDN.

## Run locally

From this directory:

```bash
python3 -m http.server 8741
```

Open [http://127.0.0.1:8741](http://127.0.0.1:8741).

## Ads

The original direct-link popup is removed. `index.html` and `index.svg` load the Adsterra tags from Cool-GamesV2: one popunder, a 728×90 banner, and a 160×300 banner, all from `discussionanymore.com`.
