---
aliases:
  - Nólah
  - Nolahrin
  - Dank Stalker
tags:
  - creature
name:
  full: Nólah
  aliases: []
id: NolahDankStalkr
shortcode: nolah
slug: nolah
img: systems/sohl/assets/icons/game-icons/lorc/spectre.svg
portrait: ""
type: being
package: kethira
sohl:
  archetype: 0
  attributes:
    str: 14
    end: 19
    dex: 12
    agl: 17
    per: 13
    aur: 15
    wil: 11
    rea: 12
    cre: 12
    emp: 8
    elo: 5
  attrRollFormula:
    str: 1d6+11
    end: 1d6+16
    dex: 1d6+9
    agl: 1d6+14
    per: 1d6+10
    aur: 1d6+12
    wil: 1d6+8
    rea: 1d6+9
    cre: 1d6+9
    emp: 1d4+6
    elo: 1d4+3
  body:
    structure:
      zones:
        - name: Head
          shortcode: headzone
          probWeight: 1
        - name: Arms
          shortcode: armszone
          probWeight: 2
        - name: Torso
          shortcode: torsozone
          probWeight: 4
        - name: Legs
          shortcode: legszone
          probWeight: 3
      parts:
        - name: Head
          shortcode: headpart
          bodyZoneCode: headzone
          roles:
            - vital
          canHoldItem: false
          probWeight: 10
        - name: Right Arm
          shortcode: rarmpart
          bodyZoneCode: armszone
          roles:
            - manipulator
          canHoldItem: true
          probWeight: 2
        - name: Left Arm
          shortcode: larmpart
          bodyZoneCode: armszone
          roles:
            - manipulator
          canHoldItem: true
          probWeight: 2
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
          probWeight: 3
        - name: Left Leg
          shortcode: llegpart
          bodyZoneCode: legszone
          roles:
            - locomotor
          canHoldItem: false
          probWeight: 3
      locations:
        - name: Head
          shortcode: headloc
          bodyPartCode: headpart
          bleedingSusceptibility: medium
          amputability: none
          shockValue: 5
          probWeight: 8
          protectionBase:
            blunt: 5
            edged: 7
            piercing: 6
            fire: 5
        - name: Neck
          shortcode: neckloc
          bodyPartCode: headpart
          bleedingSusceptibility: high
          amputability: low
          shockValue: 5
          probWeight: 2
          protectionBase:
            blunt: 6
            edged: 8
            piercing: 7
            fire: 6
        - name: Right Upper Arm
          shortcode: rupaloc
          bodyPartCode: rarmpart
          bleedingSusceptibility: medium
          amputability: medium
          shockValue: 3
          probWeight: 5
          protectionBase: &a1
            blunt: 6
            edged: 8
            piercing: 7
            fire: 6
        - name: Right Lower Arm
          shortcode: rfraloc
          bodyPartCode: rarmpart
          bleedingSusceptibility: low
          amputability: medium
          shockValue: 1
          probWeight: 3
          protectionBase: &a2
            blunt: 5
            edged: 7
            piercing: 6
            fire: 5
        - name: Right Hand
          shortcode: rhandloc
          bodyPartCode: rarmpart
          bleedingSusceptibility: none
          amputability: high
          shockValue: 2
          probWeight: 2
          protectionBase: &a3
            blunt: 4
            edged: 6
            piercing: 5
            fire: 4
        - name: Left Upper Arm
          shortcode: lupaloc
          bodyPartCode: larmpart
          bleedingSusceptibility: medium
          amputability: medium
          shockValue: 3
          probWeight: 5
          protectionBase: *a1
        - name: Left Lower Arm
          shortcode: lfraloc
          bodyPartCode: larmpart
          bleedingSusceptibility: low
          amputability: medium
          shockValue: 1
          probWeight: 3
          protectionBase: *a2
        - name: Left Hand
          shortcode: lhandloc
          bodyPartCode: larmpart
          bleedingSusceptibility: none
          amputability: high
          shockValue: 2
          probWeight: 2
          protectionBase: *a3
        - name: Thorax
          shortcode: thrxloc
          bodyPartCode: torsopart
          bleedingSusceptibility: medium
          amputability: none
          shockValue: 4
          probWeight: 4
          protectionBase:
            blunt: 6
            edged: 8
            piercing: 7
            fire: 6
        - name: Abdomen
          shortcode: abdmnloc
          bodyPartCode: torsopart
          bleedingSusceptibility: high
          amputability: none
          shockValue: 4
          probWeight: 3
          protectionBase:
            blunt: 6
            edged: 8
            piercing: 7
            fire: 6
        - name: Pelvis
          shortcode: plvisloc
          bodyPartCode: torsopart
          bleedingSusceptibility: medium
          amputability: none
          shockValue: 4
          probWeight: 3
          protectionBase:
            blunt: 6
            edged: 8
            piercing: 7
            fire: 6
        - name: Right Upper Leg
          shortcode: rthghloc
          bodyPartCode: rlegpart
          bleedingSusceptibility: medium
          amputability: low
          shockValue: 3
          probWeight: 5
          protectionBase: &a4
            blunt: 6
            edged: 8
            piercing: 7
            fire: 6
        - name: Right Lower Leg
          shortcode: rcalfloc
          bodyPartCode: rlegpart
          bleedingSusceptibility: low
          amputability: medium
          shockValue: 1
          probWeight: 3
          protectionBase: &a5
            blunt: 5
            edged: 7
            piercing: 6
            fire: 5
        - name: Right Foot
          shortcode: rfootloc
          bodyPartCode: rlegpart
          bleedingSusceptibility: none
          amputability: high
          shockValue: 2
          probWeight: 2
          protectionBase: &a6
            blunt: 4
            edged: 6
            piercing: 5
            fire: 4
        - name: Left Upper Leg
          shortcode: lthghloc
          bodyPartCode: llegpart
          bleedingSusceptibility: medium
          amputability: low
          shockValue: 3
          probWeight: 5
          protectionBase: *a4
        - name: Left Lower Leg
          shortcode: lcalfloc
          bodyPartCode: llegpart
          bleedingSusceptibility: low
          amputability: medium
          shockValue: 1
          probWeight: 3
          protectionBase: *a5
        - name: Left Foot
          shortcode: lfootloc
          bodyPartCode: llegpart
          bleedingSusceptibility: none
          amputability: high
          shockValue: 2
          probWeight: 2
          protectionBase: *a6
    weight:
      base: 250
      calc: "250"
    reachBase: 0
    bodyScaleBase: 1.27
    personalFatigue: enc + 5
  currentMoveMedium: terrestrial
  movementProfiles:
    - medium: terrestrial
      feetPerRound: 65
      leaguesPerWatch: 5
      encumbrance: floor(wt/4)
      strMod: -5 * floor((str - 10) / 2)
      disabled: false
  defaultCombatGroup: null
  items:
    - shortcode: awar
      type: skill
      system:
        masteryLevelBase: 60
    - shortcode: init
      type: skill
      system:
        masteryLevelBase: 60
    - shortcode: shok
      type: skill
      system:
        masteryLevelBase: 80
    - shortcode: sprt
      type: mysticalability
      system:
        masteryLevelBase: 52
    - shortcode: stlth
      type: skill
      system:
        masteryLevelBase: 75
    - shortcode: dge
      type: skill
      system:
        masteryLevelBase: 75
    - name: Grab
      type: skill
      system:
        shortcode: grab
        subType: combattechnique
        masteryLevelBase: 75
        combatCategory: melee
        impairedByRoles:
          - manipulator
        strikeMode:
          type: melee
          shortcode: grab
          name: Grab
          minParts: 1
          assocSkillCode: null
          attack:
            disabled: false
            spread: 4
            modifier: 0
          impactBase:
            numDice: 1
            die: 6
            modifier: 14
            aspect: blunt
          lengthBase: 2
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
            grapple: true
