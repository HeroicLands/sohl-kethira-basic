---
aliases:
  - Masâra
tags: []
name:
    full: Masâra
    aliases: []
description: ""
id: hTjG4MP2ILxzInZ1
slug: masara
img: systems/sohl/assets/icons/other/astrology.svg
shortcode: masara
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
    - name: "Masâra — Earth skills (+5 EML)"
      type: sohleffectdata
      _id: h1eeRzpLCmt568NP
      system:
          scope: skill
          test: 'itemLogic.data.subType === "nature" || has(itemLogic.data.shortcode, ["earth", "fyvria"])'
          changes:
              - key: "mod:logic.masteryLevel"
                type: add
                value: "5"
                priority: null
      _key: "!items.effects!hTjG4MP2ILxzInZ1.h1eeRzpLCmt568NP"
    - name: "Masâra — Metal skills (-5 EML)"
      type: sohleffectdata
      _id: gGuuSdhU1mtKRFKT
      system:
          scope: skill
          test: 'has(itemLogic.data.subType, ["script", "craft"]) || has(itemLogic.data.shortcode, ["metal", "jmorvi"])'
          changes:
              - key: "mod:logic.masteryLevel"
                type: add
                value: "-5"
                priority: null
      _key: "!items.effects!hTjG4MP2ILxzInZ1.gGuuSdhU1mtKRFKT"
    - name: "Masâra — Fire skills (-15 EML)"
      type: sohleffectdata
      _id: pVOwkacavWBZwwOm
      system:
          scope: skill
          test: 'has(itemLogic.data.subType, ["combattechnique", "combat"]) || has(itemLogic.data.shortcode, ["fire", "peleahn"])'
          changes:
              - key: "mod:logic.masteryLevel"
                type: add
                value: "-15"
                priority: null
      _key: "!items.effects!hTjG4MP2ILxzInZ1.pVOwkacavWBZwwOm"
    - name: "Masâra — Air skills (-5 EML)"
      type: sohleffectdata
      _id: 7jbCGrUgRbcCFSbV
      system:
          scope: skill
          test: 'itemLogic.data.subType === "physical" || has(itemLogic.data.shortcode, ["air", "lyahvi"])'
          changes:
              - key: "mod:logic.masteryLevel"
                type: add
                value: "-5"
                priority: null
      _key: "!items.effects!hTjG4MP2ILxzInZ1.7jbCGrUgRbcCFSbV"
    - name: "Masâra — Spirit skills (+5 EML)"
      type: sohleffectdata
      _id: Apy5019SAUMLepRS
      system:
          scope: skill
          test: 'has(itemLogic.data.subType, ["mystical", "lore"]) || has(itemLogic.data.shortcode, ["spirit", "savorya"])'
          changes:
              - key: "mod:logic.masteryLevel"
                type: add
                value: "5"
                priority: null
      _key: "!items.effects!hTjG4MP2ILxzInZ1.Apy5019SAUMLepRS"
    - name: "Masâra — Water skills (+15 EML)"
      type: sohleffectdata
      _id: Pos2f7LeD68tMusn
      system:
          scope: skill
          test: 'has(itemLogic.data.subType, ["language", "social"]) || has(itemLogic.data.shortcode, ["water", "odivshe"])'
          changes:
              - key: "mod:logic.masteryLevel"
                type: add
                value: "15"
                priority: null
      _key: "!items.effects!hTjG4MP2ILxzInZ1.Pos2f7LeD68tMusn"
folder: doIwpD92J7NodK9W

---
