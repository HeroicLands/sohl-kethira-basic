---
aliases:
  - Ùlándus-Arálius
tags: []
name:
    full: Ùlándus-Arálius
    aliases: []
description: ""
id: Cx98NqPIY4BNzuja
slug: ulandus-aralius
img: systems/sohl/assets/icons/other/astrology.svg
shortcode: ulandusaralius
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
    - name: "Ùlándus-Arálius — Earth skills (+15 EML)"
      type: sohleffectdata
      _id: 7Af9miM7i0r8e8fy
      system:
          scope: skill
          test: 'itemLogic.data.subType === "nature" || has(itemLogic.data.shortcode, ["earth", "fyvria"])'
          changes:
              - key: "mod:logic.masteryLevel"
                type: add
                value: "15"
                priority: null
      _key: "!items.effects!Cx98NqPIY4BNzuja.7Af9miM7i0r8e8fy"
    - name: "Ùlándus-Arálius — Metal skills (+10 EML)"
      type: sohleffectdata
      _id: ifdqCQB79Pd5I30x
      system:
          scope: skill
          test: 'has(itemLogic.data.subType, ["script", "craft"]) || has(itemLogic.data.shortcode, ["metal", "jmorvi"])'
          changes:
              - key: "mod:logic.masteryLevel"
                type: add
                value: "10"
                priority: null
      _key: "!items.effects!Cx98NqPIY4BNzuja.ifdqCQB79Pd5I30x"
    - name: "Ùlándus-Arálius — Air skills (-10 EML)"
      type: sohleffectdata
      _id: GKHfXPsuTCklqSha
      system:
          scope: skill
          test: 'itemLogic.data.subType === "physical" || has(itemLogic.data.shortcode, ["air", "lyahvi"])'
          changes:
              - key: "mod:logic.masteryLevel"
                type: add
                value: "-10"
                priority: null
      _key: "!items.effects!Cx98NqPIY4BNzuja.GKHfXPsuTCklqSha"
    - name: "Ùlándus-Arálius — Spirit skills (-5 EML)"
      type: sohleffectdata
      _id: cbe9dc44eK5tP570
      system:
          scope: skill
          test: 'has(itemLogic.data.subType, ["mystical", "lore"]) || has(itemLogic.data.shortcode, ["spirit", "savorya"])'
          changes:
              - key: "mod:logic.masteryLevel"
                type: add
                value: "-5"
                priority: null
      _key: "!items.effects!Cx98NqPIY4BNzuja.cbe9dc44eK5tP570"
    - name: "Ùlándus-Arálius — Water skills (+5 EML)"
      type: sohleffectdata
      _id: 7duRWyQfWrTWV9f7
      system:
          scope: skill
          test: 'has(itemLogic.data.subType, ["language", "social"]) || has(itemLogic.data.shortcode, ["water", "odivshe"])'
          changes:
              - key: "mod:logic.masteryLevel"
                type: add
                value: "5"
                priority: null
      _key: "!items.effects!Cx98NqPIY4BNzuja.7duRWyQfWrTWV9f7"
folder: doIwpD92J7NodK9W

---
