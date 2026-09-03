---
tags: []
name:
  full: Masâra-Ládo
  aliases: []
description: ""
id: IxhlQpnsJvoz4FK5
slug: masara-lado
img: systems/sohl/assets/icons/other/astrology.svg
shortcode: masaralado
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
  - name: "Masâra-Ládo — Earth skills (+10 EML)"
    type: sohleffectdata
    _id: ytB1HGmOKJZbfdVC
    system:
      scope: skill
      test: 'itemLogic.data.subType === "nature" || has(itemLogic.data.shortcode, ["earth", "fyvria"])'
      changes:
        - key: "mod:logic.masteryLevel"
          type: add
          value: "10"
          priority: null
    _key: "!items.effects!IxhlQpnsJvoz4FK5.ytB1HGmOKJZbfdVC"
  - name: "Masâra-Ládo — Fire skills (-10 EML)"
    type: sohleffectdata
    _id: Gp8ELCwrc7W2a85S
    system:
      scope: skill
      test: 'has(itemLogic.data.subType, ["combattechnique", "combat"]) || has(itemLogic.data.shortcode, ["fire", "peleahn"])'
      changes:
        - key: "mod:logic.masteryLevel"
          type: add
          value: "-10"
          priority: null
    _key: "!items.effects!IxhlQpnsJvoz4FK5.Gp8ELCwrc7W2a85S"
  - name: "Masâra-Ládo — Air skills (-5 EML)"
    type: sohleffectdata
    _id: AX72wr00MbISUweo
    system:
      scope: skill
      test: 'itemLogic.data.subType === "physical" || has(itemLogic.data.shortcode, ["air", "lyahvi"])'
      changes:
        - key: "mod:logic.masteryLevel"
          type: add
          value: "-5"
          priority: null
    _key: "!items.effects!IxhlQpnsJvoz4FK5.AX72wr00MbISUweo"
  - name: "Masâra-Ládo — Spirit skills (+5 EML)"
    type: sohleffectdata
    _id: 7IEbgXM1lCYoSVYz
    system:
      scope: skill
      test: 'has(itemLogic.data.subType, ["mystical", "lore"]) || has(itemLogic.data.shortcode, ["spirit", "savorya"])'
      changes:
        - key: "mod:logic.masteryLevel"
          type: add
          value: "5"
          priority: null
    _key: "!items.effects!IxhlQpnsJvoz4FK5.7IEbgXM1lCYoSVYz"
  - name: "Masâra-Ládo — Water skills (+15 EML)"
    type: sohleffectdata
    _id: xwUHJcGTBPzCpfkk
    system:
      scope: skill
      test: 'has(itemLogic.data.subType, ["language", "social"]) || has(itemLogic.data.shortcode, ["water", "odivshe"])'
      changes:
        - key: "mod:logic.masteryLevel"
          type: add
          value: "15"
          priority: null
    _key: "!items.effects!IxhlQpnsJvoz4FK5.xwUHJcGTBPzCpfkk"
folder: doIwpD92J7NodK9W
---
