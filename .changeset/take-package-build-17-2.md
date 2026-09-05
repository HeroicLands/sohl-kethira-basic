---
"sohl-kethira-basic": minor
---

**This repository moves to `@heroiclands/package-build@^17.2.0`**, the version
whose content-index records carry a `foundry` block.

Each record gains the UUID and anchor map the link manifest holds, and an item
note emits a second record for its documentation journal — a document in its own
right, with its own canonical address, so it is addressable by the same lookup
as anything else rather than nested inside the item's record.

`build/content-index/kethira.jsonl` is already emitted on every build; this is
what makes it carry Foundry addresses as well as content.

Verified: 713 records — 371 notes and 342 documentation records.
