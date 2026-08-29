---
aliases:
  - Fenéri
  - mystery-feneri
tags: []
name:
  full: Fenéri
  aliases: []
description: ""
id: 0rUilHMn9WsYi9Hn
slug: feneri
img: systems/sohl/assets/icons/other/astrology.svg
shortcode: feneri
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
  - name: "Fenéri — Earth skills (+5 EML)"
    type: sohleffectdata
    _id: 7ORDngU1Mbnkz1Q5
    system:
      scope: skill
      test: 'itemLogic.data.subType === "nature" || has(itemLogic.data.shortcode, ["earth", "fyvria"])'
      changes:
        - key: "mod:logic.masteryLevel"
          type: add
          value: "5"
          priority: null
    _key: "!items.effects!0rUilHMn9WsYi9Hn.7ORDngU1Mbnkz1Q5"
  - name: "Fenéri — Metal skills (+15 EML)"
    type: sohleffectdata
    _id: jEzWqc7eWDZuef9D
    system:
      scope: skill
      test: 'has(itemLogic.data.subType, ["script", "craft"]) || has(itemLogic.data.shortcode, ["metal", "jmorvi"])'
      changes:
        - key: "mod:logic.masteryLevel"
          type: add
          value: "15"
          priority: null
    _key: "!items.effects!0rUilHMn9WsYi9Hn.jEzWqc7eWDZuef9D"
  - name: "Fenéri — Fire skills (+5 EML)"
    type: sohleffectdata
    _id: PdZ2HrBgdAhoHMUQ
    system:
      scope: skill
      test: 'has(itemLogic.data.subType, ["combattechnique", "combat"]) || has(itemLogic.data.shortcode, ["fire", "peleahn"])'
      changes:
        - key: "mod:logic.masteryLevel"
          type: add
          value: "5"
          priority: null
    _key: "!items.effects!0rUilHMn9WsYi9Hn.PdZ2HrBgdAhoHMUQ"
  - name: "Fenéri — Air skills (-5 EML)"
    type: sohleffectdata
    _id: ZqALvy6KrDCysNA1
    system:
      scope: skill
      test: 'itemLogic.data.subType === "physical" || has(itemLogic.data.shortcode, ["air", "lyahvi"])'
      changes:
        - key: "mod:logic.masteryLevel"
          type: add
          value: "-5"
          priority: null
    _key: "!items.effects!0rUilHMn9WsYi9Hn.ZqALvy6KrDCysNA1"
  - name: "Fenéri — Spirit skills (-15 EML)"
    type: sohleffectdata
    _id: qdZfVA8Q63udndt3
    system:
      scope: skill
      test: 'has(itemLogic.data.subType, ["mystical", "lore"]) || has(itemLogic.data.shortcode, ["spirit", "savorya"])'
      changes:
        - key: "mod:logic.masteryLevel"
          type: add
          value: "-15"
          priority: null
    _key: "!items.effects!0rUilHMn9WsYi9Hn.qdZfVA8Q63udndt3"
  - name: "Fenéri — Water skills (-5 EML)"
    type: sohleffectdata
    _id: qd9wm0vCmxctfsyh
    system:
      scope: skill
      test: 'has(itemLogic.data.subType, ["language", "social"]) || has(itemLogic.data.shortcode, ["water", "odivshe"])'
      changes:
        - key: "mod:logic.masteryLevel"
          type: add
          value: "-5"
          priority: null
    _key: "!items.effects!0rUilHMn9WsYi9Hn.qd9wm0vCmxctfsyh"
folder: doIwpD92J7NodK9W
---
