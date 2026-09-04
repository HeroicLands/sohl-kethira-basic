---
"sohl-kethira-basic": patch
---

**Take `@heroiclands/package-build` 14.0.0 and `@heroiclands/hugo-theme` 0.4.0**,
from `^13.0.0` and `^0.2.0`. Nothing this module ships changes: the compiled
packs, the manifest and the emitted homepage are byte-identical, and the diff is
`package.json` plus the lockfile.

Each change was checked against this tree rather than assumed inert.

**package-build 14.0.0 — `publish.address.landing` is deleted** (package-build#215,
#216), and a configuration still declaring it is now refused by name. This is the
last step of #204, which retired the landing concept. `package-build.config.yaml`
here declares **no `publish.address` block at all**, so there is no key to
migrate and nothing to refuse — the config parses and every command that reads it
still exits 0.

**package-build 14.0.0 — `site.sections.<name>` gained `listType` and
`listSubType`** (package-build#212, #214), written onto a generated section
`_index.md` so a theme can list a section by front matter. Additive, and this
repository declares no `site.sections`: `publish.site: homepage` returns before
the content tree is walked for pages, so no section landing is emitted for the
keys to appear on.

**hugo-theme 0.4.0 — `_default/list.html` lists a section from `listType`**
(hugo-theme#50, #51) when the page is a section, its `.Pages` is empty and the
landing declares a `listType`. All three conditions fail here: `hugo.toml`
disables the `section` kind outright, and the one page this site publishes is a
homepage that declares no `listType`. The fallback never fires.

**hugo-theme 0.3.0 — a hero banner falls back to `default.webp`** (hugo-theme#36,
#37), crossed on the way to 0.4.0 and the one visible change in the rendered
site. `hero-banner.html` used to emit `images/banners/<type>.webp` unchecked, so
a `type: homepage` page pointed its hero at `banners/homepage.webp`, which has
never existed — the band rendered over a dead URL and nothing failed. The banner
inventory is now declared, and an undrawn name resolves to `default.webp`. So
`/kethira/homepage-root/` gains a hero image that loads where it previously
404'd; the published homepage itself is untouched.

**Evidence.** `npm run lint` is green on all six checks before and after, on
byte-identical output once timestamps are stripped: 426 files formatted, 371
addresses across 371 notes, every link a labelled address. A cold `npm run
build:db` exits 0 both ways and `diff -r` over `build/packs-json` reports **no
difference** across all 392 files — 66 skills, 276 mystery-pack items, 28 actors
and 22 folder documents. `build/stage/module.json` and the emitted `site/content`
tree are byte-identical. The rendered site differs only as described above:
`index.html` and `404.html` are byte-identical, and the sole content page's hero
URL moves from a 404 to `default.webp`.
