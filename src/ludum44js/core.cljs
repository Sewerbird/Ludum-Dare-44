(ns ludum44js.core
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]))

(defn clamp [value min_value max_value] (max min_value (min value max_value)))
(defn abs [n] (max n (- n)))

(def motion_sensitivity 15.00)
(def current_scene (atom :GAME))

(defn setup []
  (def kill_line (* 1.25 (q/height)))
  ; Set frame rate to 30 frames per second.
  (q/frame-rate 30)
  ; Set color mode to HSB (HSV) instead of default RGB.
  (q/color-mode :hsb)
  ; setup function returns initial state. It contains
  {
    :frame_count 0
    :last_spawn 0
    :level_time_elapsed 0
    :player_is_hit? false
    :player {
      :color 0
      :radius 50
      :invulnerability_timer 0
      :shot_timer 0.100
      :shot_period 0.100
      :life 10
      :life_bid 0
      :life_in_escrow 0
      :x_offset (* (q/width) 0.5) ;;in percent
      :y_offset (* (q/height) 0.9) ;;in percent
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
     :cleanup (or (> (:y_offset enemy) kill_line) (and (< 0 was_hit) (- (:life enemy) was_hit)))
     :timer timer
     :life (if (< 0 was_hit) (- (:life enemy) was_hit) (:life enemy))
     :down_speed (:down_speed enemy)
     :x_offset (:x_offset enemy)
     :y_offset (+ (:y_offset enemy) (* dt (:down_speed enemy)))
     :color (mod (+ (:color enemy) 0.7) 255)
     :radius (:radius enemy)
    }
  )
)

(defn update_projectile [projectile dt]
  (let [timer (+ dt (:timer projectile))]
    {
     :cleanup (or
                (> (:y_offset projectile) kill_line)
                (< (:y_offset projectile) -kill_line)
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
        inv (if took_damage 1.0 (:invulnerability_timer player)) ]
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
               :life_bid (:life_bid player)
               :life_in_escrow (:life_in_escrow player)
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
               :life_bid (:life_bid player)
               :life_in_escrow (:life_in_escrow player)
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
            :life_bid (:life_bid player)
            :life_in_escrow (:life_in_escrow player)
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
        :life_bid (:life_bid player)
        :life_in_escrow (:life_in_escrow player)
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
    :color 0
    :radius 20
    :life 1
    :x_offset (* (q/width) (q/random 1.0))
    :y_offset (* (q/height) 0.0)
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
        :shot_timer (:shot_period player) ;;Intentional: sets timer to maximum period
        :color (:color player)
        :radius (:radius player)
        :invulnerability_timer (:invlunerability_timer player)
        :life (:life player)
        :life_bid (:life_bid player)
        :life_in_escrow (:life_in_escrow player)
        :projectiles (:projectiles player)
     }
     :shots [{
              :x_offset (:x_offset player)
              :y_offset (- (:y_offset player) (:radius player))
              :down_speed -400
              :right_speed (* 10 (- (q/random 2.0) 1))
              :radius 5
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
        :life_bid (:life_bid player)
        :life_in_escrow (:life_in_escrow player)
        :projectiles (:projectiles player)
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
      :player_is_hit? player_is_hit
      :player new_player
      :enemies new_enemies
      :projectiles (cleanup (into updated_projectiles new_player_projectiles))
    }
  )
)

(defn update-state [state]
  (let [dt (/ (- (q/frame-count) (:frame_count state)) (q/target-frame-rate))
        new_time_elapsed (+ dt (:level_time_elapsed state))]
    (if (> new_time_elapsed 10)
      (swap! current_scene (fn [old] :INTERSTITIAL))
      (println "Time elapsed" new_time_elapsed)
    )
    (case @current_scene
      :GAME (game_update_draw_state state dt)
      :INTERSTITIAL ()
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
  (if (= true (:player_is_hit? state))
    (q/background 0)
    (q/background 250)
  )
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
  (q/text (str "Level Complete!") 100 100)
)

; this function is called in index.html
(defn ^:export run-sketch []
  (q/defsketch ludum44js
    :host "ludum44js"
    :size [500 500]
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

