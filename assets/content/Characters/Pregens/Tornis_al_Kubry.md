---
tags: []
name:
  full: Tórnis al Kúbrý
  aliases: []
id: QgVdOPUTxTLxEvBf
packFolder: characters
shortcode: tornisalkubry
slug: tornis-al-kubry
type: being
pack: characters
social:
  occupation: ""
  station: ""
  class: ""
  society: ""
data:
  icon: sohl-none-icon-person
  templatePriority: 1
  gender: unknown
  age: 29
  born: 690/2/2
  height: 1.78
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
    - { model: attribute-str, system: { scoreBase: 10 } }
    - { model: attribute-end, system: { scoreBase: 9 } }
    - { model: attribute-dex, system: { scoreBase: 14 } }
    - { model: attribute-agl, system: { scoreBase: 16 } }
    - { model: attribute-per, system: { scoreBase: 15 } }
    - { model: attribute-cml, system: { scoreBase: 14 } }
    - { model: attribute-aur, system: { scoreBase: 10 } }
    - { model: attribute-wil, system: { scoreBase: 16 } }
    - { model: attribute-rea, system: { scoreBase: 11 } }
    - { model: attribute-cre, system: { scoreBase: 13 } }
    - { model: attribute-emp, system: { scoreBase: 16 } }
    - { model: attribute-elo, system: { scoreBase: 14 } }
    - { model: attribute-mor, system: { scoreBase: 8 } }
    - { model: attribute-voi, system: { scoreBase: 13 } }
    - { model: skill-chrm, system: { masteryLevelBase: 75 } }
    - { model: skill-cmd, system: { masteryLevelBase: 45 } }
    - { model: skill-dscr, system: { masteryLevelBase: 24 } }
    - { model: skill-guil, system: { masteryLevelBase: 75 } }
    - { model: skill-intr, system: { masteryLevelBase: 80 } }
    - { model: skill-sing, system: { masteryLevelBase: 65 } }
    - { model: skill-thtcs, system: { masteryLevelBase: 76 } }
    - { model: skill-srvl, system: { masteryLevelBase: 15 } }
    - { model: skill-draw, system: { masteryLevelBase: 15 } }
    - { model: skill-cook, system: { masteryLevelBase: 52 } }
    - { model: skill-folklr, system: { masteryLevelBase: 13 } }
    - { model: skill-pysn, system: { masteryLevelBase: 13 } }
    - { model: skill-awar, system: { masteryLevelBase: 75 } }
    - { model: skill-clmb, system: { masteryLevelBase: 45 } }
    - { model: skill-dnce, system: { masteryLevelBase: 26 } }
    - { model: skill-jump, system: { masteryLevelBase: 39 } }
    - { model: skill-ridg, system: { masteryLevelBase: 16 } }
    - { model: skill-stlth, system: { masteryLevelBase: 80 } }
    - { model: skill-swim, system: { masteryLevelBase: 12 } }
    - { model: skill-init, system: { masteryLevelBase: 42 } }
    - { model: skill-shok, system: { masteryLevelBase: 30 } }
    - { model: skill-melee, system: { masteryLevelBase: 60 } }
    - { model: skill-dge, system: { masteryLevelBase: 65 } }
    - { model: skill-archery, system: { masteryLevelBase: 39 } }
    - { model: skill-thro, system: { masteryLevelBase: 42 } }
    - { model: mysticalability-fate }
    - model: mysticalability-sprt
      system:
        levelBase: 0
        charges:
          value: 0
          max: 0
    - { model: mystery-ulandusaralius }
    - { model: skill-smsh, system: { masteryLevelBase: 15 } }
    - { model: skill-lock, system: { masteryLevelBase: 84 } }
    - { model: skill-mtlc, system: { masteryLevelBase: 26 } }
    - { model: skill-musc, system: { masteryLevelBase: 60 } }
    - { model: skill-palithaner, system: { masteryLevelBase: 71 } }
    - { model: skill-trierzi, system: { masteryLevelBase: 52 } }
    - { model: skill-emhlen, system: { masteryLevelBase: 39 } }
    - { model: skill-kantal, system: { masteryLevelBase: 52 } }
    - { model: skill-lakise, system: { masteryLevelBase: 13 } }
    - { model: skill-larani, system: { masteryLevelBase: 14 } }
    - { model: armorgear-wleg, system: { isWorn: true } }
    - { model: armorgear-wscoat, system: { isWorn: true } }
    - { model: armorgear-wclk, system: { isWorn: true } }
    - { model: armorgear-rhcboot, system: { isWorn: true } }
    - { model: armorgear-pvest, system: { isWorn: true } }
    - { model: armorgear-ltglove, system: { isWorn: true } }
    - { model: weapongear-brdswd }
    - { model: weapongear-dgr }
    - { model: weapongear-taburi, name: Tabûri 1, system: { shortcode: Taburi1 } }
    - { model: weapongear-taburi, name: Tabûri 2, system: { shortcode: Taburi2 } }
    - { model: weapongear-taburi, name: Tabûri 3, system: { shortcode: Taburi3 } }
    - { model: weapongear-taburi, name: Tabûri 4, system: { shortcode: Taburi4 } }
    - { model: weapongear-lbw100 }
    - { model: projectilegear-arwlbrd, system: { quantity: 12 } }
    - { model: containergear-quiversmsh }
    - { model: containergear-backpk }
    - { model: containergear-bpchmd }
    - { model: containergear-beltpouchl3 }
    - { model: affiliation-larani }
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

