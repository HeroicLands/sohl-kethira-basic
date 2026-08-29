---
"sohl-kethira-basic": patch
---

Address Tórnis al Kúbrý's four Tabûri at the shortcode the pinned `sohl`
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
