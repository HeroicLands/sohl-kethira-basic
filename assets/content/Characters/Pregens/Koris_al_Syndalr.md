---
tags: []
name:
  full: Kôris al Sýndalr
  aliases: []
id: Nwxk1ehiccvUnhIZ
packFolder: characters
shortcode: korisalsyndalr
slug: koris-al-syndalr
img: sohl/assets/icons/game-icons/delapouite/person.svg
portrait: sohl/assets/icons/game-icons/delapouite/person.svg
type: being
pack: characters
social:
  occupation: ""
  station: ""
  class: ""
  society: ""
data:
  templatePriority: 1
  gender: unknown
  age: 27
  birthday: 692/7/8
  height: 1.93
  weight: 97.52
  frame: medium
  appearance:
    eye_color: brown
    hair_color: brown
    skin_color: pale
    complexion: fair
    extra_features: []
sohl:
  items:
    - { model: attribute-str, system: { scoreBase: 17 } }
    - { model: attribute-end, system: { scoreBase: 15 } }
    - { model: attribute-dex, system: { scoreBase: 14 } }
    - { model: attribute-agl, system: { scoreBase: 15 } }
    - { model: attribute-per, system: { scoreBase: 11 } }
    - { model: attribute-cml, system: { scoreBase: 9 } }
    - { model: attribute-aur, system: { scoreBase: 8 } }
    - { model: attribute-wil, system: { scoreBase: 12 } }
    - { model: attribute-rea, system: { scoreBase: 10 } }
    - { model: attribute-cre, system: { scoreBase: 8 } }
    - { model: attribute-emp, system: { scoreBase: 10 } }
    - { model: attribute-elo, system: { scoreBase: 9 } }
    - { model: attribute-mor, system: { scoreBase: 11 } }
    - { model: attribute-voi, system: { scoreBase: 10 } }
    - { model: skill-chrm, system: { masteryLevelBase: 27 } }
    - { model: skill-cmd, system: { masteryLevelBase: 22 } }
    - { model: skill-dscr, system: { masteryLevelBase: 20 } }
    - { model: skill-guil, system: { masteryLevelBase: 27 } }
    - { model: skill-intr, system: { masteryLevelBase: 40 } }
    - { model: skill-sing, system: { masteryLevelBase: 27 } }
    - { model: skill-thtcs, system: { masteryLevelBase: 8 } }
    - { model: skill-srvl, system: { masteryLevelBase: 55 } }
    - { model: skill-draw, system: { masteryLevelBase: 12 } }
    - { model: skill-cook, system: { masteryLevelBase: 22 } }
    - { model: skill-folklr, system: { masteryLevelBase: 33 } }
    - { model: skill-pysn, system: { masteryLevelBase: 20 } }
    - { model: skill-awar, system: { masteryLevelBase: 33 } }
    - { model: skill-clmb, system: { masteryLevelBase: 75 } }
    - { model: skill-dnce, system: { masteryLevelBase: 30 } }
    - { model: skill-jump, system: { masteryLevelBase: 64 } }
    - { model: skill-ridg, system: { masteryLevelBase: 12 } }
    - { model: skill-stlth, system: { masteryLevelBase: 52 } }
    - { model: skill-swim, system: { masteryLevelBase: 30 } }
    - { model: skill-init, system: { masteryLevelBase: 55 } }
    - { model: skill-shok, system: { masteryLevelBase: 80 } }
    - { model: skill-melee, system: { masteryLevelBase: 70 } }
    - { model: skill-dge, system: { masteryLevelBase: 65 } }
    - { model: skill-archery, system: { masteryLevelBase: 24 } }
    - { model: skill-thro, system: { masteryLevelBase: 52 } }
    - { model: mysticalability-fate }
    - model: mysticalability-sprt
      system:
        levelBase: 0
        charges:
          value: 0
          max: 0
    - { model: mystery-hirin }
    - { model: skill-agri, system: { masteryLevelBase: 33 } }
    - { model: skill-anmcft, system: { masteryLevelBase: 22 } }
    - { model: skill-smsh, system: { masteryLevelBase: 11 } }
    - { model: skill-wpnc, system: { masteryLevelBase: 28 } }
    - { model: skill-hrld, system: { masteryLevelBase: 22 } }
    - { model: skill-acro, system: { masteryLevelBase: 45 } }
    - { model: skill-trierzi, system: { masteryLevelBase: 27 } }
    - { model: skill-emhlen, system: { masteryLevelBase: 18 } }
    - { model: skill-kantal, system: { masteryLevelBase: 27 } }
    - { model: skill-palithaner, system: { masteryLevelBase: 45 } }
    - { model: armorgear-ctrsr, system: { isWorn: true } }
    - { model: armorgear-cswd, system: { isWorn: true } }
    - { model: armorgear-cstnc, system: { isWorn: true } }
    - { model: armorgear-rhcboot, system: { isWorn: true } }
    - { model: armorgear-rhgntl, system: { isWorn: true } }
    - { model: armorgear-sbyrn, system: { isWorn: true } }
    - { model: armorgear-pcap, system: { isWorn: true } }
    - { model: armorgear-pstnc, system: { isWorn: true } }
    - { model: armorgear-plhhelm, system: { isWorn: true } }
    - { model: weapongear-rndsh }
    - { model: weapongear-baxe }
    - { model: weapongear-dgr }
    - { model: containergear-backpk }
    - { model: containergear-bpchmd }
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

