---
aliases:
  - Tai-Skôrus
tags: []
name:
    full: Tai-Skôrus
    aliases: []
description: ""
id: RkYBc011zgoDKlc9
slug: tai-skorus
img: systems/sohl/assets/icons/other/astrology.svg
shortcode: taiskorus
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
    - name: "Tai-Skôrus — Metal skills (-10 EML)"
      type: sohleffectdata
      _id: lasUp4J9YLxvJ4xu
      system:
          scope: skill
          test: 'has(itemLogic.data.subType, ["script", "craft"]) || has(itemLogic.data.shortcode, ["metal", "jmorvi"])'
          changes:
              - key: "mod:logic.masteryLevel"
                type: add
                value: "-10"
                priority: null
      _key: "!items.effects!RkYBc011zgoDKlc9.lasUp4J9YLxvJ4xu"
    - name: "Tai-Skôrus — Fire skills (-5 EML)"
      type: sohleffectdata
      _id: UZwMWTaW0JCLzmJ0
      system:
          scope: skill
          test: 'has(itemLogic.data.subType, ["combattechnique", "combat"]) || has(itemLogic.data.shortcode, ["fire", "peleahn"])'
          changes:
              - key: "mod:logic.masteryLevel"
                type: add
                value: "-5"
                priority: null
      _key: "!items.effects!RkYBc011zgoDKlc9.UZwMWTaW0JCLzmJ0"
    - name: "Tai-Skôrus — Air skills (+5 EML)"
      type: sohleffectdata
      _id: k1wGwsRsC70RTjIW
      system:
          scope: skill
          test: 'itemLogic.data.subType === "physical" || has(itemLogic.data.shortcode, ["air", "lyahvi"])'
          changes:
              - key: "mod:logic.masteryLevel"
                type: add
                value: "5"
                priority: null
      _key: "!items.effects!RkYBc011zgoDKlc9.k1wGwsRsC70RTjIW"
    - name: "Tai-Skôrus — Spirit skills (+15 EML)"
      type: sohleffectdata
      _id: O7SU41BMDmIPhaFy
      system:
          scope: skill
          test: 'has(itemLogic.data.subType, ["mystical", "lore"]) || has(itemLogic.data.shortcode, ["spirit", "savorya"])'
          changes:
              - key: "mod:logic.masteryLevel"
                type: add
                value: "15"
                priority: null
      _key: "!items.effects!RkYBc011zgoDKlc9.O7SU41BMDmIPhaFy"
    - name: "Tai-Skôrus — Water skills (+10 EML)"
      type: sohleffectdata
      _id: zB61HMEg3vf4HKtW
      system:
          scope: skill
          test: 'has(itemLogic.data.subType, ["language", "social"]) || has(itemLogic.data.shortcode, ["water", "odivshe"])'
          changes:
              - key: "mod:logic.masteryLevel"
                type: add
                value: "10"
                priority: null
      _key: "!items.effects!RkYBc011zgoDKlc9.zB61HMEg3vf4HKtW"
folder: doIwpD92J7NodK9W

---
