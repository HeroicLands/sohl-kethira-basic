---
"sohl-kethira-basic": patch
---

**Take `@heroiclands/package-build` 13.0.0**, crossing three majors from the
`^11.0.0` this repository pinned. Nothing in the tree changes: the bump is
`package.json` and the lockfile, and no note, configuration key or compiled
document moves.

Each of the three changes was checked against this tree rather than assumed
inert.

**11.1.0 — a `README` landing's `subType` is an address** (package-build#197,
#200), checked against the sections a repository declares rather than against
`doc`'s genre list. This tree contains **no `README.md` under
`assets/content/`** at all, so the rule reaches nothing.

**12.0.0 — `section:`, the `collection` landing rule and the `collection`
subtype are retired** (package-build#202), all three now refused by name rather
than ignored. Zero notes here declare `section:`, zero write `subType:
collection`, and `package-build.config.yaml` declares no `publish.address`
block, so there is no `landing:` value to migrate.

**12.0.0 — `type` and `subType` are held to the address charset**
(package-build#206), and the `doc` subtype `user-guide` is renamed `userguide`
with the old spelling accepted as a warning for one release. **No note here
carries `user-guide` in any position**, and no `type` or `subType` in the tree
contains a hyphen, so nothing needed sweeping and no warning is emitted.

**13.0.0 — a section is a Hugo directory the note format no longer carries**
(package-build#204). Pages emit flat and `sectionOf` is gone. This repository
publishes under `publish.site: homepage`, which returns before the content tree
is walked for pages, so the emitter writes the same one homepage and zero
content pages it did before — verified byte-identical, not inferred from the
mode.

**Evidence.** `npm run lint` is green on all six checks before and after, on
identical counts (425 files formatted, 371 addresses across 371 notes, every
link a labelled address). `npm run build:db` exits 0 both ways and the emitted
pack JSON is **byte-identical**: `diff -r` over `build/packs-json` reports no
difference across all 392 files — 66 skills, 276 mystery-pack items, 28 actors
and 22 folder documents. `build/stage/module.json` and the emitted `site/content`
tree are byte-identical too.
