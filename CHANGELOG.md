# sohl-kethira-basic

## 0.6.0

### Minor Changes

- 03cce6a: Ship the `characters` compendium populated, with all 28 beings (#28).

  `characters` has been declared but empty for as long as the module has existed.
  A being addresses its embedded items by `(type, shortcode)` — `attribute:str`,
  `skill:init` — and almost every one of those belongs to the **`sohl`** package,
  which this repository does not hold. The compiler treats an unresolved embedded
  item as a hard error and refuses to emit _any_ pack from incomplete output, so
  listing the Actor pack failed on all 1,057 addresses and took the two working
  Item packs down with it.

  The declared `sohl` relationship now opts in with `itemCatalog: true`
  (`@heroiclands/content-build` `^1.8.2`, HeroicLands/content-build#82): the
  dependency's release is downloaded, its Item packs extracted, and the actors
  pass reads them as an additional resolution source. **1,057 errors to 0**, and
  `packFolders` names the compendium again.

  **Fetching is a separate step, by design.** A compile never reaches the network
  — a cold cache fails naming the command instead — so `build:db` now runs a new
  `build:deps` (`content-build deps fetch`) ahead of the asset and pack passes.
  The cache is version-keyed under `build/cache/foreign`, so repeat builds cost
  nothing, and the download is pinned to the declared `verified` version rather
  than following `latest`, which keeps a build reproducible.

  **One genuine content fault surfaced once the addresses could resolve**, which
  is the point of resolving them: the three Bandit Archers asked for
  `weapongear:ArwHBrd`, and the Heavy Broad Arrow is a `projectilegear`. Fixed.

- 3217ff8: **Every build now emits this package's content index.** `build:db` gains
  `build:content-index`, so `build/content-index/kethira.jsonl` is produced
  whenever the content is built rather than whenever someone remembers to run the
  command by hand.

  Nothing generated it before — in this repository or any other — so the artifact
  existed only where a person had run `content-build content-index` themselves,
  and was as fresh as the last time they did. The editor tooling reads it, and
  compiled JournalEntry links resolve through it, so "as fresh as someone
  remembered" is not a state it can be in.

  371 note(s), and the file lands under `build/`, which is gitignored.

- b4a8a8e: Move to `@heroiclands/package-build` 4.0.0, which turns the two retirements this
  tree was already swept for into enforced ones (#54).

  **Both retirements were already satisfied here, which is why the major is a
  declaration change.** `package:` becomes a hard build error (package-build#56,
  step 3 of three) — the field was deleted from all 363 notes in #48, on 3.3.0,
  exactly so this adoption would be mechanical. `draft:` is removed outright
  (package-build#69): the field is rejected and no reader honours it. No note in
  this tree declares either. Adopting the major is what stops them growing back one
  note at a time.

  **Both were probed rather than assumed.** Adding `package: kethira` to one note
  and `draft: true` to another produces a located, compiler-parseable diagnostic from
  `content-build lint` _and_ from `package compile`, which then declines the run
  rather than compiling incomplete output:

  ```text
  assets/content/Skills/Script/Ayaran.md:2:1: error: `package: kethira` is a retired frontmatter field — delete it. …
  assets/content/Skills/Script/Khruni.md:2:1: error: `draft:` is a retired frontmatter field — delete it. …
  ```

  **The compiled output does change, and not because of the major.** `build/packs-json`
  compiled on 4.0.0 is byte-identical to the same tree on **3.4.0** — the major itself
  moves nothing. Against the **3.3.0** the lockfile pinned, 252 documents differ, in
  exactly one way: the line `"assocMysteryCode": ""` is gone. That is
  package-build#35, released in 3.4.0, which stopped emitting a field
  `MysticalAbilityDataModel` never declared and Foundry discarded at construction —
  224 `mysticalability` items in `mysteries`, plus the 28 beings in `characters` that
  carry one embedded. No note here ever authored the key; every occurrence was the
  builder's own empty default. Nothing downstream can have read a value that never
  reached a document.

  The declared range was `^3.3.0`, so 3.4.0 was already admitted and only the
  lockfile pin held it back. The bump therefore crosses both releases at once, and
  this is a `minor` for that reason: emitted documents change, so consumers want a
  rebuild rather than a silent upgrade.

  **Unchanged, and confirmed on both sides.** `build:compiledb` exits 0 and compiles
  the same 363 documents (28 `being`, 66 `skill`, 21 `affiliation`, 24 `mystery`,
  224 `mysticalability`); `lint:addresses` reports the same 270 findings tracked in
  open #41; `lint:format`, `lint:markdown`, `lint:lang`, `lint:content-links` and
  `lint:labels` all pass, as does `build:module`.

  **One pre-existing fault surfaced while verifying, filed as package-build#73 and
  not addressed here.** A compile with an empty `build/packs-json` fails on the first
  pass — passes run in the order `packs:` declares them, but the actors pass reads
  the item passes' output, and `characters` is declared first. It works only on a
  warm tree, and `build/` is gitignored, so every fresh checkout is a cold one. It
  behaves identically on 3.3.0, 3.4.0 and 4.0.0, so it is neither caused nor cured by
  this bump; the before/after compiles above were both taken past it the same way, by
  compiling the two Item packs by name first. _package-build#73 has since been fixed,
  and 6.0.0 carries the fix — see #65, in this same release._

  No content note was touched.

- 36a295a: Move to `@heroiclands/package-build` 5.0.0 and publish a homepage — and nothing
  else (#57).

  **`publish.site` is a mode now, and the boolean is refused** (package-build#55).
  `site: false` no longer loads: every package publishes an authored homepage at
  `/<contentPackage>/`, so there is no value meaning _no web presence_. This
  repository writes `site: homepage`, which publishes that one page; `content`
  would publish it plus every page the content tree compiles to, and must never be
  written here. The refusal is a real one rather than a silent remap, which is how
  the adoption was probed:

  ```text
  package-build config: `publish.site` is no longer a boolean — write `site: homepage`.
  ```

  **Homepage-only is a structural fence, not a switch left off.** That distinction
  is the whole reason this repository can have a public page at all. The Fan
  Material Guidelines constraint here has always been that no item description, no
  journal text, no artwork and no compiled note reaches the web — and until now that
  held only because `site: false` built nothing, which a later edit could flip
  without anyone noticing. In `homepage` mode `buildSite` returns before the content
  tree is ever walked for pages, so `sections`, `trees`, `landing` and
  `backfillSections` emit nothing **even when they are declared**. Probed rather than
  assumed: with all four temporarily declared against the real 364-note tree, the
  build still writes exactly one file, `site/content/_index.md`.

  **The page is authored, because the part that matters cannot be derived.** A
  `type: homepage` note (package-build#51) compiles into no document, appears in no
  pack and in no link manifest, and is addressed by the package rather than by a slug
  from its name. Its whole envelope is `type` and an optional `title`.
  `assets/content/homepage.md` says what the module carries, that HârnMaster Kethira
  must be bought from Keléstia, which system it needs and the manifest URL to install
  it from, and where the source lives. It describes no rule, spell, god or sunsign —
  the `description` fields throughout this repository are empty for that reason, and
  the homepage is not where they get filled in. Its trademark notice is reproduced
  **verbatim** from `LICENSE`, which is why `MD034` is disabled around it: rewriting
  those bare URLs as markdown links would edit a notice the Guidelines require be
  reproduced as it stands.

  **A `site:` block appears in a package that publishes one page**, declaring
  `out: site/content`. 5.0.0 does not default it, deliberately: the directory is
  wiped on every run and an unset value resolves to the repository root, so
  `resolveOutputRoot` refuses it rather than resolving it. The tree is a build
  artifact and is gitignored.

  **Nothing compiled moves.** `build/packs-json` on 5.0.0 is byte-identical to the
  4.0.0 output — 385 files, no difference — and the pre-existing `lint:addresses`
  state is unchanged at its 270 findings (#41), now across 364 notes rather than 363,
  with the added homepage contributing none.

  `publish.manifests.publish` stays `false` and is untouched. That is the
  withdrawability decision (#1385/#1446), not the content one: a link manifest is the
  dependency edge other packages resolve against, and a homepage is one row in a
  routing table.

- b74cc29: Move to `@heroiclands/package-build` 6.0.0, and retire the pack-order rule it
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

- c3ca4d9: Publish the homepage at `https://www.heroiclands.org/kethira/` (#59).

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

- 5d9eecb: Delete the retired `package:` frontmatter from all 363 content notes, and move to
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

- c487dc4: **This repository moves to `@heroiclands/package-build@^17.2.0`**, the version
  whose content-index records carry a `foundry` block.

  Each record gains the UUID and anchor map the link manifest holds, and an item
  note emits a second record for its documentation journal — a document in its own
  right, with its own canonical address, so it is addressable by the same lookup
  as anything else rather than nested inside the item's record.

  `build/content-index/kethira.jsonl` is already emitted on every build; this is
  what makes it carry Foundry addresses as well as content.

  Verified: 713 records — 371 notes and 342 documentation records.

- 07bf6b9: **This repository moves to `@heroiclands/package-build@^17.0.0`**, whose major
  implements the content format the package publishes: five documented types that
  reached no schema — so a note using one was reported and then skipped entirely
  — and three documented `data` properties that reached no vocabulary, so a
  conforming note had its value dropped from the closed container. `peoples` is
  removed, having widened to `lore`.

  Nothing here changes. This tree authors none of the affected types or
  properties, and `npm run lint` passes on 15.0.0 and 17.0.0 alike.

### Patch Changes

- 5fc7281: Say "no portrait drawn yet" as `portrait: null` in the eleven beings that said `""`.

  `resolveImg` tests its raw argument for falsiness — `if (!raw) return ""` — and the
  actors pass applies its own default to that result
  (`resolveImg(blockProperty(fm, SYSTEM, "portrait")) || defaultImg`). So `""`,
  `null` and an absent key are indistinguishable today, and all three land on the
  subtype's default portrait. These eleven beings were authored under that reading.

  They are about to stop meaning the same thing. `img` and `portrait` are moving to
  the convention the project already holds for an optional "not specified" string —
  `nullable, initial: null`, so "unset" is one honest value rather than two — under
  which **`null` falls back and `""` is a deliberate blank**
  (HeroicLands/package-build#218). Left as they are, all eleven would quietly change
  from `systems/sohl/assets/icons/game-icons/delapouite/person.svg` to `""` — no
  error and no warning, because a blank portrait is a legal document field. So the
  corpus moves first, while the two spellings still mean the same thing and the sweep
  can be proven inert.

  **Nothing here wants a deliberate blank.** All twenty-eight `being` notes carry the
  key: seventeen give a path and eleven write `""`. There is no third behaviour, and
  every one of the eleven names real token art in `img:` on the line directly above —
  these are beings whose portrait has not been drawn, not beings meant to have none.

  **This is the tree the `img` sweep missed.** `sohl-kethira-basic` writes `img: ""`
  nowhere and `portrait: ""` eleven times, so a count taken on `img` alone reported it
  clean. The two are separate fields on a being — token art and sheet portrait — that
  happen to share a resolver.

  **Verified inert on the current toolchain.** `build/packs-json` is byte-identical
  before and after across all 392 compiled documents, and `npm run lint` stays green.

  **Merge before** the `package-build` change that makes `""` meaningful. Reversing
  the order is what these eleven beings would have been the regression of.

- 8939d24: Declare the `characters` Actor pack after both Item packs, so `build:compiledb`
  succeeds on a cold tree (#56).

  Passes run in the order `packs:` declares them, and the actors pass resolves a
  being's embedded items against the **output** of the item passes — the JSON in
  `build/packs-json`, not the content tree. With the Actor pack declared first,
  the very first pass aborted the build:

  ```
  Items source directory …/build/packs-json/characteristics does not exist —
  actors must be generated after items
  ```

  `Song-of-Heroic-Lands-FoundryVTT` states the rule in its own configuration:
  _"Order is load-bearing: the actors pass resolves each being's embedded items
  against the items pass's output, so items compile first."_

  **It cost nothing on a warm tree and the whole build on a cold one.** A
  populated `build/packs-json` left by a previous run satisfies the lookup, so the
  fault was invisible locally and would have fired on the first fresh checkout —
  `build/` is gitignored, so every fresh checkout is cold, including a release
  job's. It had not fired yet only because `lint` exits 1 on the pre-existing
  findings in #41 before the compile is reached, and because no release has been
  cut since the Actor pack was declared in #28. Neither is a safeguard, and both
  stop being true.

  **The compiled documents are unchanged** — `build/packs-json` is byte-identical
  before and after (`diff -r` clean): 363 documents, 28 `being`, 66 `skill`, 21
  `affiliation`, 24 `mystery`, 224 `mysticalability`, plus the same 22 folder
  documents. Order decides when a pass runs, not what it emits. The one visible
  difference is the generated manifest's `packs` array, which is derived from this
  list and now reads `characteristics, mysteries, characters`; pack resolution is
  by name, and the compendium sidebar grouping comes from the separately authored
  `packFolders`, which is untouched.

  **Superseded in the same release, and the rule above no longer holds.** Adopting
  `@heroiclands/package-build` 6.0.0 (#65) makes the build derive the compile order
  from what each pass reads, so `packs:` order stops deciding it. The declaration
  here is still the one you want — it is the manifest's `packs` array, read by
  people — but it is no longer load-bearing, and the error quoted above is
  unreachable from a whole-package build.

- 290eb28: Adopt package-build 11.0.0, taking the 10.x content format and the 11.x address rules in one jump.

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

- 465a567: **Take `@heroiclands/package-build` 13.0.0**, crossing three majors from the
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

- 1015b4f: **Take `@heroiclands/package-build` 14.0.0 and `@heroiclands/hugo-theme` 0.4.0**,
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

- 26b6a77: **Take `@heroiclands/package-build` 15.0.0**, from `^14.0.0`. The compiled packs
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

- 1a82f5b: Adopt package-build 7.0.0.

  `stats.systemId` was removed from this repository's configuration because
  7.0.0 derives it (HeroicLands/package-build#48) — but the pin was still
  `^6.1.0`, where the key is merely _optional_. Under 6 the deletion resolves
  to `systemId: null` beside a real `systemVersion`: a version stamped with no
  id, silently, which is the "plausible lie" the upstream change exists to
  prevent.

  ```text
  under ^6.1.0, systemId deleted: { "systemId": null, "systemVersion": "0.8.2" }
  ```

  Bumping the pin closes the window. Verified: every pack stamps exactly the
  `systemId` and `systemVersion` it stamped before the deletion.

  **The homepage's two hardcoded links are converted in the same change.** 7.0.0
  reports a hardcoded absolute URL to another package's landing
  (HeroicLands/package-build#87), and this module's front page carried
  `https://www.heroiclands.org/sohl/` twice — the very case that issue was filed
  for:

  ```diff
  -A module for the [Song of Heroic Lands](https://www.heroiclands.org/sohl/) system
  +A module for the [Song of Heroic Lands](/sohl/) system
  ```

  A package landing is addressed by its prefix through the package roster, which
  names no host, is emitted verbatim, and needs no index — so it holds in
  `homepage` mode, which is how this module publishes and where no content tree is
  walked. The Keléstia link is untouched: that is a genuinely external address.

- 428aee5: Declare the seven arcane convocations, and drop `assocAffiliationCode` from
  every skill note.

  `npm run lint` failed with **270 errors** in two groups, and neither was
  reaching a compiled document.

  **204 errors: the arcane side had no affiliations.** The 224 mystical abilities
  name seven convocations in `sohl.assocAffiliationCode`, and no note declared any
  of them. The divine side was already whole — 21 deity affiliation notes, each
  with a matching Ritual skill — so the fix is the same shape on the arcane side:
  `lyahvi`, `peleahn`, `jmorvi`, `fyvria`, `odivshe`, `savorya` and `neutral` are
  now affiliation notes with `subType: arcane`, beside the deities in the
  Affiliations folder. Each takes its name and icon from the Arcane skill of the
  same shortcode, so the two halves of a convocation look like one thing.

  `neutral` is authored as a note rather than treated as a sentinel. It is the odd
  one out — an ability belonging to no convocation rather than a body a character
  joins — but this repository already models it as a peer of the six on both
  sides: there is a `Neutral` Arcane skill, and `mystery-folders.yaml` gives
  Neutral its own spell folder alongside Lyáhvi and Jmôrvi. A sentinel would have
  made it the one arcane category that is not a note, for a distinction nothing
  else here draws.

  **66 errors: `assocAffiliationCode` is not a skill property.** Every skill note
  set it, and `SkillDataModel` does not define it, so the value was discarded at
  compile with nothing said. The field is dropped from all 66.

  **Nothing is lost, which was worth checking rather than assuming.** The 45
  `null` entries asserted nothing. The other 21 looked like real data — which
  deity's ritual skill this is — but in all 21 the value is exactly the note's own
  `shortcode`, with no exceptions: `Skills/Ritual/Peoni.md` has `shortcode: peoni`
  and said `assocAffiliationCode: peoni`. Since a skill and an affiliation are
  addressed as `(type, shortcode)`, the field restated the address it already had.
  Dropping it removes a copy, not a fact.

  That also settles the design question the issue left open. Adding the field to
  `SkillDataModel` was the alternative, and it would have been a SoHL change made
  to store a value derivable from the key — so it is not wanted here or there.

  Verified: `npm run lint` is clean (370 addresses across 371 notes), and
  `build:compiledb` compiles all three packs, the mysteries pack now carrying 28
  affiliations rather than 21. The 66-error check was confirmed still live by
  reintroducing the field on one note and watching the error return, so the clean
  run is a fix rather than a check that stopped looking.

  Closes #41

- 1723ca8: Stop authoring `stats.systemId`; it is derived.

  package-build 7.0.0 refuses `stats.systemId` and `stats.systemVersion`:
  authoring a derived value is an error rather than an override, because a
  transcribed copy is free to drift from what it copied — which is how
  `stats.systemVersion` came to sit at `0.6.0` for four releases
  (HeroicLands/package-build#48).

  Here a module with one declared system relationship derives `sohl` from it, so deleting the line changes nothing:

  ```diff
   stats:
  -    systemId: sohl
       lastModifiedBy: …
  ```

  **Verified.** Every pack in this package stamps exactly the `systemId` and
  `systemVersion` it stamped before — resolved with the configuration loader
  and compared pack by pack.

- 49fc5b7: Retire the top-level `aliases` key from every note, keeping `name.aliases`.

  `@heroiclands/package-build` retires the bare `[[Alias]]` wikilink form and
  refuses the top-level `aliases` field (HeroicLands/package-build#180, PR #190).
  This tree is swept ahead of that refusal. **`name.aliases` is deliberately kept**
  — it is reserved for a future use, nothing reads it today, and no validation or
  consumer of it is added here.

  **Nothing here could cite an alias.** This package contains zero wikilinks, so
  the alias namespace was empty in practice; `site: homepage` means no page is
  generated from the content tree; and the pack builder's allow-list already
  dropped `aliases` before emitting, so no alias ever reached Hugo or Foundry.

  **What the values were, audited before deleting rather than assumed.** Of 371
  notes, 370 declared both keys and `homepage.md` declared neither.
  `name.aliases` was the empty list in all 370 without exception. The top-level
  `aliases` was the empty list in 224 — residue of the `<type>-<shortcode>` sweep,
  which rewrote emptied blocks to `[]` because a bare `aliases:` parses as null —
  and exactly `[name.full]` in a further 136, an Obsidian artifact.

  **Ten creature notes carried something more, and it was merged rather than
  dropped.** A top-level value is moved into `name.aliases` when it is a genuinely
  distinct name, and dropped when it is only a near-variant of `name.full` —
  differing by diacritics, case, quote form, punctuation, whitespace or word order
  alone. Fourteen values across those ten notes qualified as distinct and moved:
  `Nightcrawler`, `Rock Giant`, `Nolahrin`, `Dank Stalker`, `Umbathri`,
  `Bearer of the Mask`, `Gargoyle`, `Swift One`, `Eater of Eyes`, and the five
  Gârgún colour names. Ten notes therefore end with a non-empty `name.aliases`;
  the other 360 keep theirs as `[]`.

  No de-accented respelling was found anywhere in this tree, so the near-variant
  rule dropped nothing beyond the exact `name.full` duplicates it subsumes. The
  closest calls are `Nolahrin` beside `Nólah` and `Umbathri` beside `Umbáth`;
  both are collective forms rather than respellings, so both are kept.

  **Structural, frontmatter-only.** The first `---` block only, each key matched at
  its exact expected indent so a nested `aliases:` belonging to another mapping
  could not match, and only that key's own continuation lines consumed.
  `name.aliases` is rewritten in place, never removed and re-added. Checked before
  writing against an invariant: every prose body byte-identical, and every note's
  frontmatter parsing to the original minus the top-level key with `name.aliases`
  carrying exactly the merged values, key order preserved throughout.

  **Nothing moves.** `content-build package compile` emits a byte-identical
  `build/packs-json` — 392 files, SHA-256 `7ec38365…` over the whole tree before
  and after. `content-build links` reports the same clean result on all 371 notes.
  `content-build lint` reports the same **342** findings across the same notes,
  every one the pre-existing `sohl.subType` position mismatch between this tree's
  converted content format and `@heroiclands/package-build` 9.0.0 — red on `main`
  already, and neither introduced nor fixed here.

  **This repository pins `@heroiclands/package-build ^9.0.0`**, so it will not
  actually see the top-level `aliases` refusal until it takes the 11.x major. The
  sweep lands early so that upgrade is unblocked when it comes.

- 6b737ef: Remove the `<type>-<shortcode>` self-alias from every note — 363 of them.

  Each note carried its own canonical address as an alias, so
  `affiliation-agrik` appeared both as the note's address and in its `aliases:`
  list. They were added so the hyphen form resolved inside Obsidian, and they have
  never been what makes the address work in either build.

  **Dead weight, verified rather than assumed.** Both resolvers reach
  `[[affiliation-agrik]]` through `readQualifier` → `type/shortcode`, not through
  the alias table; resolving the same link with the alias present and absent gives
  the same answer in each.

  **Removed by exact equality, never by pattern.** The test is
  `alias.toLowerCase() === `${type}-${shortcode}`.toLowerCase()`. A rule phrased as
  "drop any alias containing a hyphen" would have destroyed real names; all 153
  surviving aliases are untouched.

  **A minimal diff, textually.** The sweep edits the frontmatter _text_ rather than
  reparsing and reserialising it, which would have rewritten unrelated keys. The
  diff is 587 deletions and 224 insertions: 363 alias lines, plus 224 `aliases:`
  keys rewritten to `aliases: []` where the removal emptied the block, because a
  bare `aliases:` parses as null rather than as an empty list. Every file was
  checked before writing against an invariant — body byte-identical, frontmatter
  identical apart from the removed alias.

  **Nothing moves.** `content-build links` is clean before and after, reporting the
  same 364 notes. `content-build lint` reports the same **270** findings before and
  after — all of them the pre-existing `assocAffiliationCode` defect
  (HeroicLands/package-build#60), untouched by this change and neither introduced
  nor fixed here.

  **Why now.** The four-segment address grammar
  (HeroicLands/package-build#59) makes the pipe the thing that distinguishes an
  address lookup from an alias lookup — `[[agrik]]` is an alias, `[[agrik|]]` is
  the address. A note listing its own address among its aliases makes those two
  spellings collide on the same note, which is exactly the ambiguity the single-hit
  rule has to be able to report.

- af5a805: Gate the build on the pull request, so a note that lints clean but fails to
  compile no longer reaches `main`.

  The `Lint` workflow ran five of the six checks `npm run lint` chains and stopped
  there, so the compile stayed where #44 found it: inside `build:noci` in
  `release.yml`, on the push to `main` that cuts a release. A note that passed
  every lint and broke the actors pass was reported as a failed release, after the
  merge that broke it. This was #44's second acceptance criterion, deferred rather
  than dropped.

  It was deferred because `main` did not compile from a cold `build/` — the Actor
  pack was declared before the Item packs it resolves against (#56). #61 fixed
  that, so the gate is green from the day it lands.

  **A second job, not a sixth step.** `build:db` is the only check here that
  reaches the network — `build:deps` downloads the pinned `sohl` release the
  actors pass resolves a being's embedded items against — so it carries a failure
  surface the lint steps do not, and folding it in would let a third party's
  outage read as a content failure. Keeping the two apart also means a compile
  failure and a lint failure are both visible in one run, instead of whichever
  runs first hiding the other.

  **Every run is cold, which is the case that matters.** `build/` is gitignored
  and holds the dependency catalogue as well (`build/cache/foreign`), so a runner
  starts with nothing. That is exactly the case #56 failed: it was green on every
  local tree that had built once, and red only on a fresh checkout. A cold
  `npm run build:db` on this branch exits 0, compiling 66 items, 269 items and 28
  actors.

  **Deliberately still out.** `lint:addresses` stays excluded while #41's 270
  findings stand — unchanged, and for the reason #44 recorded. `build:module`, the
  manifest pass, is not gated either: it writes the manifest from configuration
  and the staged tree, so it answers for an edit to `package-build.config.yaml`
  rather than for anything a content note can do. `@heroiclands/package-build`
  6.0.0 moves a real check into it (`packFolders`), which is the point to
  reconsider.

  **The toolchain is left on `^5.0.0` on purpose.** 6.0.0 is a major, and adopting
  it inside the pull request that adds the gate would make the adoption the first
  thing the gate ever ran — a red result would not say whether the gate or the new
  major was wrong. Landing the gate first means the bump arrives as its own pull
  request with a cold compile already checking it, which is the ordering that
  gives the more informative answer. Nothing here needs 6.0.0: its ordering fix
  (package-build#73) makes the declared pack order stop mattering, but #61 already
  made it correct.

  The workflow comment's "The build is not gated here yet" section is replaced by
  one describing what now runs, and `CONTRIBUTING.md` no longer tells contributors
  the check does not build.

- fcd1a43: Check pull requests, instead of only checking releases.

  The only check a pull request here got was **No AI attribution**. `npm run lint`
  and the build did run, but inside `build:noci` in `release.yml`, and only on the
  push to `main` that cuts a release — so every gate fired after the merge that
  broke it, and reported as a failed release rather than a failed pull request.

  A `Lint` workflow now runs on `pull_request` and on `push: [main]`. It runs five
  of the six checks `npm run lint` chains, as named steps: `lint:format`,
  `lint:markdown`, `lint:lang`, `lint:content-links` and `lint:labels`. All five
  are clean on `main` today, so the gate is green from the day it lands.

  **What it deliberately leaves out**, both measured rather than assumed:

  - `lint:addresses` reports 270 findings across 364 notes (#41) — pre-existing
    content, put there by nobody in the pull request it would block. A gate that
    cannot go green trains people to merge past a red check. When #41 clears, the
    five steps collapse into a single `npm run lint`.
  - `build:db` is not gated yet because `main` does not compile from a cold
    `build/`: the Actor pack is declared before the Item packs it resolves against
    (#56). The fix is open as #61, and `build:db` was verified green against it.

  Both omissions are recorded on #44 rather than left to be discovered.

- bf731a2: **Send `/kethira/` to the homepage.** Since this module took
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

- 9d5f9f4: Fold `sohl.attributes` into `sohl.items`, and restyle every item entry.

  Attributes become ordinary entries at the top of `sohl.items`:

  ```yaml
  items:
    - { shortcode: str, type: attribute, system: { scoreBase: 16 } }
  ```

  Output-preserving by construction: `sohl/actors.mjs` builds each attribute as
  `{system: {scoreBase: Number(value) || 0}}` with type `attribute` and the map key
  as shortcode, and pushes them _before_ the `sohl.items` entries — so entries at
  the head of the array emit the same documents in the same order.

  Every entry in `sohl.items` is now flow style when it fits in 100 columns and
  block style otherwise, which is what lets the compact map go without losing
  reviewability: an attribute is still one line.

  Also adopts `@heroiclands/package-build` 9.0.0, whose shared `printWidth` is 100,
  and sweeps the tree Prettier-clean.

  **Verification.** Every file parsed before and after, with the whole frontmatter
  compared against the intended result and any other difference refusing the write
  — zero refusals. `content-build links` passes across all 364 notes.
  `content-build lint` reports this repository's existing 270 findings, unchanged
  in kind and count — they are the `assocAffiliationCode` and `subType` drift this
  tree already carried, and none of them is touched here.

  **Bump**

  _Patch._ Authoring form only. The compiled documents are identical.

- 399da0d: Cut releases from changesets instead of by hand.

  Releases up to `v0.5.3` were made manually — someone ran the build, packaged the
  module, and created the tag and GitHub Release. There was no `CHANGELOG.md` and
  no record of what any release contained beyond its commits.

  Merging a pull request now opens or updates a **Version Packages** pull request;
  merging that builds, packages, tags `v<version>` and creates the Release
  carrying `module.zip` and the `module.json` an installed module updates against.
  The hand-cut tags are inherited rather than disturbed: an existing tag is
  skipped, so the workflow simply picks up after `v0.5.3`.

  This package is `private: true`, so `.changeset/config.json` declares
  `privatePackages.version`. Without it changesets 3 versions nothing at all and
  reports success — the failure mode this repository would otherwise have hit on
  its first run.

  A `patch` rather than an empty changeset, so the first automated run has a
  version to cut and the machinery is proven end to end.

- 75586ae: Run the shared prose checks, and format the tree for the first time.

  `lint` gains `lint:format` and `lint:markdown`, both calls into
  `@heroiclands/content-build` (now `^1.7.0`) rather than tooling configured here.
  Nothing in this repository has ever run Prettier or markdownlint, so 149 of its
  394 files were unformatted and its markdown structure was unchecked.

  Formatting is now clean. What the new checks still report is pre-existing
  content: 11 markdown findings (skipped heading levels) and 270 frontmatter
  findings — the latter overlapping #30, and including 66 skills carrying
  `assocAffiliationCode`, a field `SkillDataModel` does not define.

- f237133: Address Tórnis al Kúbrý's four Tabûri at the shortcode the pinned `sohl`
  catalogue actually publishes, so `build:compiledb` exits 0 again (#52).

  The four entries asked for `weapongear:Taburi`. The item exists — it is
  `Tabûri`, `sohl`'s southern thrusting dagger — but the address is one release
  ahead of this module. `sohl` renamed that item's shortcode from `Tabri` to
  `Taburi` in HeroicLands/Song-of-Heroic-Lands-FoundryVTT#1238, **two days after
  the `v0.8.2` tag**, and 0.8.2 is still the newest `sohl` release. The catalogue
  `content-build deps fetch` downloads — pinned to the declared `verified: 0.8.2`,
  by design, so a build is reproducible — therefore ships the item under `Tabri`,
  and the resolver correctly found nothing under `Taburi`.

  Only the four **lookup addresses** change. Each entry's `system.shortcode`
  override stays `Taburi1`…`Taburi4`, so the compiled actor is byte-identical to
  what the issue asks for: four distinct Tabûri, three strike modes each.
  `sohl-thalorna`'s copy of the same character already addresses `Tabri`, so the
  two now agree.

  **This is version skew, not a bad item and not a bad derivation.** The pack
  build never derives a shortcode — it copies the authored `shortcode:` verbatim —
  and every one of the 1,169 compiled catalogue items that joins to a source note
  carries exactly the shortcode its note authors. **Bumping `verified` past a
  `sohl` release that carries the rename means changing these four addresses back
  to `Taburi`**; that is the one thing to remember when the pin next moves.

- 84ab857: **Declare `sohl` 0.8.3 verified**, from `0.8.2`, and follow the one address it
  renames. Only `relationships.systems[].compatibility.verified` moves; the
  top-level `compatibility` still names the Foundry core build (`14.356`) and is a
  different field entirely.

  **`affiliation.subType` now survives the load** (#30). All 28 affiliation notes
  author it — `faithtradition` ×21, `arcanetradition` ×7 — and `v0.8.2` did not
  define the field at all, so Foundry discarded it silently on every one of them.
  `0.8.3` declares it on `AffiliationDataModel` as `required: true` keyed to
  `AffiliationSubTypeChoices`, and the shipped `lang/en.json` carries all 13
  `SOHL.Affiliation.SubType.*` and `FIELDS.subType.*` keys where `0.8.2` carried
  none. This is a load-time fix, so no compiled document changes shape: the
  evidence is a set comparison, not a diff.

  **`weapongear:Tabri` is now `weapongear:Taburi`.** sohl renamed that shortcode
  in HeroicLands/Song-of-Heroic-Lands-FoundryVTT#1239, after `v0.8.2` was cut, so
  the rename arrives with this bump. Tórnis al Kúbrý cites the weapon four times
  and the actors pass failed on all four — the item's `_id` and name are unchanged
  upstream, only its shortcode moved. The four citations follow it; the instance
  shortcodes beneath them (`Taburi1`–`Taburi4`) were already correct and are
  untouched.

  **Evidence.** A cold `npm run build:db` exits 0 before and after, compiling the
  same 66 characteristics, 276 mysteries and 28 characters. Set-subtracting each
  compiled affiliation's `system` keys against `0.8.3`'s shipped `schema.json`
  (`own` ∪ `inherited`) leaves the empty set on all 28, with `subType` declared in
  `own`; the same comparison at `0.8.2` has nothing to run against, as that
  release ships no schema descriptor. Over `build/packs-json`, 364 of 392
  documents differ **only** in `_stats.systemVersion`; the 28 actors differ
  further because they embed the sohl item catalog, which changed upstream —
  `docHtml` is now a `@UUID[…]` journal reference rather than inline prose,
  `docUrl` is `null`, and `archetype` is `0` rather than `null`. Embedded item
  counts are unchanged actor for actor, Tórnis keeping all 70 including the four
  Tabûri.

  **One side effect worth naming.** `0.8.3` is the first sohl release to ship
  `schema.json`, so `lint:addresses` now runs package-build's emitted-vs-declared
  schema check against a real descriptor for the first time here. It reports 26
  `declared, not emitted` warnings (`affliction` ×12, `trauma` ×11, `skill` ×2,
  `armorgear` ×1) and **zero** errors. Those warnings are the benign direction —
  the field takes its `initial` — and none touches `affiliation`.
