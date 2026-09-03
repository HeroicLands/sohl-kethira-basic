---
tags: []
name:
  full: Skôrus-Masâra
  aliases: []
description: ""
id: Hjv8cFoLgH5ywN7B
slug: skorus-masara
img: systems/sohl/assets/icons/other/astrology.svg
shortcode: skorusmasara
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
  - name: "Skôrus-Masâra — Earth skills (+5 EML)"
    type: sohleffectdata
    _id: ly8QosL1J7p7Ga4k
    system:
      scope: skill
      test: 'itemLogic.data.subType === "nature" || has(itemLogic.data.shortcode, ["earth", "fyvria"])'
      changes:
        - key: "mod:logic.masteryLevel"
          type: add
          value: "5"
          priority: null
    _key: "!items.effects!Hjv8cFoLgH5ywN7B.ly8QosL1J7p7Ga4k"
  - name: "Skôrus-Masâra — Metal skills (-5 EML)"
    type: sohleffectdata
    _id: umqPDUr3jrdH2W5f
    system:
      scope: skill
      test: 'has(itemLogic.data.subType, ["script", "craft"]) || has(itemLogic.data.shortcode, ["metal", "jmorvi"])'
      changes:
        - key: "mod:logic.masteryLevel"
          type: add
          value: "-5"
          priority: null
    _key: "!items.effects!Hjv8cFoLgH5ywN7B.umqPDUr3jrdH2W5f"
  - name: "Skôrus-Masâra — Fire skills (-10 EML)"
    type: sohleffectdata
    _id: 9AI8tEOclDDCpKVD
    system:
      scope: skill
      test: 'has(itemLogic.data.subType, ["combattechnique", "combat"]) || has(itemLogic.data.shortcode, ["fire", "peleahn"])'
      changes:
        - key: "mod:logic.masteryLevel"
          type: add
          value: "-10"
          priority: null
    _key: "!items.effects!Hjv8cFoLgH5ywN7B.9AI8tEOclDDCpKVD"
  - name: "Skôrus-Masâra — Spirit skills (+10 EML)"
    type: sohleffectdata
    _id: AWOIoWIVxq89nHFb
    system:
      scope: skill
      test: 'has(itemLogic.data.subType, ["mystical", "lore"]) || has(itemLogic.data.shortcode, ["spirit", "savorya"])'
      changes:
        - key: "mod:logic.masteryLevel"
          type: add
          value: "10"
          priority: null
    _key: "!items.effects!Hjv8cFoLgH5ywN7B.AWOIoWIVxq89nHFb"
  - name: "Skôrus-Masâra — Water skills (+15 EML)"
    type: sohleffectdata
    _id: Y8TSP63fCBfuMHo7
    system:
      scope: skill
      test: 'has(itemLogic.data.subType, ["language", "social"]) || has(itemLogic.data.shortcode, ["water", "odivshe"])'
      changes:
        - key: "mod:logic.masteryLevel"
          type: add
          value: "15"
          priority: null
    _key: "!items.effects!Hjv8cFoLgH5ywN7B.Y8TSP63fCBfuMHo7"
folder: doIwpD92J7NodK9W
---
