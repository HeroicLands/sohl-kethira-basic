---
"sohl-kethira-basic": patch
---

Say "no portrait drawn yet" as `portrait: null` in the eleven beings that said `""`.

`resolveImg` tests its raw argument for falsiness — `if (!raw) return ""` — and the
actors pass applies its own default to that result
(`resolveImg(blockProperty(fm, SYSTEM, "portrait")) || defaultImg`). So `""`,
`null` and an absent key are indistinguishable today, and all three land on the
subtype's default portrait. These eleven beings were authored under that reading.

They are about to stop meaning the same thing. `img` and `portrait` are moving to
the convention the project already holds for an optional "not specified" string —
`nullable, initial: null`, so "unset" is one honest value rather than two — under
which **`null` falls back and `""` is a deliberate blank**
(HeroicLands/package-build#218). Left as they are, all eleven would quietly change
from `systems/sohl/assets/icons/game-icons/delapouite/person.svg` to `""` — no
error and no warning, because a blank portrait is a legal document field. So the
corpus moves first, while the two spellings still mean the same thing and the sweep
can be proven inert.

**Nothing here wants a deliberate blank.** All twenty-eight `being` notes carry the
key: seventeen give a path and eleven write `""`. There is no third behaviour, and
every one of the eleven names real token art in `img:` on the line directly above —
these are beings whose portrait has not been drawn, not beings meant to have none.

**This is the tree the `img` sweep missed.** `sohl-kethira-basic` writes `img: ""`
nowhere and `portrait: ""` eleven times, so a count taken on `img` alone reported it
clean. The two are separate fields on a being — token art and sheet portrait — that
happen to share a resolver.

**Verified inert on the current toolchain.** `build/packs-json` is byte-identical
before and after across all 392 compiled documents, and `npm run lint` stays green.

**Merge before** the `package-build` change that makes `""` meaningful. Reversing
the order is what these eleven beings would have been the regression of.
