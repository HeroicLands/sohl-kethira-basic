---
"sohl-kethira-basic": patch
---

Declare the seven arcane convocations, and drop `assocAffiliationCode` from
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
