---
"sohl-kethira-basic": patch
---

**Declare `sohl` 0.8.3 verified**, from `0.8.2`, and follow the one address it
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
