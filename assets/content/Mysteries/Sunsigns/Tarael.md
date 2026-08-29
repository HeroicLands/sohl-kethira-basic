---
aliases:
  - Táræl
  - mystery-tarael
tags: []
name:
  full: Táræl
  aliases: []
description: ""
id: OM8f6ntS6Ro08wSH
slug: tarael
img: systems/sohl/assets/icons/other/astrology.svg
shortcode: tarael
type: mystery
pack: mysteries
sohl:
  kbcat: sunsign
  archetype: 0
  subType: other
  assocSkillCode: null
  assocAffiliationCode: null
  levelBase: null
  charges:
    value: null
    max: null
effects:
  - name: "Táræl — Earth skills (-10 EML)"
    type: sohleffectdata
    _id: R5K0zb2ekAReVud4
    system:
      scope: skill
      test: 'itemLogic.data.subType === "nature" || has(itemLogic.data.shortcode, ["earth", "fyvria"])'
      changes:
        - key: "mod:logic.masteryLevel"
          type: add
          value: "-10"
          priority: null
    _key: "!items.effects!OM8f6ntS6Ro08wSH.R5K0zb2ekAReVud4"
  - name: "Táræl — Metal skills (-10 EML)"
    type: sohleffectdata
    _id: JYiKTQgqOuGBew9v
    system:
      scope: skill
      test: 'has(itemLogic.data.subType, ["script", "craft"]) || has(itemLogic.data.shortcode, ["metal", "jmorvi"])'
      changes:
        - key: "mod:logic.masteryLevel"
          type: add
          value: "-10"
          priority: null
    _key: "!items.effects!OM8f6ntS6Ro08wSH.JYiKTQgqOuGBew9v"
  - name: "Táræl — Air skills (+10 EML)"
    type: sohleffectdata
    _id: irdviO9cQLETxXwh
    system:
      scope: skill
      test: 'itemLogic.data.subType === "physical" || has(itemLogic.data.shortcode, ["air", "lyahvi"])'
      changes:
        - key: "mod:logic.masteryLevel"
          type: add
          value: "10"
          priority: null
    _key: "!items.effects!OM8f6ntS6Ro08wSH.irdviO9cQLETxXwh"
  - name: "Táræl — Spirit skills (+10 EML)"
    type: sohleffectdata
    _id: flw6c7dgKEOihmaq
    system:
      scope: skill
      test: 'has(itemLogic.data.subType, ["mystical", "lore"]) || has(itemLogic.data.shortcode, ["spirit", "savorya"])'
      changes:
        - key: "mod:logic.masteryLevel"
          type: add
          value: "10"
          priority: null
    _key: "!items.effects!OM8f6ntS6Ro08wSH.flw6c7dgKEOihmaq"
folder: doIwpD92J7NodK9W
---
