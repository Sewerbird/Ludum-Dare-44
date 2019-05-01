// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('ludum44js.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('quil.core');
goog.require('quil.middleware');
ludum44js.core.path = "./";
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
ludum44js.core.load_image = (function ludum44js$core$load_image(image){
var path = [ludum44js.core.path,cljs.core.name(image),".png"].join('');
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Loading",path], 0));

return quil.core.load_image(path);
});
ludum44js.core.load_font = (function ludum44js$core$load_font(font){
var path = [ludum44js.core.path,cljs.core.name(font)].join('');
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Loading",path], 0));

return quil.core.load_font(path);
});
ludum44js.core.draw_image = (function ludum44js$core$draw_image(state,k,p__16007,w,h){
var vec__16008 = p__16007;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16008,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16008,(1),null);
if(cljs.core.truth_((function (){var or__4131__auto__ = w;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return h;
}
})())){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Resizing to ",w,h], 0));

quil.core.resize(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$images,k], null)),w,h);
} else {
}

return quil.core.image.cljs$core$IFn$_invoke$arity$3(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$images,k], null)),x,y);
});
ludum44js.core.draw_text = (function ludum44js$core$draw_text(state,font,message,p__16011){
var vec__16012 = p__16011;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16012,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16012,(1),null);
quil.core.text_font.cljs$core$IFn$_invoke$arity$2("Arial",(30));

return quil.core.text.cljs$core$IFn$_invoke$arity$3(message,x,y);
});
ludum44js.core.images = new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$bg,cljs.core.cst$kw$test,"bid0","bid1","bid2","bid3","bid4","bid5","bid6","bid7","bid8","bid9",cljs.core.cst$kw$upgradepip,cljs.core.cst$kw$pew,"baddie1","baddie2","baddie3",cljs.core.cst$kw$player], null);
ludum44js.core.fonts = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$earthorbiteracad], null);
ludum44js.core.motion_sensitivity = 10.0;
ludum44js.core.current_scene = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$GAME);
ludum44js.core.current_level = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((1));
ludum44js.core.prior_bet_bid = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
ludum44js.core.current_bet_bid = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((5));
ludum44js.core.wallet_balance = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
ludum44js.core.life_for_player = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((10));
ludum44js.core.time_now = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
ludum44js.core.time_of_last_purchase = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((-10));
ludum44js.core.time_of_last_bid_change = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((-10));
ludum44js.core.purchases = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$fire_rate,(0),cljs.core.cst$kw$fire_spread,(0),cljs.core.cst$kw$vessel_size,(0),cljs.core.cst$kw$armor,(0),cljs.core.cst$kw$bullet_size,(0),cljs.core.cst$kw$bullet_speed,(0)], null));
ludum44js.core.reinitialize_player = (function ludum44js$core$reinitialize_player(player){
var new_player = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$invulnerability_timer,cljs.core.cst$kw$upgrades,cljs.core.cst$kw$color,cljs.core.cst$kw$saturation,cljs.core.cst$kw$radius,cljs.core.cst$kw$life,cljs.core.cst$kw$y_offset,cljs.core.cst$kw$luminosity,cljs.core.cst$kw$shot_timer,cljs.core.cst$kw$x_offset,cljs.core.cst$kw$purchases,cljs.core.cst$kw$shot_period,cljs.core.cst$kw$player_size],[(0),new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$fire_rate,(1.0 * ((1) / cljs.core.cst$kw$fire_rate.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ludum44js.core.purchases)))),cljs.core.cst$kw$fire_spread,((0.75 * cljs.core.cst$kw$fire_spread.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ludum44js.core.purchases))) + 1.0),cljs.core.cst$kw$vessel_size,((1.0 / cljs.core.cst$kw$vessel_size.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ludum44js.core.purchases))) * 1.0),cljs.core.cst$kw$armor,((0.3 * cljs.core.cst$kw$armor.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ludum44js.core.purchases))) + 1.0),cljs.core.cst$kw$bullet_size,((0.2 * cljs.core.cst$kw$bullet_size.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ludum44js.core.purchases))) + 1.0),cljs.core.cst$kw$bullet_speed,((0.5 * cljs.core.cst$kw$bullet_speed.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ludum44js.core.purchases))) + 1.0)], null),(180),(255),(50),cljs.core.deref(ludum44js.core.life_for_player),(quil.core.height() * 0.9),(255),0.5,(100),cljs.core.deref(ludum44js.core.purchases),0.5,((50) * ((1) / (function (){var x__4219__auto__ = (1);
var y__4220__auto__ = cljs.core.cst$kw$vessel_size.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ludum44js.core.purchases));
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})()))]);
return new_player;
});
ludum44js.core.update_enemy = (function ludum44js$core$update_enemy(enemy,dt,projectiles){
var timer = (dt + cljs.core.cst$kw$timer.cljs$core$IFn$_invoke$arity$1(enemy));
var was_hit = cljs.core.count((ludum44js.core.check_collision.cljs$core$IFn$_invoke$arity$2 ? ludum44js.core.check_collision.cljs$core$IFn$_invoke$arity$2(enemy,projectiles) : ludum44js.core.check_collision.call(null,enemy,projectiles)));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([enemy,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$cleanup,(function (){var or__4131__auto__ = (cljs.core.cst$kw$x_offset.cljs$core$IFn$_invoke$arity$1(enemy) < ludum44js.core._kill_line);
if(or__4131__auto__){
return or__4131__auto__;
} else {
var and__4120__auto__ = ((0) < was_hit);
if(and__4120__auto__){
return (cljs.core.cst$kw$life.cljs$core$IFn$_invoke$arity$1(enemy) - was_hit);
} else {
return and__4120__auto__;
}
}
})(),cljs.core.cst$kw$timer,timer,cljs.core.cst$kw$life,((((0) < was_hit))?(cljs.core.cst$kw$life.cljs$core$IFn$_invoke$arity$1(enemy) - was_hit):cljs.core.cst$kw$life.cljs$core$IFn$_invoke$arity$1(enemy)),cljs.core.cst$kw$y_offset,(cljs.core.cst$kw$y_offset.cljs$core$IFn$_invoke$arity$1(enemy) + (dt * cljs.core.cst$kw$down_speed.cljs$core$IFn$_invoke$arity$1(enemy))),cljs.core.cst$kw$x_offset,(cljs.core.cst$kw$x_offset.cljs$core$IFn$_invoke$arity$1(enemy) + (dt * cljs.core.cst$kw$right_speed.cljs$core$IFn$_invoke$arity$1(enemy)))], null)], 0));
});
ludum44js.core.update_projectile = (function ludum44js$core$update_projectile(projectile,dt){
var timer = (dt + cljs.core.cst$kw$timer.cljs$core$IFn$_invoke$arity$1(projectile));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([projectile,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$cleanup,(((cljs.core.cst$kw$y_offset.cljs$core$IFn$_invoke$arity$1(projectile) > quil.core.height())) || ((cljs.core.cst$kw$y_offset.cljs$core$IFn$_invoke$arity$1(projectile) < (0))) || ((cljs.core.cst$kw$x_offset.cljs$core$IFn$_invoke$arity$1(projectile) > quil.core.width())) || ((cljs.core.cst$kw$x_offset.cljs$core$IFn$_invoke$arity$1(projectile) < (0))) || (((((0) < cljs.core.cst$kw$duration.cljs$core$IFn$_invoke$arity$1(projectile))) && ((timer > cljs.core.cst$kw$duration.cljs$core$IFn$_invoke$arity$1(projectile)))))),cljs.core.cst$kw$timer,timer,cljs.core.cst$kw$x_offset,(cljs.core.cst$kw$x_offset.cljs$core$IFn$_invoke$arity$1(projectile) + (dt * cljs.core.cst$kw$right_speed.cljs$core$IFn$_invoke$arity$1(projectile))),cljs.core.cst$kw$y_offset,(cljs.core.cst$kw$y_offset.cljs$core$IFn$_invoke$arity$1(projectile) + (dt * cljs.core.cst$kw$down_speed.cljs$core$IFn$_invoke$arity$1(projectile)))], null)], 0));
});
ludum44js.core.update_player = (function ludum44js$core$update_player(player,dt,player_is_hit){
var took_damage = ((((0) < cljs.core.cst$kw$invulnerability_timer.cljs$core$IFn$_invoke$arity$1(player)))?false:player_is_hit);
var inv = (cljs.core.truth_(took_damage)?(1.0 * cljs.core.cst$kw$armor.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$upgrades.cljs$core$IFn$_invoke$arity$1(player))):cljs.core.cst$kw$invulnerability_timer.cljs$core$IFn$_invoke$arity$1(player));
var _player = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([player,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$invulnerability_timer,ludum44js.core.clamp((inv - dt),(0),(100)),cljs.core.cst$kw$shot_timer,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.cst$kw$shot_timer.cljs$core$IFn$_invoke$arity$1(player)))?(cljs.core.cst$kw$shot_period.cljs$core$IFn$_invoke$arity$1(player) * cljs.core.cst$kw$fire_rate.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$upgrades.cljs$core$IFn$_invoke$arity$0())):ludum44js.core.clamp((cljs.core.cst$kw$shot_timer.cljs$core$IFn$_invoke$arity$1(player) - dt),(0),cljs.core.cst$kw$shot_period.cljs$core$IFn$_invoke$arity$1(player))),cljs.core.cst$kw$life,(cljs.core.truth_(took_damage)?(cljs.core.cst$kw$life.cljs$core$IFn$_invoke$arity$1(player) - (1)):cljs.core.cst$kw$life.cljs$core$IFn$_invoke$arity$1(player)),cljs.core.cst$kw$luminosity,((255) * (1.0 - cljs.core.cst$kw$invulnerability_timer.cljs$core$IFn$_invoke$arity$1(player)))], null)], 0));
if(cljs.core.truth_(quil.core.key_pressed_QMARK_())){
var dkey = quil.core.raw_key();
var G__16015 = dkey;
switch (G__16015) {
case "d":
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([_player,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$x_offset,ludum44js.core.clamp((cljs.core.cst$kw$x_offset.cljs$core$IFn$_invoke$arity$1(player) + ludum44js.core.motion_sensitivity),(0),quil.core.width())], null)], 0));