|                            |                                                                    |
| -------------------------- | ------------------------------------------------------------------ |
| **Apparent Age**           | Young                                                              |
| **Culture**                | Pálithàner                                                         |
| **Social Class**           | Mercenary                                                          |
| **Height**                 | 6 ft 4 in                                                          |
| **Frame**                  | Heavy                                                              |
| **Weight**                 | 215 lbs                                                            |
| **Appearance/Comeliness**  | A towering olive-toned man with broad shoulders and muscular build |
| **Hair Color**             | Black                                                              |
| **Eye Color**              | Grey                                                               |
| **Voice**                  | Average                                                            |
| **Obvious Medical Traits** | Deep ragged scar running diagonally across left cheek              |
| **Apparent Occupation**    | Mercenary Warrior                                                  |
| **Apparent Wealth**        | Comfortable                                                        |
| **Weapons**                | Battleaxe, dagger                                                  |
| **Armour**                 | Scale cuirass, padded sleeved tunic, plate helm                    |
| **Companions**             | Silent Talon                                                       |
| **Other obvious features** | None                                                               |

Kôris’ the name. Just a soldier, nothing fancy about me. Been swinging this axe since I was a lad—first in the militia, then for the mercenary band. War is simple: protect those who fight with you, kill those who stand against you. That’s all there is to it. I’m not much for talk, and I don’t care for politics. You tell me who to fight, and I’ll get it done.

Lost my home, my family, a long time ago. You could say I’ve been looking for something to fight for ever since. The band feels like home now, I suppose. Captain Brànwâal’s good at what he does—keeps us alive, pays us well enough. As long as I’m swinging my axe, I’m where I need to be.

# Dossier {#dossier}

## Data

|                    |             |
| ------------------ | ----------- |
| **Birthdate**      | 8 Azúra 692 |
| **Birthplace**     | Palíthanè   |
| **Sibling Rank**   | 4 of 7      |
| **Medical Traits** | None        |
| **Psyche Traits**  | None        |

## Life Story

**Strengths**: Physical strength, battle prowess.

**Weaknesses**: Struggles with social intricacies, prefers direct action.

**Patrons**: None.

**Enemies**: Raiders who destroyed his village.

**Background**: Kôris hails from the rugged highlands of Palíthanè, where he was once a farmer. However, after his village was raided and destroyed during a border skirmish, he had nothing left and joined a local militia to seek vengeance. He quickly rose through the ranks due to his raw strength and fearlessness in battle. His experience as a militia fighter eventually drew the attention of Brànwâal, who recruited him into the mercenary band for his resilience and brute force. Kôris’s simple upbringing and dedication to those he fights with make him a reliable, if sometimes blunt, presence in the group.

**Personality**: Kôris is straightforward, loyal, and practical. He lacks patience for politics or subtlety, preferring to solve problems with his axe and shield. He speaks plainly and cares deeply for his comrades, often forming deep bonds with those he fights alongside.

**Goals**: Kôris seeks stability after losing his family and home. He has little desire for wealth beyond what is needed to live comfortably, but his true motivation is to find a new “family” in the mercenary band. He hopes that through his service, he can protect those around him from the kind of destruction he once faced.
