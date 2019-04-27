// Compiled by ClojureScript 1.10.520 {}
goog.provide('ludum44js.core');
goog.require('cljs.core');
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
ludum44js.core.current_scene = cljs.core.atom.call(null,new cljs.core.Keyword(null,"GAME","GAME",-1201089127));
ludum44js.core.setup = (function ludum44js$core$setup(){
ludum44js.core.kill_line = (1.25 * quil.core.height.call(null));

quil.core.frame_rate.call(null,(30));

quil.core.color_mode.call(null,new cljs.core.Keyword(null,"hsb","hsb",-753472031));

return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"frame_count","frame_count",-122201924),(0),new cljs.core.Keyword(null,"last_spawn","last_spawn",-1436338511),(0),new cljs.core.Keyword(null,"level_time_elapsed","level_time_elapsed",-737725489),(0),new cljs.core.Keyword(null,"player_is_hit?","player_is_hit?",1783145031),false,new cljs.core.Keyword(null,"player","player",-97687400),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"invulnerability_timer","invulnerability_timer",1704656288),new cljs.core.Keyword(null,"life_bid","life_bid",1388750081),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"radius","radius",-2073122258),new cljs.core.Keyword(null,"life","life",939004719),new cljs.core.Keyword(null,"y_offset","y_offset",1125597970),new cljs.core.Keyword(null,"shot_timer","shot_timer",-1952245610),new cljs.core.Keyword(null,"x_offset","x_offset",759077110),new cljs.core.Keyword(null,"shot_period","shot_period",-503894344),new cljs.core.Keyword(null,"life_in_escrow","life_in_escrow",156125594)],[(0),(0),(0),(50),(10),(quil.core.height.call(null) * 0.9),0.1,(quil.core.width.call(null) * 0.5),0.1,(0)]),new cljs.core.Keyword(null,"enemies","enemies",2114285722),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"projectiles","projectiles",-1303310399),cljs.core.PersistentVector.EMPTY], null);
});
ludum44js.core.update_enemy = (function ludum44js$core$update_enemy(enemy,dt,projectiles){
var timer = (dt + new cljs.core.Keyword(null,"timer","timer",-1266967739).cljs$core$IFn$_invoke$arity$1(enemy));
var was_hit = cljs.core.count.call(null,ludum44js.core.check_collision.call(null,enemy,projectiles));
if(((0) < was_hit)){
cljs.core.println.call(null,"I WAS HIT",was_hit);
} else {
}

return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"cleanup","cleanup",1045776959),(function (){var or__4131__auto__ = (new cljs.core.Keyword(null,"y_offset","y_offset",1125597970).cljs$core$IFn$_invoke$arity$1(enemy) > ludum44js.core.kill_line);
if(or__4131__auto__){
return or__4131__auto__;
} else {
var and__4120__auto__ = ((0) < was_hit);
if(and__4120__auto__){
return (new cljs.core.Keyword(null,"life","life",939004719).cljs$core$IFn$_invoke$arity$1(enemy) - was_hit);
} else {
return and__4120__auto__;
}
}
})(),new cljs.core.Keyword(null,"timer","timer",-1266967739),timer,new cljs.core.Keyword(null,"life","life",939004719),((((0) < was_hit))?(new cljs.core.Keyword(null,"life","life",939004719).cljs$core$IFn$_invoke$arity$1(enemy) - was_hit):new cljs.core.Keyword(null,"life","life",939004719).cljs$core$IFn$_invoke$arity$1(enemy)),new cljs.core.Keyword(null,"down_speed","down_speed",-912046520),new cljs.core.Keyword(null,"down_speed","down_speed",-912046520).cljs$core$IFn$_invoke$arity$1(enemy),new cljs.core.Keyword(null,"x_offset","x_offset",759077110),new cljs.core.Keyword(null,"x_offset","x_offset",759077110).cljs$core$IFn$_invoke$arity$1(enemy),new cljs.core.Keyword(null,"y_offset","y_offset",1125597970),(new cljs.core.Keyword(null,"y_offset","y_offset",1125597970).cljs$core$IFn$_invoke$arity$1(enemy) + (dt * new cljs.core.Keyword(null,"down_speed","down_speed",-912046520).cljs$core$IFn$_invoke$arity$1(enemy))),new cljs.core.Keyword(null,"color","color",1011675173),cljs.core.mod.call(null,(new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(enemy) + 0.7),(255)),new cljs.core.Keyword(null,"radius","radius",-2073122258),new cljs.core.Keyword(null,"radius","radius",-2073122258).cljs$core$IFn$_invoke$arity$1(enemy)], null);
});
ludum44js.core.update_projectile = (function ludum44js$core$update_projectile(projectile,dt){
var timer = (dt + new cljs.core.Keyword(null,"timer","timer",-1266967739).cljs$core$IFn$_invoke$arity$1(projectile));
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"timer","timer",-1266967739),new cljs.core.Keyword(null,"down_speed","down_speed",-912046520),new cljs.core.Keyword(null,"duration","duration",1444101068),new cljs.core.Keyword(null,"radius","radius",-2073122258),new cljs.core.Keyword(null,"y_offset","y_offset",1125597970),new cljs.core.Keyword(null,"x_offset","x_offset",759077110),new cljs.core.Keyword(null,"right_speed","right_speed",-2039906114),new cljs.core.Keyword(null,"cleanup","cleanup",1045776959)],[cljs.core.mod.call(null,(new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(projectile) + 0.7),(255)),timer,new cljs.core.Keyword(null,"down_speed","down_speed",-912046520).cljs$core$IFn$_invoke$arity$1(projectile),new cljs.core.Keyword(null,"duration","duration",1444101068).cljs$core$IFn$_invoke$arity$1(projectile),new cljs.core.Keyword(null,"radius","radius",-2073122258).cljs$core$IFn$_invoke$arity$1(projectile),(new cljs.core.Keyword(null,"y_offset","y_offset",1125597970).cljs$core$IFn$_invoke$arity$1(projectile) + (dt * new cljs.core.Keyword(null,"down_speed","down_speed",-912046520).cljs$core$IFn$_invoke$arity$1(projectile))),(new cljs.core.Keyword(null,"x_offset","x_offset",759077110).cljs$core$IFn$_invoke$arity$1(projectile) + (dt * new cljs.core.Keyword(null,"right_speed","right_speed",-2039906114).cljs$core$IFn$_invoke$arity$1(projectile))),new cljs.core.Keyword(null,"right_speed","right_speed",-2039906114).cljs$core$IFn$_invoke$arity$1(projectile),(((new cljs.core.Keyword(null,"y_offset","y_offset",1125597970).cljs$core$IFn$_invoke$arity$1(projectile) > ludum44js.core.kill_line)) || ((new cljs.core.Keyword(null,"y_offset","y_offset",1125597970).cljs$core$IFn$_invoke$arity$1(projectile) < ludum44js.core._kill_line)) || ((new cljs.core.Keyword(null,"x_offset","x_offset",759077110).cljs$core$IFn$_invoke$arity$1(projectile) > quil.core.width.call(null))) || ((new cljs.core.Keyword(null,"x_offset","x_offset",759077110).cljs$core$IFn$_invoke$arity$1(projectile) < (0))) || (((((0) < new cljs.core.Keyword(null,"duration","duration",1444101068).cljs$core$IFn$_invoke$arity$1(projectile))) && ((timer > new cljs.core.Keyword(null,"duration","duration",1444101068).cljs$core$IFn$_invoke$arity$1(projectile))))))]);
});
ludum44js.core.update_player = (function ludum44js$core$update_player(player,dt,player_is_hit){
var took_damage = ((((0) < new cljs.core.Keyword(null,"invulnerability_timer","invulnerability_timer",1704656288).cljs$core$IFn$_invoke$arity$1(player)))?false:player_is_hit);
var inv = (cljs.core.truth_(took_damage)?1.0:new cljs.core.Keyword(null,"invulnerability_timer","invulnerability_timer",1704656288).cljs$core$IFn$_invoke$arity$1(player));
if(cljs.core.truth_(quil.core.key_pressed_QMARK_.call(null))){
var dkey = quil.core.raw_key.call(null);
var G__15670 = dkey;
switch (G__15670) {
case "d":
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"invulnerability_timer","invulnerability_timer",1704656288),new cljs.core.Keyword(null,"life_bid","life_bid",1388750081),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"radius","radius",-2073122258),new cljs.core.Keyword(null,"life","life",939004719),new cljs.core.Keyword(null,"y_offset","y_offset",1125597970),new cljs.core.Keyword(null,"shot_timer","shot_timer",-1952245610),new cljs.core.Keyword(null,"x_offset","x_offset",759077110),new cljs.core.Keyword(null,"shot_period","shot_period",-503894344),new cljs.core.Keyword(null,"life_in_escrow","life_in_escrow",156125594)],[ludum44js.core.clamp.call(null,(inv - dt),(0),(100)),new cljs.core.Keyword(null,"life_bid","life_bid",1388750081).cljs$core$IFn$_invoke$arity$1(player),cljs.core.mod.call(null,(new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(player) + 0.7),(255)),new cljs.core.Keyword(null,"radius","radius",-2073122258).cljs$core$IFn$_invoke$arity$1(player),(cljs.core.truth_(took_damage)?(new cljs.core.Keyword(null,"life","life",939004719).cljs$core$IFn$_invoke$arity$1(player) - (1)):new cljs.core.Keyword(null,"life","life",939004719).cljs$core$IFn$_invoke$arity$1(player)),new cljs.core.Keyword(null,"y_offset","y_offset",1125597970).cljs$core$IFn$_invoke$arity$1(player),new cljs.core.Keyword(null,"shot_timer","shot_timer",-1952245610).cljs$core$IFn$_invoke$arity$1(player),ludum44js.core.clamp.call(null,(new cljs.core.Keyword(null,"x_offset","x_offset",759077110).cljs$core$IFn$_invoke$arity$1(player) + ludum44js.core.motion_sensitivity),(0),quil.core.width.call(null)),new cljs.core.Keyword(null,"shot_period","shot_period",-503894344).cljs$core$IFn$_invoke$arity$1(player),new cljs.core.Keyword(null,"life_in_escrow","life_in_escrow",156125594).cljs$core$IFn$_invoke$arity$1(player)]);

