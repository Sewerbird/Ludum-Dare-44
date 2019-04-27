(ns ludum44js.core
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]))

(defn clamp [value min_value max_value] (max min_value (min value max_value)))

(def motion_sensitivity 0.01)
(def current_scene (atom :GAME))

(defn setup []
  ; Set frame rate to 30 frames per second.
  (q/frame-rate 30)
  ; Set color mode to HSB (HSV) instead of default RGB.
  (q/color-mode :hsb)
  ; setup function returns initial state. It contains
  {
    :player {
      :color 0
      :radius 100
      :x_offset 0.5 ;;in percent
      :y_offset 0.0 ;;in percent
    }
    :enemy {
      :color 0
      :radius 100
      :x_offset 0.5 ;;in percent
      :y_offset 0.0 ;;in percent
    }
  }
)

(defn update_enemy [enemy]
  (if (q/key-pressed?)
    (let [dkey (q/raw-key)]
      (case dkey
        "s" {
             :x_offset (:x_offset enemy)
             :y_offset (clamp (+ (:y_offset enemy) motion_sensitivity) 0 1) 
             :color (mod (+ (:color enemy) 0.7) 255)
             :radius 100
            }
        "w" {
             :x_offset (:x_offset enemy)
             :y_offset (clamp (- (:y_offset enemy) motion_sensitivity) 0 1)
             :color (mod (+ (:color enemy) 0.7) 255)
             :radius 100
            }
        {
          :x_offset (:x_offset enemy)
          :y_offset (:y_offset enemy) 
          :color (mod (+ (:color enemy) 0.7) 255)
          :radius 100
        }
      )
    )
    {
      :x_offset (:x_offset enemy)
      :y_offset (:y_offset enemy) 
      :color (mod (+ (:color enemy) 0.7) 255)
      :radius 100
    }
  )
)

(defn update_player [player]
  (if (q/key-pressed?)
    (let [dkey (q/raw-key)]
      (case dkey
        "d" {
             :x_offset (clamp (+ (:x_offset player) motion_sensitivity) 0 1) 
             :y_offset (:y_offset player)
             :color (mod (+ (:color player) 0.7) 255)
             :radius 100
            }
        "a" {
             :x_offset (clamp (- (:x_offset player) motion_sensitivity) 0 1)
             :y_offset (:y_offset player)
             :color (mod (+ (:color player) 0.7) 255)
          :radius 100
            }
        {
          :x_offset (:x_offset player) 
          :y_offset (:y_offset player)
          :color (mod (+ (:color player) 0.7) 255)
          :radius 100
        }
      )
    )
    {
      :x_offset (:x_offset player) 
      :y_offset (:y_offset player)
      :color (mod (+ (:color player) 0.7) 255)
      :radius 100
    }
  )
)

(defn game_update_draw_state [state]
  ; Keyboard-Controlled
  (let [player (:player state)
        enemy (:enemy state)]
    {
      :player (update_player player)
      :enemy (update_enemy enemy)
    }
  )
)

(defn update-state [state]
  (case @current_scene
    :GAME (game_update_draw_state state)
    state
  )
)

(defn do_circle [state]
  (let [diam (q/random 100)             ;; Set the diameter to a value between 0 and 100
        x    (q/random (q/width))       ;; Set the x coord randomly within the sketch
        y    (q/random (q/height))]     ;; Set the y coord randomly within the sketch
    (q/ellipse x y diam diam)           ;; Draw a circle at x y with the correct diameter
    (state)))

(defn draw-state [state]
  ; Clear the sketch by filling it with light-grey color.
  (q/background 240)
  (let [player (:player state)
        enemy (:enemy state)]
    ;;Draw Player
    ; Set circle color.
    (q/fill (:color player) 255 255)
    ; Calculate x and y coordinates of the circle.
    (let [x_offset (:x_offset player)
          x (* (q/width) x_offset)
          y (* (q/width) 0.9)]
      ; Move origin point to the center of the sketch.
      (q/with-translation [0 0]
        ; Draw the circle.
        (q/ellipse x y 100 100)))
    ;;Draw Enemy
    ; Set circle color.
    (q/fill (:color enemy) 255 255)
    ; Calculate x and y coordinates of the circle.
    (let [y_offset (:y_offset enemy)
          y (* (q/height) y_offset)
          x (* (q/width) 0.9)]
      ; Move origin point to the center of the sketch.
      (q/with-translation [0 0]
        ; Draw the circle.
        (q/ellipse x y 100 100)))
  )
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

