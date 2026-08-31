---
"sohl-kethira-basic": patch
---

Adopt package-build 7.0.0.

`stats.systemId` was removed from this repository's configuration because
7.0.0 derives it (HeroicLands/package-build#48) — but the pin was still
`^6.1.0`, where the key is merely _optional_. Under 6 the deletion resolves
to `systemId: null` beside a real `systemVersion`: a version stamped with no
id, silently, which is the "plausible lie" the upstream change exists to
prevent.

```text
under ^6.1.0, systemId deleted: { "systemId": null, "systemVersion": "0.8.2" }
```

Bumping the pin closes the window. Verified: every pack stamps exactly the
`systemId` and `systemVersion` it stamped before the deletion.

**The homepage's two hardcoded links are converted in the same change.** 7.0.0
reports a hardcoded absolute URL to another package's landing
(HeroicLands/package-build#87), and this module's front page carried
`https://www.heroiclands.org/sohl/` twice — the very case that issue was filed
for:

```diff
-A module for the [Song of Heroic Lands](https://www.heroiclands.org/sohl/) system
+A module for the [Song of Heroic Lands](/sohl/) system
```

A package landing is addressed by its prefix through the package roster, which
names no host, is emitted verbatim, and needs no index — so it holds in
`homepage` mode, which is how this module publishes and where no content tree is
walked. The Keléstia link is untouched: that is a genuinely external address.
