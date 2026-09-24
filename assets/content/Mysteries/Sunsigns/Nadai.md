---
tags: []
name:
  full: Nadái
  aliases: []
description: "Nadái is a birthsign."
id: 8Tp4mlHIyLSiiibp
slug: nadai
shortcode: nadai
type: mystery
subType: birthsign
pack: mysteries
data:
  icon: sohl-none-icon-astrology
  templatePriority: 0
sohl:
  kbcat: sunsign
  system:
    charges:
      value: null
      max: null
effects:
  - name: "Nadái — Earth skills (-10 EML)"
    type: sohleffectdata
    _id: rxmiEICiRtkSS30C
    system:
      scope: skill
      test: 'itemLogic.data.subType === "nature" || has(itemLogic.data.shortcode, ["earth", "fyvria"])'
      changes:
        - key: "mod:logic.masteryLevel"
          type: add
          value: "-10"
          priority: null
    _key: "!items.effects!8Tp4mlHIyLSiiibp.rxmiEICiRtkSS30C"
  - name: "Nadái — Fire skills (+10 EML)"
    type: sohleffectdata
    _id: YEPEBrLdmEivPK52
    system:
      scope: skill
      test: 'has(itemLogic.data.subType, ["combattechnique", "combat"]) || has(itemLogic.data.shortcode, ["fire", "peleahn"])'
      changes:
        - key: "mod:logic.masteryLevel"
          type: add
          value: "10"
          priority: null
    _key: "!items.effects!8Tp4mlHIyLSiiibp.YEPEBrLdmEivPK52"
  - name: "Nadái — Air skills (+10 EML)"
    type: sohleffectdata
    _id: dem6Si1wGf9uDTWm
    system:
      scope: skill
      test: 'itemLogic.data.subType === "physical" || has(itemLogic.data.shortcode, ["air", "lyahvi"])'
      changes:
        - key: "mod:logic.masteryLevel"
          type: add
          value: "10"
          priority: null
    _key: "!items.effects!8Tp4mlHIyLSiiibp.dem6Si1wGf9uDTWm"
  - name: "Nadái — Water skills (-10 EML)"
    type: sohleffectdata
    _id: FDqO2OUHHSYipJsR
    system:
      scope: skill
      test: 'has(itemLogic.data.subType, ["language", "social"]) || has(itemLogic.data.shortcode, ["water", "odivshe"])'
      changes:
        - key: "mod:logic.masteryLevel"
          type: add
          value: "-10"
          priority: null
    _key: "!items.effects!8Tp4mlHIyLSiiibp.FDqO2OUHHSYipJsR"
packFolder: sunsigns
---
