---
aliases:
  - Hîrin-Táræl
tags: []
name:
  full: Hîrin-Táræl
  aliases: []
description: ""
id: 5NYNbAPWe43ymyKZ
slug: hirin-tarael
img: systems/sohl/assets/icons/other/astrology.svg
shortcode: hirintarael
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
  - name: "Hîrin-Táræl — Earth skills (-10 EML)"
    type: sohleffectdata
    _id: 2G698QRooJfNXKVq
    system:
      scope: skill
      test: 'itemLogic.data.subType === "nature" || has(itemLogic.data.shortcode, ["earth", "fyvria"])'
      changes:
        - key: "mod:logic.masteryLevel"
          type: add
          value: "-10"
          priority: null
    _key: "!items.effects!5NYNbAPWe43ymyKZ.2G698QRooJfNXKVq"
  - name: "Hîrin-Táræl — Metal skills (-5 EML)"
    type: sohleffectdata
    _id: xiqLYi8AwouI52ZT
    system:
      scope: skill
      test: 'has(itemLogic.data.subType, ["script", "craft"]) || has(itemLogic.data.shortcode, ["metal", "jmorvi"])'
      changes:
        - key: "mod:logic.masteryLevel"
          type: add
          value: "-5"
          priority: null
    _key: "!items.effects!5NYNbAPWe43ymyKZ.xiqLYi8AwouI52ZT"
  - name: "Hîrin-Táræl — Fire skills (+5 EML)"
    type: sohleffectdata
    _id: zV7GjvIzPFOOZpiS
    system:
      scope: skill
      test: 'has(itemLogic.data.subType, ["combattechnique", "combat"]) || has(itemLogic.data.shortcode, ["fire", "peleahn"])'
      changes:
        - key: "mod:logic.masteryLevel"
          type: add
          value: "5"
          priority: null
    _key: "!items.effects!5NYNbAPWe43ymyKZ.zV7GjvIzPFOOZpiS"
  - name: "Hîrin-Táræl — Air skills (+15 EML)"
    type: sohleffectdata
    _id: EdTpW0InHZro5dcT
    system:
      scope: skill
      test: 'itemLogic.data.subType === "physical" || has(itemLogic.data.shortcode, ["air", "lyahvi"])'
      changes:
        - key: "mod:logic.masteryLevel"
          type: add
          value: "15"
          priority: null
    _key: "!items.effects!5NYNbAPWe43ymyKZ.EdTpW0InHZro5dcT"
  - name: "Hîrin-Táræl — Spirit skills (+10 EML)"
    type: sohleffectdata
    _id: 9TBgMoReVPXwJ82m
    system:
      scope: skill
      test: 'has(itemLogic.data.subType, ["mystical", "lore"]) || has(itemLogic.data.shortcode, ["spirit", "savorya"])'
      changes:
        - key: "mod:logic.masteryLevel"
          type: add
          value: "10"
          priority: null
    _key: "!items.effects!5NYNbAPWe43ymyKZ.9TBgMoReVPXwJ82m"
folder: doIwpD92J7NodK9W
---
