---
aliases:
  - Chéleb al Rhýddyn
tags: []
name:
  full: Chéleb al Rhýddyn
  aliases: []
id: 0fPBy1GRPKfrjcs1
folder: wDgcy5cLIaLoFogp
shortcode: chelebalrhyddyn
slug: cheleb-al-rhyddyn
img: systems/sohl/assets/icons/game-icons/delapouite/person.svg
portrait: systems/sohl/assets/icons/game-icons/delapouite/person.svg
type: being
pack: characters
social:
  occupation: ""
  station: ""
  class: ""
  society: ""
traits:
  gender: unknown
  age: 31
  birthday: 688/6/20
  height:
    m: 1.8
  weight:
    kg: 70.31
  build:
    frame: medium
  appearance:
    eye_color: brown
    hair_color: brown
    skin_color: pale
    complexion: fair
    extra_features: []
sohl:
  archetype: 1
  attributes:
    str: 12
    end: 11
    dex: 17
    agl: 12
    per: 16
    cml: 12
    aur: 12
    wil: 14
    rea: 16
    cre: 10
    emp: 8
    elo: 7
    mor: 12
    voi: 9
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
        masteryLevelBase: 30
    - shortcode: cmd
      type: skill
      system:
        masteryLevelBase: 22
    - shortcode: dscr
      type: skill
      system:
        masteryLevelBase: 24
    - shortcode: guil
      type: skill
      system:
        masteryLevelBase: 27
    - shortcode: intr
      type: skill
      system:
        masteryLevelBase: 36
    - shortcode: sing
      type: skill
      system:
        masteryLevelBase: 27
    - shortcode: thtcs
      type: skill
      system:
        masteryLevelBase: 9
    - shortcode: srvl
      type: skill
      system:
        masteryLevelBase: 80
    - shortcode: draw
      type: skill
      system:
        masteryLevelBase: 16
    - shortcode: cook
      type: skill
      system:
        masteryLevelBase: 32
    - shortcode: folklr
      type: skill
      system:
        masteryLevelBase: 30
    - shortcode: pysn
      type: skill
      system:
        masteryLevelBase: 16
    - shortcode: awar
      type: skill
      system:
        masteryLevelBase: 75
    - shortcode: clmb
      type: skill
      system:
        masteryLevelBase: 56
    - shortcode: dnce
      type: skill
      system:
        masteryLevelBase: 24
    - shortcode: jump
      type: skill
      system:
        masteryLevelBase: 36
    - shortcode: ridg
      type: skill
      system:
        masteryLevelBase: 10
    - shortcode: stlth
      type: skill
      system:
        masteryLevelBase: 78
    - shortcode: swim
      type: skill
      system:
        masteryLevelBase: 11
    - shortcode: init
      type: skill
      system:
        masteryLevelBase: 60
    - shortcode: shok
      type: skill
      system:
        masteryLevelBase: 48
    - shortcode: melee
      type: skill
      system:
        masteryLevelBase: 45
    - shortcode: dge
      type: skill
      system:
        masteryLevelBase: 42
    - shortcode: archery
      type: skill
      system:
        masteryLevelBase: 80
    - shortcode: thro
      type: skill
      system:
        masteryLevelBase: 34
    - shortcode: fate
      type: mysticalability
    - shortcode: sprt
      type: mysticalability
      system:
        levelBase: 0
        charges: { "value": 0, "max": 0 }
    - shortcode: nadai
      type: mystery
    - shortcode: herb
      type: skill
      system:
        masteryLevelBase: 64
    - shortcode: timb
      type: skill
      system:
        masteryLevelBase: 32
    - shortcode: trak
      type: skill
      system:
        masteryLevelBase: 88
    - shortcode: fltch
      type: skill
      system:
        masteryLevelBase: 80
    - shortcode: hide
      type: skill
      system:
        masteryLevelBase: 32
    - shortcode: wood
      type: skill
      system:
        masteryLevelBase: 64
    - shortcode: emhlen
      type: skill
      system:
        masteryLevelBase: 44
    - shortcode: emelan
      type: skill
      system:
        masteryLevelBase: 44
    - shortcode: palithaner
      type: skill
      system:
        masteryLevelBase: 33
    - shortcode: trierzi
      type: skill
      system:
        masteryLevelBase: 22
    - shortcode: harnic
      type: skill
      system:
        masteryLevelBase: 22
    - shortcode: cultcovenant
      type: skill
      system:
        masteryLevelBase: 12
    - shortcode: cultcovenant
      type: affiliation
    - shortcode: CShirt
      type: armorgear
      system:
        isWorn: true
    - shortcode: CBrch
      type: armorgear
      system:
        isWorn: true
    - shortcode: CSwd
      type: armorgear
      system:
        isWorn: true
    - shortcode: RhCBoot
      type: armorgear
      system:
        isWorn: true
    - shortcode: BClk
      type: armorgear
      system:
        isWorn: true
    - shortcode: Dgr
      type: weapongear
    - shortcode: LBw100
      type: weapongear
    - shortcode: backpk
      type: containergear
    - shortcode: quiversmsh
      type: containergear
    - shortcode: ArwHBrd
      type: projectilegear
      system:
        quantity: 12
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
