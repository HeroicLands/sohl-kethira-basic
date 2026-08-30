---
aliases:
  - Áhnù
tags: []
name:
  full: Áhnù
  aliases: []
description: ""
id: hKLc4IN1kA86hA15
slug: ahnu
img: systems/sohl/assets/icons/other/astrology.svg
shortcode: ahnu
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
  - name: "Áhnù — Metal skills (+10 EML)"
    type: sohleffectdata
    _id: 3fqNLpu8CoMGPcDa
    system:
      scope: skill
      test: 'has(itemLogic.data.subType, ["script", "craft"]) || has(itemLogic.data.shortcode, ["metal", "jmorvi"])'
      changes:
        - key: "mod:logic.masteryLevel"
          type: add
          value: "10"
          priority: null
    _key: "!items.effects!hKLc4IN1kA86hA15.3fqNLpu8CoMGPcDa"
  - name: "Áhnù — Fire skills (+10 EML)"
    type: sohleffectdata
    _id: rvjgQONaOUJutb6q
    system:
      scope: skill
      test: 'has(itemLogic.data.subType, ["combattechnique", "combat"]) || has(itemLogic.data.shortcode, ["fire", "peleahn"])'
      changes:
        - key: "mod:logic.masteryLevel"
          type: add
          value: "10"
          priority: null
    _key: "!items.effects!hKLc4IN1kA86hA15.rvjgQONaOUJutb6q"
  - name: "Áhnù — Spirit skills (-10 EML)"
    type: sohleffectdata
    _id: AOM3Um9NM7UUBfps
    system:
      scope: skill
      test: 'has(itemLogic.data.subType, ["mystical", "lore"]) || has(itemLogic.data.shortcode, ["spirit", "savorya"])'
      changes:
        - key: "mod:logic.masteryLevel"
          type: add
          value: "-10"
          priority: null
    _key: "!items.effects!hKLc4IN1kA86hA15.AOM3Um9NM7UUBfps"
  - name: "Áhnù — Water skills (-10 EML)"
    type: sohleffectdata
    _id: PCqLkTt8J1rCeYjh
    system:
      scope: skill
      test: 'has(itemLogic.data.subType, ["language", "social"]) || has(itemLogic.data.shortcode, ["water", "odivshe"])'
      changes:
        - key: "mod:logic.masteryLevel"
          type: add
          value: "-10"
          priority: null
    _key: "!items.effects!hKLc4IN1kA86hA15.PCqLkTt8J1rCeYjh"
folder: doIwpD92J7NodK9W
---
