---
"sohl-kethira-basic": minor
---

Move to `@heroiclands/package-build` 6.0.0, and retire the pack-order rule it
makes untrue (#65).

The range was `^5.0.0` and a caret does not cross a major, so Dependabot would
never have offered this. **The lockfile is bumped with it**, which is the half
that matters on a runner: CI installs with `npm ci`, which reads
`package-lock.json` and ignores the declared range, so a range-only bump would
have changed the manifest and nothing else.

**Nothing this repository compiles changed — checked at the byte, not at the
count.** Cold `rm -rf build && npm run build:db` exits 0 on both versions and
reports the same documents: 66 `skill`; 269 items (224 `mysticalability`, 24
`mystery`, 21 `affiliation`); 28 actors. Counts agreeing is weak evidence, so
the output was compared directly: `build/packs-json` is `diff -r` clean, the
staged asset tree is `diff -r` clean, and all three compiled LevelDB packs were
dumped to canonical JSON (keys sorted, entries sorted by id — 72 + 401 + 1,289
documents) and hash to the same `6a321d3c…` on both. The generated `module.json`
is byte-identical too. Every lint check reports what it reported before,
including the 270 pre-existing findings tracked in open #41.

**Order is no longer load-bearing, and `package-build.config.yaml` said it was.**
That comment (from #56) told the next reader that `characters` is declared last
because the actors pass reads the item passes' output, and quoted the error a
cold build gave when it was not. 6.0.0 derives the compile order from what each
pass reads (package-build#73), so the declaration stopped deciding it. The
underlying dependency is still real — the comment now says so, and says that the
build works it out rather than this file. Confirmed both ways rather than
assumed: with `characters` moved to the top of `packs:`, a cold `build:db` exits
0 on 6.0.0, compiling the Item packs first anyway, and exits 1 on 5.0.0 with
_"Items source directory … does not exist — actors must be generated after
items"_. Same tree, same configuration, only the toolchain differs. The list is
left as it is — it is also the manifest's `packs` array, and
`characteristics, mysteries, characters` reads well — but it is ordered for a
reader now, not for the compiler.

The same claim was stated in two pending changesets, which now carry a line
saying it was superseded. What is _not_ changed is the rule for a run restricted
to one pack: `content-build package compile characters` still cannot conjure the
item output it reads. It now refuses by naming what is missing and how to fix
it, rather than with the bare directory error.

**The major's other changes, measured here rather than read from upstream.**

| Change                                    | Effect on this repository                                                                                                                                                                                                                                               |
| ----------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `packFolders` checked (package-build#81)  | Passes: `build:module` exits 0 with no finding, 17 keys and 3 packs. Proved live rather than merely silent — see below.                                                                                                                                                 |
| Homepage links audited (package-build#54) | Runs here, since `publish.site: homepage` is the mode it was written for. `lint:content-links` gained the clause _"every homepage address resolvable"_ and our homepage passes it; `auditHomepageLinks` does not exist in 5.0.0 at all.                                 |
| `isEquipped` dropped (package-build#68)   | **No effect.** This repository authors no gear note. All 152 gear items in the output are resolved copies from the pinned `sohl@0.8.2` catalogue, which was compiled by an older toolchain, so the field arrives with them and the output is byte-identical either way. |
| TypeDoc symbol map (package-build#75)     | **No effect.** There is no TypeDoc here and no TypeScript to document.                                                                                                                                                                                                  |

**Silence is not evidence that a check ran, so `packFolders` was made to fire.**
Adding a fourth pack name to the folder produced
`package-build.config.yaml:155:21: error: packFolders: folder "HarnMaster Kethira Basic" names pack "bestiary", which this package does not ship`
and exit 1, with nothing written. Removing `mysteries` from the folder produced
`package-build.config.yaml:148:13: warning: packFolders: pack "mysteries" is named by no folder`
and exit 0 — the two severities the check distinguishes, both located to the
line of YAML. The configuration was then restored and re-hashed to confirm it
came back byte-identical.

That check is worth having here for a reason particular to this repository:
`packs:` and `packageBuild.manifest.packFolders` are two hand-maintained lists,
in one file, that have to name the same three packs. Nothing but this compares
them.

No content note was touched, and no gate was added — see the pull request for
why `build:module` is not wired into CI in this change.
