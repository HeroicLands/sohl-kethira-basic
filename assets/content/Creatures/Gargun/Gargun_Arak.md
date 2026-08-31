---
aliases:
  - Gârgún Arák
  - Small Gârgún
tags:
  - folk
  - gargun
name:
  full: Gârgún Arák
  aliases: []
id: Ga0rgunArak01AA
shortcode: arak
slug: gargun-arak
img: systems/sohl/assets/icons/game-icons/delapouite/orc-head.svg
portrait: ""
type: being
sohl:
  archetype: 0
  attrRollFormula:
    str: 1d6+7
    end: 1d6+7
    dex: 1d6+10
    agl: 1d6+7
    per: 1d6+10
    snt: 1d4
    aur: 1d4+7
    wil: 1d6+7
    rea: 1d6+7
    cre: 1d6+7
    emp: 1d4+4
    elo: 1d6+7
    mor: 1d4+4
  body:
    structure:
      zones:
        - name: Head and Arms
          shortcode: headzone
          probWeight: 2
        - name: Torso
          shortcode: torsozone
          probWeight: 2
        - name: Legs
          shortcode: legszone
          probWeight: 2
      parts:
        - name: Head
          shortcode: headpart
          bodyZoneCode: headzone
          roles:
            - vital
          canHoldItem: false
          probWeight: 6
        - name: Right Arm
          shortcode: rarmpart
          bodyZoneCode: headzone
          roles:
            - manipulator
          canHoldItem: true
          probWeight: 7
        - name: Left Arm
          shortcode: larmpart
          bodyZoneCode: headzone
          roles:
            - manipulator
          canHoldItem: true
          probWeight: 7
        - name: Torso
          shortcode: torsopart
          bodyZoneCode: torsozone
          roles:
            - core
          canHoldItem: false
          probWeight: 10
        - name: Right Leg
          shortcode: rlegpart
          bodyZoneCode: legszone
          roles:
            - locomotor
          canHoldItem: false
          probWeight: 5
        - name: Left Leg
          shortcode: llegpart
          bodyZoneCode: legszone
          roles:
            - locomotor
          canHoldItem: false
          probWeight: 5
      locations:
        - name: Head
          shortcode: headloc
          bodyPartCode: headpart
          bleedingSusceptibility: medium
          amputability: none
          shockValue: 5
          probWeight: 2
          protectionBase:
            blunt: 2
            edged: 3
            piercing: 1
            fire: 3
        - name: Neck
          shortcode: neckloc
          bodyPartCode: headpart
          bleedingSusceptibility: high
          amputability: low
          shockValue: 5
          probWeight: 1
          protectionBase:
            blunt: 2
            edged: 2
            piercing: 1
            fire: 2
        - name: Right Upper Arm
          shortcode: rupaloc
          bodyPartCode: rarmpart
          bleedingSusceptibility: medium
          amputability: medium
          shockValue: 3
          probWeight: 4
          protectionBase:
            blunt: 2
            edged: 3
            piercing: 1
            fire: 3
        - name: Right Lower Arm
          shortcode: rfraloc
          bodyPartCode: rarmpart
          bleedingSusceptibility: low
          amputability: medium
          shockValue: 1
          probWeight: 2
          protectionBase:
            blunt: 2
            edged: 2
            piercing: 1
            fire: 2
        - name: Right Hand
          shortcode: rhandloc
          bodyPartCode: rarmpart
          bleedingSusceptibility: none
          amputability: high
          shockValue: 2
          probWeight: 1
          protectionBase:
            blunt: 2
            edged: 2
            piercing: 1
            fire: 2
        - name: Left Upper Arm
          shortcode: lupaloc
          bodyPartCode: larmpart
          bleedingSusceptibility: medium
          amputability: medium
          shockValue: 3
          probWeight: 4
          protectionBase:
            blunt: 2
            edged: 3
            piercing: 1
            fire: 3
        - name: Left Lower Arm
          shortcode: lfraloc
          bodyPartCode: larmpart
          bleedingSusceptibility: low
          amputability: medium
          shockValue: 1
          probWeight: 2
          protectionBase:
            blunt: 2
            edged: 2
            piercing: 1
            fire: 2
        - name: Left Hand
          shortcode: lhandloc
          bodyPartCode: larmpart
          bleedingSusceptibility: none
          amputability: high
          shockValue: 2
          probWeight: 1
          protectionBase:
            blunt: 2
            edged: 2
            piercing: 1
            fire: 2
        - name: Thorax
          shortcode: thrxloc
          bodyPartCode: torsopart
          bleedingSusceptibility: medium
          amputability: none
          shockValue: 4
          probWeight: 4
          protectionBase:
            blunt: 2
            edged: 4
            piercing: 1
            fire: 4
        - name: Abdomen
          shortcode: abdmnloc
          bodyPartCode: torsopart
          bleedingSusceptibility: high
          amputability: none
          shockValue: 4
          probWeight: 3
          protectionBase:
            blunt: 2
            edged: 4
            piercing: 1
            fire: 4
        - name: Pelvis
          shortcode: plvisloc
          bodyPartCode: torsopart
          bleedingSusceptibility: medium
          amputability: none
          shockValue: 4
          probWeight: 3
          protectionBase:
            blunt: 2
            edged: 4
            piercing: 1
            fire: 4
        - name: Right Upper Leg
          shortcode: rthghloc
          bodyPartCode: rlegpart
          bleedingSusceptibility: medium
          amputability: low
          shockValue: 3
          probWeight: 5
          protectionBase:
            blunt: 2
            edged: 3
            piercing: 1
            fire: 3
        - name: Right Lower Leg
          shortcode: rcalfloc
          bodyPartCode: rlegpart
          bleedingSusceptibility: low
          amputability: medium
          shockValue: 1
          probWeight: 3
          protectionBase:
            blunt: 2
            edged: 4
            piercing: 1
            fire: 4
        - name: Right Foot
          shortcode: rfootloc
          bodyPartCode: rlegpart
          bleedingSusceptibility: none
          amputability: high
          shockValue: 2
          probWeight: 2
          protectionBase:
            blunt: 2
            edged: 3
            piercing: 1
            fire: 3
        - name: Left Upper Leg
          shortcode: lthghloc
          bodyPartCode: llegpart
          bleedingSusceptibility: medium
          amputability: low
          shockValue: 3
          probWeight: 5
          protectionBase:
            blunt: 2
            edged: 3
            piercing: 1
            fire: 3
        - name: Left Lower Leg
          shortcode: lcalfloc
          bodyPartCode: llegpart
          bleedingSusceptibility: low
          amputability: medium
          shockValue: 1
          probWeight: 3
          protectionBase:
            blunt: 2
            edged: 4
            piercing: 1
            fire: 4
        - name: Left Foot
          shortcode: lfootloc
          bodyPartCode: llegpart
          bleedingSusceptibility: none
          amputability: high
          shockValue: 2
          probWeight: 2
          protectionBase:
            blunt: 2
            edged: 3
            piercing: 1
            fire: 3
    weight:
      base: 90
      calc: "90"
    reachBase: 0
    bodyScaleBase: 0.91
    personalFatigue: enc + 5
  currentMoveMedium: terrestrial
  movementProfiles:
    - medium: terrestrial
      feetPerRound: 40
      leaguesPerWatch: 5
      encumbrance: floor(wt/4)
      strMod: -5 * floor((str - 10) / 2)
      disabled: false
  defaultCombatGroup: null
  items:
    - { shortcode: str, type: attribute, system: { scoreBase: 10 } }
    - { shortcode: end, type: attribute, system: { scoreBase: 10 } }
    - { shortcode: dex, type: attribute, system: { scoreBase: 13 } }
    - { shortcode: agl, type: attribute, system: { scoreBase: 10 } }
    - { shortcode: per, type: attribute, system: { scoreBase: 13 } }
    - { shortcode: snt, type: attribute, system: { scoreBase: 1 } }
    - { shortcode: aur, type: attribute, system: { scoreBase: 9 } }
    - { shortcode: wil, type: attribute, system: { scoreBase: 10 } }
    - { shortcode: rea, type: attribute, system: { scoreBase: 10 } }
    - { shortcode: cre, type: attribute, system: { scoreBase: 10 } }
    - { shortcode: emp, type: attribute, system: { scoreBase: 6 } }
    - { shortcode: elo, type: attribute, system: { scoreBase: 10 } }
    - { shortcode: mor, type: attribute, system: { scoreBase: 6 } }
    - { shortcode: awar, type: skill, system: { masteryLevelBase: 60 } }
    - { shortcode: stlth, type: skill, system: { masteryLevelBase: 55 } }
    - {
        shortcode: sprt,
        type: mysticalability,
        system: { masteryLevelBase: 27 },
      }
    - { shortcode: init, type: skill, system: { masteryLevelBase: 50 } }
    - { shortcode: dge, type: skill, system: { masteryLevelBase: 55 } }
    - { shortcode: shok, type: skill, system: { masteryLevelBase: 50 } }
    - { shortcode: srvl, type: skill, system: { masteryLevelBase: 66 } }
    - { shortcode: fltch, type: skill, system: { masteryLevelBase: 52 } }
    - { shortcode: herb, type: skill, system: { masteryLevelBase: 77 } }
    - name: Punch
      type: skill
      system:
        shortcode: punch
        subType: combattechnique
        masteryLevelBase: 60
        combatCategory: melee
        impairedByRoles:
          - manipulator
        strikeMode:
          type: melee
          shortcode: punch
          name: Punch
          minParts: 1
          assocSkillCode: null
          attack:
            disabled: false
            spread: 3
            modifier: 0
          impactBase:
            numDice: 1
            die: 6
            modifier: -3
            aspect: blunt
          lengthBase: 0
          defense:
            block:
              disabled: false
              modifier: -20
              successLevelMod: 0
            counterstrike:
              disabled: false
              modifier: 0
              successLevelMod: 0
          traits: {}
