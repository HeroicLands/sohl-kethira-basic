---
aliases:
  - Dómôrsèr
  - Nightcrawler
tags:
  - creature
name:
  full: Dómôrsèr
  aliases: []
id: DomorserNghtcrw
shortcode: domorser
slug: domorser
img: systems/sohl/assets/icons/game-icons/lorc/wolf-head.svg
portrait: ""
type: creature
package: kethira
sohl:
  archetype: 0
  attributes:
    str: 16
    end: 18
    dex: 8
    agl: 14
    per: 20
    aur: 12
    wil: 16
    rea: 8
    cre: 6
  attrRollFormula:
    str: 1d6+13
    end: 1d6+15
    dex: 1d4+6
    agl: 1d6+11
    per: 1d6+17
    aur: 1d6+9
    wil: 1d6+13
    rea: 1d4+6
    cre: 1d4+4
  body:
    structure:
      zones:
        - name: Head
          shortcode: headzone
          probWeight: 1
        - name: Forelegs
          shortcode: forelegszone
          probWeight: 2
        - name: Torso
          shortcode: torsozone
          probWeight: 5
        - name: Hindquarters
          shortcode: hindqtrzone
          probWeight: 2
      parts:
        - name: Head
          shortcode: headpart
          bodyZoneCode: headzone
          roles:
            - vital
            - manipulator
          canHoldItem: false
          probWeight: 10
        - name: Left Foreleg
          shortcode: lforelegpart
          bodyZoneCode: forelegszone
          roles:
            - locomotor
            - manipulator
          canHoldItem: false
          probWeight: 1
        - name: Right Foreleg
          shortcode: rforelegpart
          bodyZoneCode: forelegszone
          roles:
            - locomotor
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
        - name: Left Hind Leg
          shortcode: lhindlegpart
          bodyZoneCode: hindqtrzone
          roles:
            - locomotor
          canHoldItem: false
          probWeight: 9
        - name: Right Hind Leg
          shortcode: rhindlegpart
          bodyZoneCode: hindqtrzone
          roles:
            - locomotor
          canHoldItem: false
          probWeight: 9
        - name: Tail
          shortcode: tailpart
          bodyZoneCode: hindqtrzone
          roles: []
          canHoldItem: false
          probWeight: 2
      locations:
        - name: Head
          shortcode: headloc
          bodyPartCode: headpart
          bleedingSusceptibility: medium
          amputability: none
          shockValue: 5
          probWeight: 6
          protectionBase:
            blunt: 5
            edged: 7
            piercing: 6
            fire: 4
        - name: Neck
          shortcode: neckloc
          bodyPartCode: headpart
          bleedingSusceptibility: high
          amputability: low
          shockValue: 5
          probWeight: 4
          protectionBase:
            blunt: 6
            edged: 8
            piercing: 7
            fire: 5
        - name: Left Foreleg
          shortcode: lforelegloc
          bodyPartCode: lforelegpart
          bleedingSusceptibility: low
          amputability: medium
          shockValue: 2
          probWeight: 10
          protectionBase: &a1
            blunt: 5
            edged: 7
            piercing: 6
            fire: 4
        - name: Right Foreleg
          shortcode: rforelegloc
          bodyPartCode: rforelegpart
          bleedingSusceptibility: low
          amputability: medium
          shockValue: 2
          probWeight: 10
          protectionBase: *a1
        - name: Thorax
          shortcode: thoraxloc
          bodyPartCode: torsopart
          bleedingSusceptibility: medium
          amputability: none
          shockValue: 4
          probWeight: 5
          protectionBase:
            blunt: 6
            edged: 8
            piercing: 7
            fire: 5
        - name: Abdomen
          shortcode: abdloc
          bodyPartCode: torsopart
          bleedingSusceptibility: high
          amputability: none
          shockValue: 4
          probWeight: 3
          protectionBase:
            blunt: 6
            edged: 8
            piercing: 7
            fire: 5
        - name: Pelvis
          shortcode: plvsloc
          bodyPartCode: torsopart
          bleedingSusceptibility: medium
          amputability: none
          shockValue: 4
          probWeight: 2
          protectionBase:
            blunt: 6
            edged: 8
            piercing: 7
            fire: 5
        - name: Left Hind Leg
          shortcode: lhindlegloc
          bodyPartCode: lhindlegpart
          bleedingSusceptibility: low
          amputability: medium
          shockValue: 2
          probWeight: 10
          protectionBase: &a2
            blunt: 5
            edged: 7
            piercing: 6
            fire: 4
        - name: Right Hind Leg
          shortcode: rhindlegloc
          bodyPartCode: rhindlegpart
          bleedingSusceptibility: low
          amputability: medium
          shockValue: 2
          probWeight: 10
          protectionBase: *a2
        - name: Tail
          shortcode: tailloc
          bodyPartCode: tailpart
          bleedingSusceptibility: none
          amputability: high
          shockValue: 1
          probWeight: 10
          protectionBase:
            blunt: 4
            edged: 6
            piercing: 5
            fire: 3
    weight:
      base: 175
      calc: "175"
    reachBase: 0
    bodyScaleBase: 1.45
    personalFatigue: enc + 5
  currentMoveMedium: terrestrial
  movementProfiles:
    - medium: terrestrial
      feetPerRound: 140
      leaguesPerWatch: 5
      encumbrance: floor(wt/4)
      strMod: -5 * floor((str - 10) / 2)
      disabled: false
  defaultCombatGroup: null
  items:
    - shortcode: awar
      type: skill
      system:
        masteryLevelBase: 90
    - shortcode: clmb
      type: skill
      system:
        masteryLevelBase: 55
    - shortcode: init
      type: skill
      system:
        masteryLevelBase: 60
    - shortcode: shok
      type: skill
      system:
        masteryLevelBase: 75
    - shortcode: jump
      type: skill
      system:
        masteryLevelBase: 75
    - shortcode: sprt
      type: mysticalability
      system:
        masteryLevelBase: 56
    - shortcode: stlth
      type: skill
      system:
        masteryLevelBase: 85
    - shortcode: dge
      type: skill
      system:
        masteryLevelBase: 85
    - name: Bite
      type: skill
      system:
        shortcode: bite
        subType: combattechnique
        masteryLevelBase: 80
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
            spread: 2
            modifier: 0
          impactBase:
            numDice: 1
            die: 8
            modifier: 3
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
            paralysis: true
    - name: Claw
      type: skill
      system:
        shortcode: claw
        subType: combattechnique
        masteryLevelBase: 75
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
            spread: 4
            modifier: 0
          impactBase:
            numDice: 1
            die: 10
            modifier: 2
            aspect: edged
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
---

