# Ludum Dare 44: "Your Life Is Currency"

## Plans

- [x] @20:00 React to Theme
- [x] @20:05 Brainstorm Ideas
- [x] @20:30 Choose Game Concept
- [ ] @20:35-@21:30 Game Design
  - [x] Specify Game Loop
  - [x] Specify Game Scenes
  - [x] Identify Assets
  - [ ] Identify State
- [ ] @21:30 Plan implementational approach

## Scratch

### Code Goals & Notes

- [ ] Define a master method for each scene
- [ ] Be able to change scene
* Game Scene
- [ ] An 'add circle' function
- [ ] An 'on key-held' function that moves a circle
- [ ] An 'on time elapsed' function that update the positions of circles
- [ ] A 'find all collisions with specific circle' function that checks one circle against all the others

State: {
  current_scene: atom
  player: {
    life_state: atom::[alive,dying,dead,inmenu]
    lean_state: atom::[left,right,none]
    engine_state: atom::[a,b,c]
    max_life: atom::int
    curr_life: atom::int
    pos: atom::point
    upgrades: atom::Item[]{
      purchased: atom::boolean
      cost: int
      activation: fn???
    }
    money: atom::int
    life_bet: atom::int
    sprites: Image[]
    engine_sprites: Image[]
    engine_colors: Color[]
  }
  intro_scene: {
  }
  interstitial_scene: {
    hovered_upgrade_idx: atom::int
  }
  game_scene: {
    enemies: atom::Enemies[]{
      pos: atom::point
      sprites: Image[]
    }
    enemy_projectiles: atom::Projectile[]{
      pos: atom::point
      sprites: Image[]
    }
    player_projectiles: atom::Projectile[]{
      pos: atom::point
      sprites: Image[]
    }
  }
  death_scene: {
  }
  win_scene: {
  }
}

### Assets

- [ ] Player Spaceship
  - [ ] Forward
  - [ ] Tilt Left (flip for Right)
  - [ ] Laser projectile (tintable)
  - [ ] Engine Fire Variant A
  - [ ] Engine Fire Variant B
  - [ ] Engine Fire Variant C
- [ ] Enemy Spaceship
  - [ ] Variant A
  - [ ] Variant B
  - [ ] Variant C
  - [ ] Variant D
  - [ ] Glob projectile (tintable)
- [ ] Background Star
  - [ ] Variant A
  - [ ] Variant B
  - [ ] Variant C
- [ ] Life Pip
- [ ] Money Pip
- [ ] Title Splat
- [ ] Game Over Splat
- [ ] Game Complete Splat
- [ ] Begin Button
- [ ] Continue Button
- [ ] Quite Button

### Game Loop

* Intro Scene
  - [ ] Allow game begin -> Interstitial Scene
  - [ ] Allow quit -> Desktop
* Interstitial Scene
  - [ ] Display current level
  - [ ] Display currency
  - [ ] Display bid meter (life bid; payoff projected)
  - [ ] Display available upgrades
  - [ ] Allow bid meter to be changed
  - [ ] Allow displayed upgrades to be selectable
  - [ ] Allow quit -> Intro Scene
  - [ ] Allow begin -> Game Scene
* Game Scene
  - [ ] Draw Board
    - [ ] Draw background
    - [ ] Draw player
    - [ ] Draw player life bar
    - [ ] Draw enemies
  - [ ] Interact
    - [ ] Get player input
    - [ ] Apply player motion
    - [ ] Create player projectiles
  - [ ] Enemies
    - [ ] Spawn new enemies according to schedule
    - [ ] Generate enemy inputs
    - [ ] Apply enemy motion
    - [ ] Create enemy projectiles
  - [ ] Resolve
    - [ ] Compute collisions
    - [ ] Apply damage to player
    - [ ] Check lose condition
    - [ ] Apply damage to enemies
    - [ ] Check win condition
  - [ ] Allow win -> Interstitial Scene
  - [ ] Allow death -> Death Scene
* Death Scene
  - [ ] Display Game Over
  - [ ] Display currency & upgrades
  - [ ] Allow continue -> Intro Scene
* Win Scene
  - [ ] Display Game Complete
  - [ ] Display currency & upgrades
  - [ ] Allow continue -> Intro Scene

## Log

### T+2:25 (22:25)

I've gotten the circle to be clamped to the edges of the screen. Further, I've refactored the drawing logic so that it is now 'drawing a player' instead of directly drawing a circle: an indirection that will let me draw enemies by very similar channels! I'm giving myself another hour to get enemies falling down the screen.

### T+1:55 (21:55)

I've gotten the circle to rotate in a circle based on the A and D keys. This is actually quite a big step, and done so quickly! Next is to write a clamp function and change the circular motion into a screen-bounded left-right motion.

### T+1:30 (21:30)

Need a break. Eyes are drowsy. This is what I get for going to bed at 10:00pm most nights: definite energy deficit for a bit. I'm sure I'll break through it though.

I think I'll do a *ruthless* MVP version of my already-barebones idea. I am starting to think that the best goal for tonight is to implement the ability to control a circle on the screen with the keyboard, have circles falling down from the top of the screen, and to register 'hits' when my circle collides with the falling circles. 

### T+1:15 (21:15)

Been trying to think of all the state of my game: "What values will change over time?". This is a huge technical risk, since I'm an utter novice at how to juggle Clojure's state management paradigm.

### T+55 (20:55)

Hashed out my game assets, and got distracted by Discord. Still ahead of schedule: I think my concept is simplistic enough that I can hope to have the proper coding done tomorrow.... but then again, my Battleship demo in Clojure is still not even playable after 3 days. I'll be battling Clojure (my noobness to it) chiefly this jam.

### T+45 (20:45)

Hashed out my game loop and the scenes I'll need! Really just looking to clone the first level of Guardian Legend at this point.

### T+30 (20:30)

I'm thinking a space shooter like in Guardian Legend: your one ship, and then down-falling monsters to shoot down. Boss fight every N levels. Able to get gun-type upgrades and switch between. These could be what you buy with your cash. Prize fighter?

### T+20 (20:20)

Been brainstorming, first on couch and then on Discord. I like the idea of 'bidding' part of your health bar away before the level begins, and if you survive you get rewarded proportionately at the end of the level in cash. This cash can buy upgrades?

### T+0 (20:00 Friday)

The curency is "Your Life is Currency"