|                            |              |
| -------------------------- | ------------ |
| **Apparent Age**           | Mature       |
| **Culture**                | Pálithàner   |
| **Social Class**           | Urban Free   |
| **Height**                 | 5 ft 10 in   |
| **Frame**                  | Medium       |
| **Weight**                 | 155 lbs      |
| **Appearance/Comeliness**  | Fair Skin    |
| **Hair Color**             | Dark Blonde  |
| **Eye Color**              | Green        |
| **Voice**                  | Unremarkable |
| **Obvious Medical Traits** | None         |
| **Apparent Occupation**    | Liason       |
| **Apparent Wealth**        | Comfortable  |
| **Weapons**                | Dagger       |
| **Armour**                 | None         |
| **Companions**             | Silent Talon |
| **Other obvious features** | None         |

Tórnis, at your service. I’m just a man of simple talents, really—a wanderer, you might say. Life has taken me to many places—mostly as a scout and trader, helping folk get where they need to go or find what they’re looking for. I know the roads well, especially the ones people tend to avoid. But, you know, it’s not all just about the travel. I’ve learned a thing or two about slipping in and out of places where most people wouldn’t dare tread. Sometimes you need a quiet hand to get things done… nothing violent, mind you—just a little finesse.

I’m no great warrior, but I can handle myself if need be. I prefer to think of myself as resourceful, capable of doing what’s necessary to keep my companions safe and on course. And besides, who doesn’t like a bit of adventure?

# Dossier {#dossier}

## Data

|                    |             |
| ------------------ | ----------- |
| **Birthdate**      | 2 Peónu 690 |
| **Birthplace**     | Palíthanè   |
| **Sibling Rank**   | 5 of 8      |
| **Medical Traits** | None        |
| **Psyche Traits**  | None        |

## Life Story

**Strengths**: Stealth, deception, infiltration.

**Weaknesses**: Distrustful, keeps others at arm’s length.

**Patrons**: None.

**Enemies**: Former comrades who betrayed him.

**Background**: Tórnis is a mysterious figure with a past shrouded in secrecy. His true name is Calen, a former Triérzi outlaw who spent years operating with a brigand band along the Triérzon-Palíthanè border. Skilled in stealth, sabotage, and manipulation, he was known for his cunning but fled his former life after a betrayal within his group led to a bloody massacre. Since then, he has taken on the alias Tórnis al Kúbrý and now operates as a spy and infiltrator for the mercenary band. Talen is invaluable for his ability to gather intelligence, steal secrets, and neutralize threats without drawing attention. Tórnis has recently started developing real affection for Elýsè.

**Personality**: Tórnis is charming and affable, able to blend into any crowd. However, beneath his smooth exterior lies a deeply cautious and calculating individual. He trusts no one completely, preferring to stay emotionally distant, though he maintains a friendly demeanour. His past haunts him, but he is determined never to let it define him.

**Goals**: He seeks to distance himself from his past life as a Triérzi brigand and start anew.
