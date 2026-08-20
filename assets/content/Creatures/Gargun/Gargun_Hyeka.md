---
aliases:
  - Gârgún Hyéka
  - Brown Gârgún
tags:
  - folk
  - gargun
name:
  full: Gârgún Hyéka
  aliases: []
id: Ga0rgunHyeka01A
shortcode: hyeka
slug: gargun-hyeka
img: systems/sohl/assets/icons/game-icons/delapouite/orc-head.svg
portrait: ""
type: being
package: kethira
sohl:
  archetype: 0
  attributes:
    str: 11
    end: 11
    dex: 12
    agl: 9
    per: 11
    aur: 7
    wil: 11
    rea: 9
    cre: 6
    emp: 5
    elo: 9
    mor: 6
  attrRollFormula:
    str: 1d6+8
    end: 1d6+8
    dex: 1d6+9
    agl: 1d4+7
    per: 1d6+8
    aur: 1d4+5
    wil: 1d6+8
    rea: 1d4+7
    cre: 1d4+4
    emp: 1d4+3
    elo: 1d4+7
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
      base: 160
      calc: "160"
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
    - shortcode: awar
      type: skill
      system:
        masteryLevelBase: 55
    - shortcode: stlth
      type: skill
      system:
        masteryLevelBase: 30
    - shortcode: sprt
      type: mysticalability
      system:
        masteryLevelBase: 27
    - shortcode: init
      type: skill
      system:
        masteryLevelBase: 50
    - shortcode: dge
      type: skill
      system:
        masteryLevelBase: 50
    - shortcode: shok
      type: skill
      system:
        masteryLevelBase: 55
    - shortcode: srvl
      type: skill
      system:
        masteryLevelBase: 33
    - shortcode: anmcft
      type: skill
      system:
        masteryLevelBase: 24
    - shortcode: mtlc
      type: skill
      system:
        masteryLevelBase: 66
    - shortcode: mnrl
      type: skill
      system:
        masteryLevelBase: 70
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

A squat, heavy-shouldered Gârgún the colour of wet clay, the Hyéka is built low and thick, with forearms out of proportion to the rest of it and hands scarred by decades at the face of a mine. Its eyes are small and weak in daylight; underground they miss nothing.

# Dossier {#dossier}

The Hyéka are the miners and smiths of the Gârgún, and the most numerous of the five. Their tunnels honeycomb the roots of mountains, and the metalwork that comes out of them — crude, heavy, and serviceable — arms every other species. A Hyéka fights with the five-pound pickaxe it works with, two-handed and without artistry, and will keep swinging long after a wiser creature has run. They are indifferent soldiers in the open field and ruinous opponents in a tunnel.

## Attack Methods

### Punch

Every Gârgún fights bare-handed when it must, and the Brown Gârgún is no exception. A fist reaches nothing and does little, but it can be thrown from any position and, unlike a beast's jaws, can be turned to block.

## Attributes

- **Strength:** 9-14 (1d6+8)

- **Endurance:** 9-14 (1d6+8)

- **Dexterity:** 10-15 (1d6+9)

- **Agility:** 8-11 (1d4+7)

- **Perception:** 9-14 (1d6+8)

- **Aura:** 6-9 (1d4+5)

- **Will:** 9-14 (1d6+8)

- **Reasoning:** 8-11 (1d4+7)

- **Creativity:** 5-8 (1d4+4)

- **Empathy:** 4-7 (1d4+3)

- **Eloquence:** 8-11 (1d4+7)

- **Morality:** 5-8 (1d4+4)
