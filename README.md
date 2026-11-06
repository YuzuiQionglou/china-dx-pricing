# China's new lab-test pricing rules: what they mean for diagnostics

A single-page, bilingual (English / 中文) brief on the NHSA guideline
检验类医疗服务价格项目立项指南（试行）. Everything is in one file: `index.html`.

## Edit the wording

Open `index.html` and scroll to the top of the `<script>` block. All text lives there:

| Object     | What it holds                                                                  |
|------------|--------------------------------------------------------------------------------|
| `ORIGINAL` | Chinese source quotes. Shown identically in both languages, so edit them once. |
| `LINKS`    | Dashboard and LinkedIn URLs.                                                   |
| `CONTENT.en` / `CONTENT.zh` | Every other string, with the same keys in both languages.     |

Tips:

- Anything written like `[THIS]` (capital letters in square brackets) shows up as a yellow,
  dashed placeholder on the page. Replace it with real text and the highlight disappears.
- When a link in `LINKS` is still a placeholder, it shows as plain highlighted text. Once you put a
  real URL (starting with `https://`), it becomes a clickable link.
- In chart strings, `{n}`, `{x}`, `{y}` and `{reg}` are filled in automatically. Keep them.
- If you add a line to a list (for example `unclear.items`), add it in both `en` and `zh`.
- The chart is calculated from the rule in the `rate` function, not typed in by hand.

To preview locally, just double-click `index.html`, or run:

```bash
python3 -m http.server 8000
```

then open http://localhost:8000. Add `?lang=zh` to the URL to open the Chinese version directly.

## Deploy on GitHub Pages

1. Create a new **public** repository on GitHub, for example `china-dx-pricing`
   (no README, so the first push is clean).
2. In this folder, run:

   ```bash
   git init
   git add index.html README.md scripts/
   git commit -m "First version of the pricing brief"
   git branch -M main
   git remote add origin https://github.com/<your-username>/china-dx-pricing.git
   git push -u origin main
   ```

3. On GitHub, open the repository, then **Settings → Pages**.
4. Under **Build and deployment**, set **Source** to *Deploy from a branch*,
   **Branch** to `main` and the folder to `/ (root)`. Click **Save**.
5. Wait one or two minutes. The page is live at
   `https://<your-username>.github.io/china-dx-pricing/`
   (the Chinese version: add `?lang=zh`).
6. To update it later, edit `index.html`, then `git add`, `git commit` and `git push`.
   GitHub Pages republishes automatically.

## QR code

`scripts/make_qr.py` turns a URL into `qr.png` (useful for slides or a printed brief).
With [uv](https://docs.astral.sh/uv/), the `qrcode` dependency is installed automatically:

```bash
uv run scripts/make_qr.py https://<your-username>.github.io/china-dx-pricing/
```

## Print

Printing the page (Cmd/Ctrl + P) gives a clean 1–2 page brief: the language toggle and slider
are hidden, the chart is kept.
