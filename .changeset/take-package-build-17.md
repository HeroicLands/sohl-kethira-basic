---
"sohl-kethira-basic": minor
---

**This repository moves to `@heroiclands/package-build@^17.0.0`**, whose major
implements the content format the package publishes: five documented types that
reached no schema — so a note using one was reported and then skipped entirely
— and three documented `data` properties that reached no vocabulary, so a
conforming note had its value dropped from the closed container. `peoples` is
removed, having widened to `lore`.

Nothing here changes. This tree authors none of the affected types or
properties, and `npm run lint` passes on 15.0.0 and 17.0.0 alike.
