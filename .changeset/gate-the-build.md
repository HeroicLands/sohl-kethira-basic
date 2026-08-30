---
"sohl-kethira-basic": patch
---

Gate the build on the pull request, so a note that lints clean but fails to
compile no longer reaches `main`.

The `Lint` workflow ran five of the six checks `npm run lint` chains and stopped
there, so the compile stayed where #44 found it: inside `build:noci` in
`release.yml`, on the push to `main` that cuts a release. A note that passed
every lint and broke the actors pass was reported as a failed release, after the
merge that broke it. This was #44's second acceptance criterion, deferred rather
than dropped.

It was deferred because `main` did not compile from a cold `build/` — the Actor
pack was declared before the Item packs it resolves against (#56). #61 fixed
that, so the gate is green from the day it lands.

**A second job, not a sixth step.** `build:db` is the only check here that
reaches the network — `build:deps` downloads the pinned `sohl` release the
actors pass resolves a being's embedded items against — so it carries a failure
surface the lint steps do not, and folding it in would let a third party's
outage read as a content failure. Keeping the two apart also means a compile
failure and a lint failure are both visible in one run, instead of whichever
runs first hiding the other.

**Every run is cold, which is the case that matters.** `build/` is gitignored
and holds the dependency catalogue as well (`build/cache/foreign`), so a runner
starts with nothing. That is exactly the case #56 failed: it was green on every
local tree that had built once, and red only on a fresh checkout. A cold
`npm run build:db` on this branch exits 0, compiling 66 items, 269 items and 28
actors.

**Deliberately still out.** `lint:addresses` stays excluded while #41's 270
findings stand — unchanged, and for the reason #44 recorded. `build:module`, the
manifest pass, is not gated either: it writes the manifest from configuration
and the staged tree, so it answers for an edit to `package-build.config.yaml`
rather than for anything a content note can do. `@heroiclands/package-build`
6.0.0 moves a real check into it (`packFolders`), which is the point to
reconsider.

**The toolchain is left on `^5.0.0` on purpose.** 6.0.0 is a major, and adopting
it inside the pull request that adds the gate would make the adoption the first
thing the gate ever ran — a red result would not say whether the gate or the new
major was wrong. Landing the gate first means the bump arrives as its own pull
request with a cold compile already checking it, which is the ordering that
gives the more informative answer. Nothing here needs 6.0.0: its ordering fix
(package-build#73) makes the declared pack order stop mattering, but #61 already
made it correct.

The workflow comment's "The build is not gated here yet" section is replaced by
one describing what now runs, and `CONTRIBUTING.md` no longer tells contributors
the check does not build.
