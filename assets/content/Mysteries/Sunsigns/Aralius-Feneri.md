---
aliases:
  - Arálius-Fenéri
  - mystery-araliusfeneri
tags: []
name:
  full: Arálius-Fenéri
  aliases: []
description: ""
id: TBfKIrDH7Oj8axKT
slug: aralius-feneri
img: systems/sohl/assets/icons/other/astrology.svg
shortcode: araliusfeneri
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
  - name: "Arálius-Fenéri — Earth skills (+10 EML)"
    type: sohleffectdata
    _id: 2w9wucqdiloUI8iY
    system:
      scope: skill
      test: 'itemLogic.data.subType === "nature" || has(itemLogic.data.shortcode, ["earth", "fyvria"])'
      changes:
        - key: "mod:logic.masteryLevel"
          type: add
          value: "10"
          priority: null
    _key: "!items.effects!TBfKIrDH7Oj8axKT.2w9wucqdiloUI8iY"
  - name: "Arálius-Fenéri — Metal skills (+15 EML)"
    type: sohleffectdata
    _id: Api6E3euExc7hdnf
    system:
      scope: skill
      test: 'has(itemLogic.data.subType, ["script", "craft"]) || has(itemLogic.data.shortcode, ["metal", "jmorvi"])'
      changes:
        - key: "mod:logic.masteryLevel"
          type: add
          value: "15"
          priority: null
    _key: "!items.effects!TBfKIrDH7Oj8axKT.Api6E3euExc7hdnf"
  - name: "Arálius-Fenéri — Fire skills (+5 EML)"
    type: sohleffectdata
    _id: W5pHOmwowX4KDVF4
    system:
      scope: skill
      test: 'has(itemLogic.data.subType, ["combattechnique", "combat"]) || has(itemLogic.data.shortcode, ["fire", "peleahn"])'
      changes:
        - key: "mod:logic.masteryLevel"
          type: add
          value: "5"
          priority: null
    _key: "!items.effects!TBfKIrDH7Oj8axKT.W5pHOmwowX4KDVF4"
  - name: "Arálius-Fenéri — Air skills (-5 EML)"
    type: sohleffectdata
    _id: CmvBgYo7cz6udJVB
    system:
      scope: skill
      test: 'itemLogic.data.subType === "physical" || has(itemLogic.data.shortcode, ["air", "lyahvi"])'
      changes:
        - key: "mod:logic.masteryLevel"
          type: add
          value: "-5"
          priority: null
    _key: "!items.effects!TBfKIrDH7Oj8axKT.CmvBgYo7cz6udJVB"
  - name: "Arálius-Fenéri — Spirit skills (-10 EML)"
    type: sohleffectdata
    _id: JwqLZZd3HMLMumQB
    system:
      scope: skill
      test: 'has(itemLogic.data.subType, ["mystical", "lore"]) || has(itemLogic.data.shortcode, ["spirit", "savorya"])'
      changes:
        - key: "mod:logic.masteryLevel"
          type: add
          value: "-10"
          priority: null
    _key: "!items.effects!TBfKIrDH7Oj8axKT.JwqLZZd3HMLMumQB"
folder: doIwpD92J7NodK9W
---
