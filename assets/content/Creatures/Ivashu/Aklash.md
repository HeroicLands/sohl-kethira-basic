---
aliases:
  - Áklash
tags:
  - creature
name:
  full: Áklash
  aliases: []
id: AklashChokeWind
shortcode: aklash
slug: aklash
img: systems/sohl/assets/icons/game-icons/skoll/troll.svg
portrait: ""
type: creature
package: kethira
sohl:
  archetype: 0
  attributes:
    str: 24
    end: 18
    dex: 10
    agl: 8
    per: 7
    aur: 5
    wil: 14
    rea: 4
    cre: 2
    emp: 3
    elo: 2
  attrRollFormula:
    str: 1d6+21
    end: 1d6+15
    dex: 1d6+7
    agl: 1d4+6
    per: 1d4+5
    aur: 1d4+3
    wil: 1d6+11
    rea: 1d4+2
    cre: 1d4
    emp: 1d4+1
    elo: 1d4
  body:
    structure:
      zones:
        - name: Head
          shortcode: headzone
          probWeight: 2
        - name: Arms
          shortcode: armszone
          probWeight: 4
        - name: Torso
          shortcode: torsozone
          probWeight: 6
        - name: Legs
          shortcode: legszone
          probWeight: 4
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
            - vital
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
          shockValue: 4
          probWeight: 8
          protectionBase:
            blunt: 9
            edged: 8
            piercing: 7
            fire: 6
        - name: Neck
          shortcode: neckloc
          bodyPartCode: headpart
          bleedingSusceptibility: high
          amputability: low
          shockValue: 5
          probWeight: 2
          protectionBase:
            blunt: 10
            edged: 9
            piercing: 8
            fire: 7
        - name: Right Upper Arm
          shortcode: rupaloc
          bodyPartCode: rarmpart
          bleedingSusceptibility: medium
          amputability: medium
          shockValue: 3
          probWeight: 5
          protectionBase: &a1
            blunt: 10
            edged: 9
            piercing: 8
            fire: 7
        - name: Right Lower Arm
          shortcode: rfraloc
          bodyPartCode: rarmpart
          bleedingSusceptibility: low
          amputability: medium
          shockValue: 1
          probWeight: 3
          protectionBase: &a2
            blunt: 9
            edged: 8
            piercing: 7
            fire: 6
        - name: Right Hand
          shortcode: rhandloc
          bodyPartCode: rarmpart
          bleedingSusceptibility: none
          amputability: high
          shockValue: 2
          probWeight: 2
          protectionBase: &a3
            blunt: 8
            edged: 7
            piercing: 6
            fire: 5
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
          shockValue: 5
          probWeight: 4
          protectionBase:
            blunt: 11
            edged: 10
            piercing: 9
            fire: 8
        - name: Abdomen
          shortcode: abdmnloc
          bodyPartCode: torsopart
          bleedingSusceptibility: high
          amputability: none
          shockValue: 4
          probWeight: 3
          protectionBase:
            blunt: 12
            edged: 11
            piercing: 10
            fire: 9
        - name: Pelvis
          shortcode: plvisloc
          bodyPartCode: torsopart
          bleedingSusceptibility: medium
          amputability: none
          shockValue: 4
          probWeight: 3
          protectionBase:
            blunt: 11
            edged: 10
            piercing: 9
            fire: 8
        - name: Right Upper Leg
          shortcode: rthghloc
          bodyPartCode: rlegpart
          bleedingSusceptibility: medium
          amputability: low
          shockValue: 3
          probWeight: 5
          protectionBase: &a4
            blunt: 10
            edged: 9
            piercing: 8
            fire: 7
        - name: Right Lower Leg
          shortcode: rcalfloc
          bodyPartCode: rlegpart
          bleedingSusceptibility: low
          amputability: medium
          shockValue: 1
          probWeight: 3
          protectionBase: &a5
            blunt: 9
            edged: 8
            piercing: 7
            fire: 6
        - name: Right Foot
          shortcode: rfootloc
          bodyPartCode: rlegpart
          bleedingSusceptibility: none
          amputability: high
          shockValue: 2
          probWeight: 2
          protectionBase: &a6
            blunt: 8
            edged: 7
            piercing: 6
            fire: 5
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
      base: 700
      calc: "700"
    reachBase: 0
    bodyScaleBase: 2.18
    personalFatigue: enc + 5
  currentMoveMedium: terrestrial
  movementProfiles:
    - medium: terrestrial
      feetPerRound: 45
      leaguesPerWatch: 5
      encumbrance: floor(wt/4)
      strMod: -5 * floor((str - 10) / 2)
      disabled: false
  defaultCombatGroup: null
  items:
    - shortcode: awar
      type: skill
      system:
        masteryLevelBase: 50
    - shortcode: init
      type: skill
      system:
        masteryLevelBase: 60
    - shortcode: shok
      type: skill
      system:
        masteryLevelBase: 88
    - shortcode: sprt
      type: mysticalability
      system:
        masteryLevelBase: 27
    - shortcode: stlth
      type: skill
      system:
        masteryLevelBase: 40
    - shortcode: trak
      type: skill
      system:
        masteryLevelBase: 25
    - shortcode: dge
      type: skill
      system:
        masteryLevelBase: 40
    - name: Claw
      type: skill
      system:
        shortcode: claw
        subType: combattechnique
        masteryLevelBase: 74
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
            spread: 6
            modifier: 0
          impactBase:
            numDice: 1
            die: 10
            modifier: 6
            aspect: edged
          lengthBase: 3
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
    - name: Bite
      type: skill
      system:
        shortcode: bite
        subType: combattechnique
        masteryLevelBase: 72
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
            spread: 3
            modifier: 0
          impactBase:
            numDice: 1
            die: 8
            modifier: 7
            aspect: piercing
          lengthBase: 1
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
            armorReduction: 2
---

# Appearance {#appearance}

Six to eight feet of hairless bulk, its pale body hanging in rolls of fat mottled with rust-coloured blotches. The mouth is large and full of fangs, the talons long and yellow, and the head sits low between shoulders that carry the creature's real weight.

# Dossier {#dossier}

A voracious and aggressive omnivore, an Áklash rapidly heals from wounds even when unconscious. While a large, fanged mouth and sharp talons make it a dangerous foe, most alarmingly an Áklash can also exhale a cloud of nauseating gas. Strangely, its brain resides in the thorax — which is why its torso is as vital a target as its head, and why beheading one settles nothing.

**Choking Wind.** As a free action on its turn, an Áklash can try to belch a cloud of nauseating gas against one foe within ten feet. A test dictates whether enough is ready to discharge; failure leaves the gas dormant for a round or two before it may retest. If discharged, the cloud engulfs the target and forces a Shock Roll against SHK7 — at −20 on the Áklash's Critical Success.

**Regeneration.** At the end of its turn, roll d10 against TN2. A success reduces its most severe injury level by one.

The Choking Wind talent has no corresponding skill in this system and is not shipped as an item; run it from this description.

## Attributes

- **Strength:** 22-27 (1d6+21)

- **Endurance:** 16-21 (1d6+15)

- **Dexterity:** 8-13 (1d6+7)

- **Agility:** 7-10 (1d4+6)

- **Perception:** 6-9 (1d4+5)

- **Aura:** 4-7 (1d4+3)

- **Will:** 12-17 (1d6+11)

- **Reasoning:** 3-6 (1d4+2)

- **Creativity:** 1-4 (1d4)

- **Empathy:** 2-5 (1d4+1)

- **Eloquence:** 1-4 (1d4)
