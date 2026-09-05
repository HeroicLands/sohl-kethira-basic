---
"sohl-kethira-basic": patch
---

**One CI shape across the four content repositories.** `.github/workflows/lint.yml`
is the same file in each, the `lint` chain runs the same checks in the same
order, and `build:noci` runs `lint` before it builds anything.

What differs between them is only what they have to check: `lint:lang` appears
where there is a `lang/` tree and not otherwise, because a step with nothing to
check is a green tick that means nothing.

Three things change here beyond the ordering:

- **`lint:labels` is `package-build labels check`**, the shared command, rather
  than a `utils/check-labels.mjs` copied per repository — the shape a shared
  check takes just before its copies start disagreeing.
- **The workflow runs named steps** rather than one `npm run lint`. The chain is
  `run-s`, which stops at the first failure, so a single step reports whichever
  check failed first and says nothing about the rest — which is exactly how
  checks came to have a state nobody knew. Each step runs under
  `if: !cancelled()`, so a red run is a worklist rather than a wall.
- **A second job compiles the packs**, so a note that lints clean but fails to
  compile is caught on the pull request rather than on the release after it. It
  is a separate job because it is the only check that reaches the network.

All six checks pass, so this repository goes green on the whole chain.
