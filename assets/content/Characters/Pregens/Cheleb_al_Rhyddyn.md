---
tags: []
name:
  full: Chéleb al Rhýddyn
  aliases: []
id: 0fPBy1GRPKfrjcs1
packFolder: characters
shortcode: chelebalrhyddyn
slug: cheleb-al-rhyddyn
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
  age: 31
  birthday: 688/6/20
  height: 1.8
  weight: 70.31
  frame: medium
  appearance:
    eye_color: brown
    hair_color: brown
    skin_color: pale
    complexion: fair
    extra_features: []
sohl:
  items:
    - { model: attribute-str, system: { scoreBase: 12 } }
    - { model: attribute-end, system: { scoreBase: 11 } }
    - { model: attribute-dex, system: { scoreBase: 17 } }
    - { model: attribute-agl, system: { scoreBase: 12 } }
    - { model: attribute-per, system: { scoreBase: 16 } }
    - { model: attribute-cml, system: { scoreBase: 12 } }
    - { model: attribute-aur, system: { scoreBase: 12 } }
    - { model: attribute-wil, system: { scoreBase: 14 } }
    - { model: attribute-rea, system: { scoreBase: 16 } }
    - { model: attribute-cre, system: { scoreBase: 10 } }
    - { model: attribute-emp, system: { scoreBase: 8 } }
    - { model: attribute-elo, system: { scoreBase: 7 } }
    - { model: attribute-mor, system: { scoreBase: 12 } }
    - { model: attribute-voi, system: { scoreBase: 9 } }
    - { model: skill-chrm, system: { masteryLevelBase: 30 } }
    - { model: skill-cmd, system: { masteryLevelBase: 22 } }
    - { model: skill-dscr, system: { masteryLevelBase: 24 } }
    - { model: skill-guil, system: { masteryLevelBase: 27 } }
    - { model: skill-intr, system: { masteryLevelBase: 36 } }
    - { model: skill-sing, system: { masteryLevelBase: 27 } }
    - { model: skill-thtcs, system: { masteryLevelBase: 9 } }
    - { model: skill-srvl, system: { masteryLevelBase: 80 } }
    - { model: skill-draw, system: { masteryLevelBase: 16 } }
    - { model: skill-cook, system: { masteryLevelBase: 32 } }
    - { model: skill-folklr, system: { masteryLevelBase: 30 } }
    - { model: skill-pysn, system: { masteryLevelBase: 16 } }
    - { model: skill-awar, system: { masteryLevelBase: 75 } }
    - { model: skill-clmb, system: { masteryLevelBase: 56 } }
    - { model: skill-dnce, system: { masteryLevelBase: 24 } }
    - { model: skill-jump, system: { masteryLevelBase: 36 } }
    - { model: skill-ridg, system: { masteryLevelBase: 10 } }
    - { model: skill-stlth, system: { masteryLevelBase: 78 } }
    - { model: skill-swim, system: { masteryLevelBase: 11 } }
    - { model: skill-init, system: { masteryLevelBase: 60 } }
    - { model: skill-shok, system: { masteryLevelBase: 48 } }
    - { model: skill-melee, system: { masteryLevelBase: 45 } }
    - { model: skill-dge, system: { masteryLevelBase: 42 } }
    - { model: skill-archery, system: { masteryLevelBase: 80 } }
    - { model: skill-thro, system: { masteryLevelBase: 34 } }
    - { model: mysticalability-fate }
    - model: mysticalability-sprt
      system:
        levelBase: 0
        charges:
          value: 0
          max: 0
    - { model: mystery-nadai }
    - { model: skill-herb, system: { masteryLevelBase: 64 } }
    - { model: skill-timb, system: { masteryLevelBase: 32 } }
    - { model: skill-trak, system: { masteryLevelBase: 88 } }
    - { model: skill-fltch, system: { masteryLevelBase: 80 } }
    - { model: skill-hide, system: { masteryLevelBase: 32 } }
    - { model: skill-wood, system: { masteryLevelBase: 64 } }
    - { model: skill-emhlen, system: { masteryLevelBase: 44 } }
    - { model: skill-emelan, system: { masteryLevelBase: 44 } }
    - { model: skill-palithaner, system: { masteryLevelBase: 33 } }
    - { model: skill-trierzi, system: { masteryLevelBase: 22 } }
    - { model: skill-harnic, system: { masteryLevelBase: 22 } }
    - { model: skill-cultcovenant, system: { masteryLevelBase: 12 } }
    - { model: affiliation-cultcovenant }
    - { model: armorgear-cshirt, system: { isWorn: true } }
    - { model: armorgear-cbrch, system: { isWorn: true } }
    - { model: armorgear-cswd, system: { isWorn: true } }
    - { model: armorgear-rhcboot, system: { isWorn: true } }
    - { model: armorgear-bclk, system: { isWorn: true } }
    - { model: weapongear-dgr }
    - { model: weapongear-lbw100 }
    - { model: containergear-backpk }
    - { model: containergear-quiversmsh }
    - { model: projectilegear-arwhbrd, system: { quantity: 12 } }
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