# Appearance {#appearance}

A large, scaly wolf three feet at the shoulder and five long, with padded feet, retractable claws, powerful jaws of long sharp teeth, and dark high-set eyes that catch no light back.

# Dossier {#dossier}

Also called _Nightcrawlers_, Domorsers hunt in small packs and seem to coordinate their attacks without audible calls.

**Paralysis.** A nightcrawler's venomous fangs can induce paralysis. The Shock Roll of a victim injured by its bite also determines whether the venom takes effect: a Critical Failure brings paralysis in d6 rounds, a Failure in d6 minutes. Where multiple bites cause paralysis, only the instance with the lowest healing rate applies.

**Sensitivity.** A successful test lets a Domorser know the location of prey within Talent Index × 300 feet; a Critical Success includes whether the prey is sleeping or conscious.

**Telepathy.** A successful test allows projected communication with other Domorsers within 600 feet for one minute. Reception is automatic.

The Sensitivity and Telepathy talents have no corresponding skills in this system and are not shipped as items; run them from these descriptions.

## Attributes

- **Strength:** 14-19 (1d6+13)

- **Endurance:** 16-21 (1d6+15)

- **Dexterity:** 7-10 (1d4+6)

- **Agility:** 12-17 (1d6+11)

- **Perception:** 18-23 (1d6+17)

- **Aura:** 10-15 (1d6+9)

- **Will:** 14-19 (1d6+13)

- **Reasoning:** 7-10 (1d4+6)

- **Creativity:** 5-8 (1d4+4)
