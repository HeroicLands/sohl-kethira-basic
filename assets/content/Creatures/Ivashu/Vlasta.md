---
aliases:
  - Vlásta
  - Swift One
  - Eater of Eyes
tags:
  - creature
name:
  full: Vlásta
  aliases: []
id: VlastaSwiftOne1
shortcode: vlasta
slug: vlasta
img: systems/sohl/assets/icons/game-icons/lorc/bird-claw.svg
portrait: ""
type: being
sohl:
  archetype: 0
  attrRollFormula:
    str: 1d4+2
    end: 1d6+7
    dex: 1d6+13
    agl: 1d6+17
    per: 1d6+14
    snt: 1d4+1
    aur: 1d4+1
    wil: 1d6+7
    rea: 1d4
    cre: 1d4+2
  body:
    structure:
      zones:
        - name: Head
          shortcode: headzone
          probWeight: 1
        - name: Torso
          shortcode: torsozone
          probWeight: 1
        - name: Hindquarters
          shortcode: hindqtrzone
          probWeight: 1
      parts:
        - name: Head
          shortcode: headpart
          bodyZoneCode: headzone
          roles:
            - vital
            - manipulator
          canHoldItem: false
          probWeight: 8
        - name: Left Forepaw
          shortcode: lforelegpart
          bodyZoneCode: headzone
          roles:
            - manipulator
          canHoldItem: false
          probWeight: 1
        - name: Right Forepaw
          shortcode: rforelegpart
          bodyZoneCode: headzone
          roles:
            - manipulator
          canHoldItem: false
          probWeight: 1
        - name: Torso
          shortcode: torsopart
          bodyZoneCode: torsozone
          roles:
            - core
          canHoldItem: false
          probWeight: 10
        - name: Left Leg
          shortcode: lhindlegpart
          bodyZoneCode: hindqtrzone
          roles:
            - locomotor
          canHoldItem: false
          probWeight: 3
        - name: Right Leg
          shortcode: rhindlegpart
          bodyZoneCode: hindqtrzone
          roles:
            - locomotor
          canHoldItem: false
          probWeight: 3
        - name: Tail
          shortcode: tailpart
          bodyZoneCode: hindqtrzone
          roles:
            - locomotor
          canHoldItem: false
          probWeight: 4
      locations:
        - name: Head
          shortcode: headloc
          bodyPartCode: headpart
          bleedingSusceptibility: medium
          amputability: none
          shockValue: 5
          probWeight: 6
          protectionBase:
            blunt: -5
            edged: -2
            piercing: -2
            fire: -3
        - name: Neck
          shortcode: neckloc
          bodyPartCode: headpart
          bleedingSusceptibility: high
          amputability: low
          shockValue: 5
          probWeight: 2
          protectionBase:
            blunt: -4
            edged: -1
            piercing: -1
            fire: -2
        - name: Left Forepaw
          shortcode: lforelegloc
          bodyPartCode: lforelegpart
          bleedingSusceptibility: low
          amputability: medium
          shockValue: 2
          probWeight: 10
          protectionBase:
            blunt: -6
            edged: -3
            piercing: -3
            fire: -4
        - name: Right Forepaw
          shortcode: rforelegloc
          bodyPartCode: rforelegpart
          bleedingSusceptibility: low
          amputability: medium
          shockValue: 2
          probWeight: 10
          protectionBase:
            blunt: -6
            edged: -3
            piercing: -3
            fire: -4
        - name: Torso
          shortcode: thoraxloc
          bodyPartCode: torsopart
          bleedingSusceptibility: medium
          amputability: none
          shockValue: 4
          probWeight: 10
          protectionBase:
            blunt: -4
            edged: -1
            piercing: -1
            fire: -2
        - name: Left Leg
          shortcode: lhindlegloc
          bodyPartCode: lhindlegpart
          bleedingSusceptibility: low
          amputability: medium
          shockValue: 3
          probWeight: 10
          protectionBase:
            blunt: -5
            edged: -2
            piercing: -2
            fire: -3
        - name: Right Leg
          shortcode: rhindlegloc
          bodyPartCode: rhindlegpart
          bleedingSusceptibility: low
          amputability: medium
          shockValue: 3
          probWeight: 10
          protectionBase:
            blunt: -5
            edged: -2
            piercing: -2
            fire: -3
        - name: Tail
          shortcode: tailloc
          bodyPartCode: tailpart
          bleedingSusceptibility: none
          amputability: high
          shockValue: 1
          probWeight: 10
          protectionBase:
            blunt: -5
            edged: -2
            piercing: -2
            fire: -3
    weight:
      base: 20
      calc: "20"
    reachBase: 0
    bodyScaleBase: 0.36
    personalFatigue: enc + 5
  currentMoveMedium: terrestrial
  movementProfiles:
    - medium: terrestrial
      feetPerRound: 90
      leaguesPerWatch: 5
      encumbrance: floor(wt/4)
      strMod: -5 * floor((str - 10) / 2)
      disabled: false
  defaultCombatGroup: null
  items:
    - { shortcode: str, type: attribute, system: { scoreBase: 4 } }
    - { shortcode: end, type: attribute, system: { scoreBase: 10 } }
    - { shortcode: dex, type: attribute, system: { scoreBase: 16 } }
    - { shortcode: agl, type: attribute, system: { scoreBase: 20 } }
    - { shortcode: per, type: attribute, system: { scoreBase: 17 } }
    - { shortcode: snt, type: attribute, system: { scoreBase: 3 } }
    - { shortcode: aur, type: attribute, system: { scoreBase: 3 } }
    - { shortcode: wil, type: attribute, system: { scoreBase: 10 } }
    - { shortcode: rea, type: attribute, system: { scoreBase: 2 } }
    - { shortcode: cre, type: attribute, system: { scoreBase: 4 } }
    - { shortcode: awar, type: skill, system: { masteryLevelBase: 70 } }
    - { shortcode: init, type: skill, system: { masteryLevelBase: 52 } }
    - { shortcode: shok, type: skill, system: { masteryLevelBase: 52 } }
    - { shortcode: jump, type: skill, system: { masteryLevelBase: 60 } }
    - { shortcode: sprt, type: mysticalability, system: { masteryLevelBase: 18 } }
    - { shortcode: stlth, type: skill, system: { masteryLevelBase: 54 } }
    - { shortcode: dge, type: skill, system: { masteryLevelBase: 95 } }
    - name: Bite
      type: skill
      system:
        shortcode: bite
        subType: combattechnique
        masteryLevelBase: 84
        combatCategory: melee
        impairedByRoles:
          - manipulator
        strikeMode:
          type: melee
          shortcode: bite
          name: Bite
          minParts: 1
          assocSkillCode: null
          attack:
            disabled: false
            spread: 1
            modifier: 0
          impactBase:
            numDice: 1
            die: 8
            modifier: -3
            aspect: piercing
          lengthBase: 0
          defense:
            block:
              disabled: true
              modifier: 0
              successLevelMod: 0
            counterstrike:
              disabled: false
              modifier: 0
              successLevelMod: 0
          traits:
            noBlock: true
    - name: Claw
      type: skill
      system:
        shortcode: claw
        subType: combattechnique
        masteryLevelBase: 88
        combatCategory: melee
        impairedByRoles:
          - manipulator
        strikeMode:
          type: melee
          shortcode: claw
          name: Claw
          minParts: 1
          assocSkillCode: null
          attack:
            disabled: false
            spread: 1
            modifier: 0
          impactBase:
            numDice: 1
            die: 10
            modifier: -5
            aspect: edged
          lengthBase: 0
          defense:
            block:
              disabled: true
              modifier: 0
              successLevelMod: 0
            counterstrike:
              disabled: false
              modifier: 0
              successLevelMod: 0
          traits:
            noBlock: true
