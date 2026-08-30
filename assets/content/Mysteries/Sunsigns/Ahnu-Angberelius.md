---
aliases:
  - Áhnù-Angberélius
tags: []
name:
  full: Áhnù-Angberélius
  aliases: []
description: ""
id: Lk9xrTRAj6O4oNNd
slug: ahnu-angberelius
img: systems/sohl/assets/icons/other/astrology.svg
shortcode: ahnuangberelius
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
  - name: "Áhnù-Angberélius — Metal skills (+10 EML)"
    type: sohleffectdata
    _id: F2YBGfyfhHNWWMYw
    system:
      scope: skill
      test: 'has(itemLogic.data.subType, ["script", "craft"]) || has(itemLogic.data.shortcode, ["metal", "jmorvi"])'
      changes:
        - key: "mod:logic.masteryLevel"
          type: add
          value: "10"
          priority: null
    _key: "!items.effects!Lk9xrTRAj6O4oNNd.F2YBGfyfhHNWWMYw"
  - name: "Áhnù-Angberélius — Fire skills (+15 EML)"
    type: sohleffectdata
    _id: GWwJUhzCLg3RQaNm
    system:
      scope: skill
      test: 'has(itemLogic.data.subType, ["combattechnique", "combat"]) || has(itemLogic.data.shortcode, ["fire", "peleahn"])'
      changes:
        - key: "mod:logic.masteryLevel"
          type: add
          value: "15"
          priority: null
    _key: "!items.effects!Lk9xrTRAj6O4oNNd.GWwJUhzCLg3RQaNm"
  - name: "Áhnù-Angberélius — Air skills (+5 EML)"
    type: sohleffectdata
    _id: EzNNUPfhW3X510Ph
    system:
      scope: skill
      test: 'itemLogic.data.subType === "physical" || has(itemLogic.data.shortcode, ["air", "lyahvi"])'
      changes:
        - key: "mod:logic.masteryLevel"
          type: add
          value: "5"
          priority: null
    _key: "!items.effects!Lk9xrTRAj6O4oNNd.EzNNUPfhW3X510Ph"
  - name: "Áhnù-Angberélius — Spirit skills (-5 EML)"
    type: sohleffectdata
    _id: 5NE33qC0F8A5OxE6
    system:
      scope: skill
      test: 'has(itemLogic.data.subType, ["mystical", "lore"]) || has(itemLogic.data.shortcode, ["spirit", "savorya"])'
      changes:
        - key: "mod:logic.masteryLevel"
          type: add
          value: "-5"
          priority: null
    _key: "!items.effects!Lk9xrTRAj6O4oNNd.5NE33qC0F8A5OxE6"
  - name: "Áhnù-Angberélius — Water skills (-10 EML)"
    type: sohleffectdata
    _id: c6643q2LKPinxQH7
    system:
      scope: skill
      test: 'has(itemLogic.data.subType, ["language", "social"]) || has(itemLogic.data.shortcode, ["water", "odivshe"])'
      changes:
        - key: "mod:logic.masteryLevel"
          type: add
          value: "-10"
          priority: null
    _key: "!items.effects!Lk9xrTRAj6O4oNNd.c6643q2LKPinxQH7"
folder: doIwpD92J7NodK9W
---
