---
aliases:
  - Elýsè al Skýrn
tags: []
name:
  full: Elýsè al Skýrn
  aliases: []
id: Hxxja9eO46kDimGg
folder: wDgcy5cLIaLoFogp
shortcode: elysealskyrn
slug: elyse-al-skyrn
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
  age: 26
  birthday: 693/11/25
  height:
    m: 1.68
  weight:
    kg: 58.97
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
    - { shortcode: str, type: attribute, system: { scoreBase: 8 } }
    - { shortcode: end, type: attribute, system: { scoreBase: 9 } }
    - { shortcode: dex, type: attribute, system: { scoreBase: 14 } }
    - { shortcode: agl, type: attribute, system: { scoreBase: 10 } }
    - { shortcode: per, type: attribute, system: { scoreBase: 15 } }
    - { shortcode: cml, type: attribute, system: { scoreBase: 13 } }
    - { shortcode: aur, type: attribute, system: { scoreBase: 17 } }
    - { shortcode: wil, type: attribute, system: { scoreBase: 10 } }
    - { shortcode: rea, type: attribute, system: { scoreBase: 14 } }
    - { shortcode: cre, type: attribute, system: { scoreBase: 14 } }
    - { shortcode: emp, type: attribute, system: { scoreBase: 15 } }
    - { shortcode: elo, type: attribute, system: { scoreBase: 10 } }
    - { shortcode: mor, type: attribute, system: { scoreBase: 11 } }
    - { shortcode: voi, type: attribute, system: { scoreBase: 16 } }
    - { shortcode: chrm, type: skill, system: { masteryLevelBase: 70 } }
    - { shortcode: cmd, type: skill, system: { masteryLevelBase: 20 } }
    - { shortcode: dscr, type: skill, system: { masteryLevelBase: 24 } }
    - { shortcode: guil, type: skill, system: { masteryLevelBase: 45 } }
    - { shortcode: intr, type: skill, system: { masteryLevelBase: 45 } }
    - { shortcode: sing, type: skill, system: { masteryLevelBase: 60 } }
    - { shortcode: thtcs, type: skill, system: { masteryLevelBase: 60 } }
    - { shortcode: srvl, type: skill, system: { masteryLevelBase: 26 } }
    - { shortcode: draw, type: skill, system: { masteryLevelBase: 45 } }
    - { shortcode: cook, type: skill, system: { masteryLevelBase: 30 } }
    - { shortcode: folklr, type: skill, system: { masteryLevelBase: 36 } }
    - { shortcode: pysn, type: skill, system: { masteryLevelBase: 70 } }
    - { shortcode: awar, type: skill, system: { masteryLevelBase: 39 } }
    - { shortcode: clmb, type: skill, system: { masteryLevelBase: 36 } }
    - { shortcode: dnce, type: skill, system: { masteryLevelBase: 20 } }
    - { shortcode: jump, type: skill, system: { masteryLevelBase: 27 } }
    - { shortcode: ridg, type: skill, system: { masteryLevelBase: 13 } }
    - { shortcode: stlth, type: skill, system: { masteryLevelBase: 36 } }
    - { shortcode: swim, type: skill, system: { masteryLevelBase: 9 } }
    - { shortcode: init, type: skill, system: { masteryLevelBase: 36 } }
    - { shortcode: shok, type: skill, system: { masteryLevelBase: 24 } }
    - { shortcode: melee, type: skill, system: { masteryLevelBase: 24 } }
    - { shortcode: dge, type: skill, system: { masteryLevelBase: 24 } }
    - { shortcode: archery, type: skill, system: { masteryLevelBase: 15 } }
    - { shortcode: thro, type: skill, system: { masteryLevelBase: 56 } }
    - { shortcode: fate, type: mysticalability }
    - shortcode: sprt
      type: mysticalability
      system:
        levelBase: 0
        charges:
          value: 0
          max: 0
    - { shortcode: masara, type: mystery }
    - { shortcode: anmcft, type: skill, system: { masteryLevelBase: 26 } }
    - { shortcode: herb, type: skill, system: { masteryLevelBase: 70 } }
    - { shortcode: mnrl, type: skill, system: { masteryLevelBase: 28 } }
    - { shortcode: mtlc, type: skill, system: { masteryLevelBase: 36 } }
    - { shortcode: math, type: skill, system: { masteryLevelBase: 42 } }
    - {
        shortcode: alch,
        type: mysticalability,
        system: { masteryLevelBase: 80 },
      }
    - { shortcode: palithaner, type: skill, system: { masteryLevelBase: 60 } }
    - { shortcode: trierzi, type: skill, system: { masteryLevelBase: 36 } }
    - { shortcode: emelan, type: skill, system: { masteryLevelBase: 60 } }
    - { shortcode: zakimladal, type: skill, system: { masteryLevelBase: 60 } }
    - { shortcode: harnic, type: skill, system: { masteryLevelBase: 36 } }
    - { shortcode: kantal, type: skill, system: { masteryLevelBase: 36 } }
    - { shortcode: lakise, type: skill, system: { masteryLevelBase: 42 } }
    - { shortcode: runic, type: skill, system: { masteryLevelBase: 28 } }
    - { shortcode: script, type: skill, system: { masteryLevelBase: 42 } }
    - { shortcode: saveknor, type: skill, system: { masteryLevelBase: 12 } }
    - { shortcode: saveknor, type: affiliation }
    - { shortcode: beltpouchl3, type: containergear }
    - shortcode: gldcrwn
      type: miscgear
      system:
        quantity: 2
        note: One gold crown in secret compartment in heel of each boot
    - { shortcode: WLeg, type: armorgear, system: { isWorn: true } }
    - { shortcode: WCap, type: armorgear, system: { isWorn: true } }
    - { shortcode: LSkirt, type: armorgear, system: { isWorn: true } }
    - { shortcode: LSTnc, type: armorgear, system: { isWorn: true } }
    - { shortcode: PVest, type: armorgear, system: { isWorn: true } }
    - { shortcode: WClk, type: armorgear, system: { isWorn: true } }
    - { shortcode: WCowl, type: armorgear, system: { isWorn: true } }
    - { shortcode: RhCBoot, type: armorgear, system: { isWorn: true } }
    - { shortcode: Dgr, type: weapongear }
    - { shortcode: backpk, type: containergear }
    - { shortcode: bpchmd, type: containergear }
