---
aliases:
  - Angberélius
tags: []
name:
  full: Angberélius
  aliases: []
description: ""
id: hSyl2FBaJd2z4cBw
slug: angberelius
img: systems/sohl/assets/icons/other/astrology.svg
shortcode: angberelius
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
  - name: "Angberélius — Earth skills (-5 EML)"
    type: sohleffectdata
    _id: MX2WgQWzyQUydsSe
    system:
      scope: skill
      test: 'itemLogic.data.subType === "nature" || has(itemLogic.data.shortcode, ["earth", "fyvria"])'
      changes:
        - key: "mod:logic.masteryLevel"
          type: add
          value: "-5"
          priority: null
    _key: "!items.effects!hSyl2FBaJd2z4cBw.MX2WgQWzyQUydsSe"
  - name: "Angberélius — Metal skills (+5 EML)"
    type: sohleffectdata
    _id: dZstIFrn0JbKtV6u
    system:
      scope: skill
      test: 'has(itemLogic.data.subType, ["script", "craft"]) || has(itemLogic.data.shortcode, ["metal", "jmorvi"])'
      changes:
        - key: "mod:logic.masteryLevel"
          type: add
          value: "5"
          priority: null
    _key: "!items.effects!hSyl2FBaJd2z4cBw.dZstIFrn0JbKtV6u"
  - name: "Angberélius — Fire skills (+15 EML)"
    type: sohleffectdata
    _id: e8VXKwknxu5Hq39U
    system:
      scope: skill
      test: 'has(itemLogic.data.subType, ["combattechnique", "combat"]) || has(itemLogic.data.shortcode, ["fire", "peleahn"])'
      changes:
        - key: "mod:logic.masteryLevel"
          type: add
          value: "15"
          priority: null
    _key: "!items.effects!hSyl2FBaJd2z4cBw.e8VXKwknxu5Hq39U"
  - name: "Angberélius — Air skills (+5 EML)"
    type: sohleffectdata
    _id: XHD62llSJ4CsUN2w
    system:
      scope: skill
      test: 'itemLogic.data.subType === "physical" || has(itemLogic.data.shortcode, ["air", "lyahvi"])'
      changes:
        - key: "mod:logic.masteryLevel"
          type: add
          value: "5"
          priority: null
    _key: "!items.effects!hSyl2FBaJd2z4cBw.XHD62llSJ4CsUN2w"
  - name: "Angberélius — Spirit skills (-5 EML)"
    type: sohleffectdata
    _id: 2CPOFU7nTyKyB1es
    system:
      scope: skill
      test: 'has(itemLogic.data.subType, ["mystical", "lore"]) || has(itemLogic.data.shortcode, ["spirit", "savorya"])'
      changes:
        - key: "mod:logic.masteryLevel"
          type: add
          value: "-5"
          priority: null
    _key: "!items.effects!hSyl2FBaJd2z4cBw.2CPOFU7nTyKyB1es"
  - name: "Angberélius — Water skills (-15 EML)"
    type: sohleffectdata
    _id: jTIgz4TotiDyirAY
    system:
      scope: skill
      test: 'has(itemLogic.data.subType, ["language", "social"]) || has(itemLogic.data.shortcode, ["water", "odivshe"])'
      changes:
        - key: "mod:logic.masteryLevel"
          type: add
          value: "-15"
          priority: null
    _key: "!items.effects!hSyl2FBaJd2z4cBw.jTIgz4TotiDyirAY"
folder: doIwpD92J7NodK9W
---
