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
ludum44js.core.motion_sensitivity = 0.01;
ludum44js.core.current_scene = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$GAME);
ludum44js.core.setup = (function ludum44js$core$setup(){
quil.core.frame_rate((30));

quil.core.color_mode.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$hsb);

return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$player,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$color,(0),cljs.core.cst$kw$x_offset,0.5], null),cljs.core.cst$kw$enemy,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$color,(0),cljs.core.cst$kw$y_offset,0.0], null)], null);
});
ludum44js.core.update_enemy = (function ludum44js$core$update_enemy(enemy){
if(cljs.core.truth_(quil.core.key_pressed_QMARK_())){
var dkey = quil.core.raw_key();
var G__4009 = dkey;
switch (G__4009) {
case "w":
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$y_offset,ludum44js.core.clamp((cljs.core.cst$kw$y_offset.cljs$core$IFn$_invoke$arity$1(enemy) + ludum44js.core.motion_sensitivity),(0),(1)),cljs.core.cst$kw$color,cljs.core.mod((cljs.core.cst$kw$color.cljs$core$IFn$_invoke$arity$1(enemy) + 0.7),(255))], null);

break;
case "s":
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$y_offset,ludum44js.core.clamp((cljs.core.cst$kw$y_offset.cljs$core$IFn$_invoke$arity$1(enemy) - ludum44js.core.motion_sensitivity),(0),(1)),cljs.core.cst$kw$color,cljs.core.mod((cljs.core.cst$kw$color.cljs$core$IFn$_invoke$arity$1(enemy) + 0.7),(255))], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__4009)].join('')));

}
} else {
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$y_offset,cljs.core.cst$kw$y_offset.cljs$core$IFn$_invoke$arity$1(enemy),cljs.core.cst$kw$color,cljs.core.mod((cljs.core.cst$kw$color.cljs$core$IFn$_invoke$arity$1(enemy) + 0.7),(255))], null);
}
});
ludum44js.core.update_player = (function ludum44js$core$update_player(player){
if(cljs.core.truth_(quil.core.key_pressed_QMARK_())){
var dkey = quil.core.raw_key();
var G__4011 = dkey;
switch (G__4011) {
case "d":
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$x_offset,ludum44js.core.clamp((cljs.core.cst$kw$x_offset.cljs$core$IFn$_invoke$arity$1(player) + ludum44js.core.motion_sensitivity),(0),(1)),cljs.core.cst$kw$color,cljs.core.mod((cljs.core.cst$kw$color.cljs$core$IFn$_invoke$arity$1(player) + 0.7),(255))], null);

break;
case "a":
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$x_offset,ludum44js.core.clamp((cljs.core.cst$kw$x_offset.cljs$core$IFn$_invoke$arity$1(player) - ludum44js.core.motion_sensitivity),(0),(1)),cljs.core.cst$kw$color,cljs.core.mod((cljs.core.cst$kw$color.cljs$core$IFn$_invoke$arity$1(player) + 0.7),(255))], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__4011)].join('')));

}
} else {
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$x_offset,cljs.core.cst$kw$x_offset.cljs$core$IFn$_invoke$arity$1(player),cljs.core.cst$kw$color,cljs.core.mod((cljs.core.cst$kw$color.cljs$core$IFn$_invoke$arity$1(player) + 0.7),(255))], null);
}
});
ludum44js.core.game_update_draw_state = (function ludum44js$core$game_update_draw_state(state){
var player = cljs.core.cst$kw$player.cljs$core$IFn$_invoke$arity$1(state);
var enemy = cljs.core.cst$kw$enemy.cljs$core$IFn$_invoke$arity$1(state);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$player,ludum44js.core.update_player(player),cljs.core.cst$kw$enemy,ludum44js.core.update_enemy(enemy)], null);
});
ludum44js.core.update_state = (function ludum44js$core$update_state(state){
var G__4013 = cljs.core.deref(ludum44js.core.current_scene);
var G__4013__$1 = (((G__4013 instanceof cljs.core.Keyword))?G__4013.fqn:null);
switch (G__4013__$1) {
case "GAME":
return ludum44js.core.game_update_draw_state(state);

break;
default:
return state;

}
});
ludum44js.core.do_circle = (function ludum44js$core$do_circle(state){
var diam = quil.core.random.cljs$core$IFn$_invoke$arity$1((100));
var x = quil.core.random.cljs$core$IFn$_invoke$arity$1(quil.core.width());
var y = quil.core.random.cljs$core$IFn$_invoke$arity$1(quil.core.height());
quil.core.ellipse(x,y,diam,diam);

return (state.cljs$core$IFn$_invoke$arity$0 ? state.cljs$core$IFn$_invoke$arity$0() : state.call(null));
});
ludum44js.core.draw_state = (function ludum44js$core$draw_state(state){
quil.core.background.cljs$core$IFn$_invoke$arity$1((240));

var player_4015 = cljs.core.cst$kw$player.cljs$core$IFn$_invoke$arity$1(state);
var enemy_4016 = cljs.core.cst$kw$enemy.cljs$core$IFn$_invoke$arity$1(state);
quil.core.fill.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$color.cljs$core$IFn$_invoke$arity$1(player_4015),(255),(255));

var x_offset_4017 = cljs.core.cst$kw$x_offset.cljs$core$IFn$_invoke$arity$1(player_4015);
var x_4018 = (quil.core.width() * x_offset_4017);
var y_4019 = (quil.core.width() * 0.9);
var tr__1734__auto___4020 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
quil.core.push_matrix();

try{quil.core.translate.cljs$core$IFn$_invoke$arity$1(tr__1734__auto___4020);

quil.core.ellipse(x_4018,y_4019,(100),(100));
}finally {quil.core.pop_matrix();
}
quil.core.fill.cljs$core$IFn$_invoke$arity$3(cljs.core.cst$kw$color.cljs$core$IFn$_invoke$arity$1(ludum44js.core.enemy),(255),(255));

var y_offset = cljs.core.cst$kw$y_offset.cljs$core$IFn$_invoke$arity$1(ludum44js.core.enemy);
var y = (quil.core.height() * y_offset);
var x = (quil.core.width() * 0.9);
var tr__1734__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
quil.core.push_matrix();

try{quil.core.translate.cljs$core$IFn$_invoke$arity$1(tr__1734__auto__);

return quil.core.ellipse(x,y,(100),(100));
}finally {quil.core.pop_matrix();
}});
