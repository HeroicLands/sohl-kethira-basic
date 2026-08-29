---
"sohl-kethira-basic": minor
---

Publish the homepage at `https://www.heroiclands.org/kethira/` (#59).

The page has existed and compiled since #57; nothing served it. This adds the
four pieces that turn one compiled page into a published site, and no fifth.

**A Hugo root at `site/`.** `site/hugo.toml` renders `content/` — the tree
`content-build site` writes — through `@heroiclands/hugo-theme` 0.2.0, whose
landing layout a `type: homepage` page selects. `publishDir` is
`../build/site/kethira`, so the deployed tree carries its own prefix
_physically_: the router proxies `/kethira/…` straight through without
rewriting a path, and the same deployment behaves identically at the project's
own address. `baseURL` is the one place the address is written down.

**`build:site`** is `content-build site` then `hugo`. The deploy runs that one
script and knows nothing about its steps.

**`.github/workflows/deploy-site.yml` calls the shared workflow**
(`HeroicLands/.github`), which owns the runner, the completeness guard, the
hosting project, the custom domain and the upload — the parts that must not
drift across the six packages that publish a subtree of one site. What stays
here is the trigger, the Pages project name, and the two secrets, passed **by
name** rather than inherited.

**No `min-pages` / `max-pages`, and no `_headers`.** `publish.site: homepage`
fixes the bound at exactly one page and the shared workflow _fails the run_ if
either input is passed — the count is a Fan Material Guidelines boundary, and a
boundary a caller can widen is not one. `_headers` is the same six lines for
every package, so the shared workflow supplies the default.

**Verified against the boundary rather than by eye.** A clean
`npm run build:site` emits `build/site/kethira/` holding exactly **one**
`index.html` — plus `404.html`, `sitemap.xml` listing that single URL, and five
theme static files. Nothing from the 364-note content tree reaches it.
`build/packs-json` is byte-identical at 385 files, and `lint:addresses` is
unmoved at its pre-existing 270 findings (#41).

**One thing the render turned up, fixed in `site/hugo.toml`: the trademark
notice was being edited by the renderer.** It is reproduced verbatim from
`LICENSE` because the Guidelines require it — which is why `MD034` is disabled
around it rather than its bare URLs rewritten as markdown links, since that
would edit the notice. Goldmark's GFM autolinker edited it anyway, swallowing
the closing parenthesis of `(https://www.kelestia.com/)` into the href and
publishing a required legal notice whose every link pointed somewhere the
notice does not name. `linkify = false`: the notice is text, so it renders as
text, and the authored prose above it already carries a working link to the
same place. Every remaining `href` on the page is authored.

**`disableKinds` closes the count.** Left to its defaults Hugo also renders a
taxonomy root and a term page for `tags` and `categories` whether or not
anything is tagged, an RSS feed advertising updates a one-page site cannot have,
and a sitemap — each another published page, against a bound that is a licensing
boundary. They are disabled explicitly rather than left to whether a term
happens to exist.

_Known and tracked upstream, deliberately not worked around here:_ the theme's
`hero-banner.html` always paints a background, and a `type: homepage` page with
no `banner:` resolves to `images/banners/homepage.webp`, which is a 404 on the
CDN. The hero still renders — its gradient overlay is what carries the band —
but by way of a failed request. `params.cdnBaseURL` is set to the shared CDN as
the sibling sites do, so one upload there fixes every package at once; a local
override here would shadow that fix and outlive its cause.