---

# Appearance {#appearance}

Eighteen inches of mud-brown scale, powerful hind legs and tail, stunted forepaws and a protruding snout of jagged teeth. It moves in darting runs and long running leaps, and its head turns to follow a face rather than a body.

# Dossier {#dossier}

Vlásta are a true menace belied by their tiny size. They attack voraciously in groups of up to a dozen — usually in the dark — and the _Swift One_ darts about making running leaps of up to twenty feet. Not afraid even of human-sized targets, Vlásta aim for the face to peck out the eyes. Luckily for their victims these _Eaters of Eyes_ have very fragile bones, easily crushed, and they remain dormant during the day in underground warrens.

**Acute Senses.** A Vlásta sees perfectly in darkness and may track by its excellent sense of smell.

**Disorientation.** In broad daylight, at the start of a Vlásta's turn, roll d10 against TN5; failure reduces all its tests by one success level for one round.

**Eye Gouge.** When a Vlásta strikes the face, roll d4 on the Face Option subtable. A Grievous injury to an eye — at once or by compounding — plucks the eye out.

**Leaping Attack.** A Vlásta always attempts leaping bite attacks against larger foes. With a Charge action it automatically strikes Zone 1 of a human-sized target and then centres its d6 location die around the face. Without a charge, a d10 against TN6 allows the same; on a failed leap, a successful strike rolls d8+2 for the zone struck.

## Attributes

- **Strength:** 3-6 (1d4+2)

- **Endurance:** 8-13 (1d6+7)

- **Dexterity:** 14-19 (1d6+13)

- **Agility:** 18-23 (1d6+17)

- **Perception:** 15-20 (1d6+14)

- **Scent:** 2-5 (1d4+1)

- **Aura:** 2-5 (1d4+1)

- **Will:** 8-13 (1d6+7)

- **Reasoning:** 1-4 (1d4)

- **Creativity:** 3-6 (1d4+2)
