---
tags: []
name:
  full: Bandit Leader 1
  aliases: []
id: WN1Z4BNdEXWuSWNz
packFolder: characters
shortcode: banditleader1
slug: bandit-leader-1
type: being
pack: characters
social:
  occupation: "Bandit Leader"
  station: ""
  class: "Free"
  society: "Palithane"
data:
  icon: sohl-none-icon-person
  templatePriority: 1
  gender: unknown
  age: 27
  born: 692/3/13
  height: 1.88
  weight: 83.01
  frame: medium
  appearance:
    eye_color: grey
    hair_color: blonde
    skin_color: light
    complexion: fair
    extra_features:
      - a scar on the left foot
sohl:
  items:
    - { model: attribute-str, system: { scoreBase: 13 } }
    - { model: attribute-end, system: { scoreBase: 11 } }
    - { model: attribute-dex, system: { scoreBase: 12 } }
    - { model: attribute-agl, system: { scoreBase: 15 } }
    - { model: attribute-per, system: { scoreBase: 15 } }
    - { model: attribute-cml, system: { scoreBase: 13 } }
    - { model: attribute-aur, system: { scoreBase: 10 } }
    - { model: attribute-wil, system: { scoreBase: 14 } }
    - { model: attribute-rea, system: { scoreBase: 12 } }
    - { model: attribute-cre, system: { scoreBase: 13 } }
    - { model: attribute-emp, system: { scoreBase: 12 } }
    - { model: attribute-elo, system: { scoreBase: 10 } }
    - { model: attribute-mor, system: { scoreBase: 10 } }
    - { model: attribute-voi, system: { scoreBase: 6 } }
    - { model: skill-chrm, system: { masteryLevelBase: 39 } }
    - { model: skill-cmd, system: { masteryLevelBase: 48 } }
    - { model: skill-dscr, system: { masteryLevelBase: 22 } }
    - { model: skill-guil, system: { masteryLevelBase: 48 } }
    - { model: skill-intr, system: { masteryLevelBase: 60 } }
    - { model: skill-thtcs, system: { masteryLevelBase: 12 } }
    - { model: skill-srvl, system: { masteryLevelBase: 39 } }
    - { model: skill-sing, system: { masteryLevelBase: 36 } }
    - { model: skill-draw, system: { masteryLevelBase: 12 } }
    - { model: skill-cook, system: { masteryLevelBase: 42 } }
    - { model: skill-folklr, system: { masteryLevelBase: 13 } }
    - { model: skill-pysn, system: { masteryLevelBase: 13 } }
    - { model: skill-awar, system: { masteryLevelBase: 75 } }
    - { model: skill-clmb, system: { masteryLevelBase: 42 } }
    - { model: skill-dnce, system: { masteryLevelBase: 42 } }
    - { model: skill-jump, system: { masteryLevelBase: 42 } }
    - { model: skill-ridg, system: { masteryLevelBase: 13 } }
    - { model: skill-stlth, system: { masteryLevelBase: 45 } }
    - { model: skill-swim, system: { masteryLevelBase: 13 } }
    - { model: skill-init, system: { masteryLevelBase: 65 } }
    - { model: skill-shok, system: { masteryLevelBase: 60 } }
    - { model: skill-melee, system: { masteryLevelBase: 65 } }
    - { model: skill-dge, system: { masteryLevelBase: 75 } }
    - { model: skill-archery, system: { masteryLevelBase: 70 } }
    - { model: skill-thro, system: { masteryLevelBase: 52 } }
    - { model: skill-peoni }
    - { model: mysticalability-fate }
    - { model: mysticalability-sprt }
    - { model: mystery-feneri }
    - { model: affiliation-peoni }
    - { model: miscgear-pence, system: { quantity: 1 } }
    - { model: armorgear-rhtunic, system: { isWorn: true } }
    - { model: armorgear-cshirt, system: { isWorn: true } }
    - { model: armorgear-ctrsr, system: { isWorn: true } }
    - { model: armorgear-rhshoe, system: { isWorn: true } }
    - { model: weapongear-shrtswd }
  system:
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
        calc: (9 * str) + 50
      reachBase: 0
      bodyScaleBase: 1
      personalFatigue: enc + 5
    currentMoveMedium: terrestrial
    movementProfiles:
      - medium: terrestrial
        feetPerRound: 50
        leaguesPerWatch: 5
        encumbrance: floor(wt/4)
        strMod: -5 * floor((str - 10) / 2)
        disabled: false
---

# Appearance {#appearance}

|                            |                         |
| -------------------------- | ----------------------- |
| **Apparent Age**           | 27;                     |
| **Culture**                | Pálithàner              |
| **Social Class**           | Free                    |
| **Height**                 | 6'2"                    |
| **Frame**                  | Medium                  |
| **Weight**                 | 183                     |
| **Appearance/Comeliness**  |                         |
| **Hair Color**             | Blonde                  |
| **Eye Color**              | Grey                    |
| **Voice**                  |                         |
| **Obvious Medical Traits** |                         |
| **Apparent Occupation**    | Bandit Leader           |
| **Apparent Wealth**        |                         |
| **Weapons**                |                         |
| **Armour**                 |                         |
| **Companions**             |                         |
| **Other obvious features** | a scar on the left foot |

## Physical Description

Age 27, 6'2", 183 lbs, Grey eyes, Blonde with single braid hair, with a scar on the left foot.

# Dossier {#dossier}

|                    |              |
| ------------------ | ------------ |
| **Birthdate**      | 13 Kèlén 720 |
| **Birthplace**     | Palíthanè    |
| **Medical Traits** |              |
| **Psyche Traits**  |              |
