---
---

No release: a comment only, and no configured value changes.

The `publish:` comment in `package-build.config.yaml` justified withholding the
link manifest as "not a consequence of having no site" — a clause that only
parses if this module has no site. It has one: every package now publishes a
top-level, hand-authored homepage, and this one's is
`https://www.heroiclands.org/kethira/`.

The rewritten comment separates the two decisions the old one ran together. The
licensing constraint is on published _content_ — descriptions, journal text,
artwork, compiled notes — which stays absolute, and is why the `description`
fields here are empty. A homepage discloses none of that. Withholding
`kethira.json` is a separate, withdrawability decision: the manifest is the
dependency edge that would leave other packages' links broken if this module
were withdrawn, and a homepage is not that edge.

Written to describe the policy rather than the flag, since `site:` is expected
to be respelled as a homepage-only mode (HeroicLands/package-build#55).
