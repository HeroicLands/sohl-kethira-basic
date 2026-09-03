---
tags: []
name:
  full: Ùlándus
  aliases: []
description: ""
id: N8Ne5Vh4PPOLUTlM
slug: ulandus
img: systems/sohl/assets/icons/other/astrology.svg
shortcode: ulandus
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
  - name: "Ùlándus — Earth skills (+15 EML)"
    type: sohleffectdata
    _id: EgDK7uYuEqS23grF
    system:
      scope: skill
      test: 'itemLogic.data.subType === "nature" || has(itemLogic.data.shortcode, ["earth", "fyvria"])'
      changes:
        - key: "mod:logic.masteryLevel"
          type: add
          value: "15"
          priority: null
    _key: "!items.effects!N8Ne5Vh4PPOLUTlM.EgDK7uYuEqS23grF"
  - name: "Ùlándus — Metal skills (+5 EML)"
    type: sohleffectdata
    _id: 1MwvnhprxGvj9Ik8
    system:
      scope: skill
      test: 'has(itemLogic.data.subType, ["script", "craft"]) || has(itemLogic.data.shortcode, ["metal", "jmorvi"])'
      changes:
        - key: "mod:logic.masteryLevel"
          type: add
          value: "5"
          priority: null
    _key: "!items.effects!N8Ne5Vh4PPOLUTlM.1MwvnhprxGvj9Ik8"
  - name: "Ùlándus — Fire skills (-5 EML)"
    type: sohleffectdata
    _id: 4E7iUNfBnKyG0hTo
    system:
      scope: skill
      test: 'has(itemLogic.data.subType, ["combattechnique", "combat"]) || has(itemLogic.data.shortcode, ["fire", "peleahn"])'
      changes:
        - key: "mod:logic.masteryLevel"
          type: add
          value: "-5"
          priority: null
    _key: "!items.effects!N8Ne5Vh4PPOLUTlM.4E7iUNfBnKyG0hTo"
  - name: "Ùlándus — Air skills (-15 EML)"
    type: sohleffectdata
    _id: gEwUDAOMBXjRiBV5
    system:
      scope: skill
      test: 'itemLogic.data.subType === "physical" || has(itemLogic.data.shortcode, ["air", "lyahvi"])'
      changes:
        - key: "mod:logic.masteryLevel"
          type: add
          value: "-15"
          priority: null
    _key: "!items.effects!N8Ne5Vh4PPOLUTlM.gEwUDAOMBXjRiBV5"
  - name: "Ùlándus — Spirit skills (-5 EML)"
    type: sohleffectdata
    _id: rHbAOhwDRkfCkbdJ
    system:
      scope: skill
      test: 'has(itemLogic.data.subType, ["mystical", "lore"]) || has(itemLogic.data.shortcode, ["spirit", "savorya"])'
      changes:
        - key: "mod:logic.masteryLevel"
          type: add
          value: "-5"
          priority: null
    _key: "!items.effects!N8Ne5Vh4PPOLUTlM.rHbAOhwDRkfCkbdJ"
  - name: "Ùlándus — Water skills (+5 EML)"
    type: sohleffectdata
    _id: DFczGwZF5xIfN3zV
    system:
      scope: skill
      test: 'has(itemLogic.data.subType, ["language", "social"]) || has(itemLogic.data.shortcode, ["water", "odivshe"])'
      changes:
        - key: "mod:logic.masteryLevel"
          type: add
          value: "5"
          priority: null
    _key: "!items.effects!N8Ne5Vh4PPOLUTlM.DFczGwZF5xIfN3zV"
folder: doIwpD92J7NodK9W
---