---

# Appearance {#appearance}

|                            |                            |
| -------------------------- | -------------------------- |
| **Apparent Age**           | Young                      |
| **Culture**                | Pálithàner                 |
| **Social Class**           | Urban Guilded              |
| **Height**                 | 5 ft 6 in                  |
| **Frame**                  | Light                      |
| **Weight**                 | 130 lbs                    |
| **Appearance/Comeliness**  | Fair with light freckles   |
| **Hair Color**             | Auburn                     |
| **Eye Color**              | Blue                       |
| **Voice**                  | Dulcet                     |
| **Obvious Medical Traits** | None                       |
| **Apparent Occupation**    | Healer                     |
| **Apparent Wealth**        | Comfortable                |
| **Weapons**                | Dagger                     |
| **Armour**                 | Padded vest, leather boots |
| **Companions**             | Silent Talon               |
| **Other obvious features** | None                       |

Elýsè al Skýrn. I’m not much of a fighter, but if you’re wounded, I’m the one you want by your side. I’ve been trained in the healing arts—herbal remedies, potions, stitching wounds, all of that. My father and grandmother taught me everything they knew, and I’ve been learning more ever since. Traveling with this band gives me the chance to gather rare herbs and learn new techniques.

Why a healer would join a mercenary band, you might ask? It’s simple, really—these men need someone to patch them up after battle. And for me, it’s about learning as much as I can before I open my own healing house one day. War’s not something I enjoy, but it brings patients to me, and it lets me help those who need it. I’m practical about it. We all need a place in this world, and mine is to mend what’s broken.

# Dossier {#dossier}

## Data

|                    |              |
| ------------------ | ------------ |
| **Birthdate**      | 25 Návek 693 |
| **Birthplace**     | Palíthanè    |
| **Sibling Rank**   | 2 of 5       |
| **Medical Traits** | None         |
| **Psyche Traits**  | None         |

## Life Story

**Strengths**: Healing, alchemy, herbalism, bubbly charming demeanour, infectious optimism.

**Weaknesses**: Secretive about self, cautious about trusting others with her true abilities.

**Patrons**: None.

**Enemies**: Those who seek to control her or exploit her knowledge.

**Background**: Elýsè grew up as the daughter of an apothecary in a small Thaneman village. Her aptitude for healing and her natural charisma led to her being sent to study medicine and alchemy in Berema, Emélrenè. Despite her formal training and success, she grew restless, longing for more hands-on experience and the excitement of discovery. She soon joined the Silent Talon, where she provides critical medical support on missions. Her talents keep the team alive and thriving in the most dangerous situations. Due to a bad experience, she hides her true arcane skills; for most people, she simply identifies as a healer.

**Personality**: Elýsè is calm, resourceful, and empathetic, though she prefers to keep personal matters to herself. She is focused on her work, valuing knowledge and skill above all else, but she remains quietly wary of letting others too close. Recently, her relationship with Tórnis has added an unexpected layer of complexity to her life.

**Goals**: Elýsè’s primary goal remains the discovery of new alchemical recipes, medical remedies, and techniques.
