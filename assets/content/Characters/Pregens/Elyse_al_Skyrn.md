---
tags: []
name:
  full: Elýsè al Skýrn
  aliases: []
id: Hxxja9eO46kDimGg
packFolder: characters
shortcode: elysealskyrn
slug: elyse-al-skyrn
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
  age: 26
  birthday: 693/11/25
  height: 1.68
  weight: 58.97
  frame: medium
  appearance:
    eye_color: brown
    hair_color: brown
    skin_color: pale
    complexion: fair
    extra_features: []
sohl:
  items:
    - { model: attribute-str, system: { scoreBase: 8 } }
    - { model: attribute-end, system: { scoreBase: 9 } }
    - { model: attribute-dex, system: { scoreBase: 14 } }
    - { model: attribute-agl, system: { scoreBase: 10 } }
    - { model: attribute-per, system: { scoreBase: 15 } }
    - { model: attribute-cml, system: { scoreBase: 13 } }
    - { model: attribute-aur, system: { scoreBase: 17 } }
    - { model: attribute-wil, system: { scoreBase: 10 } }
    - { model: attribute-rea, system: { scoreBase: 14 } }
    - { model: attribute-cre, system: { scoreBase: 14 } }
    - { model: attribute-emp, system: { scoreBase: 15 } }
    - { model: attribute-elo, system: { scoreBase: 10 } }
    - { model: attribute-mor, system: { scoreBase: 11 } }
    - { model: attribute-voi, system: { scoreBase: 16 } }
    - { model: skill-chrm, system: { masteryLevelBase: 70 } }
    - { model: skill-cmd, system: { masteryLevelBase: 20 } }
    - { model: skill-dscr, system: { masteryLevelBase: 24 } }
    - { model: skill-guil, system: { masteryLevelBase: 45 } }
    - { model: skill-intr, system: { masteryLevelBase: 45 } }
    - { model: skill-sing, system: { masteryLevelBase: 60 } }
    - { model: skill-thtcs, system: { masteryLevelBase: 60 } }
    - { model: skill-srvl, system: { masteryLevelBase: 26 } }
    - { model: skill-draw, system: { masteryLevelBase: 45 } }
    - { model: skill-cook, system: { masteryLevelBase: 30 } }
    - { model: skill-folklr, system: { masteryLevelBase: 36 } }
    - { model: skill-pysn, system: { masteryLevelBase: 70 } }
    - { model: skill-awar, system: { masteryLevelBase: 39 } }
    - { model: skill-clmb, system: { masteryLevelBase: 36 } }
    - { model: skill-dnce, system: { masteryLevelBase: 20 } }
    - { model: skill-jump, system: { masteryLevelBase: 27 } }
    - { model: skill-ridg, system: { masteryLevelBase: 13 } }
    - { model: skill-stlth, system: { masteryLevelBase: 36 } }
    - { model: skill-swim, system: { masteryLevelBase: 9 } }
    - { model: skill-init, system: { masteryLevelBase: 36 } }
    - { model: skill-shok, system: { masteryLevelBase: 24 } }
    - { model: skill-melee, system: { masteryLevelBase: 24 } }
    - { model: skill-dge, system: { masteryLevelBase: 24 } }
    - { model: skill-archery, system: { masteryLevelBase: 15 } }
    - { model: skill-thro, system: { masteryLevelBase: 56 } }
    - { model: mysticalability-fate }
    - model: mysticalability-sprt
      system:
        levelBase: 0
        charges:
          value: 0
          max: 0
    - { model: mystery-masara }
    - { model: skill-anmcft, system: { masteryLevelBase: 26 } }
    - { model: skill-herb, system: { masteryLevelBase: 70 } }
    - { model: skill-mnrl, system: { masteryLevelBase: 28 } }
    - { model: skill-mtlc, system: { masteryLevelBase: 36 } }
    - { model: skill-math, system: { masteryLevelBase: 42 } }
    - { model: mysticalability-alch, system: { masteryLevelBase: 80 } }
    - { model: skill-palithaner, system: { masteryLevelBase: 60 } }
    - { model: skill-trierzi, system: { masteryLevelBase: 36 } }
    - { model: skill-emelan, system: { masteryLevelBase: 60 } }
    - { model: skill-zakimladal, system: { masteryLevelBase: 60 } }
    - { model: skill-harnic, system: { masteryLevelBase: 36 } }
    - { model: skill-kantal, system: { masteryLevelBase: 36 } }
    - { model: skill-lakise, system: { masteryLevelBase: 42 } }
    - { model: skill-runic, system: { masteryLevelBase: 28 } }
    - { model: skill-script, system: { masteryLevelBase: 42 } }
    - { model: skill-saveknor, system: { masteryLevelBase: 12 } }
    - { model: affiliation-saveknor }
    - { model: containergear-beltpouchl3 }
    - model: miscgear-gldcrwn
      system:
        quantity: 2
        note: One gold crown in secret compartment in heel of each boot
    - { model: armorgear-wleg, system: { isWorn: true } }
    - { model: armorgear-wcap, system: { isWorn: true } }
    - { model: armorgear-lskirt, system: { isWorn: true } }
    - { model: armorgear-lstnc, system: { isWorn: true } }
    - { model: armorgear-pvest, system: { isWorn: true } }
    - { model: armorgear-wclk, system: { isWorn: true } }
    - { model: armorgear-wcowl, system: { isWorn: true } }
    - { model: armorgear-rhcboot, system: { isWorn: true } }
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

Elýsè al Skýrn. I’m not much of a fighter, but if you’re wounded, I’m the one you want by your side. I’ve been trained in the healing arts—herbal remedies, potions, stitching wounds, all of that. My father and grandmother taught me everything they knew, and I’ve been learning more ever since. Traveling with this band gives me the chance to gather rare herbs and learn new techniques.

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

**Background**: Elýsè grew up as the daughter of an apothecary in a small Thaneman village. Her aptitude for healing and her natural charisma led to her being sent to study medicine and alchemy in Berema, Emélrenè. Despite her formal training and success, she grew restless, longing for more hands-on experience and the excitement of discovery. She soon joined the Silent Talon, where she provides critical medical support on missions. Her talents keep the team alive and thriving in the most dangerous situations. Due to a bad experience, she hides her true arcane skills; for most people, she simply identifies as a healer.

**Personality**: Elýsè is calm, resourceful, and empathetic, though she prefers to keep personal matters to herself. She is focused on her work, valuing knowledge and skill above all else, but she remains quietly wary of letting others too close. Recently, her relationship with Tórnis has added an unexpected layer of complexity to her life.

**Goals**: Elýsè’s primary goal remains the discovery of new alchemical recipes, medical remedies, and techniques.
