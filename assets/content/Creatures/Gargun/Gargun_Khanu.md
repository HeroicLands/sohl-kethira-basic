---
aliases:
  - Gârgún Khánu
  - Great Gârgún
tags:
  - folk
  - gargun
name:
  full: Gârgún Khánu
  aliases: []
id: Ga0rgunKhanu01A
shortcode: khanu
slug: gargun-khanu
img: systems/sohl/assets/icons/game-icons/delapouite/orc-head.svg
portrait: ""
type: creature
package: kethira
sohl:
  archetype: 0
  attributes:
    str: 13
    end: 13
    dex: 12
    agl: 9
    per: 10
    aur: 9
    wil: 13
    rea: 10
    cre: 7
    emp: 6
    elo: 10
    mor: 6
  attrRollFormula:
    str: 1d6+10
    end: 1d6+10
    dex: 1d6+9
    agl: 1d4+7
    per: 1d6+7
    aur: 1d4+7
    wil: 1d6+10
    rea: 1d6+7
    cre: 1d4+5
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
      base: 300
      calc: "300"
    reachBase: 0
    bodyScaleBase: 1.18
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
        masteryLevelBase: 36
    - shortcode: sprt
      type: mysticalability
      system:
        masteryLevelBase: 33
    - shortcode: init
      type: skill
      system:
        masteryLevelBase: 60
    - shortcode: dge
      type: skill
      system:
        masteryLevelBase: 45
    - shortcode: shok
      type: skill
      system:
        masteryLevelBase: 65
    - shortcode: srvl
      type: skill
      system:
        masteryLevelBase: 44
    - shortcode: archery
      type: skill
      system:
        masteryLevelBase: 44
    - shortcode: clmb
      type: skill
      system:
        masteryLevelBase: 40
    - shortcode: cmd
      type: skill
      system:
        masteryLevelBase: 66
    - shortcode: thro
      type: skill
      system:
        masteryLevelBase: 55
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

The Khánu stands a head and shoulders above any other Gârgún, a slab-bodied giant whose hide has hardened over the skull and across the chest into something between callus and horn. It carries the mang — a great two-handed blade of Gârgún make — as though it weighed nothing, and wears the scars of its command openly.

# Dossier {#dossier}

Khánu are born to rule other Gârgún and do so by the only argument their kin respect. A warhost of any size will have one at its head, and the discipline it imposes is the difference between a mob and an army. The natural armour over its skull and torso turns blows that would end a lesser Gârgún, and it fights with sword and shield in a style that would not disgrace a human knight. Khánu are rare; killing one reliably shatters the host it commanded.

## Attack Methods

### Punch

Every Gârgún fights bare-handed when it must, and the Great Gârgún is no exception. A fist reaches nothing and does little, but it can be thrown from any position and, unlike a beast's jaws, can be turned to block.

## Attributes

- **Strength:** 11-16 (1d6+10)

- **Endurance:** 11-16 (1d6+10)

- **Dexterity:** 10-15 (1d6+9)

- **Agility:** 8-11 (1d4+7)

- **Perception:** 8-13 (1d6+7)

- **Aura:** 8-11 (1d4+7)

- **Will:** 11-16 (1d6+10)

- **Reasoning:** 8-13 (1d6+7)

- **Creativity:** 6-9 (1d4+5)

- **Empathy:** 5-8 (1d4+4)

- **Eloquence:** 8-13 (1d6+7)

- **Morality:** 5-8 (1d4+4)
