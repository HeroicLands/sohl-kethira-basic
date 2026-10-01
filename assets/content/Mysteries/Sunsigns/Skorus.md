---
shortcode: skorus
name: {full: Skôrus, aliases: []}
type: mystery
subType: birthsign
description: "Skôrus is a birthsign."
tags: []
data: {icon: sohl-none-icon-astrology, templatePriority: 0, packFolder: sunsigns, pack: mysteries}
sohl:
  kbcat: sunsign
  system: {charges: {value: null, max: null}}
  effects:
    - name: "Skôrus — Metal skills (-10 EML)"
      type: sohleffectdata
      _id: 6XoMjkowVYtYVaQh
      system:
        scope: skill
        test: 'has(itemLogic.data.subType, ["script", "craft"]) || has(itemLogic.data.shortcode, ["metal", "jmorvi"])'
        changes: [{key: "mod:logic.masteryLevel", type: add, value: "-10", priority: null}]
      _key: "!items.effects!klMQI7Di94TBMgQR.6XoMjkowVYtYVaQh"
    - name: "Skôrus — Fire skills (-10 EML)"
      type: sohleffectdata
      _id: ddx5BaGLMUKBgDMC
      system:
        scope: skill
        test: 'has(itemLogic.data.subType, ["combattechnique", "combat"]) || has(itemLogic.data.shortcode, ["fire", "peleahn"])'
        changes: [{key: "mod:logic.masteryLevel", type: add, value: "-10", priority: null}]
      _key: "!items.effects!klMQI7Di94TBMgQR.ddx5BaGLMUKBgDMC"
    - name: "Skôrus — Spirit skills (+10 EML)"
      type: sohleffectdata
      _id: KH3yaJ0GZqOhku3z
      system:
        scope: skill
        test: 'has(itemLogic.data.subType, ["mystical", "lore"]) || has(itemLogic.data.shortcode, ["spirit", "savorya"])'
        changes: [{key: "mod:logic.masteryLevel", type: add, value: "10", priority: null}]
      _key: "!items.effects!klMQI7Di94TBMgQR.KH3yaJ0GZqOhku3z"
    - name: "Skôrus — Water skills (+10 EML)"
      type: sohleffectdata
      _id: r8DtQLsawkPzcMaj
      system:
        scope: skill
        test: 'has(itemLogic.data.subType, ["language", "social"]) || has(itemLogic.data.shortcode, ["water", "odivshe"])'
        changes: [{key: "mod:logic.masteryLevel", type: add, value: "10", priority: null}]
      _key: "!items.effects!klMQI7Di94TBMgQR.r8DtQLsawkPzcMaj"
---
