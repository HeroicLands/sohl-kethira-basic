---
"sohl-kethira-basic": patch
---

Remove the retired `aliases` and `name.aliases` keys from every note — 370 of them.

`@heroiclands/package-build` retires the bare `[[Alias]]` wikilink form and
refuses both fields as retired frontmatter (HeroicLands/package-build#180, PR
#190). This tree is swept ahead of that refusal so the field can be hard-refused
with no consumer left red.

**Nothing here could cite an alias.** This package contains zero wikilinks, so
the alias namespace was empty in practice; and `site: homepage` means no page is
generated from the content tree at all. The pack builder's allow-list already
dropped `aliases` before emitting, so no alias has ever reached Foundry either.

**Audited before deleting, not assumed.** `name.aliases` was the empty list in
all 370 notes without exception. The top-level `aliases` was the empty list in
224 notes — the residue of the `<type>-<shortcode>` sweep, which rewrote emptied
blocks to `aliases: []` — and exactly `[name.full]` in a further 136, an Obsidian
artifact. Ten creature notes carried real synonyms beyond `name.full`, and every
one of those is already stated in its own note's prose: Umbáth is met as a
_Bearer of the Mask_, Vlásta as an _Eater of Eyes_, each Gârgún by its colour.

**One epithet was rescued rather than dropped.** `Rock Giant` appeared only in
Hrú's frontmatter and nowhere in its prose, so it is written into that note's
Dossier in the same italic apposition its siblings use. It is the only prose
change in the branch, and the only reason any compiled document moves.

**Structural, frontmatter-only.** The first `---` block only, each key matched at
its exact expected indent so a nested `aliases:` belonging to another mapping
could not match, and only that key's own continuation lines removed. Checked
before writing against an invariant — every prose body byte-identical, and every
note's frontmatter parsing to the original minus exactly these two keys, key
order preserved.

**Nothing moves.** With the Hrú prose edit held back, `content-build package
compile` emits a byte-identical `build/packs-json` — 392 files, SHA-256
`7ec38365…` over the whole tree before and after. `content-build links` reports
the same clean result on all 371 notes. `content-build lint` reports the same
**342** findings across the same notes, every one of them the pre-existing
`sohl.subType` position mismatch between this tree's converted content format and
`@heroiclands/package-build` 9.0.0 — red on `main` already, untouched here, and
neither introduced nor fixed by this change.
