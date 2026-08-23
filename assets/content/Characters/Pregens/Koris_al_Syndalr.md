---
aliases:
    - Kôris al Sýndalr
    - being-korisalsyndalr
tags: []
name:
    full: Kôris al Sýndalr
    aliases: []
id: Nwxk1ehiccvUnhIZ
folder: wDgcy5cLIaLoFogp
shortcode: korisalsyndalr
slug: koris-al-syndalr
img: systems/sohl/assets/icons/game-icons/delapouite/person.svg
portrait: systems/sohl/assets/icons/game-icons/delapouite/person.svg
type: being
pack: characters
package: kethira
social:
    occupation: ""
    station: ""
    class: ""
    society: ""
traits:
    gender: unknown
    age: 27
    birthday: 692/7/8
    height:
        m: 1.93
    weight:
        kg: 97.52
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
        str: 17
        end: 15
        dex: 14
        agl: 15
        per: 11
        cml: 9
        aur: 8
        wil: 12
        rea: 10
        cre: 8
        emp: 10
        elo: 9
        mor: 11
        voi: 10
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
              masteryLevelBase: 27
        - shortcode: cmd
          type: skill
          system:
              masteryLevelBase: 22
        - shortcode: dscr
          type: skill
          system:
              masteryLevelBase: 20
        - shortcode: guil
          type: skill
          system:
              masteryLevelBase: 27
        - shortcode: intr
          type: skill
          system:
              masteryLevelBase: 40
        - shortcode: sing
          type: skill
          system:
              masteryLevelBase: 27
        - shortcode: thtcs
          type: skill
          system:
              masteryLevelBase: 8
        - shortcode: srvl
          type: skill
          system:
              masteryLevelBase: 55
        - shortcode: draw
          type: skill
          system:
              masteryLevelBase: 12
        - shortcode: cook
          type: skill
          system:
              masteryLevelBase: 22
        - shortcode: folklr
          type: skill
          system:
              masteryLevelBase: 33
        - shortcode: pysn
          type: skill
          system:
              masteryLevelBase: 20
        - shortcode: awar
          type: skill
          system:
              masteryLevelBase: 33
        - shortcode: clmb
          type: skill
          system:
              masteryLevelBase: 75
        - shortcode: dnce
          type: skill
          system:
              masteryLevelBase: 30
        - shortcode: jump
          type: skill
          system:
              masteryLevelBase: 64
        - shortcode: ridg
          type: skill
          system:
              masteryLevelBase: 12
        - shortcode: stlth
          type: skill
          system:
              masteryLevelBase: 52
        - shortcode: swim
          type: skill
          system:
              masteryLevelBase: 30
        - shortcode: init
          type: skill
          system:
              masteryLevelBase: 55
        - shortcode: shok
          type: skill
          system:
              masteryLevelBase: 80
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
              masteryLevelBase: 24
        - shortcode: thro
          type: skill
          system:
              masteryLevelBase: 52
        - shortcode: fate
          type: mysticalability
        - shortcode: sprt
          type: mysticalability
          system:
              levelBase: 0
              charges: {"value": 0, "max": 0}
        - shortcode: hirin
          type: mystery
        - shortcode: agri
          type: skill
          system:
              masteryLevelBase: 33
        - shortcode: anmcft
          type: skill
          system:
              masteryLevelBase: 22
        - shortcode: smsh
          type: skill
          system:
              masteryLevelBase: 11
        - shortcode: wpnc
          type: skill
          system:
              masteryLevelBase: 28
        - shortcode: hrld
          type: skill
          system:
              masteryLevelBase: 22
        - shortcode: acro
          type: skill
          system:
              masteryLevelBase: 45
        - shortcode: trierzi
          type: skill
          system:
              masteryLevelBase: 27
        - shortcode: emhlen
          type: skill
          system:
              masteryLevelBase: 18
        - shortcode: kantal
          type: skill
          system:
              masteryLevelBase: 27
        - shortcode: palithaner
          type: skill
          system:
              masteryLevelBase: 45
        - shortcode: CTrsr
          type: armorgear
          system:
              isWorn: true
        - shortcode: CSwd
          type: armorgear
          system:
              isWorn: true
        - shortcode: CSTnc
          type: armorgear
          system:
              isWorn: true
        - shortcode: RhCBoot
          type: armorgear
          system:
              isWorn: true
        - shortcode: RhGntl
          type: armorgear
          system:
              isWorn: true
        - shortcode: SByrn
          type: armorgear
          system:
              isWorn: true
        - shortcode: PCap
          type: armorgear
          system:
              isWorn: true
        - shortcode: PSTnc
          type: armorgear
          system:
              isWorn: true
        - shortcode: PlHHelm
          type: armorgear
          system:
              isWorn: true
        - shortcode: RndSh
          type: weapongear
        - shortcode: BAxe
          type: weapongear
        - shortcode: Dgr
          type: weapongear
        - shortcode: backpk
          type: containergear
        - shortcode: bpchmd
          type: containergear
