---
"sohl-kethira-basic": patch
---

Cut releases from changesets instead of by hand.

Releases up to `v0.5.3` were made manually — someone ran the build, packaged the
module, and created the tag and GitHub Release. There was no `CHANGELOG.md` and
no record of what any release contained beyond its commits.

Merging a pull request now opens or updates a **Version Packages** pull request;
merging that builds, packages, tags `v<version>` and creates the Release
carrying `module.zip` and the `module.json` an installed module updates against.
The hand-cut tags are inherited rather than disturbed: an existing tag is
skipped, so the workflow simply picks up after `v0.5.3`.

This package is `private: true`, so `.changeset/config.json` declares
`privatePackages.version`. Without it changesets 3 versions nothing at all and
reports success — the failure mode this repository would otherwise have hit on
its first run.

A `patch` rather than an empty changeset, so the first automated run has a
version to cut and the machinery is proven end to end.
