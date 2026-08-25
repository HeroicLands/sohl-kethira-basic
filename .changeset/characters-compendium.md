---
"sohl-kethira-basic": minor
---

Ship the `characters` compendium populated, with all 28 beings (#28).

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