break;
case "a":
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"invulnerability_timer","invulnerability_timer",1704656288),new cljs.core.Keyword(null,"life_bid","life_bid",1388750081),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"radius","radius",-2073122258),new cljs.core.Keyword(null,"life","life",939004719),new cljs.core.Keyword(null,"y_offset","y_offset",1125597970),new cljs.core.Keyword(null,"shot_timer","shot_timer",-1952245610),new cljs.core.Keyword(null,"x_offset","x_offset",759077110),new cljs.core.Keyword(null,"shot_period","shot_period",-503894344),new cljs.core.Keyword(null,"life_in_escrow","life_in_escrow",156125594)],[ludum44js.core.clamp.call(null,(inv - dt),(0),(100)),new cljs.core.Keyword(null,"life_bid","life_bid",1388750081).cljs$core$IFn$_invoke$arity$1(player),cljs.core.mod.call(null,(new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(player) + 0.7),(255)),new cljs.core.Keyword(null,"radius","radius",-2073122258).cljs$core$IFn$_invoke$arity$1(player),(cljs.core.truth_(took_damage)?(new cljs.core.Keyword(null,"life","life",939004719).cljs$core$IFn$_invoke$arity$1(player) - (1)):new cljs.core.Keyword(null,"life","life",939004719).cljs$core$IFn$_invoke$arity$1(player)),new cljs.core.Keyword(null,"y_offset","y_offset",1125597970).cljs$core$IFn$_invoke$arity$1(player),new cljs.core.Keyword(null,"shot_timer","shot_timer",-1952245610).cljs$core$IFn$_invoke$arity$1(player),ludum44js.core.clamp.call(null,(new cljs.core.Keyword(null,"x_offset","x_offset",759077110).cljs$core$IFn$_invoke$arity$1(player) - ludum44js.core.motion_sensitivity),(0),quil.core.width.call(null)),new cljs.core.Keyword(null,"shot_period","shot_period",-503894344).cljs$core$IFn$_invoke$arity$1(player),new cljs.core.Keyword(null,"life_in_escrow","life_in_escrow",156125594).cljs$core$IFn$_invoke$arity$1(player)]);

