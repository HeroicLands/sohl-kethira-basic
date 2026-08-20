---
aliases:
  - Tai
tags: []
name:
    full: Tai
    aliases: []
description: ""
id: BA1LewIR8VJMqbag
slug: tai
img: systems/sohl/assets/icons/other/astrology.svg
shortcode: tai
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
        - name: "Tai — Earth skills (-5 EML)"
          type: sohleffectdata
          _id: x4Vq98CXNkJ7nlEP
          system:
              scope: skill
              test: 'itemLogic.data.subType === "nature" || has(itemLogic.data.shortcode, ["earth", "fyvria"])'
          changes:
              - key: "mod:logic.masteryLevel"
                type: add
                value: "-5"
                priority: null
          _key: "!items.effects!BA1LewIR8VJMqbag.x4Vq98CXNkJ7nlEP"
        - name: "Tai — Metal skills (-15 EML)"
          type: sohleffectdata
          _id: qX0krZZJ3kIgpHHf
          system:
              scope: skill
              test: 'has(itemLogic.data.subType, ["script", "craft"]) || has(itemLogic.data.shortcode, ["metal", "jmorvi"])'
          changes:
              - key: "mod:logic.masteryLevel"
                type: add
                value: "-15"
                priority: null
          _key: "!items.effects!BA1LewIR8VJMqbag.qX0krZZJ3kIgpHHf"
        - name: "Tai — Fire skills (-5 EML)"
          type: sohleffectdata
          _id: LgoOLgLNU4kCzX8U
          system:
              scope: skill
              test: 'has(itemLogic.data.subType, ["combattechnique", "combat"]) || has(itemLogic.data.shortcode, ["fire", "peleahn"])'
          changes:
              - key: "mod:logic.masteryLevel"
                type: add
                value: "-5"
                priority: null
          _key: "!items.effects!BA1LewIR8VJMqbag.LgoOLgLNU4kCzX8U"
        - name: "Tai — Air skills (+5 EML)"
          type: sohleffectdata
          _id: OIUG7FIAODwJpcfh
          system:
              scope: skill
              test: 'itemLogic.data.subType === "physical" || has(itemLogic.data.shortcode, ["air", "lyahvi"])'
          changes:
              - key: "mod:logic.masteryLevel"
                type: add
                value: "5"
                priority: null
          _key: "!items.effects!BA1LewIR8VJMqbag.OIUG7FIAODwJpcfh"
        - name: "Tai — Spirit skills (+15 EML)"
          type: sohleffectdata
          _id: AkQby1GNrmXxcCbl
          system:
              scope: skill
              test: 'has(itemLogic.data.subType, ["mystical", "lore"]) || has(itemLogic.data.shortcode, ["spirit", "savorya"])'
          changes:
              - key: "mod:logic.masteryLevel"
                type: add
                value: "15"
                priority: null
          _key: "!items.effects!BA1LewIR8VJMqbag.AkQby1GNrmXxcCbl"
        - name: "Tai — Water skills (+5 EML)"
          type: sohleffectdata
          _id: 15hcBaf4704yOXXU
          system:
              scope: skill
              test: 'has(itemLogic.data.subType, ["language", "social"]) || has(itemLogic.data.shortcode, ["water", "odivishe"])'
          changes:
              - key: "mod:logic.masteryLevel"
                type: add
                value: "5"
                priority: null
          _key: "!items.effects!BA1LewIR8VJMqbag.15hcBaf4704yOXXU"
folder: doIwpD92J7NodK9W

---
