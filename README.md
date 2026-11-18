# China's new lab-test pricing rules: what they mean for diagnostics

A single-page, bilingual (English / 中文) brief on the NHSA guideline
检验类医疗服务价格项目立项指南（试行）. Everything is in one file: `index.html`.

## Pages

| File | What it is |
|---|---|
| `index.html` | The pricing brief (7 sections) |
| `global.html` | Chinese IVD companies going global: what to watch |
| `data/ivd-global.js` | **All numbers for `global.html`** (revenue, growth, signals, sources) |

`index.html` links to `global.html` from the overview and from "About me", and back.

## Update the global page (each quarter)

Open `data/ivd-global.js`. Each company is one `{ ... }` block:

- `total`, `overseas.revenue`, `domestic.revenue` are in RMB 亿元 (100 million).
  The page converts them itself: `176.50` becomes "RMB 17.65bn" in English and "176.50亿元" in Chinese.
- `growth` is the year-on-year change in %, as reported (use a minus sign for a fall: `-22.97`).
- `signals.en` / `signals.zh`: one line per signal, same order in both languages.
- `sources`: one `{ label, url }` per source. Every number should have one.
- To add a company, copy a whole block and change the values. The chart, cards and table update on their own.
- Change `fiscalYear` and `asOf` at the top when you move to a new year.

The wording of `global.html` (headings, tracking list, method) is in the `CONTENT` object at the top
of its `<script>` block, same idea as `index.html`.

## Edit the wording (index.html)

Open `index.html` and scroll to the top of the `<script>` block. All text lives there:

| Object     | What it holds                                                                  |
|------------|--------------------------------------------------------------------------------|
| `ORIGINAL` | Chinese source quotes. Shown identically in both languages, so edit them once. |
| `LINKS`    | LinkedIn URL.                                                                  |
| `CONTENT.en` / `CONTENT.zh` | Every other string, with the same keys in both languages.     |

Tips:

- Anything written like `[THIS]` (capital letters in square brackets) shows up as a yellow,
  dashed placeholder on the page. Replace it with real text and the highlight disappears.
- When a link in `LINKS` is still a placeholder, it shows as plain highlighted text. Once you put a
  real URL (starting with `https://`), it becomes a clickable link.
- In chart strings, `{n}`, `{x}`, `{y}` and `{reg}` are filled in automatically. Keep them.
- If you add a line to a list (for example a question in `unclear.groups`), add it in both `en` and `zh`.
- Open questions (section 05) are grouped by workflow step; `step` is the number shown on the step in section 04. The count on the overview tile is calculated automatically.
- Each workflow step can have an optional `implication` (shown with an "Inference" label).
- The chart is calculated from the rule in the `rate` function, not typed in by hand.
- The overview tiles are in `CONTENT.<lang>.home.tiles`, one per section, in order:
  `short` (name on the section tabs and the previous/next buttons), `teaser`, optional `stat`
  (big text) and `tags` (`"fact"`, `"inference"`, `"verify"`).
- `CONTENT.<lang>.nav` holds the navigation words ("Overview", "Previous", "Next"…).

## How the page works

The page opens on an **overview**: seven tiles, one per section. Tapping a tile opens that section
on its own. Inside a section you can go back to the overview, jump between sections with the tabs
at the top, use the previous/next buttons at the bottom, swipe left/right on a phone, or use the
← → arrow keys (Esc goes back to the overview).

Each section has its own link, handy for sending one part to a colleague:

| Section | Link ending |
|---|---|
| Overview | (none) |
| 01 The rules in 30 seconds | `#rules` |
| 02 The 11th-pathogen paradox | `#chart` |
| 03 What it could mean | `#impact` |
| 04 Across the diagnostic workflow | `#workflow` |
| 05 What is still unclear | `#unclear` |
| 06 How I did this | `#method` |
| 07 About me | `#about` |

Combine with the language: `…/china-dx-pricing/?lang=zh#chart`.

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

Printing the page (Cmd/Ctrl + P) from any view gives a clean brief with all seven sections one
after the other: the overview tiles, navigation, language toggle and slider are hidden, the chart
is kept.
