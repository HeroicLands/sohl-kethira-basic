---
"sohl-kethira-basic": patch
---

Remove the `<type>-<shortcode>` self-alias from every note — 363 of them.

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
