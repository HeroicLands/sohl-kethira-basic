---
aliases:
    - Tórnis al Kúbrý
tags: []
name:
    full: Tórnis al Kúbrý
    aliases: []
id: QgVdOPUTxTLxEvBf
folder: wDgcy5cLIaLoFogp
shortcode: tornisalkubry
slug: tornis-al-kubry
img: systems/sohl/assets/icons/game-icons/delapouite/person.svg
portrait: systems/sohl/assets/icons/game-icons/delapouite/person.svg
type: character
pack: characters
package: kethira
social:
    occupation: ""
    station: ""
    class: ""
    society: ""
traits:
    gender: unknown
    age: 29
    birthday: 690/2/2
    height:
        m: 1.78
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
        str: 10
        end: 9
        dex: 14
        agl: 16
        per: 15
        cml: 14
        aur: 10
        wil: 16
        rea: 11
        cre: 13
        emp: 16
        elo: 14
        mor: 8
        voi: 13
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
              masteryLevelBase: 75
        - shortcode: cmd
          type: skill
          system:
              masteryLevelBase: 45
        - shortcode: dscr
          type: skill
          system:
              masteryLevelBase: 24
        - shortcode: guil
          type: skill
          system:
              masteryLevelBase: 75
        - shortcode: intr
          type: skill
          system:
              masteryLevelBase: 80
        - shortcode: sing
          type: skill
          system:
              masteryLevelBase: 65
        - shortcode: thtcs
          type: skill
          system:
              masteryLevelBase: 76
        - shortcode: srvl
          type: skill
          system:
              masteryLevelBase: 15
        - shortcode: draw
          type: skill
          system:
              masteryLevelBase: 15
        - shortcode: cook
          type: skill
          system:
              masteryLevelBase: 52
        - shortcode: folklr
          type: skill
          system:
              masteryLevelBase: 13
        - shortcode: pysn
          type: skill
          system:
              masteryLevelBase: 13
        - shortcode: awar
          type: skill
          system:
              masteryLevelBase: 75
        - shortcode: clmb
          type: skill
          system:
              masteryLevelBase: 45
        - shortcode: dnce
          type: skill
          system:
              masteryLevelBase: 26
        - shortcode: jump
          type: skill
          system:
              masteryLevelBase: 39
        - shortcode: ridg
          type: skill
          system:
              masteryLevelBase: 16
        - shortcode: stlth
          type: skill
          system:
              masteryLevelBase: 80
        - shortcode: swim
          type: skill
          system:
              masteryLevelBase: 12
        - shortcode: init
          type: skill
          system:
              masteryLevelBase: 42
        - shortcode: shok
          type: skill
          system:
              masteryLevelBase: 30
        - shortcode: melee
          type: skill
          system:
              masteryLevelBase: 60
        - shortcode: dge
          type: skill
          system:
              masteryLevelBase: 65
        - shortcode: archery
          type: skill
          system:
              masteryLevelBase: 39
        - shortcode: thro
          type: skill
          system:
              masteryLevelBase: 42
        - shortcode: fate
          type: mysticalability
        - shortcode: sprt
          type: mysticalability
          system:
              levelBase: 0
              charges: {"value": 0, "max": 0}
        - shortcode: ulandusaralius
          type: mystery
        - shortcode: smsh
          type: skill
          system:
              masteryLevelBase: 15
        - shortcode: lock
          type: skill
          system:
              masteryLevelBase: 84
        - shortcode: mtlc
          type: skill
          system:
              masteryLevelBase: 26
        - shortcode: musc
          type: skill
          system:
              masteryLevelBase: 60
        - shortcode: palithaner
          type: skill
          system:
              masteryLevelBase: 71
        - shortcode: trierzi
          type: skill
          system:
              masteryLevelBase: 52
        - shortcode: emhlen
          type: skill
          system:
              masteryLevelBase: 39
        - shortcode: kantal
          type: skill
          system:
              masteryLevelBase: 52
        - shortcode: lakise
          type: skill
          system:
              masteryLevelBase: 13
        - shortcode: larani
          type: skill
          system:
              masteryLevelBase: 14
        - shortcode: WLeg
          type: armorgear
          system:
              isWorn: true
        - shortcode: WScoat
          type: armorgear
          system:
              isWorn: true
        - shortcode: WClk
          type: armorgear
          system:
              isWorn: true
        - shortcode: RhCBoot
          type: armorgear
          system:
              isWorn: true
        - shortcode: PVest
          type: armorgear
          system:
              isWorn: true
        - shortcode: LtGlove
          type: armorgear
          system:
              isWorn: true
        - shortcode: BrdSwd
          type: weapongear
        - shortcode: Dgr
          type: weapongear
        - shortcode: Taburi
          type: weapongear
          name: Tabûri 1
          system:
              shortcode: Taburi1
        - shortcode: Taburi
          type: weapongear
          name: Tabûri 2
          system:
              shortcode: Taburi2
        - shortcode: Taburi
          type: weapongear
          name: Tabûri 3
          system:
              shortcode: Taburi3
        - shortcode: Taburi
          type: weapongear
          name: Tabûri 4
          system:
              shortcode: Taburi4
        - shortcode: LBw100
          type: weapongear
        - shortcode: ArwLBrd
          type: projectilegear
          system:
              quantity: 12
        - shortcode: quiversmsh
          type: containergear
        - shortcode: backpk
          type: containergear
        - shortcode: bpchmd
          type: containergear
        - shortcode: beltpouchl3
          type: containergear
        - shortcode: larani
          type: affiliation
