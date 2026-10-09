# sohl-kethira-basic

## 0.6.0

### Minor Changes

**Before you upgrade**

- Requires Foundry 14.359 or newer and SoHL 0.8.8 or later.
- Every document the module ships has a new identity, so a link to a Kethira skill, ability, journal or character saved in a world, macro or other module must be made again once.
- Links between documents inside the module's own compendiums keep working.

**Compendiums**

- The Characters compendium is populated with the pregenerated characters, the bandits and the creatures, instead of being empty.
- Characters arrive with their intended attributes, skills and gear, and bandits and pregenerated characters import with armour carried rather than worn, so equipping is the player's call.
- The basic folk entry is an empty stub instead of placeholder text.
- Every pregenerated character and creature has a Journal Entries compendium alongside its Actor, built from the appearance and background written for it.
- Every skill, mystical ability, birthsign, faith tradition and arcane convocation has a short journal entry naming what it is and pointing to the published book for the rules.
- Faith traditions list Layperson as their first rank, and arcane convocations list Member.
- Skills, abilities, birthsigns, traditions and convocations show a one-sentence description in compendium listings and search results.

**Characters**

- Every being states its kind: the pregenerated characters and basic folk template are characters, the bandits are NPCs, and the creatures are creatures.
- Character and NPC pages list the archetypes they fit, drawn from the being's own trade and skills.
- Character pages show each character's occupation, and no longer show garbled class and society rows.
- Bandits 2 through 5 and the first bandit archer carry the same appearance and dossier details as the other bandits, and each bandit's birth date is the date they were born.

**Skills and abilities**

- The seven arcane convocations exist as affiliations, so every mystical ability belongs to one.
- Each faith carries its own illustration on both the affiliation and its ritual skill, in place of the stock badge.
- Skills, abilities, affiliations and beings show their own artwork.

**Website**

- The module's page is at `/kethira/`, and every page lists the pages that link to it and the pages it links to, grouped by type.
- The site has a search box covering every page's text, and a search can be narrowed by page type.
- The Skill, Being and Mystical Ability section pages show their contents as grouped tables or lists instead of an empty placeholder.
- A page whose note names its own hero image shows that image rather than the stock banner for its kind.
- A numbered figure, table, listing or map reads as one block with its number and caption beneath it, and images draw at a width suited to their kind.
- Icons and illustrations load from the shared Heroic Lands asset host, so a page shows the same artwork wherever it is read from.
- The header navigation is the organisation's shared menu.

**Downloads**

- Each release carries a PDF of the module's beings with their appearance, dossier and prose, bookmarked and with a linked table of contents, for reading a creature at the table without opening Foundry.
