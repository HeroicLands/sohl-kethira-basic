---
tags: []
name:
  full: Fenéri-Áhnù
description: ""
id: HBe2jEz45xImY3X6
slug: feneri-ahnu
img: systems/sohl/assets/icons/other/astrology.svg
shortcode: feneriahnu
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
  - name: "Fenéri-Áhnù — Earth skills (+5 EML)"
    type: sohleffectdata
    _id: fLSGR0auRCz1zqT1
    system:
      scope: skill
      test: 'itemLogic.data.subType === "nature" || has(itemLogic.data.shortcode, ["earth", "fyvria"])'
      changes:
        - key: "mod:logic.masteryLevel"
          type: add
          value: "5"
          priority: null
    _key: "!items.effects!HBe2jEz45xImY3X6.fLSGR0auRCz1zqT1"
  - name: "Fenéri-Áhnù — Metal skills (+15 EML)"
    type: sohleffectdata
    _id: BM8RO2Fa1vG37yVX
    system:
      scope: skill
      test: 'has(itemLogic.data.subType, ["script", "craft"]) || has(itemLogic.data.shortcode, ["metal", "jmorvi"])'
      changes:
        - key: "mod:logic.masteryLevel"
          type: add
          value: "15"
          priority: null
    _key: "!items.effects!HBe2jEz45xImY3X6.BM8RO2Fa1vG37yVX"
  - name: "Fenéri-Áhnù — Fire skills (+10 EML)"
    type: sohleffectdata
    _id: SYBlCcbmStSkOTzh
    system:
      scope: skill
      test: 'has(itemLogic.data.subType, ["combattechnique", "combat"]) || has(itemLogic.data.shortcode, ["fire", "peleahn"])'
      changes:
        - key: "mod:logic.masteryLevel"
          type: add
          value: "10"
          priority: null
    _key: "!items.effects!HBe2jEz45xImY3X6.SYBlCcbmStSkOTzh"
  - name: "Fenéri-Áhnù — Spirit skills (-10 EML)"
    type: sohleffectdata
    _id: hDUvjVR2xjwfd3mR
    system:
      scope: skill
      test: 'has(itemLogic.data.subType, ["mystical", "lore"]) || has(itemLogic.data.shortcode, ["spirit", "savorya"])'
      changes:
        - key: "mod:logic.masteryLevel"
          type: add
          value: "-10"
          priority: null
    _key: "!items.effects!HBe2jEz45xImY3X6.hDUvjVR2xjwfd3mR"
  - name: "Fenéri-Áhnù — Water skills (-5 EML)"
    type: sohleffectdata
    _id: 60vLbVJHxClh9mvb
    system:
      scope: skill
      test: 'has(itemLogic.data.subType, ["language", "social"]) || has(itemLogic.data.shortcode, ["water", "odivshe"])'
      changes:
        - key: "mod:logic.masteryLevel"
          type: add
          value: "-5"
          priority: null
    _key: "!items.effects!HBe2jEz45xImY3X6.60vLbVJHxClh9mvb"
folder: doIwpD92J7NodK9W
---
