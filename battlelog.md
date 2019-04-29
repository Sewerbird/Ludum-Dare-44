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
  - [ ] Allow continue -> Game Scene
* Game Scene
  - [ ] Draw Board
    - [ ] Draw background
    - [ ] Draw player
    - [ ] Draw player life bar
    - [ ] Draw enemies
  - [x] Interact
    - [x] Get player input
    - [x] Apply player motion
    - [x] Create player projectiles
  - [x] Enemies
    - [x] Spawn new enemies according to schedule
    - [H] Generate enemy inputs
    - [x] Apply enemy motion
    - [H] Create enemy projectiles
  - [ ] Resolve
    - [x] Compute collisions
    - [x] Apply damage to player
    - [ ] Check lose condition
    - [x] Apply damage to enemies
    - [ ] Check win condition
  - [x] Allow win -> Interstitial Scene
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

### T+43:30 (15:30)

My game finally uses images, haha: behold the inter-level betting UI/store!

http://www.giphy.com/gifs/fAc32GoThfyg0hzFXM

I am now gonna work on having the interstitial screen set the appropriate parameters before returning to the next level, and accumulating money on completion.

### T+36:30 (08:33)

Colonel the Cat was being a total psycho last night, so despite waking up at 8, I don't feel very rested. I have church from 10:30 til noon, and so I'm hoping to get the assets for the game done within this 2 hour span before I have to leave. I'm gonna throw open affinity designer and get my wacom tablet out to do the job quickly.

### T+27:45 (23:15)

Oh dear. I stubbed out some functions I'll need, and played with making the game a sidescroller but decided against it. I should perhaps have stopped an hour ago and used the time to recharge rather than pushing myself to try to get more done. That said, I have a plan in the morning:

- [ ] Draw out the interstitial menu in Affinity Designer
- [ ] Chop it up and import it into my project
- [ ] Highlight rectangles on keypress based on the key (on-screen stuff is controlled with key bindings)
- [ ] Perform the actions of the buttons on keyup
- [ ] Map the Player object for shop buttons
- [ ] `swap!` betting options for bid buttons
- [ ] Show a different sprite for each X value of lifebar in the bid. Just have 10 variants of the image in affinity designer
- [ ] Start next level
- [ ] Quit game

### T+26:00 (22:00)

I kind of want to curl up in a ball and die right now. I've managed to set up image loading, and have been roughing out the state backing up the life-betting system. I am gonna try to get a fixed-aspect ratio UI ready by midnight, as well as keyboard commands to change the state. This should let me plug in assets tomorrow.

### T+24:00 (20:00)

It's been a whole day! The burnout is real, but I've started work on the interstitial menu. It's not interactive and doesn't represent real logic, but I'm hoping those fall into place pretty easily. I'm pretty sure I'm gonna have it be keyboard driven so that I don't have to write mouse-clicking code... I just can't muster it in myself to do anything more ornate.

http://www.giphy.com/gifs/h7FUnEaHmxI0jK4St1

### T+22:40 (18:45)

Definitely hitting a hump in motivation. BUT! I have actually gotten a fair amount done i the past two hours. Not only does the player shoot bullets, the shooting is done according to a refractory-period timer. Further, the bullets hit Enemies, and the Enemies have life totals that get depleted by being hit, finally being removed from the board when they hit zero. Also, I have it set up so that you 'complete the level' after 10 seconds of survival, whereupon the game changes to the "Interstitial Scene" state. This puts me in a prime position to ask the player how much of their life bar they want to bid for their next level, and allow the purchasing of upgrades. My first task will be to do the former feature, since without it my game doesn't follow the theme of the game jam at all.

I have made a promise to myself that today, Saturday, will be the last day I do essential gameplay code, reserving Sunday for creating visual assets and sounds. At this juncture, I'm not very confident in the level of polish it'll have at the 48 hour mark, but I'm reasonably confident I'll have a playable, winnable, game. The main risk at this point is having any upgrades to buy with the bid life....

### T+20:20 (16:20)

Progress has been a bit sedate through the afternoon. went on a nature walk. Colonel the Cat has been annoying me a lot too, so been hanging out with him more than I ought. I got projectiles going, but I need to have them get cleaned up once off screen.

http://www.giphy.com/gifs/cP4xnR0n8Oh4bxZXOI

### T+16:45 (12:45)

This is always the hardest part of the LDJam for me, but it means I'm about 5 hours from the game looking much nicer once I've had time to add assets. Core gameplay done: life bars, collision, invulnerability period after hit:

http://www.giphy.com/gifs/LmCTopL1Zql275ZHwG

### T+16:30 (11:30)

Had my brother over as a guest and got some sandwiches for lunch. The enemies delete correctly, and now I am setting it up for them to randomly spawn on the top of the screen at a fixed interval.

### T+14:20 (09:20)

Suffering a bit of heart palpitations because I forgot to take my beta blocker last night, so mostly napping and thinking. I've gotten the players to move according to `dt`, so now implementing logic to delete the enemy when it goes too far beneath the screen, and to randomly spawn new ones up top.

### T+12:20 (07:20)

Sleep? Check! Shower? Check! Bacon? Check! Time to resume. I'm gonna get the enemies to move according to timed schedules down the screen. I'll be able to reuse much of that code for moving projectiles afterwards and I'll be nearly arrived at being a "shooter".

### T+3:50 (23:55)

A fair amount done in the past 90 minutes. I've created enemy circles that can be manually moved down the screen with the "W" and "S" keys. I also implemented a many-to-one circle collision function, and addeded 'player collided with' to the game state: the background dims when the player is being intersected. This is very close to my goal from two and a half hours ago, so I think I have adequately stuck to schedule.

I need to automatically spawn enemies according to a schedule, and have them fall down the screen, for it to feel more game-like, but honestly I'm super tired and well past my typical bed time. I'm gonna finish off my beer and head to bed, hopefully waking up full of vigor in the morning at T+10:50 (7:00).

http://www.giphy.com/gifs/U1V3l9FiQVciUIwPtZ

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

