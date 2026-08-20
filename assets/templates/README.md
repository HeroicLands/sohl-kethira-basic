# assets/templates

`@heroiclands/content-build` reads the shipped Foundry manifest from this
directory — it looks for `system.template.json` or `module.template.json` — to
verify the package id every compendium UUID is emitted under, and to stamp each
compiled document's `_stats.coreVersion` from `compatibility.minimum`.

This module has no manifest-rendering build step: `module.json` at the
repository root is hand-maintained and is what ships. `module.template.json` is
therefore a **symlink to it**, so there is exactly one manifest and the two
cannot drift. Do not replace it with a copy.
