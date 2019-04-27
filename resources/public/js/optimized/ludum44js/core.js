// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('ludum44js.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('quil.core');
goog.require('quil.middleware');
ludum44js.core.clamp = (function ludum44js$core$clamp(value,min_value,max_value){
var x__4219__auto__ = min_value;
var y__4220__auto__ = (function (){var x__4222__auto__ = value;
var y__4223__auto__ = max_value;
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
})();
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
});
ludum44js.core.abs = (function ludum44js$core$abs(n){
var x__4219__auto__ = n;
var y__4220__auto__ = (- n);
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
});
ludum44js.core.motion_sensitivity = 15.0;
ludum44js.core.current_scene = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$GAME);
ludum44js.core.setup = (function ludum44js$core$setup(){
ludum44js.core.kill_line = (1.25 * quil.core.height());

quil.core.frame_rate((30));

quil.core.color_mode.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$hsb);

return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$frame_count,(0),cljs.core.cst$kw$last_spawn,(0),cljs.core.cst$kw$player_is_hit_QMARK_,false,cljs.core.cst$kw$player,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$invulnerability_timer,cljs.core.cst$kw$life_bid,cljs.core.cst$kw$color,cljs.core.cst$kw$radius,cljs.core.cst$kw$life,cljs.core.cst$kw$y_offset,cljs.core.cst$kw$shot_timer,cljs.core.cst$kw$x_offset,cljs.core.cst$kw$shot_period,cljs.core.cst$kw$life_in_escrow],[(0),(0),(0),(50),(10),(quil.core.height() * 0.9),0.001,(quil.core.width() * 0.5),0.001,(0)]),cljs.core.cst$kw$enemies,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$projectiles,cljs.core.PersistentVector.EMPTY], null);
});
