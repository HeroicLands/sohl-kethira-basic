---
"sohl-kethira-basic": minor
---

**Every build now emits this package's content index.** `build:db` gains
`build:content-index`, so `build/content-index/kethira.jsonl` is produced
whenever the content is built rather than whenever someone remembers to run the
command by hand.

Nothing generated it before — in this repository or any other — so the artifact
existed only where a person had run `content-build content-index` themselves,
and was as fresh as the last time they did. The editor tooling reads it, and
compiled JournalEntry links resolve through it, so "as fresh as someone
remembered" is not a state it can be in.

371 note(s), and the file lands under `build/`, which is gitignored.