---

# Appearance {#appearance}
|  |  |
| --- | --- |
| **Apparent Age** | Young |
| **Culture** | Pálithàner |
| **Social Class** | Mercenary |
| **Height** | 6 ft 4 in |
| **Frame** | Heavy |
| **Weight** | 215 lbs |
| **Appearance/Comeliness** | A towering olive-toned man with broad shoulders and muscular build |
| **Hair Color** | Black |
| **Eye Color** | Grey |
| **Voice** | Average |
| **Obvious Medical Traits** | Deep ragged scar running diagonally across left cheek |
| **Apparent Occupation** | Mercenary Warrior |
| **Apparent Wealth** | Comfortable |
| **Weapons** | Battleaxe, dagger |
| **Armour** | Scale cuirass, padded sleeved tunic, plate helm |
| **Companions** | Silent Talon |
| **Other obvious features** | None |

Kôris’ the name. Just a soldier, nothing fancy about me. Been swinging this axe since I was a lad—first in the militia, then for the mercenary band. War is simple: protect those who fight with you, kill those who stand against you. That’s all there is to it. I’m not much for talk, and I don’t care for politics. You tell me who to fight, and I’ll get it done.

Lost my home, my family, a long time ago. You could say I’ve been looking for something to fight for ever since. The band feels like home now, I suppose. Captain Brànwâal’s good at what he does—keeps us alive, pays us well enough. As long as I’m swinging my axe, I’m where I need to be.

# Dossier {#dossier}
## Data

|  |  |
| --- | --- |
| **Birthdate** | 8 Azúra 692 |
| **Birthplace** | Palíthanè |
| **Sibling Rank** | 4 of 7 |
| **Medical Traits** | None |
| **Psyche Traits** | None |

## Life Story

**Strengths**: Physical strength, battle prowess.

**Weaknesses**: Struggles with social intricacies, prefers direct action.

**Patrons**: None.

**Enemies**: Raiders who destroyed his village.

**Background**: Kôris hails from the rugged highlands of Palíthanè, where he was once a farmer. However, after his village was raided and destroyed during a border skirmish, he had nothing left and joined a local militia to seek vengeance. He quickly rose through the ranks due to his raw strength and fearlessness in battle. His experience as a militia fighter eventually drew the attention of Brànwâal, who recruited him into the mercenary band for his resilience and brute force. Kôris’s simple upbringing and dedication to those he fights with make him a reliable, if sometimes blunt, presence in the group.

**Personality**: Kôris is straightforward, loyal, and practical. He lacks patience for politics or subtlety, preferring to solve problems with his axe and shield. He speaks plainly and cares deeply for his comrades, often forming deep bonds with those he fights alongside.

**Goals**: Kôris seeks stability after losing his family and home. He has little desire for wealth beyond what is needed to live comfortably, but his true motivation is to find a new “family” in the mercenary band. He hopes that through his service, he can protect those around him from the kind of destruction he once faced.
