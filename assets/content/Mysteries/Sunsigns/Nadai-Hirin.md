---
aliases:
  - Nadái-Hîrin
tags: []
name:
  full: Nadái-Hîrin
  aliases: []
description: ""
id: xAbc5b0dM5lVNQj0
slug: nadai-hirin
img: systems/sohl/assets/icons/other/astrology.svg
shortcode: nadaihirin
type: mystery
subType: birthsign
pack: mysteries
sohl:
  kbcat: sunsign
  archetype: 0
  assocSkillCode: null
  assocAffiliationCode: null
  levelBase: null
  charges:
    value: null
    max: null
effects:
  - name: "Nadái-Hîrin — Earth skills (-10 EML)"
    type: sohleffectdata
    _id: CqTNP9U9T4TbHeYp
    system:
      scope: skill
      test: 'itemLogic.data.subType === "nature" || has(itemLogic.data.shortcode, ["earth", "fyvria"])'
      changes:
        - key: "mod:logic.masteryLevel"
          type: add
          value: "-10"
          priority: null
    _key: "!items.effects!xAbc5b0dM5lVNQj0.CqTNP9U9T4TbHeYp"
  - name: "Nadái-Hîrin — Fire skills (+10 EML)"
    type: sohleffectdata
    _id: Td1sxOecudQq8Zn6
    system:
      scope: skill
      test: 'has(itemLogic.data.subType, ["combattechnique", "combat"]) || has(itemLogic.data.shortcode, ["fire", "peleahn"])'
      changes:
        - key: "mod:logic.masteryLevel"
          type: add
          value: "10"
          priority: null
    _key: "!items.effects!xAbc5b0dM5lVNQj0.Td1sxOecudQq8Zn6"
  - name: "Nadái-Hîrin — Air skills (+15 EML)"
    type: sohleffectdata
    _id: 9AjgyKwejUxmyWBf
    system:
      scope: skill
      test: 'itemLogic.data.subType === "physical" || has(itemLogic.data.shortcode, ["air", "lyahvi"])'
      changes:
        - key: "mod:logic.masteryLevel"
          type: add
          value: "15"
          priority: null
    _key: "!items.effects!xAbc5b0dM5lVNQj0.9AjgyKwejUxmyWBf"
  - name: "Nadái-Hîrin — Spirit skills (+5 EML)"
    type: sohleffectdata
    _id: CHm7OUF8BM59cLpX
    system:
      scope: skill
      test: 'has(itemLogic.data.subType, ["mystical", "lore"]) || has(itemLogic.data.shortcode, ["spirit", "savorya"])'
      changes:
        - key: "mod:logic.masteryLevel"
          type: add
          value: "5"
          priority: null
    _key: "!items.effects!xAbc5b0dM5lVNQj0.CHm7OUF8BM59cLpX"
  - name: "Nadái-Hîrin — Water skills (-5 EML)"
    type: sohleffectdata
    _id: 0Irw7mClS4KEznS8
    system:
      scope: skill
      test: 'has(itemLogic.data.subType, ["language", "social"]) || has(itemLogic.data.shortcode, ["water", "odivshe"])'
      changes:
        - key: "mod:logic.masteryLevel"
          type: add
          value: "-5"
          priority: null
    _key: "!items.effects!xAbc5b0dM5lVNQj0.0Irw7mClS4KEznS8"
folder: doIwpD92J7NodK9W
---