---

# Appearance {#appearance}
|  |  |
| --- | --- |
| **Apparent Age** | Mature |
| **Culture** | Pálithàner |
| **Social Class** | Urban Free |
| **Height** | 5 ft 10 in |
| **Frame** | Medium |
| **Weight** | 155 lbs |
| **Appearance/Comeliness** | Fair Skin |
| **Hair Color** | Dark Blonde |
| **Eye Color** | Green |
| **Voice** | Unremarkable |
| **Obvious Medical Traits** | None |
| **Apparent Occupation** | Liason |
| **Apparent Wealth** | Comfortable |
| **Weapons** | Dagger |
| **Armour** | None |
| **Companions** | Silent Talon |
| **Other obvious features** | None |

Tórnis, at your service. I’m just a man of simple talents, really—a wanderer, you might say. Life has taken me to many places—mostly as a scout and trader, helping folk get where they need to go or find what they’re looking for. I know the roads well, especially the ones people tend to avoid. But, you know, it’s not all just about the travel. I’ve learned a thing or two about slipping in and out of places where most people wouldn’t dare tread. Sometimes you need a quiet hand to get things done… nothing violent, mind you—just a little finesse.

I’m no great warrior, but I can handle myself if need be. I prefer to think of myself as resourceful, capable of doing what’s necessary to keep my companions safe and on course. And besides, who doesn’t like a bit of adventure?

# Dossier {#dossier}
## Data

|  |  |
| --- | --- |
| **Birthdate** | 2 Peónu 690 |
| **Birthplace** | Palíthanè |
| **Sibling Rank** | 5 of 8 |
| **Medical Traits** | None |
| **Psyche Traits** | None |

## Life Story

**Strengths**: Stealth, deception, infiltration.

**Weaknesses**: Distrustful, keeps others at arm’s length.

**Patrons**: None.

**Enemies**: Former comrades who betrayed him.

**Background**: Tórnis is a mysterious figure with a past shrouded in secrecy. His true name is Calen, a former Triérzi outlaw who spent years operating with a brigand band along the Triérzon-Palíthanè border. Skilled in stealth, sabotage, and manipulation, he was known for his cunning but fled his former life after a betrayal within his group led to a bloody massacre. Since then, he has taken on the alias Tórnis al Kúbrý and now operates as a spy and infiltrator for the mercenary band. Talen is invaluable for his ability to gather intelligence, steal secrets, and neutralize threats without drawing attention. Tórnis has recently started developing real affection for Elýsè.

**Personality**: Tórnis is charming and affable, able to blend into any crowd. However, beneath his smooth exterior lies a deeply cautious and calculating individual. He trusts no one completely, preferring to stay emotionally distant, though he maintains a friendly demeanour. His past haunts him, but he is determined never to let it define him.

**Goals**: He seeks to distance himself from his past life as a Triérzi brigand and start anew.
