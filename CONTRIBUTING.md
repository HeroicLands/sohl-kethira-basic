# Contributing to the Kethira content module

This repository ships the `kethira` package: **unofficial Hârn fan material**
under [Keléstia's Fan Material Guidelines](https://www.kelestia.com/faq#n86),
licensed separately from Song of Heroic Lands and distributed as Foundry
compendium packs.

**It is a deliberate carve-out.** Nothing in the system repository or
`sohl-thalorna` may depend on it, so it can be withdrawn without affecting
either. Any change that would create such a dependency is out of scope — raise it
before filing.

## Filing an issue

**This repository tracks its own work.** File Kethira issues here, not in the
system repository — [§9 of the issue-reporting standard](.github/ISSUE_REPORTING.md#9-which-repository-does-an-issue-belong-in)
says which repository a given piece of work belongs in.

Every issue is classified on four axes — **type**, **priority**, **labels**, and
**milestone**. The standard defines each one, and the issue forms pre-fill the
body shape for the type you pick:

- [Issue Reporting standard](.github/ISSUE_REPORTING.md)
- [Open an issue](https://github.com/HeroicLands/sohl-kethira-basic/issues/new/choose)

Exploitable weaknesses go to a **private advisory**, never a public issue — see
[SECURITY.md](SECURITY.md). A **licence** breach is a public `bug`, not an
advisory.

## Making a change

`main` is protected: it takes no direct pushes. Every change lands through a pull
request.

1. **Find or file the tracking issue.** Pure repo housekeeping (`chore/*`) may skip
   this; anything else gets an issue first, so you have its number for the branch.
2. **Branch off current `main`**, named `<type>/<issue_#>_<short-kebab-summary>` —
   e.g. `feat/12_western-kingdoms`, `bug/19_dead-deity-link`. Issue-free
   housekeeping is `chore/<slug>`.

   **Git refuses a commit on `main`.** Hooks in `.githooks/` — `pre-commit`
   and `pre-merge-commit` — decline it, so the mistake surfaces before the
   commit exists rather than at push time. `npm install` activates them. To
   commit on `main` anyway, `git commit --no-verify`; to opt this checkout out
   entirely, `git config hooks.allowCommitOnMain true`.

3. **Make the change**, keeping it small and focused — one feature, one fix, or one
   documentation improvement per pull request.
4. **Verify it.** `npm run lint` must pass, and `npm run build` must compile every
   note into its pack. The **Lint** check runs most of that chain on the pull
   request itself, and its **Content pack compile** job compiles all three packs
   from a cold `build/`; it still leaves out `lint:addresses` while #41's backlog
   stands, so a green check is not a substitute for running `npm run lint`
   locally.
5. **Commit** in Conventional-Commits style, and **open a pull request** with
   `Closes #<n>` and a what/why description.

**No AI/assistant attribution** in commit messages, pull-request titles or bodies,
or issues — no `Co-Authored-By:` trailer naming an assistant, and no "Generated
with Claude Code"-style signature. A committed `commit-msg` hook (activated by
`npm install`) rejects such commits locally, and the **No Attribution** GitHub
Actions check fails any pull request carrying it.

## Prohibited content

Under no circumstances commit material that the Fan Material Guidelines do not
cover: art, maps, or illustrations owned by Keléstia Productions or any third
party; verbatim rulebook text or tables; or trade dress. Game mechanics may be
implemented, but the specific creative expression used to describe them may not be
reproduced. If you are unsure whether material is permissible, ask before
contributing it.
