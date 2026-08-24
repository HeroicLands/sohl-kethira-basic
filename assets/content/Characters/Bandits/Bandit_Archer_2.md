---
aliases:
    - Bandit Archer 2
    - being-banditarcher2
tags: []
name:
    full: Bandit Archer 2
    aliases: []
id: ZiazKvY6oIARxx3b
folder: wDgcy5cLIaLoFogp
shortcode: banditarcher2
slug: bandit-archer-2
img: systems/sohl/assets/icons/game-icons/delapouite/person.svg
portrait: systems/sohl/assets/icons/game-icons/delapouite/person.svg
type: being
pack: characters
package: kethira
social:
    occupation: "Bandit Archer"
    station: ""
    class: "Free"
    society: "Palithane"
traits:
    gender: unknown
    age: 29
    birthday: 690/8/22
    height:
        m: 1.78
    weight:
        kg: 71.67
    build:
        frame: medium
    appearance:
        eye_color: brown
        hair_color: black
        skin_color: light
        complexion: fair
        extra_features: [a scar on the right side of the face]
sohl:
    archetype: 1
    attributes:
        str: 12
        end: 13
        dex: 11
        agl: 11
        per: 13
        cml: 9
        aur: 10
        wil: 9
        rea: 13
        cre: 10
        emp: 7
        elo: 10
        mor: 10
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
              masteryLevelBase: 24
        - shortcode: cmd
          type: skill
          system:
              masteryLevelBase: 18
        - shortcode: dscr
          type: skill
          system:
              masteryLevelBase: 24
        - shortcode: guil
          type: skill
          system:
              masteryLevelBase: 32
        - shortcode: intr
          type: skill
          system:
              masteryLevelBase: 50
        - shortcode: thtcs
          type: skill
          system:
              masteryLevelBase: 10
        - shortcode: srvl
          type: skill
          system:
              masteryLevelBase: 44
        - shortcode: sing
          type: skill
          system:
              masteryLevelBase: 27
        - shortcode: draw
          type: skill
          system:
              masteryLevelBase: 11
        - shortcode: cook
          type: skill
          system:
              masteryLevelBase: 52
        - shortcode: folklr
          type: skill
          system:
              masteryLevelBase: 33
        - shortcode: pysn
          type: skill
          system:
              masteryLevelBase: 13
        - shortcode: awar
          type: skill
          system:
              masteryLevelBase: 55
        - shortcode: clmb
          type: skill
          system:
              masteryLevelBase: 33
        - shortcode: dnce
          type: skill
          system:
              masteryLevelBase: 44
        - shortcode: jump
          type: skill
          system:
              masteryLevelBase: 33
        - shortcode: ridg
          type: skill
          system:
              masteryLevelBase: 9
        - shortcode: stlth
          type: skill
          system:
              masteryLevelBase: 30
        - shortcode: swim
          type: skill
          system:
              masteryLevelBase: 12
        - shortcode: init
          type: skill
          system:
              masteryLevelBase: 55
        - shortcode: shok
          type: skill
          system:
              masteryLevelBase: 60
        - shortcode: melee
          type: skill
          system:
              masteryLevelBase: 44
        - shortcode: dge
          type: skill
          system:
              masteryLevelBase: 48
        - shortcode: archery
          type: skill
          system:
              masteryLevelBase: 48
        - shortcode: thro
          type: skill
          system:
              masteryLevelBase: 60
        - shortcode: peoni
          type: skill
        - shortcode: fate
          type: mysticalability
        - shortcode: sprt
          type: mysticalability
        - shortcode: tarael
          type: mystery
        - shortcode: peoni
          type: affiliation
        - shortcode: pence
          type: miscgear
          system:
              quantity: 1
        - shortcode: quiversmsh
          type: containergear
        - shortcode: LBw125
          type: weapongear
        - shortcode: ArwHBrd
          type: weapongear
          system:
              quantity: 12
        - shortcode: ShrtSwd
          type: weapongear
        - shortcode: RhTunic
          type: armorgear
          system:
            isWorn: true
        - shortcode: CShirt
          type: armorgear
          system:
              isWorn: true
        - shortcode: CTrsr
          type: armorgear
          system:
              isWorn: true
        - shortcode: RhShoe
          type: armorgear
          system:
              isWorn: true
---

# Appearance {#appearance}
|  |  |
| --- | --- |
| **Apparent Age** | 29; |
| **Culture** | Pálithàner |
| **Social Class** | Free |
| **Height** | 5'10" |
| **Frame** | Medium |
| **Weight** | 158 |
| **Appearance/Comeliness** |  |
| **Hair Color** | Black |
| **Eye Color** | Brown |
| **Voice** |  |
| **Obvious Medical Traits** |  |
| **Apparent Occupation** | Bandit Archer |
| **Apparent Wealth** |  |
| **Weapons** |  |
| **Armour** |  |
| **Companions** |  |
| **Other obvious features** | a scar on the right side of the face |

### Physical Description

Age 29, 5'10", 158 lbs, Brown eyes, Black close-cropped hair, with a scar on the right side of the face.

# Dossier {#dossier}
|  |  |
| --- | --- |
| **Birthdate** | 22 Hàláne 720 |
| **Birthplace** | Palíthanè |
| **Medical Traits** |  |
| **Psyche Traits** |  |
