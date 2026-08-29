---
"sohl-kethira-basic": patch
---

Declare the `characters` Actor pack after both Item packs, so `build:compiledb`
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
