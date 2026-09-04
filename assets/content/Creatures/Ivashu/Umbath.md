---
tags:
  - creature
name:
  full: Umbáth
  aliases:
    - Umbathri
    - Bearer of the Mask
    - Gargoyle
id: UmbathBearerMsk
shortcode: umbath
slug: umbath
img: systems/sohl/assets/icons/game-icons/delapouite/gargoyle.svg
portrait: null
type: being
sohl:
  archetype: 0
  attrRollFormula:
    aur: 1d6+16
    wil: 1d6+9
    rea: 1d6+10
    cre: 1d6+13
  body:
    structure:
      zones:
        - name: Form
          shortcode: formzone
          probWeight: 3
      parts:
        - name: Form
          shortcode: formpart
          bodyZoneCode: formzone
          roles:
            - vital
            - core
          canHoldItem: false
          probWeight: 10
      locations:
        - name: Form
          shortcode: formloc
          bodyPartCode: formpart
          bleedingSusceptibility: none
          amputability: none
          shockValue: 0
          probWeight: 10
          protectionBase:
            blunt: 0
            edged: 0
            piercing: 0
            fire: 0
    weight:
      base: 10
      calc: "10"
    reachBase: 0
    bodyScaleBase: 0.2
    personalFatigue: enc + 5
  currentMoveMedium: aerial
  movementProfiles:
    - medium: aerial
      feetPerRound: 85
      leaguesPerWatch: 5
      encumbrance: floor(wt/4)
      strMod: -5 * floor((str - 10) / 2)
      disabled: false
  defaultCombatGroup: null
  items:
    - { shortcode: aur, type: attribute, system: { scoreBase: 19 } }
    - { shortcode: wil, type: attribute, system: { scoreBase: 12 } }
    - { shortcode: rea, type: attribute, system: { scoreBase: 13 } }
    - { shortcode: cre, type: attribute, system: { scoreBase: 16 } }
    - { shortcode: init, type: skill, system: { masteryLevelBase: 65 } }
    - { shortcode: sprt, type: mysticalability, system: { masteryLevelBase: 80 } }
    - { shortcode: dge, type: skill, system: { masteryLevelBase: 70 } }
---

# Appearance {#appearance}

A grey, squat and exceedingly ugly humanoid figure barely two feet tall, with yellow eyes, a ghastly red tongue lolling from a too-wide mouth, swept-back horns and a long whipping tail. In dim light it is easy to mistake for statuary, which is how it prefers to be met.

# Dossier {#dossier}

Otherwise known as _Bearers of the Mask_ or _Gargoyles_, the Umbathri are found in all parts of Kethíra — above or below ground, in cities or the wilderness. They act both alone and in insanely babbling packs of up to two dozen, and their behaviour is capricious and often maddening.

An Umbath's body is that of an incarnated spirit. It has a definite shape, but an observer must succeed at an Awareness test to see it in dim lighting, and a Critical Success to see it in deep shadow. It has only three zone numbers in its body location table, and only enchanted weapons or spells have any effect on it at all. If struck, it must test Spirit or dissolve and lose form for d6 days — 3d6 on a Critical Failure — after which it automatically reassumes its shape.

**Torment.** The Umbath chitters unintelligibly at a target within five feet, testing its Torment talent. A success imparts chaotic thoughts, forcing the victim to test Spirit at a −20 penalty on the Umbath's Critical Success. A failed Spirit test costs the victim two Psyche Stress levels, and the Umbath decides by a d10 against TN6 whether to return and torment them again in d12 or 2d12 hours. Umbathri fly away when they cease harassing a target.

The Torment talent has no corresponding skill in this system and is not shipped as an item; run it from this description.

## Attributes

- **Aura:** 17-22 (1d6+16)

- **Will:** 10-15 (1d6+9)

- **Reasoning:** 11-16 (1d6+10)

- **Creativity:** 14-19 (1d6+13)
