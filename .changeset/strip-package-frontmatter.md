---
"sohl-kethira-basic": minor
---

Delete the retired `package:` frontmatter from all 363 content notes, and move to
`@heroiclands/package-build` 3.3.0 (#48).

Every note in `assets/content/` declared `package: kethira` — one constant,
restated 363 times, because this repository single-sources exactly one package.
A note's package is now derived from `contentPackage` in
`package-build.config.yaml`, which is the only place it was ever configured.

**The dependency bump is part of the change, not a follow-up.** On 3.2.0 and
earlier the field was a _selector_: `base-compiler` compiled a note only when
`fm.package` equalled `contentPackage()`, and skipped it otherwise — silently,
tallied into the same bucket as the thousands of notes that legitimately belong
to another pass. An absent `package:` compared unequal too, so stripping the
field on the old toolchain would have filtered out **every note in this tree and
still exited 0**. 3.3.0 (HeroicLands/package-build#56, step 1 of three) makes the
field optional and derives the package from configuration, so the sweep is a
mechanical deletion rather than a silent emptying. Step 3 makes a present
`package:` an error, on a later major.

**Verified byte-identical.** `build/packs-json` was compiled before and after the
deletion on 3.3.0 and diffed: 385 documents, no difference. The same 363 notes
compile — 28 `being`, 66 `skill`, 21 `affiliation`, 24 `mystery`, 224
`mysticalability` — and every document is unchanged. That diff is the check the
issue asked for, and it is what would have caught the old behaviour: on 3.2.0 the
"after" tree would have been empty.

The bump also brings HeroicLands/package-build#46, which fills an unopened
skill's `masteryLevelBase` at compile rather than leaving the client to
materialise it on import. That is visible in the `characters` pack: the Basic
Folk's 25 unopened skills now carry their opening mastery level in the document
instead of `null`. It is the only output change in this release, and it comes
from the toolchain, not from the sweep.

Only the `package:` line was removed. No other frontmatter key, note body, or
file was touched.
