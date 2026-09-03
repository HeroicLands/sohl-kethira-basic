---
tags: []
name:
  full: Ládo
  aliases: []
description: ""
id: c6TTc2Ax2tjiyWcV
slug: lado
img: systems/sohl/assets/icons/other/astrology.svg
shortcode: lado
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
  - name: "Ládo — Earth skills (+10 EML)"
    type: sohleffectdata
    _id: KhpHvASKFQBTiwfT
    system:
      scope: skill
      test: 'itemLogic.data.subType === "nature" || has(itemLogic.data.shortcode, ["earth", "fyvria"])'
      changes:
        - key: "mod:logic.masteryLevel"
          type: add
          value: "10"
          priority: null
    _key: "!items.effects!c6TTc2Ax2tjiyWcV.KhpHvASKFQBTiwfT"
  - name: "Ládo — Fire skills (-10 EML)"
    type: sohleffectdata
    _id: XmbovcYYqz1j4QFE
    system:
      scope: skill
      test: 'has(itemLogic.data.subType, ["combattechnique", "combat"]) || has(itemLogic.data.shortcode, ["fire", "peleahn"])'
      changes:
        - key: "mod:logic.masteryLevel"
          type: add
          value: "-10"
          priority: null
    _key: "!items.effects!c6TTc2Ax2tjiyWcV.XmbovcYYqz1j4QFE"
  - name: "Ládo — Air skills (-10 EML)"
    type: sohleffectdata
    _id: 9VnXeMp2vgAwSQen
    system:
      scope: skill
      test: 'itemLogic.data.subType === "physical" || has(itemLogic.data.shortcode, ["air", "lyahvi"])'
      changes:
        - key: "mod:logic.masteryLevel"
          type: add
          value: "-10"
          priority: null
    _key: "!items.effects!c6TTc2Ax2tjiyWcV.9VnXeMp2vgAwSQen"
  - name: "Ládo — Water skills (+10 EML)"
    type: sohleffectdata
    _id: XruQ1Khz9nvYLiB6
    system:
      scope: skill
      test: 'has(itemLogic.data.subType, ["language", "social"]) || has(itemLogic.data.shortcode, ["water", "odivshe"])'
      changes:
        - key: "mod:logic.masteryLevel"
          type: add
          value: "10"
          priority: null
    _key: "!items.effects!c6TTc2Ax2tjiyWcV.XruQ1Khz9nvYLiB6"
folder: doIwpD92J7NodK9W
---
