---
"sohl-kethira-basic": patch
---

Check pull requests, instead of only checking releases.

The only check a pull request here got was **No AI attribution**. `npm run lint`
and the build did run, but inside `build:noci` in `release.yml`, and only on the
push to `main` that cuts a release — so every gate fired after the merge that
broke it, and reported as a failed release rather than a failed pull request.

A `Lint` workflow now runs on `pull_request` and on `push: [main]`. It runs five
of the six checks `npm run lint` chains, as named steps: `lint:format`,
`lint:markdown`, `lint:lang`, `lint:content-links` and `lint:labels`. All five
are clean on `main` today, so the gate is green from the day it lands.

**What it deliberately leaves out**, both measured rather than assumed:

- `lint:addresses` reports 270 findings across 364 notes (#41) — pre-existing
  content, put there by nobody in the pull request it would block. A gate that
  cannot go green trains people to merge past a red check. When #41 clears, the
  five steps collapse into a single `npm run lint`.
- `build:db` is not gated yet because `main` does not compile from a cold
  `build/`: the Actor pack is declared before the Item packs it resolves against
  (#56). The fix is open as #61, and `build:db` was verified green against it.

Both omissions are recorded on #44 rather than left to be discovered.
