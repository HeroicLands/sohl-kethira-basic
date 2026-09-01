---
"sohl-kethira-basic": patch
---

Fold `sohl.attributes` into `sohl.items`, and restyle every item entry.

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
