---
aliases:
  - Brànwâal al Dôrgaar
tags: []
name:
  full: Brànwâal al Dôrgaar
  aliases: []
id: VfzFVeRATnKSMwzz
folder: wDgcy5cLIaLoFogp
shortcode: branwaalaldorgaar
slug: branwaal-al-dorgaar
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
  age: 33
  birthday: 686/5/16
  height:
    m: 1.85
  weight:
    kg: 81.65
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
    - { shortcode: str, type: attribute, system: { scoreBase: 14 } }
    - { shortcode: end, type: attribute, system: { scoreBase: 13 } }
    - { shortcode: dex, type: attribute, system: { scoreBase: 14 } }
    - { shortcode: agl, type: attribute, system: { scoreBase: 16 } }
    - { shortcode: per, type: attribute, system: { scoreBase: 14 } }
    - { shortcode: cml, type: attribute, system: { scoreBase: 10 } }
    - { shortcode: aur, type: attribute, system: { scoreBase: 12 } }
    - { shortcode: wil, type: attribute, system: { scoreBase: 13 } }
    - { shortcode: rea, type: attribute, system: { scoreBase: 13 } }
    - { shortcode: cre, type: attribute, system: { scoreBase: 13 } }
    - { shortcode: emp, type: attribute, system: { scoreBase: 11 } }
    - { shortcode: elo, type: attribute, system: { scoreBase: 13 } }
    - { shortcode: mor, type: attribute, system: { scoreBase: 11 } }
    - { shortcode: voi, type: attribute, system: { scoreBase: 14 } }
    - { shortcode: chrm, type: skill, system: { masteryLevelBase: 30 } }
    - { shortcode: cmd, type: skill, system: { masteryLevelBase: 65 } }
    - { shortcode: dscr, type: skill, system: { masteryLevelBase: 52 } }
    - { shortcode: guil, type: skill, system: { masteryLevelBase: 36 } }
    - { shortcode: intr, type: skill, system: { masteryLevelBase: 48 } }
    - { shortcode: sing, type: skill, system: { masteryLevelBase: 42 } }
    - { shortcode: thtcs, type: skill, system: { masteryLevelBase: 13 } }
    - { shortcode: srvl, type: skill, system: { masteryLevelBase: 42 } }
    - { shortcode: draw, type: skill, system: { masteryLevelBase: 14 } }
    - { shortcode: cook, type: skill, system: { masteryLevelBase: 28 } }
    - { shortcode: folklr, type: skill, system: { masteryLevelBase: 13 } }
    - { shortcode: pysn, type: skill, system: { masteryLevelBase: 13 } }
    - { shortcode: awar, type: skill, system: { masteryLevelBase: 56 } }
    - { shortcode: clmb, type: skill, system: { masteryLevelBase: 45 } }
    - { shortcode: dnce, type: skill, system: { masteryLevelBase: 30 } }
    - { shortcode: jump, type: skill, system: { masteryLevelBase: 45 } }
    - { shortcode: ridg, type: skill, system: { masteryLevelBase: 39 } }
    - { shortcode: stlth, type: skill, system: { masteryLevelBase: 45 } }
    - { shortcode: swim, type: skill, system: { masteryLevelBase: 14 } }
    - { shortcode: init, type: skill, system: { masteryLevelBase: 65 } }
    - { shortcode: shok, type: skill, system: { masteryLevelBase: 70 } }
    - { shortcode: melee, type: skill, system: { masteryLevelBase: 75 } }
    - { shortcode: dge, type: skill, system: { masteryLevelBase: 75 } }
    - { shortcode: archery, type: skill, system: { masteryLevelBase: 56 } }
    - { shortcode: thro, type: skill, system: { masteryLevelBase: 70 } }
    - { shortcode: fate, type: mysticalability }
    - shortcode: sprt
      type: mysticalability
      system:
        levelBase: 0
        charges:
          value: 0
          max: 0
    - { shortcode: angberelius, type: mystery }
    - { shortcode: anmcft, type: skill, system: { masteryLevelBase: 12 } }
    - { shortcode: smsh, type: skill, system: { masteryLevelBase: 14 } }
    - { shortcode: timb, type: skill, system: { masteryLevelBase: 14 } }
    - { shortcode: hide, type: skill, system: { masteryLevelBase: 28 } }
    - { shortcode: wpnc, type: skill, system: { masteryLevelBase: 42 } }
    - { shortcode: hrld, type: skill, system: { masteryLevelBase: 26 } }
    - { shortcode: mrcn, type: skill, system: { masteryLevelBase: 13 } }
    - { shortcode: larani, type: skill, system: { masteryLevelBase: 12 } }
    - { shortcode: palithaner, type: skill, system: { masteryLevelBase: 71 } }
    - { shortcode: trierzi, type: skill, system: { masteryLevelBase: 52 } }
    - { shortcode: emhlen, type: skill, system: { masteryLevelBase: 39 } }
    - { shortcode: kantal, type: skill, system: { masteryLevelBase: 52 } }
    - { shortcode: lakise, type: skill, system: { masteryLevelBase: 13 } }
    - { shortcode: CTrsr, type: armorgear, system: { isWorn: true } }
    - { shortcode: CSTnc, type: armorgear, system: { isWorn: true } }
    - { shortcode: RhKBoot, type: armorgear, system: { isWorn: true } }
    - { shortcode: RhGntl, type: armorgear, system: { isWorn: true } }
    - { shortcode: MByr, type: armorgear, system: { isWorn: true } }
    - { shortcode: PCap, type: armorgear, system: { isWorn: true } }
    - { shortcode: PCoat, type: armorgear, system: { isWorn: true } }
    - { shortcode: Pl34Hlm, type: armorgear, system: { isWorn: true } }
    - { shortcode: RndSh, type: weapongear }
    - { shortcode: BrdSwd, type: weapongear }
    - { shortcode: Dgr, type: weapongear }
    - { shortcode: LBw100, type: weapongear }
    - { shortcode: bpchmd, type: containergear }
    - { shortcode: backpk, type: containergear }
    - { shortcode: quiversmsh, type: containergear }
    - { shortcode: ArwHBrd, type: projectilegear, system: { quantity: 12 } }
    - { shortcode: larani, type: affiliation }
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
