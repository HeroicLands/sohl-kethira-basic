---
"sohl-kethira-basic": patch
---

**Send `/kethira/` to the homepage.** Since this module took
`@heroiclands/package-build` 15 the landing is published at
`/kethira/homepage-root/` and nothing is written at `/kethira/` — but Hugo goes
on generating a site root there whatever else is authored, so this package's most
linked address served chrome around an empty `<main>`: nav, footer, and no words
at all. `utils/build-site-root.mjs` now writes the deployment root's
`_redirects` and `_headers`, and `npm run build:site` runs it last.

**Both path forms, and a pinned lifetime.** Cloudflare Pages matches a redirect
against the raw request path before any trailing-slash handling, so `/kethira`
and `/kethira/` are distinct keys and each needs its own rule. The redirect is a
`301` carrying `Cache-Control: max-age=3600`: Pages sets no `Cache-Control` on a
redirect it generates, and an unpinned 301 is cacheable indefinitely — a browser
persists one to disk and stops asking, so a scheme that moved again would strand
every returning reader. `_redirects` cannot carry a header, which is why this is
two files.

**This build now owns `_headers`, including the `noindex` rules it did not carry
before.** The shared deploy workflow writes those rules as a default, but only
when a build produces no `_headers` at all — it never merges into one. The cache
rules have nowhere else to live, so the file is this repository's now and the
three host-assigned addresses are covered in the script beside them.

**Nothing published moves and no page is added.** A redirect is a routing rule,
not a document: neither file is an `index.html`, so this module still publishes
exactly one page, which is a Fan Material Guidelines boundary rather than a
preference.

**Evidence.** A clean build emits `build/site/_redirects` and
`build/site/_headers` at the deployment root — the directory the deploy uploads
— with `build/site/kethira/homepage-root/index.html` (7,419 B, 1,294 visible
characters in `<main>`) intact and Hugo's own root still emitted and non-empty
(4,916 B, 0 visible characters). The shared workflow's page guard, driven against
the built tree, reports `2 index.html file(s); 1 page(s)`. `npm run lint` is
green on all six checks, and `diff -r` over `build/packs-json` reports no
difference across all 392 files.
