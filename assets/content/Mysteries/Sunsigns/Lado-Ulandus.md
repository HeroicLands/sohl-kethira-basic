---
aliases:
  - Ládo-Ùlándus
  - mystery-ladoulandus
tags: []
name:
  full: Ládo-Ùlándus
  aliases: []
description: ""
id: lXWpXFfh9Dbw3vJt
slug: lado-ulandus
img: systems/sohl/assets/icons/other/astrology.svg
shortcode: ladoulandus
type: mystery
pack: mysteries
package: kethira
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
  - name: "Ládo-Ùlándus — Earth skills (+15 EML)"
    type: sohleffectdata
    _id: Lg9NBNn1lpDQ4D9y
    system:
      scope: skill
      test: 'itemLogic.data.subType === "nature" || has(itemLogic.data.shortcode, ["earth", "fyvria"])'
      changes:
        - key: "mod:logic.masteryLevel"
          type: add
          value: "15"
          priority: null
    _key: "!items.effects!lXWpXFfh9Dbw3vJt.Lg9NBNn1lpDQ4D9y"
  - name: "Ládo-Ùlándus — Metal skills (+5 EML)"
    type: sohleffectdata
    _id: Lfd9N5RuOUyRKaGM
    system:
      scope: skill
      test: 'has(itemLogic.data.subType, ["script", "craft"]) || has(itemLogic.data.shortcode, ["metal", "jmorvi"])'
      changes:
        - key: "mod:logic.masteryLevel"
          type: add
          value: "5"
          priority: null
    _key: "!items.effects!lXWpXFfh9Dbw3vJt.Lfd9N5RuOUyRKaGM"
  - name: "Ládo-Ùlándus — Fire skills (-5 EML)"
    type: sohleffectdata
    _id: 9JJy1KFwh4yU6WbF
    system:
      scope: skill
      test: 'has(itemLogic.data.subType, ["combattechnique", "combat"]) || has(itemLogic.data.shortcode, ["fire", "peleahn"])'
      changes:
        - key: "mod:logic.masteryLevel"
          type: add
          value: "-5"
          priority: null
    _key: "!items.effects!lXWpXFfh9Dbw3vJt.9JJy1KFwh4yU6WbF"
  - name: "Ládo-Ùlándus — Air skills (-10 EML)"
    type: sohleffectdata
    _id: Blp4Ves0YMh3AnvB
    system:
      scope: skill
      test: 'itemLogic.data.subType === "physical" || has(itemLogic.data.shortcode, ["air", "lyahvi"])'
      changes:
        - key: "mod:logic.masteryLevel"
          type: add
          value: "-10"
          priority: null
    _key: "!items.effects!lXWpXFfh9Dbw3vJt.Blp4Ves0YMh3AnvB"
  - name: "Ládo-Ùlándus — Water skills (+10 EML)"
    type: sohleffectdata
    _id: CgOp2KzvXK01KMjh
    system:
      scope: skill
      test: 'has(itemLogic.data.subType, ["language", "social"]) || has(itemLogic.data.shortcode, ["water", "odivshe"])'
      changes:
        - key: "mod:logic.masteryLevel"
          type: add
          value: "10"
          priority: null
    _key: "!items.effects!lXWpXFfh9Dbw3vJt.CgOp2KzvXK01KMjh"
folder: doIwpD92J7NodK9W
---
