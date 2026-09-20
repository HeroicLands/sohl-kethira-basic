---
tags: []
name:
  full: Brànwâal al Dôrgaar
  aliases: []
id: VfzFVeRATnKSMwzz
packFolder: characters
shortcode: branwaalaldorgaar
slug: branwaal-al-dorgaar
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
  age: 33
  birthday: 686/5/16
  height: 1.85
  weight: 81.65
  frame: medium
  appearance:
    eye_color: brown
    hair_color: brown
    skin_color: pale
    complexion: fair
    extra_features: []
sohl:
  items:
    - { model: attribute-str, system: { scoreBase: 14 } }
    - { model: attribute-end, system: { scoreBase: 13 } }
    - { model: attribute-dex, system: { scoreBase: 14 } }
    - { model: attribute-agl, system: { scoreBase: 16 } }
    - { model: attribute-per, system: { scoreBase: 14 } }
    - { model: attribute-cml, system: { scoreBase: 10 } }
    - { model: attribute-aur, system: { scoreBase: 12 } }
    - { model: attribute-wil, system: { scoreBase: 13 } }
    - { model: attribute-rea, system: { scoreBase: 13 } }
    - { model: attribute-cre, system: { scoreBase: 13 } }
    - { model: attribute-emp, system: { scoreBase: 11 } }
    - { model: attribute-elo, system: { scoreBase: 13 } }
    - { model: attribute-mor, system: { scoreBase: 11 } }
    - { model: attribute-voi, system: { scoreBase: 14 } }
    - { model: skill-chrm, system: { masteryLevelBase: 30 } }
    - { model: skill-cmd, system: { masteryLevelBase: 65 } }
    - { model: skill-dscr, system: { masteryLevelBase: 52 } }
    - { model: skill-guil, system: { masteryLevelBase: 36 } }
    - { model: skill-intr, system: { masteryLevelBase: 48 } }
    - { model: skill-sing, system: { masteryLevelBase: 42 } }
    - { model: skill-thtcs, system: { masteryLevelBase: 13 } }
    - { model: skill-srvl, system: { masteryLevelBase: 42 } }
    - { model: skill-draw, system: { masteryLevelBase: 14 } }
    - { model: skill-cook, system: { masteryLevelBase: 28 } }
    - { model: skill-folklr, system: { masteryLevelBase: 13 } }
    - { model: skill-pysn, system: { masteryLevelBase: 13 } }
    - { model: skill-awar, system: { masteryLevelBase: 56 } }
    - { model: skill-clmb, system: { masteryLevelBase: 45 } }
    - { model: skill-dnce, system: { masteryLevelBase: 30 } }
    - { model: skill-jump, system: { masteryLevelBase: 45 } }
    - { model: skill-ridg, system: { masteryLevelBase: 39 } }
    - { model: skill-stlth, system: { masteryLevelBase: 45 } }
    - { model: skill-swim, system: { masteryLevelBase: 14 } }
    - { model: skill-init, system: { masteryLevelBase: 65 } }
    - { model: skill-shok, system: { masteryLevelBase: 70 } }
    - { model: skill-melee, system: { masteryLevelBase: 75 } }
    - { model: skill-dge, system: { masteryLevelBase: 75 } }
    - { model: skill-archery, system: { masteryLevelBase: 56 } }
    - { model: skill-thro, system: { masteryLevelBase: 70 } }
    - { model: mysticalability-fate }
    - model: mysticalability-sprt
      system:
        levelBase: 0
        charges:
          value: 0
          max: 0
    - { model: mystery-angberelius }
    - { model: skill-anmcft, system: { masteryLevelBase: 12 } }
    - { model: skill-smsh, system: { masteryLevelBase: 14 } }
    - { model: skill-timb, system: { masteryLevelBase: 14 } }
    - { model: skill-hide, system: { masteryLevelBase: 28 } }
    - { model: skill-wpnc, system: { masteryLevelBase: 42 } }
    - { model: skill-hrld, system: { masteryLevelBase: 26 } }
    - { model: skill-mrcn, system: { masteryLevelBase: 13 } }
    - { model: skill-larani, system: { masteryLevelBase: 12 } }
    - { model: skill-palithaner, system: { masteryLevelBase: 71 } }
    - { model: skill-trierzi, system: { masteryLevelBase: 52 } }
    - { model: skill-emhlen, system: { masteryLevelBase: 39 } }
    - { model: skill-kantal, system: { masteryLevelBase: 52 } }
    - { model: skill-lakise, system: { masteryLevelBase: 13 } }
    - { model: armorgear-ctrsr, system: { isWorn: true } }
    - { model: armorgear-cstnc, system: { isWorn: true } }
    - { model: armorgear-rhkboot, system: { isWorn: true } }
    - { model: armorgear-rhgntl, system: { isWorn: true } }
    - { model: armorgear-mbyr, system: { isWorn: true } }
    - { model: armorgear-pcap, system: { isWorn: true } }
    - { model: armorgear-pcoat, system: { isWorn: true } }
    - { model: armorgear-pl34hlm, system: { isWorn: true } }
    - { model: weapongear-rndsh }
    - { model: weapongear-brdswd }
    - { model: weapongear-dgr }
    - { model: weapongear-lbw100 }
    - { model: containergear-bpchmd }
    - { model: containergear-backpk }
    - { model: containergear-quiversmsh }
    - { model: projectilegear-arwhbrd, system: { quantity: 12 } }
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