|                            |                                  |
| -------------------------- | -------------------------------- |
| **Apparent Age**           | Mature                           |
| **Culture**                | Émhlè                            |
| **Social Class**           | Free Émhlè                       |
| **Height**                 | 5 ft 11 in                       |
| **Frame**                  | Light                            |
| **Weight**                 | 155 lbs                          |
| **Appearance/Comeliness**  | Pale with a slight weathered tan |
| **Hair Color**             | Dark Brown                       |
| **Eye Color**              | Hazel                            |
| **Voice**                  | Average                          |
| **Obvious Medical Traits** | None                             |
| **Apparent Occupation**    | Scout/Hunter                     |
| **Apparent Wealth**        | Comfortable                      |
| **Weapons**                | Longbow and dagger               |
| **Armour**                 | Leather surcoat                  |
| **Companions**             | Silent Talon                     |
| **Other obvious features** | None                             |

Chéleb of the Émhlè. I doubt my name means much to you, but my tribe speaks it with honor. I am a hunter and a protector of the wilderness. My people live in the Jerinálian Mountains, far from the squabbles of cities and courts. My skills are sharp eyes, a steady hand with a bow, and knowing the land. If you need to find something—or someone—hidden deep in the forests, I’m your best chance.

I didn’t join this band for the coin or for glory. I seek knowledge of the wider world. And if I can earn enough to protect my tribe while I’m out here, all the better.

# Dossier {#dossier}

## Data

|                    |                 |
| ------------------ | --------------- |
| **Birthdate**      | 20 Agrazhâr 688 |
| **Medical Traits** | None            |
| **Psyche Traits**  | None            |

## Life Story

**Strengths**: Tracking, archery, survival skills.

**Weaknesses**: Detached from others, poor social skills.

**Patrons**: His Émhlè tribe, the Eshálosha lodge.

**Enemies**: Those who desecrate sacred Émhlè lands.

**Background**: Chéleb is an Émhlè hunter from the wildernesses of the Jerinálian Mountains. Trained in the ancient Émhlè ways of tracking, archery, and survival, he has spent most of his life navigating the harsh landscapes of Palíthanè’s northern regions. Chéleb is deeply spiritual, connected to the natural world in a way that most of his mercenary companions cannot understand. He is respected for his sharp eyes and knowledge of the land, and he is often sent ahead of the group to scout and gather intelligence.

**Personality**: Chéleb is quiet and introspective, speaking only when necessary. His stoic nature hides a deep reverence for nature and the spirits of the land, which sometimes makes him appear detached from the more pragmatic concerns of his companions. He is fiercely loyal to those who earn his trust but remains guarded around outsiders.

**Goals**: Chéleb’s goal is to gather enough wealth to secure a future for his tribe and the preservation of the Émhlè ways. He sees the mercenary band as a means to an end, allowing him to fund the protection of sacred sites from exploitation and encroachment. He also seeks to learn more about the outside world, using his time with the band to better understand the broader conflicts affecting Palíthanè.