---

# Appearance {#appearance}

A tall, moist, hairless humanoid of six or seven feet, grey as wet stone and able to fold itself through gaps that should not admit it. It carries a morningstar it did not make, and it stacks the bones of what it has eaten into cairns.

# Dossier {#dossier}

_The Dank Stalker_ inhabits damp caves and ruined dungeons, or hides beneath remote shadowy bridges. Able to contort their moist, hairless bodies through slim cracks of rock and earth, Nolahrin stalk prey alone, with silent cunning. An arcane talent allows them to lure far-off victims to their lairs. A Nólah has a ghastly taste for human flesh.

**Contort.** Nolahrin may squeeze through cracks at least three inches wide, at Move 10.

**Yearning Geas.** As a one-minute action, a Nólah tests its Geas talent against any creature within half Index miles, attempting to lure it to the Nólah's location — not always its lair. The victim opposes with a Spirit test, ties broken in the victim's favour, and an awake target gets a +20 bonus. Resisted at one level, the victim merely shrugs it off; at three, it senses the Nólah's lair as well. Lured, it arrives confused, stunned, or still sleepwalking, by the margin of its loss.

The Geas talent has no corresponding skill in this system and is not shipped as an item; run it from this description. A Nólah's morningstar is ordinary gear rather than a natural weapon, so it is not shipped either — arm one from the weapons compendium as you see fit.

## Attributes

- **Strength:** 12-17 (1d6+11)

- **Endurance:** 17-22 (1d6+16)

- **Dexterity:** 10-15 (1d6+9)

- **Agility:** 15-20 (1d6+14)

- **Perception:** 11-16 (1d6+10)

- **Aura:** 13-18 (1d6+12)

- **Will:** 9-14 (1d6+8)

- **Reasoning:** 10-15 (1d6+9)

- **Creativity:** 10-15 (1d6+9)

- **Empathy:** 7-10 (1d4+6)

- **Eloquence:** 4-7 (1d4+3)
