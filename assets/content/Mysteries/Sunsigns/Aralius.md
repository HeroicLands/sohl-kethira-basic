---
aliases:
  - Arálius
tags: []
name:
  full: Arálius
  aliases: []
description: ""
id: ob9DL9Qd3GZOaXIE
slug: aralius
img: systems/sohl/assets/icons/other/astrology.svg
shortcode: aralius
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
  - name: "Arálius — Earth skills (+10 EML)"
    type: sohleffectdata
    _id: YwsZFl7EnqOs9wBk
    system:
      scope: skill
      test: 'itemLogic.data.subType === "nature" || has(itemLogic.data.shortcode, ["earth", "fyvria"])'
      changes:
        - key: "mod:logic.masteryLevel"
          type: add
          value: "10"
          priority: null
    _key: "!items.effects!ob9DL9Qd3GZOaXIE.YwsZFl7EnqOs9wBk"
  - name: "Arálius — Metal skills (+10 EML)"
    type: sohleffectdata
    _id: Nfj4MXD2dvbco58U
    system:
      scope: skill
      test: 'has(itemLogic.data.subType, ["script", "craft"]) || has(itemLogic.data.shortcode, ["metal", "jmorvi"])'
      changes:
        - key: "mod:logic.masteryLevel"
          type: add
          value: "10"
          priority: null
    _key: "!items.effects!ob9DL9Qd3GZOaXIE.Nfj4MXD2dvbco58U"
  - name: "Arálius — Air skills (-10 EML)"
    type: sohleffectdata
    _id: NnUMAPuyZIEmidBP
    system:
      scope: skill
      test: 'itemLogic.data.subType === "physical" || has(itemLogic.data.shortcode, ["air", "lyahvi"])'
      changes:
        - key: "mod:logic.masteryLevel"
          type: add
          value: "-10"
          priority: null
    _key: "!items.effects!ob9DL9Qd3GZOaXIE.NnUMAPuyZIEmidBP"
  - name: "Arálius — Spirit skills (-10 EML)"
    type: sohleffectdata
    _id: Pj5GTveJbztiUcLo
    system:
      scope: skill
      test: 'has(itemLogic.data.subType, ["mystical", "lore"]) || has(itemLogic.data.shortcode, ["spirit", "savorya"])'
      changes:
        - key: "mod:logic.masteryLevel"
          type: add
          value: "-10"
          priority: null
    _key: "!items.effects!ob9DL9Qd3GZOaXIE.Pj5GTveJbztiUcLo"
folder: doIwpD92J7NodK9W
---
