---
aliases:
  - Skôrus
tags: []
name:
    full: Skôrus
    aliases: []
description: ""
id: klMQI7Di94TBMgQR
slug: skorus
img: systems/sohl/assets/icons/other/astrology.svg
shortcode: skorus
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
        - name: "Skôrus — Metal skills (-10 EML)"
          type: sohleffectdata
          _id: 6XoMjkowVYtYVaQh
          system:
              scope: skill
              test: 'has(itemLogic.data.subType, ["script", "craft"]) || has(itemLogic.data.shortcode, ["metal", "jmorvi"])'
          changes:
              - key: "mod:logic.masteryLevel"
                type: add
                value: "-10"
                priority: null
          _key: "!items.effects!klMQI7Di94TBMgQR.6XoMjkowVYtYVaQh"
        - name: "Skôrus — Fire skills (-10 EML)"
          type: sohleffectdata
          _id: ddx5BaGLMUKBgDMC
          system:
              scope: skill
              test: 'has(itemLogic.data.subType, ["combattechnique", "combat"]) || has(itemLogic.data.shortcode, ["fire", "peleahn"])'
          changes:
              - key: "mod:logic.masteryLevel"
                type: add
                value: "-10"
                priority: null
          _key: "!items.effects!klMQI7Di94TBMgQR.ddx5BaGLMUKBgDMC"
        - name: "Skôrus — Spirit skills (+10 EML)"
          type: sohleffectdata
          _id: KH3yaJ0GZqOhku3z
          system:
              scope: skill
              test: 'has(itemLogic.data.subType, ["mystical", "lore"]) || has(itemLogic.data.shortcode, ["spirit", "savorya"])'
          changes:
              - key: "mod:logic.masteryLevel"
                type: add
                value: "10"
                priority: null
          _key: "!items.effects!klMQI7Di94TBMgQR.KH3yaJ0GZqOhku3z"
        - name: "Skôrus — Water skills (+10 EML)"
          type: sohleffectdata
          _id: r8DtQLsawkPzcMaj
          system:
              scope: skill
              test: 'has(itemLogic.data.subType, ["language", "social"]) || has(itemLogic.data.shortcode, ["water", "odivishe"])'
          changes:
              - key: "mod:logic.masteryLevel"
                type: add
                value: "10"
                priority: null
          _key: "!items.effects!klMQI7Di94TBMgQR.r8DtQLsawkPzcMaj"
folder: doIwpD92J7NodK9W

---
