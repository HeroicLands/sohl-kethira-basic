---
"sohl-kethira-basic": minor
---

Move to `@heroiclands/package-build` 5.0.0 and publish a homepage — and nothing
else (#57).

**`publish.site` is a mode now, and the boolean is refused** (package-build#55).
`site: false` no longer loads: every package publishes an authored homepage at
`/<contentPackage>/`, so there is no value meaning _no web presence_. This
repository writes `site: homepage`, which publishes that one page; `content`
would publish it plus every page the content tree compiles to, and must never be
written here. The refusal is a real one rather than a silent remap, which is how
the adoption was probed:

```text
package-build config: `publish.site` is no longer a boolean — write `site: homepage`.
```

**Homepage-only is a structural fence, not a switch left off.** That distinction
is the whole reason this repository can have a public page at all. The Fan
Material Guidelines constraint here has always been that no item description, no
journal text, no artwork and no compiled note reaches the web — and until now that
held only because `site: false` built nothing, which a later edit could flip
without anyone noticing. In `homepage` mode `buildSite` returns before the content
tree is ever walked for pages, so `sections`, `trees`, `landing` and
`backfillSections` emit nothing **even when they are declared**. Probed rather than
assumed: with all four temporarily declared against the real 364-note tree, the
build still writes exactly one file, `site/content/_index.md`.

**The page is authored, because the part that matters cannot be derived.** A
`type: homepage` note (package-build#51) compiles into no document, appears in no
pack and in no link manifest, and is addressed by the package rather than by a slug
from its name. Its whole envelope is `type` and an optional `title`.
`assets/content/homepage.md` says what the module carries, that HârnMaster Kethira
must be bought from Keléstia, which system it needs and the manifest URL to install
it from, and where the source lives. It describes no rule, spell, god or sunsign —
the `description` fields throughout this repository are empty for that reason, and
the homepage is not where they get filled in. Its trademark notice is reproduced
**verbatim** from `LICENSE`, which is why `MD034` is disabled around it: rewriting
those bare URLs as markdown links would edit a notice the Guidelines require be
reproduced as it stands.

**A `site:` block appears in a package that publishes one page**, declaring
`out: site/content`. 5.0.0 does not default it, deliberately: the directory is
wiped on every run and an unset value resolves to the repository root, so
`resolveOutputRoot` refuses it rather than resolving it. The tree is a build
artifact and is gitignored.

**Nothing compiled moves.** `build/packs-json` on 5.0.0 is byte-identical to the
4.0.0 output — 385 files, no difference — and the pre-existing `lint:addresses`
state is unchanged at its 270 findings (#41), now across 364 notes rather than 363,
with the added homepage contributing none.

`publish.manifests.publish` stays `false` and is untouched. That is the
withdrawability decision (#1385/#1446), not the content one: a link manifest is the
dependency edge other packages resolve against, and a homepage is one row in a
routing table.