break;
case "a":
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([_player,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$x_offset,ludum44js.core.clamp((cljs.core.cst$kw$x_offset.cljs$core$IFn$_invoke$arity$1(player) - ludum44js.core.motion_sensitivity),(0),quil.core.width())], null)], 0));

break;
case "s":
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([_player,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$y_offset,ludum44js.core.clamp((cljs.core.cst$kw$y_offset.cljs$core$IFn$_invoke$arity$1(player) + ludum44js.core.motion_sensitivity),(0),quil.core.height())], null)], 0));

break;
case "w":
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([_player,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$y_offset,ludum44js.core.clamp((cljs.core.cst$kw$y_offset.cljs$core$IFn$_invoke$arity$1(player) - ludum44js.core.motion_sensitivity),(0),quil.core.height())], null)], 0));

break;
default:
return _player;

}
} else {
return _player;
}
});
ludum44js.core.check_player_firing = (function ludum44js$core$check_player_firing(player,dt){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.cst$kw$shot_timer.cljs$core$IFn$_invoke$arity$1(player))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$color,cljs.core.cst$kw$timer,cljs.core.cst$kw$saturation,cljs.core.cst$kw$down_speed,cljs.core.cst$kw$duration,cljs.core.cst$kw$radius,cljs.core.cst$kw$y_offset,cljs.core.cst$kw$luminosity,cljs.core.cst$kw$x_offset,cljs.core.cst$kw$right_speed,cljs.core.cst$kw$cleanup],[(66),(0),(255),((-400) * cljs.core.cst$kw$bullet_speed.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$upgrades.cljs$core$IFn$_invoke$arity$1(player))),(3),((5) * cljs.core.cst$kw$bullet_size.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$upgrades.cljs$core$IFn$_invoke$arity$1(player))),(cljs.core.cst$kw$y_offset.cljs$core$IFn$_invoke$arity$1(player) - cljs.core.cst$kw$radius.cljs$core$IFn$_invoke$arity$1(player)),(255),cljs.core.cst$kw$x_offset.cljs$core$IFn$_invoke$arity$1(player),(((10) * (quil.core.random.cljs$core$IFn$_invoke$arity$1(2.0) - (1))) * cljs.core.cst$kw$fire_spread.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$upgrades.cljs$core$IFn$_invoke$arity$1(player))),false])], null);
} else {
return cljs.core.PersistentVector.EMPTY;
}
});
ludum44js.core.check_collision = (function ludum44js$core$check_collision(tgt,colliders){

return cljs.core.filterv((function (a){
var wa = (cljs.core.truth_(cljs.core.cst$kw$player_size.cljs$core$IFn$_invoke$arity$1(a))?cljs.core.cst$kw$player_size.cljs$core$IFn$_invoke$arity$1(a):cljs.core.cst$kw$radius.cljs$core$IFn$_invoke$arity$1(a));
var wtgt = (cljs.core.truth_(cljs.core.cst$kw$player_size.cljs$core$IFn$_invoke$arity$1(tgt))?cljs.core.cst$kw$player_size.cljs$core$IFn$_invoke$arity$1(tgt):cljs.core.cst$kw$radius.cljs$core$IFn$_invoke$arity$1(tgt));
var dx = (cljs.core.cst$kw$x_offset.cljs$core$IFn$_invoke$arity$1(a) - cljs.core.cst$kw$x_offset.cljs$core$IFn$_invoke$arity$1(tgt));
var dy = (cljs.core.cst$kw$y_offset.cljs$core$IFn$_invoke$arity$1(a) - cljs.core.cst$kw$y_offset.cljs$core$IFn$_invoke$arity$1(tgt));
var dd = (function (){var G__16017 = ((dx * dx) + (dy * dy));
return Math.sqrt(G__16017);
})();
var r = (wa + wtgt);
return (dd < (r / (2)));
}),colliders);
});
ludum44js.core.cleanup = (function ludum44js$core$cleanup(col){
return cljs.core.filterv((function (p1__16018_SHARP_){
return cljs.core.not(cljs.core.cst$kw$cleanup.cljs$core$IFn$_invoke$arity$1(p1__16018_SHARP_));
}),col);
});
ludum44js.core.spawn_enemies = (function ludum44js$core$spawn_enemies(is_needed,old_enemies){
if(cljs.core.truth_(is_needed)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(old_enemies,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$color,cljs.core.cst$kw$timer,cljs.core.cst$kw$variant,cljs.core.cst$kw$saturation,cljs.core.cst$kw$down_speed,cljs.core.cst$kw$radius,cljs.core.cst$kw$life,cljs.core.cst$kw$y_offset,cljs.core.cst$kw$luminosity,cljs.core.cst$kw$x_offset,cljs.core.cst$kw$right_speed,cljs.core.cst$kw$cleanup],[(0),(0),(1),(255),200.0,(20),(1),(quil.core.height() * (0)),(255),(quil.core.width() * quil.core.random.cljs$core$IFn$_invoke$arity$1(1.0)),(0),false]));
} else {
return old_enemies;
}
});
ludum44js.core.over_update_draw_state = (function ludum44js$core$over_update_draw_state(state,dt){
if(cljs.core.truth_(quil.core.key_pressed_QMARK_())){
var dkey_16020 = quil.core.raw_key();
var G__16019_16021 = dkey_16020;
switch (G__16019_16021) {
case " ":
(ludum44js.core._STAR_js.cljs$core$IFn$_invoke$arity$1 ? ludum44js.core._STAR_js.cljs$core$IFn$_invoke$arity$1("window.location.reload(false);") : ludum44js.core._STAR_js.call(null,"window.location.reload(false);"));

break;
default:

}
} else {
}

return state;
});
ludum44js.core.draw_game_over_state = (function ludum44js$core$draw_game_over_state(state){
quil.core.background.cljs$core$IFn$_invoke$arity$1((0));

quil.core.text.cljs$core$IFn$_invoke$arity$3("You Died!",(250),(400));

quil.core.text.cljs$core$IFn$_invoke$arity$3("Refresh this page to try again!",(100),(450));

return state;
});
