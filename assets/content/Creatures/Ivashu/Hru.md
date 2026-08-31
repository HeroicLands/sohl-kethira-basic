---
aliases:
  - Hrú
  - Rock Giant
tags:
  - creature
name:
  full: Hrú
  aliases: []
id: HruRockGiant001
shortcode: hru
slug: hru
img: systems/sohl/assets/icons/game-icons/delapouite/rock-golem.svg
portrait: ""
type: being
sohl:
  archetype: 0
  attrRollFormula:
    str: 1d6+47
    end: 1d6+37
    dex: 1d4+6
    agl: 1d4+4
    per: 1d4+6
    aur: 1d4+4
    wil: 1d6+9
    rea: 1d6+7
    cre: 1d4+2
    emp: 1d4+4
    elo: 1d4
  body:
    structure:
      zones:
        - name: Head
          shortcode: headzone
          probWeight: 4
        - name: Arms
          shortcode: armszone
          probWeight: 8
        - name: Torso
          shortcode: torsozone
          probWeight: 16
        - name: Legs
          shortcode: legszone
          probWeight: 12
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
            blunt: 21
            edged: 22
            piercing: 21
            fire: 23
        - name: Neck
          shortcode: neckloc
          bodyPartCode: headpart
          bleedingSusceptibility: high
          amputability: low
          shockValue: 5
          probWeight: 2
          protectionBase:
            blunt: 19
            edged: 20
            piercing: 19
            fire: 21
        - name: Right Upper Arm
          shortcode: rupaloc
          bodyPartCode: rarmpart
          bleedingSusceptibility: medium
          amputability: medium
          shockValue: 3
          probWeight: 5
          protectionBase: &a1
            blunt: 21
            edged: 22
            piercing: 21
            fire: 23
        - name: Right Lower Arm
          shortcode: rfraloc
          bodyPartCode: rarmpart
          bleedingSusceptibility: low
          amputability: medium
          shockValue: 1
          probWeight: 3
          protectionBase: &a2
            blunt: 20
            edged: 21
            piercing: 20
            fire: 22
        - name: Right Hand
          shortcode: rhandloc
          bodyPartCode: rarmpart
          bleedingSusceptibility: none
          amputability: high
          shockValue: 2
          probWeight: 2
          protectionBase: &a3
            blunt: 19
            edged: 20
            piercing: 19
            fire: 21
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
            blunt: 21
            edged: 22
            piercing: 21
            fire: 23
        - name: Abdomen
          shortcode: abdmnloc
          bodyPartCode: torsopart
          bleedingSusceptibility: high
          amputability: none
          shockValue: 4
          probWeight: 3
          protectionBase:
            blunt: 21
            edged: 22
            piercing: 21
            fire: 23
        - name: Pelvis
          shortcode: plvisloc
          bodyPartCode: torsopart
          bleedingSusceptibility: medium
          amputability: none
          shockValue: 4
          probWeight: 3
          protectionBase:
            blunt: 21
            edged: 22
            piercing: 21
            fire: 23
        - name: Right Upper Leg
          shortcode: rthghloc
          bodyPartCode: rlegpart
          bleedingSusceptibility: medium
          amputability: low
          shockValue: 3
          probWeight: 5
          protectionBase: &a4
            blunt: 21
            edged: 22
            piercing: 21
            fire: 23
        - name: Right Lower Leg
          shortcode: rcalfloc
          bodyPartCode: rlegpart
          bleedingSusceptibility: low
          amputability: medium
          shockValue: 1
          probWeight: 3
          protectionBase: &a5
            blunt: 20
            edged: 21
            piercing: 20
            fire: 22
        - name: Right Foot
          shortcode: rfootloc
          bodyPartCode: rlegpart
          bleedingSusceptibility: none
          amputability: high
          shockValue: 2
          probWeight: 2
          protectionBase: &a6
            blunt: 19
            edged: 20
            piercing: 19
            fire: 21
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
      base: 7000
      calc: "7000"
    reachBase: 0
    bodyScaleBase: 4.55
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
    - { shortcode: str, type: attribute, system: { scoreBase: 50 } }
    - { shortcode: end, type: attribute, system: { scoreBase: 40 } }
    - { shortcode: dex, type: attribute, system: { scoreBase: 8 } }
    - { shortcode: agl, type: attribute, system: { scoreBase: 6 } }
    - { shortcode: per, type: attribute, system: { scoreBase: 8 } }
    - { shortcode: aur, type: attribute, system: { scoreBase: 6 } }
    - { shortcode: wil, type: attribute, system: { scoreBase: 12 } }
    - { shortcode: rea, type: attribute, system: { scoreBase: 10 } }
    - { shortcode: cre, type: attribute, system: { scoreBase: 4 } }
    - { shortcode: emp, type: attribute, system: { scoreBase: 6 } }
    - { shortcode: elo, type: attribute, system: { scoreBase: 1 } }
    - { shortcode: awar, type: skill, system: { masteryLevelBase: 30 } }
    - { shortcode: init, type: skill, system: { masteryLevelBase: 55 } }
    - { shortcode: shok, type: skill, system: { masteryLevelBase: 90 } }
    - {
        shortcode: sprt,
        type: mysticalability,
        system: { masteryLevelBase: 27 },
      }
    - { shortcode: stlth, type: skill, system: { masteryLevelBase: 21 } }
    - { shortcode: dge, type: skill, system: { masteryLevelBase: 35 } }
    - name: Kick
      type: skill
      system:
        shortcode: kick
        subType: combattechnique
        masteryLevelBase: 60
        combatCategory: melee
        impairedByRoles:
          - locomotor
        strikeMode:
          type: melee
          shortcode: kick
          name: Kick
          minParts: 1
          assocSkillCode: null
          attack:
            disabled: false
            spread: 16
            modifier: 0
          impactBase:
            numDice: 1
            die: 6
            modifier: 21
            aspect: blunt
          lengthBase: 7
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
            trample: true
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
            spread: 16
            modifier: 0
          impactBase:
            numDice: 1
            die: 6
            modifier: 20
            aspect: blunt
          lengthBase: 6
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

By day, an inert pile of rocks or a large boulder, indistinguishable from the scree around it. By night, an immensely bloated humanoid twelve to fifteen feet tall, its dry, hardened body furred with lichen and moss, moving with the unhurried certainty of a landslide.

# Dossier {#dossier}

Groups of up to forty Hru lie strewn across high mountain wastes through the daylight hours. They remain peaceful unless their stony fastness is defiled or threatened.

**Rumble.** At night Hru converse with each other through strange, rumbling songs. The register is so deep that it causes discomfort in other beings: any non-Hru within a league must test Endurance at the start of each turn or suffer −20 to all actions for one round.

**Trample.** When moving over a prone target, a Hru may make one kick attack.

**Transform.** An hour before sunrise a Hru tests Spirit once every minute; any success transforms it into a pile of rocks or a single boulder, and it repeats until it succeeds. The shape holds until an hour after sunset.

## Attributes

- **Strength:** 48-53 (1d6+47)

- **Endurance:** 38-43 (1d6+37)

- **Dexterity:** 7-10 (1d4+6)

- **Agility:** 5-8 (1d4+4)

- **Perception:** 7-10 (1d4+6)

- **Aura:** 5-8 (1d4+4)

- **Will:** 10-15 (1d6+9)

- **Reasoning:** 8-13 (1d6+7)

- **Creativity:** 3-6 (1d4+2)

- **Empathy:** 5-8 (1d4+4)

- **Eloquence:** 1-4 (1d4)
