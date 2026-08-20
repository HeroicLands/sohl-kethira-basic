# Security Policy

## Reporting a vulnerability

Report suspected vulnerabilities privately via the "Report a vulnerability"
button on this repo's Security tab (Security → Advisories). Please do not
open a public issue for security problems — see
[§7 of the issue-reporting standard](.github/ISSUE_REPORTING.md#7-security-issues--special-handling).

I'll acknowledge the report, develop a fix in a private advisory, and credit
you on publication if you'd like.

## Supported versions

The latest released version receives security fixes; older versions do not.

## Scope

This repository ships a Foundry VTT content module — compendium packs of
journals, items, actors, and scenes. There is no application code, so the
relevant concerns are content-borne: text rendered into other users' clients
(item names and descriptions, journal bodies) and any macro shipped in a pack.

A weakness in the SoHL system that this content merely exercises belongs in the
[system repository's](https://github.com/HeroicLands/Song-of-Heroic-Lands-FoundryVTT/security/advisories/new)
advisories, not here.

**Licence problems are not security problems.** Third-party art or text shipped
in a pack is a public `bug`, filed normally — not an advisory.