break;
default:
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"invulnerability_timer","invulnerability_timer",1704656288),new cljs.core.Keyword(null,"life_bid","life_bid",1388750081),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"radius","radius",-2073122258),new cljs.core.Keyword(null,"life","life",939004719),new cljs.core.Keyword(null,"y_offset","y_offset",1125597970),new cljs.core.Keyword(null,"shot_timer","shot_timer",-1952245610),new cljs.core.Keyword(null,"x_offset","x_offset",759077110),new cljs.core.Keyword(null,"shot_period","shot_period",-503894344),new cljs.core.Keyword(null,"life_in_escrow","life_in_escrow",156125594)],[ludum44js.core.clamp.call(null,(inv - dt),(0),(100)),new cljs.core.Keyword(null,"life_bid","life_bid",1388750081).cljs$core$IFn$_invoke$arity$1(player),cljs.core.mod.call(null,(new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(player) + 0.7),(255)),new cljs.core.Keyword(null,"radius","radius",-2073122258).cljs$core$IFn$_invoke$arity$1(player),(cljs.core.truth_(took_damage)?(new cljs.core.Keyword(null,"life","life",939004719).cljs$core$IFn$_invoke$arity$1(player) - (1)):new cljs.core.Keyword(null,"life","life",939004719).cljs$core$IFn$_invoke$arity$1(player)),new cljs.core.Keyword(null,"y_offset","y_offset",1125597970).cljs$core$IFn$_invoke$arity$1(player),new cljs.core.Keyword(null,"shot_timer","shot_timer",-1952245610).cljs$core$IFn$_invoke$arity$1(player),new cljs.core.Keyword(null,"x_offset","x_offset",759077110).cljs$core$IFn$_invoke$arity$1(player),new cljs.core.Keyword(null,"shot_period","shot_period",-503894344).cljs$core$IFn$_invoke$arity$1(player),new cljs.core.Keyword(null,"life_in_escrow","life_in_escrow",156125594).cljs$core$IFn$_invoke$arity$1(player)]);

}
} else {
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"invulnerability_timer","invulnerability_timer",1704656288),new cljs.core.Keyword(null,"life_bid","life_bid",1388750081),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"radius","radius",-2073122258),new cljs.core.Keyword(null,"life","life",939004719),new cljs.core.Keyword(null,"y_offset","y_offset",1125597970),new cljs.core.Keyword(null,"shot_timer","shot_timer",-1952245610),new cljs.core.Keyword(null,"x_offset","x_offset",759077110),new cljs.core.Keyword(null,"shot_period","shot_period",-503894344),new cljs.core.Keyword(null,"life_in_escrow","life_in_escrow",156125594)],[ludum44js.core.clamp.call(null,(inv - dt),(0),(100)),new cljs.core.Keyword(null,"life_bid","life_bid",1388750081).cljs$core$IFn$_invoke$arity$1(player),cljs.core.mod.call(null,(new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(player) + 0.7),(255)),new cljs.core.Keyword(null,"radius","radius",-2073122258).cljs$core$IFn$_invoke$arity$1(player),(cljs.core.truth_(took_damage)?(new cljs.core.Keyword(null,"life","life",939004719).cljs$core$IFn$_invoke$arity$1(player) - (1)):new cljs.core.Keyword(null,"life","life",939004719).cljs$core$IFn$_invoke$arity$1(player)),new cljs.core.Keyword(null,"y_offset","y_offset",1125597970).cljs$core$IFn$_invoke$arity$1(player),new cljs.core.Keyword(null,"shot_timer","shot_timer",-1952245610).cljs$core$IFn$_invoke$arity$1(player),new cljs.core.Keyword(null,"x_offset","x_offset",759077110).cljs$core$IFn$_invoke$arity$1(player),new cljs.core.Keyword(null,"shot_period","shot_period",-503894344).cljs$core$IFn$_invoke$arity$1(player),new cljs.core.Keyword(null,"life_in_escrow","life_in_escrow",156125594).cljs$core$IFn$_invoke$arity$1(player)]);
}
});
ludum44js.core.check_collision = (function ludum44js$core$check_collision(tgt,colliders){

return cljs.core.filterv.call(null,(function (a){
var dx = (new cljs.core.Keyword(null,"x_offset","x_offset",759077110).cljs$core$IFn$_invoke$arity$1(a) - new cljs.core.Keyword(null,"x_offset","x_offset",759077110).cljs$core$IFn$_invoke$arity$1(tgt));
var dy = (new cljs.core.Keyword(null,"y_offset","y_offset",1125597970).cljs$core$IFn$_invoke$arity$1(a) - new cljs.core.Keyword(null,"y_offset","y_offset",1125597970).cljs$core$IFn$_invoke$arity$1(tgt));
var dd = Math.sqrt(((dx * dx) + (dy * dy)));
var r = (new cljs.core.Keyword(null,"radius","radius",-2073122258).cljs$core$IFn$_invoke$arity$1(a) + new cljs.core.Keyword(null,"radius","radius",-2073122258).cljs$core$IFn$_invoke$arity$1(tgt));
return (dd < (r / (2)));
}),colliders);
});
ludum44js.core.cleanup = (function ludum44js$core$cleanup(col){
return cljs.core.filterv.call(null,(function (p1__15672_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"cleanup","cleanup",1045776959).cljs$core$IFn$_invoke$arity$1(p1__15672_SHARP_));
}),col);
});
ludum44js.core.spawn_new_random_enemy = (function ludum44js$core$spawn_new_random_enemy(){
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"cleanup","cleanup",1045776959),false,new cljs.core.Keyword(null,"timer","timer",-1266967739),(0),new cljs.core.Keyword(null,"down_speed","down_speed",-912046520),200.0,new cljs.core.Keyword(null,"color","color",1011675173),(0),new cljs.core.Keyword(null,"radius","radius",-2073122258),(20),new cljs.core.Keyword(null,"life","life",939004719),(1),new cljs.core.Keyword(null,"x_offset","x_offset",759077110),(quil.core.width.call(null) * quil.core.random.call(null,1.0)),new cljs.core.Keyword(null,"y_offset","y_offset",1125597970),(quil.core.height.call(null) * 0.0)], null);
});
ludum44js.core.spawn_enemies = (function ludum44js$core$spawn_enemies(is_needed,old_enemies){
if(cljs.core.truth_(is_needed)){
return cljs.core.conj.call(null,old_enemies,ludum44js.core.spawn_new_random_enemy.call(null));
} else {
return old_enemies;
}
});
ludum44js.core.check_player_firing = (function ludum44js$core$check_player_firing(player,dt){
if(cljs.core._EQ_.call(null,(0),new cljs.core.Keyword(null,"shot_timer","shot_timer",-1952245610).cljs$core$IFn$_invoke$arity$1(player))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"player","player",-97687400),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"invulnerability_timer","invulnerability_timer",1704656288),new cljs.core.Keyword(null,"life_bid","life_bid",1388750081),new cljs.core.Keyword(null,"projectiles","projectiles",-1303310399),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"radius","radius",-2073122258),new cljs.core.Keyword(null,"life","life",939004719),new cljs.core.Keyword(null,"y_offset","y_offset",1125597970),new cljs.core.Keyword(null,"shot_timer","shot_timer",-1952245610),new cljs.core.Keyword(null,"x_offset","x_offset",759077110),new cljs.core.Keyword(null,"shot_period","shot_period",-503894344),new cljs.core.Keyword(null,"life_in_escrow","life_in_escrow",156125594)],[new cljs.core.Keyword(null,"invlunerability_timer","invlunerability_timer",763944524).cljs$core$IFn$_invoke$arity$1(player),new cljs.core.Keyword(null,"life_bid","life_bid",1388750081).cljs$core$IFn$_invoke$arity$1(player),new cljs.core.Keyword(null,"projectiles","projectiles",-1303310399).cljs$core$IFn$_invoke$arity$1(player),new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(player),new cljs.core.Keyword(null,"radius","radius",-2073122258).cljs$core$IFn$_invoke$arity$1(player),new cljs.core.Keyword(null,"life","life",939004719).cljs$core$IFn$_invoke$arity$1(player),new cljs.core.Keyword(null,"y_offset","y_offset",1125597970).cljs$core$IFn$_invoke$arity$1(player),new cljs.core.Keyword(null,"shot_period","shot_period",-503894344).cljs$core$IFn$_invoke$arity$1(player),new cljs.core.Keyword(null,"x_offset","x_offset",759077110).cljs$core$IFn$_invoke$arity$1(player),new cljs.core.Keyword(null,"shot_period","shot_period",-503894344).cljs$core$IFn$_invoke$arity$1(player),new cljs.core.Keyword(null,"life_in_escrow","life_in_escrow",156125594).cljs$core$IFn$_invoke$arity$1(player)]),new cljs.core.Keyword(null,"shots","shots",-1155689265),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"timer","timer",-1266967739),new cljs.core.Keyword(null,"down_speed","down_speed",-912046520),new cljs.core.Keyword(null,"duration","duration",1444101068),new cljs.core.Keyword(null,"radius","radius",-2073122258),new cljs.core.Keyword(null,"y_offset","y_offset",1125597970),new cljs.core.Keyword(null,"x_offset","x_offset",759077110),new cljs.core.Keyword(null,"right_speed","right_speed",-2039906114),new cljs.core.Keyword(null,"cleanup","cleanup",1045776959)],[(66),(0),(-400),(3),(5),(new cljs.core.Keyword(null,"y_offset","y_offset",1125597970).cljs$core$IFn$_invoke$arity$1(player) - new cljs.core.Keyword(null,"radius","radius",-2073122258).cljs$core$IFn$_invoke$arity$1(player)),new cljs.core.Keyword(null,"x_offset","x_offset",759077110).cljs$core$IFn$_invoke$arity$1(player),((10) * (quil.core.random.call(null,2.0) - (1))),false])], null)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"player","player",-97687400),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"invulnerability_timer","invulnerability_timer",1704656288),new cljs.core.Keyword(null,"life_bid","life_bid",1388750081),new cljs.core.Keyword(null,"projectiles","projectiles",-1303310399),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"radius","radius",-2073122258),new cljs.core.Keyword(null,"life","life",939004719),new cljs.core.Keyword(null,"y_offset","y_offset",1125597970),new cljs.core.Keyword(null,"shot_timer","shot_timer",-1952245610),new cljs.core.Keyword(null,"x_offset","x_offset",759077110),new cljs.core.Keyword(null,"shot_period","shot_period",-503894344),new cljs.core.Keyword(null,"life_in_escrow","life_in_escrow",156125594)],[new cljs.core.Keyword(null,"invulnerability_timer","invulnerability_timer",1704656288).cljs$core$IFn$_invoke$arity$1(player),new cljs.core.Keyword(null,"life_bid","life_bid",1388750081).cljs$core$IFn$_invoke$arity$1(player),new cljs.core.Keyword(null,"projectiles","projectiles",-1303310399).cljs$core$IFn$_invoke$arity$1(player),new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(player),new cljs.core.Keyword(null,"radius","radius",-2073122258).cljs$core$IFn$_invoke$arity$1(player),new cljs.core.Keyword(null,"life","life",939004719).cljs$core$IFn$_invoke$arity$1(player),new cljs.core.Keyword(null,"y_offset","y_offset",1125597970).cljs$core$IFn$_invoke$arity$1(player),ludum44js.core.clamp.call(null,(new cljs.core.Keyword(null,"shot_timer","shot_timer",-1952245610).cljs$core$IFn$_invoke$arity$1(player) - dt),(0),new cljs.core.Keyword(null,"shot_period","shot_period",-503894344).cljs$core$IFn$_invoke$arity$1(player)),new cljs.core.Keyword(null,"x_offset","x_offset",759077110).cljs$core$IFn$_invoke$arity$1(player),new cljs.core.Keyword(null,"shot_period","shot_period",-503894344).cljs$core$IFn$_invoke$arity$1(player),new cljs.core.Keyword(null,"life_in_escrow","life_in_escrow",156125594).cljs$core$IFn$_invoke$arity$1(player)]),new cljs.core.Keyword(null,"shots","shots",-1155689265),cljs.core.PersistentVector.EMPTY], null);
}
});
ludum44js.core.game_update_draw_state = (function ludum44js$core$game_update_draw_state(state,dt){
var old_player = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(state);
var old_enemies = new cljs.core.Keyword(null,"enemies","enemies",2114285722).cljs$core$IFn$_invoke$arity$1(state);
var old_projectiles = new cljs.core.Keyword(null,"projectiles","projectiles",-1303310399).cljs$core$IFn$_invoke$arity$1(state);
var updated_enemies = ludum44js.core.cleanup.call(null,cljs.core.map.call(null,((function (old_player,old_enemies,old_projectiles){
return (function (p1__15673_SHARP_){
return ludum44js.core.update_enemy.call(null,p1__15673_SHARP_,dt,old_projectiles);
});})(old_player,old_enemies,old_projectiles))
,old_enemies));
var updated_projectiles = ludum44js.core.cleanup.call(null,cljs.core.map.call(null,((function (old_player,old_enemies,old_projectiles,updated_enemies){
return (function (p1__15674_SHARP_){
return ludum44js.core.update_projectile.call(null,p1__15674_SHARP_,dt);
});})(old_player,old_enemies,old_projectiles,updated_enemies))
,old_projectiles));
var spawn_needed = (quil.core.frame_count.call(null) > (new cljs.core.Keyword(null,"last_spawn","last_spawn",-1436338511).cljs$core$IFn$_invoke$arity$1(state) + (3)));
var new_enemies = ludum44js.core.spawn_enemies.call(null,(quil.core.frame_count.call(null) > (new cljs.core.Keyword(null,"last_spawn","last_spawn",-1436338511).cljs$core$IFn$_invoke$arity$1(state) + (3))),updated_enemies);
var player_is_hit = ((0) < cljs.core.count.call(null,ludum44js.core.check_collision.call(null,old_player,new_enemies)));
var player_is_firing = ludum44js.core.check_player_firing.call(null,old_player,dt);
var new_player = ((function (old_player,old_enemies,old_projectiles,updated_enemies,updated_projectiles,spawn_needed,new_enemies,player_is_hit,player_is_firing){
return (function (p1__15675_SHARP_){
return ludum44js.core.update_player.call(null,p1__15675_SHARP_,dt,player_is_hit);
});})(old_player,old_enemies,old_projectiles,updated_enemies,updated_projectiles,spawn_needed,new_enemies,player_is_hit,player_is_firing))
.call(null,new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(player_is_firing));
var new_player_projectiles = new cljs.core.Keyword(null,"shots","shots",-1155689265).cljs$core$IFn$_invoke$arity$1(player_is_firing);
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"level_time_elapsed","level_time_elapsed",-737725489),(dt + new cljs.core.Keyword(null,"level_time_elapsed","level_time_elapsed",-737725489).cljs$core$IFn$_invoke$arity$1(state)),new cljs.core.Keyword(null,"last_spawn","last_spawn",-1436338511),((spawn_needed)?quil.core.frame_count.call(null):new cljs.core.Keyword(null,"last_spawn","last_spawn",-1436338511).cljs$core$IFn$_invoke$arity$1(state)),new cljs.core.Keyword(null,"frame_count","frame_count",-122201924),quil.core.frame_count.call(null),new cljs.core.Keyword(null,"player_is_hit?","player_is_hit?",1783145031),player_is_hit,new cljs.core.Keyword(null,"player","player",-97687400),new_player,new cljs.core.Keyword(null,"enemies","enemies",2114285722),new_enemies,new cljs.core.Keyword(null,"projectiles","projectiles",-1303310399),ludum44js.core.cleanup.call(null,cljs.core.into.call(null,updated_projectiles,new_player_projectiles))], null);
});
ludum44js.core.update_state = (function ludum44js$core$update_state(state){
var dt = ((quil.core.frame_count.call(null) - new cljs.core.Keyword(null,"frame_count","frame_count",-122201924).cljs$core$IFn$_invoke$arity$1(state)) / quil.core.target_frame_rate.call(null));
var new_time_elapsed = (dt + new cljs.core.Keyword(null,"level_time_elapsed","level_time_elapsed",-737725489).cljs$core$IFn$_invoke$arity$1(state));
if((new_time_elapsed > (10))){
cljs.core.swap_BANG_.call(null,ludum44js.core.current_scene,((function (dt,new_time_elapsed){
return (function (old){
return new cljs.core.Keyword(null,"INTERSTITIAL","INTERSTITIAL",137061923);
});})(dt,new_time_elapsed))
);
} else {
cljs.core.println.call(null,"Time elapsed",new_time_elapsed);
}

var G__15676 = cljs.core.deref.call(null,ludum44js.core.current_scene);
var G__15676__$1 = (((G__15676 instanceof cljs.core.Keyword))?G__15676.fqn:null);
switch (G__15676__$1) {
case "GAME":
return ludum44js.core.game_update_draw_state.call(null,state,dt);

break;
case "INTERSTITIAL":
return cljs.core.List.EMPTY;

break;
default:
return state;

}
});
ludum44js.core.draw_player = (function ludum44js$core$draw_player(player){
quil.core.fill.call(null,(0),(255),((255) * (1.0 - new cljs.core.Keyword(null,"invulnerability_timer","invulnerability_timer",1704656288).cljs$core$IFn$_invoke$arity$1(player))));

var x = new cljs.core.Keyword(null,"x_offset","x_offset",759077110).cljs$core$IFn$_invoke$arity$1(player);
var y = new cljs.core.Keyword(null,"y_offset","y_offset",1125597970).cljs$core$IFn$_invoke$arity$1(player);
var life = new cljs.core.Keyword(null,"life","life",939004719).cljs$core$IFn$_invoke$arity$1(player);
var invuln = new cljs.core.Keyword(null,"invulnerability_timer","invulnerability_timer",1704656288).cljs$core$IFn$_invoke$arity$1(player);
var shot_timer = new cljs.core.Keyword(null,"shot_timer","shot_timer",-1952245610).cljs$core$IFn$_invoke$arity$1(player);
var r = new cljs.core.Keyword(null,"radius","radius",-2073122258).cljs$core$IFn$_invoke$arity$1(player);
quil.core.text.call(null,["Life: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(life)].join(''),(15),(15));

quil.core.text.call(null,["Invuln: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(invuln)].join(''),(15),(30));

quil.core.text.call(null,["Shot ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shot_timer)].join(''),(15),(60));

var tr__1734__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
quil.core.push_matrix.call(null);

try{quil.core.translate.call(null,tr__1734__auto__);

return quil.core.ellipse.call(null,x,y,r,r);
}finally {quil.core.pop_matrix.call(null);
}});
ludum44js.core.draw_enemy = (function ludum44js$core$draw_enemy(enemy){
quil.core.fill.call(null,new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(enemy),(255),(255));

var y = new cljs.core.Keyword(null,"y_offset","y_offset",1125597970).cljs$core$IFn$_invoke$arity$1(enemy);
var x = new cljs.core.Keyword(null,"x_offset","x_offset",759077110).cljs$core$IFn$_invoke$arity$1(enemy);
var r = new cljs.core.Keyword(null,"radius","radius",-2073122258).cljs$core$IFn$_invoke$arity$1(enemy);
var tr__1734__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
quil.core.push_matrix.call(null);

try{quil.core.translate.call(null,tr__1734__auto__);

quil.core.ellipse.call(null,x,y,r,r);

quil.core.fill.call(null,(0),(0),(0));

return quil.core.text.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"life","life",939004719).cljs$core$IFn$_invoke$arity$1(enemy)),x,y);
}finally {quil.core.pop_matrix.call(null);
}});
ludum44js.core.draw_bullet = (function ludum44js$core$draw_bullet(bullet){
quil.core.fill.call(null,new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(bullet),(255),(255));

var y = new cljs.core.Keyword(null,"y_offset","y_offset",1125597970).cljs$core$IFn$_invoke$arity$1(bullet);
var x = new cljs.core.Keyword(null,"x_offset","x_offset",759077110).cljs$core$IFn$_invoke$arity$1(bullet);
var r = new cljs.core.Keyword(null,"radius","radius",-2073122258).cljs$core$IFn$_invoke$arity$1(bullet);
var tr__1734__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
quil.core.push_matrix.call(null);

try{quil.core.translate.call(null,tr__1734__auto__);

return quil.core.ellipse.call(null,x,y,r,r);
}finally {quil.core.pop_matrix.call(null);
}});
ludum44js.core.draw_state = (function ludum44js$core$draw_state(state){
var G__15678 = cljs.core.deref.call(null,ludum44js.core.current_scene);
var G__15678__$1 = (((G__15678 instanceof cljs.core.Keyword))?G__15678.fqn:null);
switch (G__15678__$1) {
case "GAME":
return ludum44js.core.draw_game_state.call(null,state);

break;
case "INTERSTITIAL":
return ludum44js.core.draw_interstitial_state.call(null,state);

break;
default:
return state;

}
});
ludum44js.core.draw_game_state = (function ludum44js$core$draw_game_state(state){
if(cljs.core._EQ_.call(null,true,new cljs.core.Keyword(null,"player_is_hit?","player_is_hit?",1783145031).cljs$core$IFn$_invoke$arity$1(state))){
quil.core.background.call(null,(0));
} else {
quil.core.background.call(null,(250));
}

var player = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(state);
var enemies = new cljs.core.Keyword(null,"enemies","enemies",2114285722).cljs$core$IFn$_invoke$arity$1(state);
var projectiles = new cljs.core.Keyword(null,"projectiles","projectiles",-1303310399).cljs$core$IFn$_invoke$arity$1(state);
quil.core.text.call(null,["Bullets: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,projectiles))].join(''),(15),(45));

ludum44js.core.draw_player.call(null,player);

var seq__15680_15688 = cljs.core.seq.call(null,enemies);
var chunk__15681_15689 = null;
var count__15682_15690 = (0);
var i__15683_15691 = (0);
while(true){
if((i__15683_15691 < count__15682_15690)){
var enemy_15692 = cljs.core._nth.call(null,chunk__15681_15689,i__15683_15691);
ludum44js.core.draw_enemy.call(null,enemy_15692);


var G__15693 = seq__15680_15688;
var G__15694 = chunk__15681_15689;
var G__15695 = count__15682_15690;
var G__15696 = (i__15683_15691 + (1));
seq__15680_15688 = G__15693;
chunk__15681_15689 = G__15694;
count__15682_15690 = G__15695;
i__15683_15691 = G__15696;
continue;
} else {
var temp__5457__auto___15697 = cljs.core.seq.call(null,seq__15680_15688);
if(temp__5457__auto___15697){
var seq__15680_15698__$1 = temp__5457__auto___15697;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15680_15698__$1)){
var c__4550__auto___15699 = cljs.core.chunk_first.call(null,seq__15680_15698__$1);
var G__15700 = cljs.core.chunk_rest.call(null,seq__15680_15698__$1);
var G__15701 = c__4550__auto___15699;
var G__15702 = cljs.core.count.call(null,c__4550__auto___15699);
var G__15703 = (0);
seq__15680_15688 = G__15700;
chunk__15681_15689 = G__15701;
count__15682_15690 = G__15702;
i__15683_15691 = G__15703;
continue;
} else {
var enemy_15704 = cljs.core.first.call(null,seq__15680_15698__$1);
ludum44js.core.draw_enemy.call(null,enemy_15704);


var G__15705 = cljs.core.next.call(null,seq__15680_15698__$1);
var G__15706 = null;
var G__15707 = (0);
var G__15708 = (0);
seq__15680_15688 = G__15705;
chunk__15681_15689 = G__15706;
count__15682_15690 = G__15707;
i__15683_15691 = G__15708;
continue;
}
} else {
}
}
break;
}

var seq__15684 = cljs.core.seq.call(null,projectiles);
var chunk__15685 = null;
var count__15686 = (0);
var i__15687 = (0);
while(true){
if((i__15687 < count__15686)){
var bullet = cljs.core._nth.call(null,chunk__15685,i__15687);
ludum44js.core.draw_bullet.call(null,bullet);


var G__15709 = seq__15684;
var G__15710 = chunk__15685;
var G__15711 = count__15686;
var G__15712 = (i__15687 + (1));
seq__15684 = G__15709;
chunk__15685 = G__15710;
count__15686 = G__15711;
i__15687 = G__15712;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__15684);
if(temp__5457__auto__){
var seq__15684__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15684__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__15684__$1);
var G__15713 = cljs.core.chunk_rest.call(null,seq__15684__$1);
var G__15714 = c__4550__auto__;
var G__15715 = cljs.core.count.call(null,c__4550__auto__);
var G__15716 = (0);
seq__15684 = G__15713;
chunk__15685 = G__15714;
count__15686 = G__15715;
i__15687 = G__15716;
continue;
} else {
var bullet = cljs.core.first.call(null,seq__15684__$1);
ludum44js.core.draw_bullet.call(null,bullet);


var G__15717 = cljs.core.next.call(null,seq__15684__$1);
var G__15718 = null;
var G__15719 = (0);
var G__15720 = (0);
seq__15684 = G__15717;
chunk__15685 = G__15718;
count__15686 = G__15719;
i__15687 = G__15720;
continue;
}
} else {
return null;
}
}
break;
}
});
ludum44js.core.draw_interstitial_state = (function ludum44js$core$draw_interstitial_state(state){
quil.core.background.call(null,(0));

quil.core.fill.call(null,(0),(0),(255));

return quil.core.text.call(null,"Level Complete!",(100),(100));
});
ludum44js.core.run_sketch = (function ludum44js$core$run_sketch(){
ludum44js.core.ludum44js = (function ludum44js$core$run_sketch_$_ludum44js(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"ludum44js",new cljs.core.Keyword(null,"mouse-clicked","mouse-clicked",-199339421),((cljs.core.fn_QMARK_.call(null,ludum44js.core.do_circle))?(function() { 
var G__15721__delegate = function (args){
return cljs.core.apply.call(null,ludum44js.core.do_circle,args);
};
var G__15721 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15722__i = 0, G__15722__a = new Array(arguments.length -  0);
while (G__15722__i < G__15722__a.length) {G__15722__a[G__15722__i] = arguments[G__15722__i + 0]; ++G__15722__i;}
  args = new cljs.core.IndexedSeq(G__15722__a,0,null);
} 
return G__15721__delegate.call(this,args);};
G__15721.cljs$lang$maxFixedArity = 0;
G__15721.cljs$lang$applyTo = (function (arglist__15723){
var args = cljs.core.seq(arglist__15723);
return G__15721__delegate(args);
});
G__15721.cljs$core$IFn$_invoke$arity$variadic = G__15721__delegate;
return G__15721;
})()
:ludum44js.core.do_circle),new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,ludum44js.core.update_state))?(function() { 
var G__15724__delegate = function (args){
return cljs.core.apply.call(null,ludum44js.core.update_state,args);
};
var G__15724 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15725__i = 0, G__15725__a = new Array(arguments.length -  0);
while (G__15725__i < G__15725__a.length) {G__15725__a[G__15725__i] = arguments[G__15725__i + 0]; ++G__15725__i;}
  args = new cljs.core.IndexedSeq(G__15725__a,0,null);
} 
return G__15724__delegate.call(this,args);};
G__15724.cljs$lang$maxFixedArity = 0;
G__15724.cljs$lang$applyTo = (function (arglist__15726){
var args = cljs.core.seq(arglist__15726);
return G__15724__delegate(args);
});
G__15724.cljs$core$IFn$_invoke$arity$variadic = G__15724__delegate;
return G__15724;
})()
:ludum44js.core.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(500),(500)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,ludum44js.core.setup))?(function() { 
var G__15727__delegate = function (args){
return cljs.core.apply.call(null,ludum44js.core.setup,args);
};
var G__15727 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15728__i = 0, G__15728__a = new Array(arguments.length -  0);
while (G__15728__i < G__15728__a.length) {G__15728__a[G__15728__i] = arguments[G__15728__i + 0]; ++G__15728__i;}
  args = new cljs.core.IndexedSeq(G__15728__a,0,null);
} 
return G__15727__delegate.call(this,args);};
G__15727.cljs$lang$maxFixedArity = 0;
G__15727.cljs$lang$applyTo = (function (arglist__15729){
var args = cljs.core.seq(arglist__15729);
return G__15727__delegate(args);
});
G__15727.cljs$core$IFn$_invoke$arity$variadic = G__15727__delegate;
return G__15727;
})()
:ludum44js.core.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,ludum44js.core.draw_state))?(function() { 
var G__15730__delegate = function (args){
return cljs.core.apply.call(null,ludum44js.core.draw_state,args);
};
var G__15730 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15731__i = 0, G__15731__a = new Array(arguments.length -  0);
while (G__15731__i < G__15731__a.length) {G__15731__a[G__15731__i] = arguments[G__15731__i + 0]; ++G__15731__i;}
  args = new cljs.core.IndexedSeq(G__15731__a,0,null);
} 
return G__15730__delegate.call(this,args);};
G__15730.cljs$lang$maxFixedArity = 0;
G__15730.cljs$lang$applyTo = (function (arglist__15732){
var args = cljs.core.seq(arglist__15732);
return G__15730__delegate(args);
});
G__15730.cljs$core$IFn$_invoke$arity$variadic = G__15730__delegate;
return G__15730;
})()
:ludum44js.core.draw_state));
});
goog.exportSymbol('ludum44js.core.ludum44js', ludum44js.core.ludum44js);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__1332__1333__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__1332__1333__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),ludum44js.core.ludum44js,new cljs.core.Keyword(null,"host-id","host-id",742376279),"ludum44js"], null));
}
});
goog.exportSymbol('ludum44js.core.run_sketch', ludum44js.core.run_sketch);

//# sourceMappingURL=core.js.map
