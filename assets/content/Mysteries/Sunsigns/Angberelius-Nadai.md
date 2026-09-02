---
aliases:
  - Angberélius-Nadái
tags: []
name:
  full: Angberélius-Nadái
  aliases: []
description: ""
id: TdjxTKZFnadjcNx8
slug: angberelius-nadai
img: systems/sohl/assets/icons/other/astrology.svg
shortcode: angbereliusnadai
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
  - name: "Angberélius-Nadái — Earth skills (-5 EML)"
    type: sohleffectdata
    _id: w4Yb3smNvdPc1NLV
    system:
      scope: skill
      test: 'itemLogic.data.subType === "nature" || has(itemLogic.data.shortcode, ["earth", "fyvria"])'
      changes:
        - key: "mod:logic.masteryLevel"
          type: add
          value: "-5"
          priority: null
    _key: "!items.effects!TdjxTKZFnadjcNx8.w4Yb3smNvdPc1NLV"
  - name: "Angberélius-Nadái — Metal skills (+5 EML)"
    type: sohleffectdata
    _id: RzENtxl7yrRj1tu8
    system:
      scope: skill
      test: 'has(itemLogic.data.subType, ["script", "craft"]) || has(itemLogic.data.shortcode, ["metal", "jmorvi"])'
      changes:
        - key: "mod:logic.masteryLevel"
          type: add
          value: "5"
          priority: null
    _key: "!items.effects!TdjxTKZFnadjcNx8.RzENtxl7yrRj1tu8"
  - name: "Angberélius-Nadái — Fire skills (+15 EML)"
    type: sohleffectdata
    _id: 2BDdvvVQMOtH9u36
    system:
      scope: skill
      test: 'has(itemLogic.data.subType, ["combattechnique", "combat"]) || has(itemLogic.data.shortcode, ["fire", "peleahn"])'
      changes:
        - key: "mod:logic.masteryLevel"
          type: add
          value: "15"
          priority: null
    _key: "!items.effects!TdjxTKZFnadjcNx8.2BDdvvVQMOtH9u36"
  - name: "Angberélius-Nadái — Air skills (+10 EML)"
    type: sohleffectdata
    _id: YMfwmukGVawpoQmB
    system:
      scope: skill
      test: 'itemLogic.data.subType === "physical" || has(itemLogic.data.shortcode, ["air", "lyahvi"])'
      changes:
        - key: "mod:logic.masteryLevel"
          type: add
          value: "10"
          priority: null
    _key: "!items.effects!TdjxTKZFnadjcNx8.YMfwmukGVawpoQmB"
  - name: "Angberélius-Nadái — Water skills (-10 EML)"
    type: sohleffectdata
    _id: t7dpHNcD33fH4Hle
    system:
      scope: skill
      test: 'has(itemLogic.data.subType, ["language", "social"]) || has(itemLogic.data.shortcode, ["water", "odivshe"])'
      changes:
        - key: "mod:logic.masteryLevel"
          type: add
          value: "-10"
          priority: null
    _key: "!items.effects!TdjxTKZFnadjcNx8.t7dpHNcD33fH4Hle"
folder: doIwpD92J7NodK9W
---
