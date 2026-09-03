---
"sohl-kethira-basic": patch
---

Adopt package-build 11.0.0, taking the 10.x content format and the 11.x address rules in one jump.

This repository pinned `^9.0.0`, two majors behind. The 9→10 step is what this
tree has been waiting for; the 10→11 step is almost entirely inapplicable here,
and the audit below says why in each case.

**The 342 pre-existing lint findings are cleared by the bump itself, not by
editing content.** `main` was red before this change — 342 findings across 371
notes, every one `must declare 'sohl.subType'` — because #75 converted the tree
to the new content format (`type` and `subType` at the top level, `category`
under `data:`) while the pin still resolved to 9.0.0, which demands the old
in-block position. 10.0.0 is the release that reads the format the notes are
already written in. No note is touched to achieve this:

```text
before (^9.0.0):  342 finding(s) across 371 note(s)  — all `sohl.subType`
after  (^11.0.0): Addresses and frontmatter are well-formed (371 address(es))
```

`npm run lint` now exits 0 on all six checks.

**One content edit, and it is the only one 11.x requires here.**
`assets/content/homepage.md` gains `shortcode: root`. A homepage became an
ordinary addressed note (HeroicLands/package-build#182), so `shortcode` moved
from refused to required; the diagnostic prescribes the value verbatim, and
`homepage-root` is the convention in every package. Verified as genuinely
load-bearing rather than assumed: removing the line reproduces the single
finding, restoring it clears it.

**The other three 11.x changes are no-ops in this tree, each confirmed rather
than reasoned about.** The top-level `aliases` refusal
(HeroicLands/package-build#180) finds nothing, because #76 swept the key ahead
of it — 0 top-level `aliases` remain and `name.aliases` is present on all 370
notes, kept, unread, and untouched here. Addressed page URLs
(HeroicLands/package-build#181) reach no page, because `site: homepage` returns
before the content tree is walked: the site pass still emits **1 homepage + 0
content pages + 0 tree pages + 0 landings**, so the carve-out is intact.
Promoting an unresolvable address to a hard build failure
(HeroicLands/package-build#184) has nothing to bite on — this tree contains
**zero wikilinks**, measured, so the alias and address namespaces were empty in
practice.

**The packs do move, in exactly one way, and it is upstream's doing.** 392 files
before and after, none added and none removed; every difference is
`flags.sohl.docArchetype: N` relocating to `system.archetype: N` — into the
system block, where the item reads it, rather than a flag beside it. It applies
to all 370 top-level documents and to the 100 embedded items this repository
compiles itself, with values preserved one-for-one (441 zeroes, 10 ones, 19
hundreds, before and after). Modelling only that relocation over the previous
output reproduces the new output exactly, so nothing else changed.

```text
build/packs-json, whole-tree SHA-256
  before: 14a3d0ba…   after: 440488d5…
  392 files both ways; 0 added, 0 removed
```

**A being's embedded items are split between the two shapes, and that is the
pinned catalogue rather than a defect here.** 1,057 of the 1,171 items embedded
in the 28 beings still carry `flags.sohl.docArchetype` — the ones resolved
through `itemCatalog` from the `sohl@0.8.2` release, which was built on the old
toolchain and bakes the old shape into its own pack (1,169 documents carrying
`docArchetype`, 0 carrying `system.archetype`). This build copies those items
verbatim, so it cannot rewrite them. All 1,057 hold the value `0`, which is the
field's default, so nothing reads differently for it. It resolves on its own
when `compatibility.verified` moves to a `sohl` release built on package-build
10 or later; there is nothing to fix in this repository.

**`.github/workflows/lint.yml` is deliberately left alone.** It omits
`lint:addresses` and says why: a gate that cannot go green trains people to
merge past a red check. Its stated condition — "when #41 clears, delete the five
steps below and run `npm run lint`" — is now met on both counts, #41 being closed
and the check green. Re-enabling it is a maintainer's call and a change of its
own, not a side effect of a version bump.