|                            |                                                                            |
| -------------------------- | -------------------------------------------------------------------------- |
| **Apparent Age**           | Mature                                                                     |
| **Culture**                | Pálithàner                                                                 |
| **Social Class**           | Mercenary, Noble                                                           |
| **Height**                 | 6 ft 1 in                                                                  |
| **Frame**                  | Medium                                                                     |
| **Weight**                 | 180 lbs                                                                    |
| **Appearance/Comeliness**  | Fair skin, weathered from years of battle                                  |
| **Hair Color**             | Dark Brown with Grey                                                       |
| **Eye Color**              | Brown                                                                      |
| **Voice**                  | Melodius                                                                   |
| **Obvious Medical Traits** | None                                                                       |
| **Apparent Occupation**    | Mercenary Captain                                                          |
| **Apparent Wealth**        | Comfortable                                                                |
| **Weapons**                | Broadsword, dagger, round shield                                           |
| **Armour**                 | Mail byrnie, leather gauntlets and knee boots, padded coat, plate 3/4 helm |
| **Companions**             | Silent Talon                                                               |
| **Other obvious features** | None                                                                       |

Brànwâal Dôrgaar. Héthrin, if you prefer. I’ve been leading men for more than a decade now, and if there’s one thing I’ve learned, it’s that war is a game of wits as much as it is of steel. I’ve served on enough battlefields to know that strategy wins wars—more than brute force ever could. Sure, I’ve swung a sword plenty of times, but I prefer to stay two steps ahead of my enemies. We fight for coin, yes, but in the end, it’s about survival and doing what’s necessary to stay on top.

I come from noble blood—but my family was betrayed. Not much of that matters anymore, though. The name Dôrgaar is all that’s left of my family’s holdings. I’m working to restore that name, but that’ll take time… and silver. For now, I’m content to lead this band, and if you stick with me, you’ll see we come out of each fight alive. That’s what matters, isn’t it?

# Dossier {#dossier}

## Data

|                    |               |
| ------------------ | ------------- |
| **Birthdate**      | 16 Laránè 686 |
| **Birthplace**     | Palíthanè     |
| **Sibling Rank**   | 3 of 3        |
| **Medical Traits** | None          |
| **Psyche Traits**  | None          |

## Life Story

**Strengths**: Leadership, strategy, personal combat. Weaknesses: A slight arrogance from his noble past, risk-taking.

**Patrons**: None currently, but he seeks to earn the favor of powerful lords.

**Enemies**: None.

**Background**: Brànwâal Dôrgaar is a seasoned warrior from Palíthanè, born into a minor noble family that lost its lands and status after choosing the wrong side in the War of the Princes. Brànwâal has earned a reputation for his strategic mind, charismatic leadership, and unwavering loyalty to his men. He has seen countless battles in the Blood Lands, defending noble families and commoners alike.

**Personality**: Brànwâal is practical, cunning, and sharp-tongued, with a strong sense of camaraderie. He commands respect through experience and skill, and though he may appear cold, he cares deeply for the welfare of his men. Goals: To restore his family’s honor and reclaim their lost lands by amassing wealth and influence through his mercenary work. His immediate aim is to grow the band’s reputation and wealth, which he believes will attract high-paying contracts and bring him closer to his long-term ambition.
