---
"sohl-kethira-basic": patch
---

Run the shared prose checks, and format the tree for the first time.

`lint` gains `lint:format` and `lint:markdown`, both calls into
`@heroiclands/content-build` (now `^1.7.0`) rather than tooling configured here.
Nothing in this repository has ever run Prettier or markdownlint, so 149 of its
394 files were unformatted and its markdown structure was unchecked.

Formatting is now clean. What the new checks still report is pre-existing
content: 11 markdown findings (skipped heading levels) and 270 frontmatter
findings — the latter overlapping #30, and including 66 skills carrying
`assocAffiliationCode`, a field `SkillDataModel` does not define.
