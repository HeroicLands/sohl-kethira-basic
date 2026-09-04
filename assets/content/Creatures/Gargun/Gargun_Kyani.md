---
tags:
  - folk
  - gargun
name:
  full: Gârgún Kyáni
  aliases:
    - White Gârgún
id: Ga0rgunKyani01A
shortcode: kyani
slug: gargun-kyani
img: systems/sohl/assets/icons/game-icons/delapouite/orc-head.svg
portrait: null
type: being
sohl:
  archetype: 0
  attrRollFormula:
    str: 1d6+8
    end: 1d6+8
    dex: 1d6+9
    agl: 1d6+7
    per: 1d6+7
    aur: 1d6+7
    wil: 1d6+9
    rea: 1d6+8
    cre: 1d4+7
    emp: 1d4+6
    elo: 1d6+8
    mor: 1d4+7
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
            blunt: 4
            edged: 5
            piercing: 2
            fire: 5
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
            blunt: 4
            edged: 5
            piercing: 2
            fire: 5
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
            blunt: 4
            edged: 6
            piercing: 2
            fire: 6
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
            blunt: 4
            edged: 5
            piercing: 2
            fire: 5
        - name: Right Lower Leg
          shortcode: rcalfloc
          bodyPartCode: rlegpart
          bleedingSusceptibility: low
          amputability: medium
          shockValue: 1
          probWeight: 3
          protectionBase:
            blunt: 2
            edged: 3
            piercing: 1
            fire: 3
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
            blunt: 4
            edged: 5
            piercing: 2
            fire: 5
        - name: Left Lower Leg
          shortcode: lcalfloc
          bodyPartCode: llegpart
          bleedingSusceptibility: low
          amputability: medium
          shockValue: 1
          probWeight: 3
          protectionBase:
            blunt: 2
            edged: 3
            piercing: 1
            fire: 3
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
      base: 180
      calc: "180"
    reachBase: 0
    bodyScaleBase: 1
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
    - { shortcode: str, type: attribute, system: { scoreBase: 11 } }
    - { shortcode: end, type: attribute, system: { scoreBase: 11 } }
    - { shortcode: dex, type: attribute, system: { scoreBase: 12 } }
    - { shortcode: agl, type: attribute, system: { scoreBase: 10 } }
    - { shortcode: per, type: attribute, system: { scoreBase: 10 } }
    - { shortcode: aur, type: attribute, system: { scoreBase: 10 } }
    - { shortcode: wil, type: attribute, system: { scoreBase: 12 } }
    - { shortcode: rea, type: attribute, system: { scoreBase: 11 } }
    - { shortcode: cre, type: attribute, system: { scoreBase: 9 } }
    - { shortcode: emp, type: attribute, system: { scoreBase: 8 } }
    - { shortcode: elo, type: attribute, system: { scoreBase: 11 } }
    - { shortcode: mor, type: attribute, system: { scoreBase: 9 } }
    - { shortcode: awar, type: skill, system: { masteryLevelBase: 55 } }
    - { shortcode: stlth, type: skill, system: { masteryLevelBase: 40 } }
    - { shortcode: sprt, type: mysticalability, system: { masteryLevelBase: 33 } }
    - { shortcode: init, type: skill, system: { masteryLevelBase: 60 } }
    - { shortcode: dge, type: skill, system: { masteryLevelBase: 50 } }
    - { shortcode: shok, type: skill, system: { masteryLevelBase: 55 } }
    - { shortcode: srvl, type: skill, system: { masteryLevelBase: 55 } }
    - { shortcode: anmcft, type: skill, system: { masteryLevelBase: 57 } }
    - { shortcode: jewl, type: skill, system: { masteryLevelBase: 55 } }
    - { shortcode: wpnc, type: skill, system: { masteryLevelBase: 60 } }
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

Pale to the point of bloodlessness, the Kyáni is the least brutish-looking of the Gârgún — lean, upright, with fine dark eyes and hands that do delicate work. A ridge of tougher hide runs over its shoulders, chest and thighs, the pallor there shading to bone.

# Dossier {#dossier}

Kyáni are the craftsmen and beast-handlers of Gârgún society, and the only species with anything a human would recognise as art. Their jewelwork and weaponcraft trade far beyond their own tunnels, often through intermediaries who never learn what made it. They keep and train animals that other Gârgún merely eat. In war they favour the javelin and fight at a distance, which their kin read as cowardice and their enemies learn to read as judgement.

## Attack Methods

### Punch

Every Gârgún fights bare-handed when it must, and the White Gârgún is no exception. A fist reaches nothing and does little, but it can be thrown from any position and, unlike a beast's jaws, can be turned to block.

## Attributes

- **Strength:** 9-14 (1d6+8)

- **Endurance:** 9-14 (1d6+8)

- **Dexterity:** 10-15 (1d6+9)

- **Agility:** 8-13 (1d6+7)

- **Perception:** 8-13 (1d6+7)

- **Aura:** 8-13 (1d6+7)

- **Will:** 10-15 (1d6+9)

- **Reasoning:** 9-14 (1d6+8)

- **Creativity:** 8-11 (1d4+7)

- **Empathy:** 7-10 (1d4+6)

- **Eloquence:** 9-14 (1d6+8)

- **Morality:** 8-11 (1d4+7)
