---
tags:
  - folk
  - gargun
name:
  full: Gârgún Viásal
id: Ga0rgunViasal0A
shortcode: viasal
slug: gargun-viasal
img: systems/sohl/assets/icons/game-icons/delapouite/orc-head.svg
portrait: ""
type: being
sohl:
  archetype: 0
  attrRollFormula:
    str: 1d6+9
    end: 1d6+9
    dex: 1d6+9
    agl: 1d6+7
    per: 1d6+7
    aur: 1d4+6
    wil: 1d6+10
    rea: 1d4+7
    cre: 1d4+5
    emp: 1d4+2
    elo: 1d4+6
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
            blunt: 8
            edged: 14
            piercing: 10
            fire: 8
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
            blunt: 6
            edged: 11
            piercing: 6
            fire: 8
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
            blunt: 6
            edged: 11
            piercing: 6
            fire: 8
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
            blunt: 6
            edged: 11
            piercing: 6
            fire: 8
        - name: Abdomen
          shortcode: abdmnloc
          bodyPartCode: torsopart
          bleedingSusceptibility: high
          amputability: none
          shockValue: 4
          probWeight: 3
          protectionBase:
            blunt: 6
            edged: 11
            piercing: 6
            fire: 8
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
      base: 220
      calc: "220"
    reachBase: 0
    bodyScaleBase: 1.09
    personalFatigue: enc + 5
  currentMoveMedium: terrestrial
  movementProfiles:
    - medium: terrestrial
      feetPerRound: 35
      leaguesPerWatch: 5
      encumbrance: floor(wt/4)
      strMod: -5 * floor((str - 10) / 2)
      disabled: false
  defaultCombatGroup: null
  items:
    - { shortcode: str, type: attribute, system: { scoreBase: 12 } }
    - { shortcode: end, type: attribute, system: { scoreBase: 12 } }
    - { shortcode: dex, type: attribute, system: { scoreBase: 12 } }
    - { shortcode: agl, type: attribute, system: { scoreBase: 10 } }
    - { shortcode: per, type: attribute, system: { scoreBase: 10 } }
    - { shortcode: aur, type: attribute, system: { scoreBase: 8 } }
    - { shortcode: wil, type: attribute, system: { scoreBase: 13 } }
    - { shortcode: rea, type: attribute, system: { scoreBase: 9 } }
    - { shortcode: cre, type: attribute, system: { scoreBase: 7 } }
    - { shortcode: emp, type: attribute, system: { scoreBase: 4 } }
    - { shortcode: elo, type: attribute, system: { scoreBase: 8 } }
    - { shortcode: mor, type: attribute, system: { scoreBase: 6 } }
    - { shortcode: awar, type: skill, system: { masteryLevelBase: 55 } }
    - { shortcode: stlth, type: skill, system: { masteryLevelBase: 40 } }
    - { shortcode: sprt, type: mysticalability, system: { masteryLevelBase: 30 } }
    - { shortcode: init, type: skill, system: { masteryLevelBase: 55 } }
    - { shortcode: dge, type: skill, system: { masteryLevelBase: 50 } }
    - { shortcode: shok, type: skill, system: { masteryLevelBase: 60 } }
    - { shortcode: srvl, type: skill, system: { masteryLevelBase: 44 } }
    - { shortcode: archery, type: skill, system: { masteryLevelBase: 44 } }
    - { shortcode: clmb, type: skill, system: { masteryLevelBase: 44 } }
    - { shortcode: cmd, type: skill, system: { masteryLevelBase: 62 } }
    - { shortcode: thro, type: skill, system: { masteryLevelBase: 55 } }
    - name: Punch
      type: skill
      system:
        shortcode: punch
        subType: combattechnique
        masteryLevelBase: 55
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
            modifier: -2
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

Rust-red and rangy, the Viásal is the warrior of the Gârgún line: hide thickened to plate over skull, arms and trunk, a heavy jaw, and eyes set deep under a shelf of bone. It carries a two-handed handaxe of its own forging and looks for a reason to use it.

# Dossier {#dossier}

Where the Khánu commands and the Hyéka digs, the Viásal fights. They form the bulk of any Gârgún warhost's fighting strength and are the species most often met by anyone who meets Gârgún at all. Their natural armour is the equal of the Khánu's, and their appetite for a fight considerably greater; what they lack is the judgement to know which fights to take. A Viásal band with no enemy to hand will find one, and the lowest Empathy of any Gârgún means it rarely matters to them who.

## Attack Methods

### Punch

Every Gârgún fights bare-handed when it must, and the Red Gârgún is no exception. A fist reaches nothing and does little, but it can be thrown from any position and, unlike a beast's jaws, can be turned to block.

## Attributes

- **Strength:** 10-15 (1d6+9)

- **Endurance:** 10-15 (1d6+9)

- **Dexterity:** 10-15 (1d6+9)

- **Agility:** 8-13 (1d6+7)

- **Perception:** 8-13 (1d6+7)

- **Aura:** 7-10 (1d4+6)

- **Will:** 11-16 (1d6+10)

- **Reasoning:** 8-11 (1d4+7)

- **Creativity:** 6-9 (1d4+5)

- **Empathy:** 3-6 (1d4+2)

- **Eloquence:** 7-10 (1d4+6)

- **Morality:** 5-8 (1d4+4)
