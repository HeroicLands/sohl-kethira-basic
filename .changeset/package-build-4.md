---
"sohl-kethira-basic": minor
---

Move to `@heroiclands/package-build` 4.0.0, which turns the two retirements this
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
