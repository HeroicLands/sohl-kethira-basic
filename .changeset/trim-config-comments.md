---
---

No release: comments only, and no configured value changes.

`content-build.config.yaml` was 143 comment lines to 70 of configuration — two
thirds commentary. Most of it restated the toolchain's own README (what
`contentPackage` means, which values are derived, that `packageBuild` is read by
a second package) or recorded how the file came to exist, which git history
already holds. A second copy of another package's documentation can drift from
it, and neither copy says which is right.

What stays is what a reader could not otherwise know, and this file holds more
of that than its sibling does: why the system floor is `0.8.0` rather than
`0.7.0` (the Item model these documents are shaped for begins there, established
by comparing compiled `system` keys against each tagged release); that `verified`
is stamped into every document and must be raised at release time; that two
packs share the `Item` type with no default _so that_ an undeclared `pack:`
fails the build instead of misrouting silently; why the `characters` Actor pack
is absent and what its absence now costs; and that publishing no link manifest
is a withdrawability decision rather than a side effect.

213 lines to 132. Verified by parsing both versions and diffing the result, and
by recompiling the packs and regenerating the manifest.
