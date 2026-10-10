# breeze

Public snapshot of [breezeontop/svg](https://github.com/breezeontop/svg), licensed under the GNU Affero General Public License v3. See `LICENSE`.

This copy keeps the same pages, games, and ad script. The upstream auto-update is turned off (`updateFrom` is empty in `index.html` and `index.svg`) so a newer build on the original repo cannot replace this one. That is what lets a different ad stay in place.

The proxy still uses the original API and websocket:

- `https://breezeunb.locker`
- `wss://breezeunb.locker/wind/`

## Run locally

From this directory:

```bash
python3 -m http.server 8741
```

Open [http://127.0.0.1:8741](http://127.0.0.1:8741).

## Ads

Game clicks still open the original ad. Send the new ad tags when you want them swapped in.
