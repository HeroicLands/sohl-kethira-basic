---
aliases:
  - Hîrin
tags: []
name:
  full: Hîrin
  aliases: []
description: ""
id: EeL7L3sh2RMj63fO
slug: hirin
img: systems/sohl/assets/icons/other/astrology.svg
shortcode: hirin
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
  - name: "Hîrin — Earth skills (-15 EML)"
    type: sohleffectdata
    _id: wH0HeTgTxaqj1f6M
    system:
      scope: skill
      test: 'itemLogic.data.subType === "nature" || has(itemLogic.data.shortcode, ["earth", "fyvria"])'
      changes:
        - key: "mod:logic.masteryLevel"
          type: add
          value: "-15"
          priority: null
    _key: "!items.effects!EeL7L3sh2RMj63fO.wH0HeTgTxaqj1f6M"
  - name: "Hîrin — Metal skills (-5 EML)"
    type: sohleffectdata
    _id: c0UNDwZZ4XVqO68f
    system:
      scope: skill
      test: 'has(itemLogic.data.subType, ["script", "craft"]) || has(itemLogic.data.shortcode, ["metal", "jmorvi"])'
      changes:
        - key: "mod:logic.masteryLevel"
          type: add
          value: "-5"
          priority: null
    _key: "!items.effects!EeL7L3sh2RMj63fO.c0UNDwZZ4XVqO68f"
  - name: "Hîrin — Fire skills (+5 EML)"
    type: sohleffectdata
    _id: NS1Rx7ZE4gza1Nr9
    system:
      scope: skill
      test: 'has(itemLogic.data.subType, ["combattechnique", "combat"]) || has(itemLogic.data.shortcode, ["fire", "peleahn"])'
      changes:
        - key: "mod:logic.masteryLevel"
          type: add
          value: "5"
          priority: null
    _key: "!items.effects!EeL7L3sh2RMj63fO.NS1Rx7ZE4gza1Nr9"
  - name: "Hîrin — Air skills (+15 EML)"
    type: sohleffectdata
    _id: zEa3uRKJSz0Eni8Q
    system:
      scope: skill
      test: 'itemLogic.data.subType === "physical" || has(itemLogic.data.shortcode, ["air", "lyahvi"])'
      changes:
        - key: "mod:logic.masteryLevel"
          type: add
          value: "15"
          priority: null
    _key: "!items.effects!EeL7L3sh2RMj63fO.zEa3uRKJSz0Eni8Q"
  - name: "Hîrin — Spirit skills (+5 EML)"
    type: sohleffectdata
    _id: vx0wgxrx3SFuGNdO
    system:
      scope: skill
      test: 'has(itemLogic.data.subType, ["mystical", "lore"]) || has(itemLogic.data.shortcode, ["spirit", "savorya"])'
      changes:
        - key: "mod:logic.masteryLevel"
          type: add
          value: "5"
          priority: null
    _key: "!items.effects!EeL7L3sh2RMj63fO.vx0wgxrx3SFuGNdO"
  - name: "Hîrin — Water skills (-5 EML)"
    type: sohleffectdata
    _id: c2MQvrWSx4loy3NK
    system:
      scope: skill
      test: 'has(itemLogic.data.subType, ["language", "social"]) || has(itemLogic.data.shortcode, ["water", "odivshe"])'
      changes:
        - key: "mod:logic.masteryLevel"
          type: add
          value: "-5"
          priority: null
    _key: "!items.effects!EeL7L3sh2RMj63fO.c2MQvrWSx4loy3NK"
folder: doIwpD92J7NodK9W
---
