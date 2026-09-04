---
"sohl-kethira-basic": patch
---

**Take `@heroiclands/package-build` 15.0.0**, from `^14.0.0`. The compiled packs
and the manifest are byte-identical; the one emitted change is that this module's
homepage is published at the address everything already links to.

**A page's `url:` is site-root relative** (package-build#217, #219). The site
emitter wrote `site.base` — absent here, so `/<contentPackage>/` — into each
page's Hugo `url:` front matter, and Hugo resolves `url` under `baseURL`, which
`site/hugo.toml` already sets to `https://www.heroiclands.org/kethira/`. The
prefix was written on both sides, so the one page this module publishes rendered
at `/kethira/kethira/homepage-root/` while `/kethira/homepage-root/` — the
address `[[homepage-root]]` resolves to, and the address the `/kethira/` redirect
points at — was a 404. 15.0.0 writes the address alone into `url:`, so the page
renders at `/kethira/homepage-root/` and no `/kethira/kethira/` directory is
produced at all. This repository declares no `site.base`, so there was no stopgap
line to delete.

**Art paths distinguish unset from deliberately blank** (package-build#218,
#221). `resolveImg` returns `null` for an absent or `null` path and `""` for one
authored empty, and a caller pairs its default with `??` rather than `||`, so
`img: ""` now means "ship no art" instead of falling back to the type default.
Inert here: #81 already swept the eleven `portrait: ""` beings to `null`, and no
note in `assets/content/` writes an empty `img:` or `portrait:`.

**A note's own `title` no longer fills an affiliation's `system.title`**
(package-build#218, #222). The two were never the same quantity — a note's
`title` is the heading its page publishes under, `system.title` the style of
address an office carries. Inert here: all 28 `type: affiliation` notes declare
no top-level `title:`, and the compiled documents prove it.

**Evidence.** `npm run lint` is green on all six checks before and after with
identical output once timestamps are stripped — 428 files formatted, 371
addresses across 371 notes, every link a labelled address. A cold `npm run
build:db` exits 0 both ways and `diff -r` over `build/packs-json` reports **no
difference** across all 392 files. `build/stage/module.json` is byte-identical.
The emitted `site/content/homepage-root.md` differs in one line, its `url:`, and
the rendered `index.html` for the homepage is byte-identical at its new address;
the site root's `index.html` and `404.html` are unchanged.
