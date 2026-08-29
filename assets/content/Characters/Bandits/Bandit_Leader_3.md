---
aliases:
  - Bandit Leader 3
  - being-banditleader3
tags: []
name:
  full: Bandit Leader 3
  aliases: []
id: 7ivelsuPSdm9OHrv
folder: wDgcy5cLIaLoFogp
shortcode: banditleader3
slug: bandit-leader-3
img: systems/sohl/assets/icons/game-icons/delapouite/person.svg
portrait: systems/sohl/assets/icons/game-icons/delapouite/person.svg
type: being
pack: characters
social:
  occupation: "Bandit Leader"
  station: ""
  class: "Free"
  society: "Palithane"
traits:
  gender: unknown
  age: 29
  birthday: 690/10/20
  height:
    m: 1.85
  weight:
    kg: 77.11
  build:
    frame: medium
  appearance:
    eye_color: hazel
    hair_color: brown
    skin_color: light
    complexion: fair
    extra_features: [a tattoo of a serpent on the back]
sohl:
  archetype: 1
  attributes:
    str: 13
    end: 10
    dex: 14
    agl: 15
    per: 10
    cml: 12
    aur: 10
    wil: 11
    rea: 12
    cre: 12
    emp: 17
    elo: 10
    mor: 9
    voi: 4
  body:
    structure:
      zones:
        - name: Head
          shortcode: headzone
          probWeight: 1
        - name: Arms
          shortcode: armszone
          probWeight: 4
        - name: Torso
          shortcode: torsozone
          probWeight: 4
        - name: Legs
          shortcode: legszone
          probWeight: 6
      parts:
        - name: Head
          shortcode: headpart
          bodyZoneCode: headzone
          roles:
            - vital
          canHoldItem: false
          probWeight: 1
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
          probWeight: 4
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
        - name: Skull
          shortcode: skullloc
          bodyPartCode: headpart
          bleedingSusceptibility: low
          amputability: none
          shockValue: 5
          probWeight: 500
          protectionBase:
            blunt: 0
            edged: 0
            piercing: 0
            fire: 0
        - name: Left Eye
          shortcode: leyeloc
          bodyPartCode: headpart
          bleedingSusceptibility: medium
          amputability: none
          shockValue: 5
          probWeight: 15
          protectionBase:
            blunt: 0
            edged: 0
            piercing: 0
            fire: 0
        - name: Right Eye
          shortcode: reyeloc
          bodyPartCode: headpart
          bleedingSusceptibility: medium
          amputability: none
          shockValue: 5
          probWeight: 15
          protectionBase:
            blunt: 0
            edged: 0
            piercing: 0
            fire: 0
        - name: Nose
          shortcode: noseloc
          bodyPartCode: headpart
          bleedingSusceptibility: medium
          amputability: none
          shockValue: 5
          probWeight: 30
          protectionBase:
            blunt: 0
            edged: 0
            piercing: 0
            fire: 0
        - name: Left Cheek
          shortcode: lcheekloc
          bodyPartCode: headpart
          bleedingSusceptibility: medium
          amputability: none
          shockValue: 4
          probWeight: 60
          protectionBase:
            blunt: 0
            edged: 0
            piercing: 0
            fire: 0
        - name: Right Cheek
          shortcode: rcheekloc
          bodyPartCode: headpart
          bleedingSusceptibility: medium
          amputability: none
          shockValue: 4
          probWeight: 60
          protectionBase:
            blunt: 0
            edged: 0
            piercing: 0
            fire: 0
        - name: Left Ear
          shortcode: learloc
          bodyPartCode: headpart
          bleedingSusceptibility: medium
          amputability: none
          shockValue: 4
          probWeight: 15
          protectionBase:
            blunt: 0
            edged: 0
            piercing: 0
            fire: 0
        - name: Right Ear
          shortcode: rearloc
          bodyPartCode: headpart
          bleedingSusceptibility: medium
          amputability: none
          shockValue: 4
          probWeight: 15
          protectionBase:
            blunt: 0
            edged: 0
            piercing: 0
            fire: 0
        - name: Mouth
          shortcode: mouthloc
          bodyPartCode: headpart
          bleedingSusceptibility: medium
          amputability: none
          shockValue: 4
          probWeight: 30
          protectionBase:
            blunt: 0
            edged: 0
            piercing: 0
            fire: 0
        - name: Jaw
          shortcode: jawloc
          bodyPartCode: headpart
          bleedingSusceptibility: medium
          amputability: none
          shockValue: 4
          probWeight: 60
          protectionBase:
            blunt: 0
            edged: 0
            piercing: 0
            fire: 0
        - name: Neck
          shortcode: neckloc
          bodyPartCode: headpart
          bleedingSusceptibility: high
          amputability: low
          shockValue: 5
          probWeight: 200
          protectionBase:
            blunt: 0
            edged: 0
            piercing: 0
            fire: 0
        - name: Right Shoulder
          shortcode: rshldloc
          bodyPartCode: rarmpart
          bleedingSusceptibility: medium
          amputability: none
          shockValue: 3
          probWeight: 30
          protectionBase:
            blunt: 0
            edged: 0
            piercing: 0
            fire: 0
        - name: Right Upper Arm
          shortcode: rupaloc
          bodyPartCode: rarmpart
          bleedingSusceptibility: low
          amputability: medium
          shockValue: 1
          probWeight: 30
          protectionBase:
            blunt: 0
            edged: 0
            piercing: 0
            fire: 0
        - name: Right Elbow
          shortcode: relbloc
          bodyPartCode: rarmpart
          bleedingSusceptibility: low
          amputability: medium
          shockValue: 2
          probWeight: 10
          protectionBase:
            blunt: 0
            edged: 0
            piercing: 0
            fire: 0
        - name: Right Forearm
          shortcode: rfraloc
          bodyPartCode: rarmpart
          bleedingSusceptibility: low
          amputability: medium
          shockValue: 1
          probWeight: 20
          protectionBase:
            blunt: 0
            edged: 0
            piercing: 0
            fire: 0
        - name: Right Hand
          shortcode: rhandloc
          bodyPartCode: rarmpart
          bleedingSusceptibility: none
          amputability: high
          shockValue: 2
          probWeight: 10
          protectionBase:
            blunt: 0
            edged: 0
            piercing: 0
            fire: 0
        - name: Left Shoulder
          shortcode: lshldloc
          bodyPartCode: larmpart
          bleedingSusceptibility: medium
          amputability: none
          shockValue: 3
          probWeight: 30
          protectionBase:
            blunt: 0
            edged: 0
            piercing: 0
            fire: 0
        - name: Left Upper Arm
          shortcode: lupaloc
          bodyPartCode: larmpart
          bleedingSusceptibility: low
          amputability: medium
          shockValue: 1
          probWeight: 30
          protectionBase:
            blunt: 0
            edged: 0
            piercing: 0
            fire: 0
        - name: Left Elbow
          shortcode: lelbloc
          bodyPartCode: larmpart
          bleedingSusceptibility: low
          amputability: medium
          shockValue: 2
          probWeight: 10
          protectionBase:
            blunt: 0
            edged: 0
            piercing: 0
            fire: 0
        - name: Left Forearm
          shortcode: lfraloc
          bodyPartCode: larmpart
          bleedingSusceptibility: low
          amputability: medium
          shockValue: 1
          probWeight: 20
          protectionBase:
            blunt: 0
            edged: 0
            piercing: 0
            fire: 0
        - name: Left Hand
          shortcode: lhandloc
          bodyPartCode: larmpart
          bleedingSusceptibility: none
          amputability: high
          shockValue: 2
          probWeight: 10
          protectionBase:
            blunt: 0
            edged: 0
            piercing: 0
            fire: 0
        - name: Thorax
          shortcode: thrxloc
          bodyPartCode: torsopart
          bleedingSusceptibility: medium
          amputability: none
          shockValue: 4
          probWeight: 40
          protectionBase:
            blunt: 0
            edged: 0
            piercing: 0
            fire: 0
        - name: Abdomen
          shortcode: abdmnloc
          bodyPartCode: torsopart
          bleedingSusceptibility: high
          amputability: none
          shockValue: 4
          probWeight: 40
          protectionBase:
            blunt: 0
            edged: 0
            piercing: 0
            fire: 0
        - name: Pelvis
          shortcode: plvisloc
          bodyPartCode: torsopart
          bleedingSusceptibility: medium
          amputability: none
          shockValue: 4
          probWeight: 20
          protectionBase:
            blunt: 0
            edged: 0
            piercing: 0
            fire: 0
        - name: Right Thigh
          shortcode: rthghloc
          bodyPartCode: rlegpart
          bleedingSusceptibility: medium
          amputability: low
          shockValue: 3
          probWeight: 40
          protectionBase:
            blunt: 0
            edged: 0
            piercing: 0
            fire: 0
        - name: Right Knee
          shortcode: rkneeloc
          bodyPartCode: rlegpart
          bleedingSusceptibility: low
          amputability: medium
          shockValue: 2
          probWeight: 10
          protectionBase:
            blunt: 0
            edged: 0
            piercing: 0
            fire: 0
        - name: Right Calf
          shortcode: rcalfloc
          bodyPartCode: rlegpart
          bleedingSusceptibility: low
          amputability: medium
          shockValue: 1
          probWeight: 30
          protectionBase:
            blunt: 0
            edged: 0
            piercing: 0
            fire: 0
        - name: Right Foot
          shortcode: rfootloc
          bodyPartCode: rlegpart
          bleedingSusceptibility: none
          amputability: medium
          shockValue: 2
          probWeight: 20
          protectionBase:
            blunt: 0
            edged: 0
            piercing: 0
            fire: 0
        - name: Left Thigh
          shortcode: lthghloc
          bodyPartCode: llegpart
          bleedingSusceptibility: medium
          amputability: low
          shockValue: 3
          probWeight: 40
          protectionBase:
            blunt: 0
            edged: 0
            piercing: 0
            fire: 0
        - name: Left Knee
          shortcode: lkneeloc
          bodyPartCode: llegpart
          bleedingSusceptibility: low
          amputability: medium
          shockValue: 2
          probWeight: 10
          protectionBase:
            blunt: 0
            edged: 0
            piercing: 0
            fire: 0
        - name: Left Calf
          shortcode: lcalfloc
          bodyPartCode: llegpart
          bleedingSusceptibility: low
          amputability: medium
          shockValue: 1
          probWeight: 30
          protectionBase:
            blunt: 0
            edged: 0
            piercing: 0
            fire: 0
        - name: Left Foot
          shortcode: lfootloc
          bodyPartCode: llegpart
          bleedingSusceptibility: none
          amputability: medium
          shockValue: 2
          probWeight: 20
          protectionBase:
            blunt: 0
            edged: 0
            piercing: 0
            fire: 0
    weight:
      base: null
      calc: "(9 * str) + 50"
    reachBase: 0
    bodyScaleBase: 1.0
    personalFatigue: "enc + 5"
  currentMoveMedium: "terrestrial"
  movementProfiles:
    - medium: terrestrial
      feetPerRound: 50
      leaguesPerWatch: 5
      encumbrance: "floor(wt/4)"
      strMod: "-5 * floor((str - 10) / 2)"
      disabled: false
  defaultCombatGroup: null
  items:
    - shortcode: chrm
      type: skill
      system:
        masteryLevelBase: 42
    - shortcode: cmd
      type: skill
      system:
        masteryLevelBase: 55
    - shortcode: dscr
      type: skill
      system:
        masteryLevelBase: 22
    - shortcode: guil
      type: skill
      system:
        masteryLevelBase: 75
    - shortcode: intr
      type: skill
      system:
        masteryLevelBase: 75
    - shortcode: thtcs
      type: skill
      system:
        masteryLevelBase: 22
    - shortcode: srvl
      type: skill
      system:
        masteryLevelBase: 55
    - shortcode: sing
      type: skill
      system:
        masteryLevelBase: 24
    - shortcode: draw
      type: skill
      system:
        masteryLevelBase: 13
    - shortcode: cook
      type: skill
      system:
        masteryLevelBase: 22
    - shortcode: folklr
      type: skill
      system:
        masteryLevelBase: 12
    - shortcode: pysn
      type: skill
      system:
        masteryLevelBase: 11
    - shortcode: awar
      type: skill
      system:
        masteryLevelBase: 50
    - shortcode: clmb
      type: skill
      system:
        masteryLevelBase: 45
    - shortcode: dnce
      type: skill
      system:
        masteryLevelBase: 42
    - shortcode: jump
      type: skill
      system:
        masteryLevelBase: 42
    - shortcode: ridg
      type: skill
      system:
        masteryLevelBase: 16
    - shortcode: stlth
      type: skill
      system:
        masteryLevelBase: 39
    - shortcode: swim
      type: skill
      system:
        masteryLevelBase: 13
    - shortcode: init
      type: skill
      system:
        masteryLevelBase: 55
    - shortcode: shok
      type: skill
      system:
        masteryLevelBase: 60
    - shortcode: melee
      type: skill
      system:
        masteryLevelBase: 70
    - shortcode: dge
      type: skill
      system:
        masteryLevelBase: 65
    - shortcode: archery
      type: skill
      system:
        masteryLevelBase: 36
    - shortcode: thro
      type: skill
      system:
        masteryLevelBase: 48
    - shortcode: peoni
      type: skill
    - shortcode: fate
      type: mysticalability
    - shortcode: sprt
      type: mysticalability
    - shortcode: skorus
      type: mystery
    - shortcode: peoni
      type: affiliation
    - shortcode: pence
      type: miscgear
      system:
        quantity: 1
    - shortcode: RhTunic
      type: armorgear
      system:
        isWorn: true
    - shortcode: CShirt
      type: armorgear
      system:
        isWorn: true
    - shortcode: CTrsr
      type: armorgear
      system:
        isWorn: true
    - shortcode: RhShoe
      type: armorgear
      system:
        isWorn: true
    - shortcode: ShrtSwd
      type: weapongear
---

# Appearance {#appearance}

|                            |                                   |
| -------------------------- | --------------------------------- |
| **Apparent Age**           | 29;                               |
| **Culture**                | Pálithàner                        |
| **Social Class**           | Free                              |
| **Height**                 | 6'1"                              |
| **Frame**                  | Medium                            |
| **Weight**                 | 170                               |
| **Appearance/Comeliness**  |                                   |
| **Hair Color**             | Brown                             |
| **Eye Color**              | Hazel                             |
| **Voice**                  |                                   |
| **Obvious Medical Traits** |                                   |
| **Apparent Occupation**    | Bandit Leader                     |
| **Apparent Wealth**        |                                   |
| **Weapons**                |                                   |
| **Armour**                 |                                   |
| **Companions**             |                                   |
| **Other obvious features** | a tattoo of a serpent on the back |

## Physical Description

Age 29, 6'1", 170 lbs, Hazel eyes, Brown bowl cut hair, with a tattoo of a serpent on the back.

# Dossier {#dossier}

|                    |              |
| ------------------ | ------------ |
| **Birthdate**      | 20 Ilvín 720 |
| **Birthplace**     | Palíthanè    |
| **Medical Traits** |              |
| **Psyche Traits**  |              |