---

# Appearance {#appearance}

Barely four feet tall and wiry with it, the Arák is the smallest of the Gârgún — a hunched, quick-eyed thing with mottled grey-green hide drawn tight over knotted muscle. Its ears are large and mobile, its nose broad and constantly working; where its larger kin rely on bulk, the Arák relies on knowing the ground and everything moving on it.

# Dossier {#dossier}

The Arák is the scout and forager of Gârgún society, and the only one of the five with a nose worth the name. Arák bands range far ahead of a warhost, mapping trails, fouling water, and setting the crude snares and poisons their Herblore is famed for. They fight with the mankar and knife rather than the heavy weapons of their kin, and carry small bows they fletch themselves. Cornered, an Arák bargains before it fights; given a choice, it will lead a pursuer into worse company than its own.

## Attack Methods

### Punch

Every Gârgún fights bare-handed when it must, and the Small Gârgún is no exception. A fist reaches nothing and does little, but it can be thrown from any position and, unlike a beast's jaws, can be turned to block.

## Attributes

- **Strength:** 8-13 (1d6+7)

- **Endurance:** 8-13 (1d6+7)

- **Dexterity:** 11-16 (1d6+10)

- **Agility:** 8-13 (1d6+7)

- **Perception:** 11-16 (1d6+10)

- **Scent:** 1-4 (1d4)

- **Aura:** 8-11 (1d4+7)

- **Will:** 8-13 (1d6+7)

- **Reasoning:** 8-13 (1d6+7)

- **Creativity:** 8-13 (1d6+7)

- **Empathy:** 5-8 (1d4+4)

- **Eloquence:** 8-13 (1d6+7)

- **Morality:** 5-8 (1d4+4)
