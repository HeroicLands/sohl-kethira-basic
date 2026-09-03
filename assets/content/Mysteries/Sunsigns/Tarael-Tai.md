---
tags: []
name:
  full: Táræl-Tai
  aliases: []
description: ""
id: tdc6S9CPTVAHpccG
slug: tarael-tai
img: systems/sohl/assets/icons/other/astrology.svg
shortcode: taraeltai
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
  - name: "Táræl-Tai — Earth skills (-5 EML)"
    type: sohleffectdata
    _id: H5GTWbQ5BJ3BYwxE
    system:
      scope: skill
      test: 'itemLogic.data.subType === "nature" || has(itemLogic.data.shortcode, ["earth", "fyvria"])'
      changes:
        - key: "mod:logic.masteryLevel"
          type: add
          value: "-5"
          priority: null
    _key: "!items.effects!tdc6S9CPTVAHpccG.H5GTWbQ5BJ3BYwxE"
  - name: "Táræl-Tai — Metal skills (-10 EML)"
    type: sohleffectdata
    _id: QEkLnY1nbSoaeuCh
    system:
      scope: skill
      test: 'has(itemLogic.data.subType, ["script", "craft"]) || has(itemLogic.data.shortcode, ["metal", "jmorvi"])'
      changes:
        - key: "mod:logic.masteryLevel"
          type: add
          value: "-10"
          priority: null
    _key: "!items.effects!tdc6S9CPTVAHpccG.QEkLnY1nbSoaeuCh"
  - name: "Táræl-Tai — Air skills (+10 EML)"
    type: sohleffectdata
    _id: ztmD2373TPurk2kB
    system:
      scope: skill
      test: 'itemLogic.data.subType === "physical" || has(itemLogic.data.shortcode, ["air", "lyahvi"])'
      changes:
        - key: "mod:logic.masteryLevel"
          type: add
          value: "10"
          priority: null
    _key: "!items.effects!tdc6S9CPTVAHpccG.ztmD2373TPurk2kB"
  - name: "Táræl-Tai — Spirit skills (+15 EML)"
    type: sohleffectdata
    _id: c4rnyIE5E1Kk4Cey
    system:
      scope: skill
      test: 'has(itemLogic.data.subType, ["mystical", "lore"]) || has(itemLogic.data.shortcode, ["spirit", "savorya"])'
      changes:
        - key: "mod:logic.masteryLevel"
          type: add
          value: "15"
          priority: null
    _key: "!items.effects!tdc6S9CPTVAHpccG.c4rnyIE5E1Kk4Cey"
  - name: "Táræl-Tai — Water skills (+5 EML)"
    type: sohleffectdata
    _id: DqfurFpfpOVqfWL8
    system:
      scope: skill
      test: 'has(itemLogic.data.subType, ["language", "social"]) || has(itemLogic.data.shortcode, ["water", "odivshe"])'
      changes:
        - key: "mod:logic.masteryLevel"
          type: add
          value: "5"
          priority: null
    _key: "!items.effects!tdc6S9CPTVAHpccG.DqfurFpfpOVqfWL8"
folder: doIwpD92J7NodK9W
---
