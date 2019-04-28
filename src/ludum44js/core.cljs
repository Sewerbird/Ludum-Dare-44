(ns ludum44js.core
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]))

(defn clamp [value min_value max_value] (max min_value (min value max_value)))
(defn abs [n] (max n (- n)))

(def motion_sensitivity 10.00)
;; Interstitial settings
(def current_scene (atom :GAME))
(def current_level (atom 1))
(def prior_bet_bid (atom 0))
(def prior_bet_rate (atom 0))
(def prior_balance (atom 10))
(def current_bet_bid (atom 5))
(def current_bet_rate (atom 5))
(def current_balance (atom 10))

(defn load-image [image]
  (let [path (str "/scripts/public/" (name image) ".png")]
    (q/load-image path)))

(defn draw-image [state k [x y]]
  (q/image (get-in state [:images k]) x y))

(def images [:test])
(def ui_extents {
  :bg [0 0 800 600]
})

(defn setup []
  (def kill_line (* 1.25 (q/height)))
  ; Set frame rate to 30 frames per second.
  (q/frame-rate 30)
  ; Set color mode to HSB (HSV) instead of default RGB.
  (q/color-mode :hsb)
  ; setup function returns initial state. It contains
  {
   ;;:stars  (take 25 (repeatedly #(random-star 6.0)))
   ;;:stars2 (take 25 (repeatedly #(random-star 3.0)))
   ;; :fade 1.2
    :images (zipmap images (map load-image images))
    :last_spawn 0
    :frame_count 0
    :level_time_elapsed 0
    :player {
      :color 0
      :radius 50
      :invulnerability_timer 0
      :shot_timer 0.500
      :shot_period 0.500
      :life 10
      :x_offset 100 ;;in percent
      :y_offset (* (q/height) 0.9) ;;in percent
      :upgrades {
        :fire_rate 1.00, 
        :fire_spread 1.00, 
        :vessel_size 1.00, 
        :armor 1.00, 
        :bullet_size 1.00, 
        :bullet_speed 1.50
      }
    }
    :enemies [ ]
    :projectiles [ ]
  }
)

(defn update_enemy [enemy dt projectiles]
  (let [timer (+ dt (:timer enemy))
        was_hit (count (check_collision enemy projectiles))
        ]
    (if (< 0 was_hit) (println "I WAS HIT" was_hit) nil)
    {
     :cleanup (or (< (:x_offset enemy) -kill_line) (and (< 0 was_hit) (- (:life enemy) was_hit)))
     :timer timer
     :life (if (< 0 was_hit) (- (:life enemy) was_hit) (:life enemy))
     :down_speed (:down_speed enemy)
     :right_speed (:right_speed enemy)
     :y_offset (+ (:y_offset enemy) (* dt (:down_speed enemy)))
     :x_offset (+ (:x_offset enemy) (* dt (:right_speed enemy)))
     :color (mod (+ (:color enemy) 0.7) 255)
     :radius (:radius enemy)
    }
  )
)

(defn update_projectile [projectile dt]
  (let [timer (+ dt (:timer projectile))]
    {
     :cleanup (or
                (> (:y_offset projectile) (q/height))
                (< (:y_offset projectile) 0)
                (> (:x_offset projectile) (q/width))
                (< (:x_offset projectile) 0)
                (and (< 0 (:duration projectile)) (> timer (:duration projectile)))
              )
     :timer timer
     :duration (:duration projectile)
     :down_speed (:down_speed projectile)
     :right_speed (:right_speed projectile)
     :x_offset (+ (:x_offset projectile) (* dt (:right_speed projectile)))
     :y_offset (+ (:y_offset projectile) (* dt (:down_speed projectile)))
     :color (mod (+ (:color projectile) 0.7) 255)
     :radius (:radius projectile)
    }
  )
)

(defn update_player [player dt player_is_hit]
  (let [took_damage (if (< 0 (:invulnerability_timer player)) false player_is_hit)
        inv (if took_damage (* 1.0 (:armor (:upgrades player))) (:invulnerability_timer player)) ]
    (if (q/key-pressed?)
      (let [dkey (q/raw-key)]
        (case dkey
          "d" {
               :x_offset (clamp (+ (:x_offset player) motion_sensitivity) 0 (q/width)) 
               :y_offset (:y_offset player)
               :color (mod (+ (:color player) 0.7) 255)
               :radius (:radius player)
               :invulnerability_timer (clamp (- inv dt) 0 100)
               :shot_timer (:shot_timer player)
               :shot_period (:shot_period player)
               :life (if took_damage (- (:life player) 1) (:life player))
               :upgrades (:upgrades player)
              }
          "a" {
               :x_offset (clamp (- (:x_offset player) motion_sensitivity) 0 (q/width))
               :y_offset (:y_offset player)
               :color (mod (+ (:color player) 0.7) 255)
               :radius (:radius player)
               :invulnerability_timer (clamp (- inv dt) 0 100)
               :shot_timer (:shot_timer player)
               :shot_period (:shot_period player)
               :life (if took_damage (- (:life player) 1) (:life player))
               :upgrades (:upgrades player)
              }
          "s" {
               :y_offset (clamp (+ (:y_offset player) motion_sensitivity) 0 (q/height)) 
               :x_offset (:x_offset player)
               :color (mod (+ (:color player) 0.7) 255)
               :radius (:radius player)
               :invulnerability_timer (clamp (- inv dt) 0 100)
               :shot_timer (:shot_timer player)
               :shot_period (:shot_period player)
               :life (if took_damage (- (:life player) 1) (:life player))
               :upgrades (:upgrades player)
              }
          "w" {
               :y_offset (clamp (- (:y_offset player) motion_sensitivity) 0 (q/height))
               :x_offset (:x_offset player)
               :color (mod (+ (:color player) 0.7) 255)
               :radius (:radius player)
               :invulnerability_timer (clamp (- inv dt) 0 100)
               :shot_timer (:shot_timer player)
               :shot_period (:shot_period player)
               :life (if took_damage (- (:life player) 1) (:life player))
               :upgrades (:upgrades player)
              }
          {
            :x_offset (:x_offset player) 
            :y_offset (:y_offset player)
            :color (mod (+ (:color player) 0.7) 255)
            :radius (:radius player)
            :invulnerability_timer (clamp (- inv dt) 0 100)
            :shot_timer (:shot_timer player)
            :shot_period (:shot_period player)
            :life (if took_damage (- (:life player) 1) (:life player))
            :upgrades (:upgrades player)
          }
        )
      )
      {
        :x_offset (:x_offset player) 
        :y_offset (:y_offset player)
        :color (mod (+ (:color player) 0.7) 255)
        :radius (:radius player)
        :invulnerability_timer (clamp (- inv dt) 0 100)
        :shot_timer (:shot_timer player)
        :shot_period (:shot_period player)
        :life (if took_damage (- (:life player) 1) (:life player))
        :upgrades (:upgrades player)
      }
    )
  )
)

(defn check_collision [tgt colliders]
  "Does circle-to-circle collision check between tgt and all colliders. Returns collider(s), or nil"
  (filterv
    (fn [a]
      (let [dx (- (:x_offset a) (:x_offset tgt))
            dy (- (:y_offset a) (:y_offset tgt))
            dd (Math/sqrt (+ (* dx dx) (* dy dy)))
            r (+ (:radius a) (:radius tgt)) ]
        (< dd (/ r 2))
      )
    )
    colliders
  )
)

(defn cleanup [col]
  (filterv #(not (:cleanup %)) col)
)

(defn spawn_new_random_enemy []
  {
    :cleanup false
    :timer 0
    :down_speed 200.0
    :right_speed 0
    :color 0
    :radius 20
    :life 1
    :y_offset (* (q/height) 0)
    :x_offset (* (q/width) (q/random 1.0))
  }
)

(defn spawn_enemies [is_needed old_enemies]
  (if is_needed
    (conj old_enemies (spawn_new_random_enemy))
    old_enemies
  )
)

(defn check_player_firing [player dt]
  (if (= 0 (:shot_timer player)) ;; (and (q/key-pressed?) (= q/raw-key " ")))
    {
     :player {
        :x_offset (:x_offset player) 
        :y_offset (:y_offset player)
        :shot_period (:shot_period player)
        :shot_timer (* (:shot_period player) (:fire_rate (:upgrades player))) ;;Intentional: sets timer to maximum period
        :color (:color player)
        :radius (:radius player)
        :invulnerability_timer (:invulnerability_timer player)
        :life (:life player)
        :projectiles (:projectiles player)
        :upgrades (:upgrades player)
     }
     :shots [{
              :x_offset (:x_offset player)
              :y_offset (- (:y_offset player) (:radius player))
              :down_speed (* -400 (:bullet_speed (:upgrades player)))
              :right_speed (* (* (* 10 (- (q/random 2.0) 1)) (:bullet_speed (:upgrades player))) (:fire_spread (:upgrades player)))
              :radius (* 5 (:bullet_size (:upgrades player)))
              :cleanup false
              :duration 3
              :timer 0
              :color 66
             }]
    }
    {
     :player {
        :x_offset (:x_offset player) 
        :y_offset (:y_offset player)
        :shot_period (:shot_period player)
        :shot_timer (clamp (- (:shot_timer player) dt) 0 (:shot_period player))
        :color (:color player)
        :radius (:radius player)
        :invulnerability_timer (:invulnerability_timer player)
        :life (:life player)
        :projectiles (:projectiles player)
        :upgrades (:upgrades player)
     }
     :shots []
    }
  )
)

(defn game_update_draw_state [state dt]
  ; Keyboard-Controlled
  (let [
        old_player (:player state)
        old_enemies (:enemies state)
        old_projectiles (:projectiles state)

        updated_enemies (cleanup (map #(update_enemy % dt old_projectiles) old_enemies))
        updated_projectiles (cleanup (map #(update_projectile % dt) old_projectiles))
        spawn_needed (> (q/frame-count) (+ (:last_spawn state) 3))
        new_enemies (spawn_enemies (> (q/frame-count) (+ (:last_spawn state) 3)) updated_enemies)
        player_is_hit (< 0 (count (check_collision old_player new_enemies)))
        player_is_firing (check_player_firing old_player dt)
        new_player (#(update_player % dt player_is_hit) (:player player_is_firing))
        new_player_projectiles (:shots player_is_firing)
        ]
    {
      :level_time_elapsed (+ dt (:level_time_elapsed state))
      :last_spawn (if spawn_needed (q/frame-count) (:last_spawn state))
      :frame_count (q/frame-count)
      :player new_player
      :enemies new_enemies
      :projectiles (cleanup (into updated_projectiles new_player_projectiles))
      :images (:images state)
    }
  )
)

(defn interstitial_update_draw_state [state dt]
    (println "interstitial draw state")
  (let [ ]
    (if (q/key-pressed?)
      (let [dkey (q/raw-key)]
        (case dkey
          "a" (println "Increasing stakes") ;; increase stakes
          "d" (println "Decreasing stakes") ;; decrease stakes
          "1" (println "Buying fire rate") ;; purchase item 1, fire_rate upgrade
          "2" (println "Buying fire spread") ;; purchase item 2, fire_spread upgrade
          "3" (println "Buying armor") ;; purchase item 3, armor upgrade
          "4" (println "Buying bullet size") ;; purchase item 4, bullet_size upgrade
          "5" (println "Buying bullet speed") ;; purchase item 5, bullet_speed upgrade
          "6" (println "Buying vessel size") ;; purchase item 6, vessel_size upgrade
          " " (println "Going to next level") ;; continue to next level
          (println "*whistle*")
        )
      )
    )
    {
      :level_time_elapsed (:level_time_elapsed state)
      :last_spawn (:last_spawn state)
      :frame_count (q/frame-count)
      :player (:player state)
      :enemies [ ]
      :projectiles [ ]
      :images (:images state)
    }
  )
)

(defn update-state [state]
  (let [dt (/ (- (q/frame-count) (:frame_count state)) (q/target-frame-rate))
        new_time_elapsed (+ dt (:level_time_elapsed state))]
    (if (> new_time_elapsed 10)
      (let []
        (swap! current_scene (fn [old] :INTERSTITIAL))
        (swap! current_level (fn [old] (+ 1 old)))
      )
      (println "Time elapsed" new_time_elapsed)
    )
    (case @current_scene
      :GAME (game_update_draw_state state dt)
      :INTERSTITIAL (interstitial_update_draw_state state dt)
      state
    )
  )
)

(defn draw_player [player]
  ; Set circle color.
  (q/fill 0 255 (* 255 (- 1.0 (:invulnerability_timer player))))
  ; Calculate x and y coordinates of the circle.
  (let [x (:x_offset player)
        y (:y_offset player)
        life (:life player)
        invuln (:invulnerability_timer player)
        shot_timer (:shot_timer player)
        r (:radius player) ]
    ; Move origin point to the top left corner of the sketch.
    (q/text (str "Life: " life) 15 15)
    (q/text (str "Invuln: " invuln) 15 30)
    (q/text (str "Shot " shot_timer) 15 60)
    (q/with-translation [0 0]
      ; Draw the circle.
      (q/ellipse x y r r)))
)

(defn draw_enemy [enemy]
  (q/fill (:color enemy) 255 255)
  ; Calculate x and y coordinates of the circle.
  (let [y (:y_offset enemy)
        x (:x_offset enemy)
        r (:radius enemy)]
    ; Move origin point to the center of the sketch.
    (q/with-translation [0 0]
      ; Draw the circle.
      (q/ellipse x y r r)
      (q/fill 0 0 0)
      (q/text (str (:life enemy)) x y)
      ))
)

(defn draw_bullet [bullet]
  (q/fill (:color bullet) 255 255)
  ; Calculate x and y coordinates of the circle.
  (let [y (:y_offset bullet)
        x (:x_offset bullet)
        r (:radius bullet)]
    ; Move origin point to the center of the sketch.
    (q/with-translation [0 0]
      ; Draw the circle.
      (q/ellipse x y r r)))
)

(defn draw-state [state]
  (case @current_scene
    :GAME (draw_game_state state)
    :INTERSTITIAL (draw_interstitial_state state)
    state
  )
)

(defn draw_game_state [state]
  ; Clear the sketch by filling it with light-grey color.
  (q/background 0 0 255)
  (let [player (:player state)
        enemies (:enemies state)
        projectiles (:projectiles state)
        ]
    (q/text (str "Bullets: " (count projectiles) ) 15 45)
    ;;Draw Player
    (draw_player player)
    ;;Draw Enemy
    (doseq [enemy enemies]
      (draw_enemy enemy)
    )
    (doseq [bullet projectiles]
      (draw_bullet bullet)
    )
  )
)

(defn draw_interstitial_state [state]
  (q/background 0)
  (q/fill 0 0 255)
  ;;Draw background
  (draw-image state :test [0 0])
  ;;Draw Level Complete
  (draw_level_complete (:level state))
  (draw_bet_dialog (:bet state))
  (draw_money_progress (:prior_balance state) (:prior_bet state))
  (draw_store state)
  state
)

(defn draw_level_complete [level]
  (q/text (str "Level" (- level 1) "Complete!") 200 200)
)

(defn draw_bet_dialog []
  ;; Substitute in bid amount
  ;; Highlight pips appropriately
  (q/text (str "Make Your Bet!") 200 300)
  (q/text (str "\"I can beat the next level with " 6 " life pips\"") 200 330)
)

(defn draw_money_progress []
  ;; Substitute in current_bet and balance info
  (q/text (str "Bank") 200 400)
  (q/text (str "Bid") 230 400)
  (q/text (str "Multiplier") 260 400)
  (q/text (str "$$$ = " 24 " + (" 5 " x 5) = " 49) 170 425)
)

(defn draw_store []
  ;; Gray-out entries that aren't available
)

; this function is called in index.html
(defn ^:export run-sketch []
  (q/defsketch ludum44js
    :host "ludum44js"
    :size [600 800]
    ; setup function called only once, during sketch initialization.
    :setup setup
    ; update-state is called on each iteration before draw-state.
    :update update-state
    :draw draw-state
    :mouse-clicked do_circle
    ; This sketch uses functional-mode middleware.
    ; Check quil wiki for more info about middlewares and particularly
    ; fun-mode.
    :middleware [m/fun-mode]))

; uncomment this line to reset the sketch:
; (run-sketch)

