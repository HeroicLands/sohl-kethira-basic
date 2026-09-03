---
"sohl-kethira-basic": patch
---

Retire the top-level `aliases` key from every note, keeping `name.aliases`.

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
