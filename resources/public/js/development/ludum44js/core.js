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
ludum44js.core.motion_sensitivity = 10.0;
ludum44js.core.current_scene = cljs.core.atom.call(null,new cljs.core.Keyword(null,"GAME","GAME",-1201089127));
ludum44js.core.current_level = cljs.core.atom.call(null,(1));
ludum44js.core.prior_bet_bid = cljs.core.atom.call(null,(0));
ludum44js.core.prior_bet_rate = cljs.core.atom.call(null,(0));
ludum44js.core.prior_balance = cljs.core.atom.call(null,(10));
ludum44js.core.current_bet_bid = cljs.core.atom.call(null,(5));
ludum44js.core.current_bet_rate = cljs.core.atom.call(null,(5));
ludum44js.core.current_balance = cljs.core.atom.call(null,(10));
ludum44js.core.load_image = (function ludum44js$core$load_image(image){
var path = ["/scripts/public/",cljs.core.name.call(null,image),".png"].join('');
return quil.core.load_image.call(null,path);
});
ludum44js.core.draw_image = (function ludum44js$core$draw_image(state,k,p__23693){
var vec__23694 = p__23693;
var x = cljs.core.nth.call(null,vec__23694,(0),null);
var y = cljs.core.nth.call(null,vec__23694,(1),null);
return quil.core.image.call(null,cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"images","images",1757475080),k], null)),x,y);
});
ludum44js.core.images = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"test","test",577538877)], null);
ludum44js.core.ui_extents = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bg","bg",-206688421),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(800),(600)], null)], null);
ludum44js.core.setup = (function ludum44js$core$setup(){
ludum44js.core.kill_line = (1.25 * quil.core.height.call(null));

quil.core.frame_rate.call(null,(30));

quil.core.color_mode.call(null,new cljs.core.Keyword(null,"hsb","hsb",-753472031));

return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"images","images",1757475080),cljs.core.zipmap.call(null,ludum44js.core.images,cljs.core.map.call(null,ludum44js.core.load_image,ludum44js.core.images)),new cljs.core.Keyword(null,"last_spawn","last_spawn",-1436338511),(0),new cljs.core.Keyword(null,"frame_count","frame_count",-122201924),(0),new cljs.core.Keyword(null,"level_time_elapsed","level_time_elapsed",-737725489),(0),new cljs.core.Keyword(null,"player","player",-97687400),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"invulnerability_timer","invulnerability_timer",1704656288),new cljs.core.Keyword(null,"upgrades","upgrades",306367012),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"radius","radius",-2073122258),new cljs.core.Keyword(null,"life","life",939004719),new cljs.core.Keyword(null,"y_offset","y_offset",1125597970),new cljs.core.Keyword(null,"shot_timer","shot_timer",-1952245610),new cljs.core.Keyword(null,"x_offset","x_offset",759077110),new cljs.core.Keyword(null,"shot_period","shot_period",-503894344)],[(0),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"fire_rate","fire_rate",324969557),1.0,new cljs.core.Keyword(null,"fire_spread","fire_spread",1695562775),1.0,new cljs.core.Keyword(null,"vessel_size","vessel_size",1804918021),1.0,new cljs.core.Keyword(null,"armor","armor",-829575337),1.0,new cljs.core.Keyword(null,"bullet_size","bullet_size",-1738026655),1.0,new cljs.core.Keyword(null,"bullet_speed","bullet_speed",138403856),1.5], null),(0),(50),(10),(quil.core.height.call(null) * 0.9),0.5,(100),0.5]),new cljs.core.Keyword(null,"enemies","enemies",2114285722),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"projectiles","projectiles",-1303310399),cljs.core.PersistentVector.EMPTY], null);
});
ludum44js.core.update_enemy = (function ludum44js$core$update_enemy(enemy,dt,projectiles){
var timer = (dt + new cljs.core.Keyword(null,"timer","timer",-1266967739).cljs$core$IFn$_invoke$arity$1(enemy));
var was_hit = cljs.core.count.call(null,ludum44js.core.check_collision.call(null,enemy,projectiles));
if(((0) < was_hit)){
cljs.core.println.call(null,"I WAS HIT",was_hit);
} else {
}

return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"timer","timer",-1266967739),new cljs.core.Keyword(null,"down_speed","down_speed",-912046520),new cljs.core.Keyword(null,"radius","radius",-2073122258),new cljs.core.Keyword(null,"life","life",939004719),new cljs.core.Keyword(null,"y_offset","y_offset",1125597970),new cljs.core.Keyword(null,"x_offset","x_offset",759077110),new cljs.core.Keyword(null,"right_speed","right_speed",-2039906114),new cljs.core.Keyword(null,"cleanup","cleanup",1045776959)],[cljs.core.mod.call(null,(new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(enemy) + 0.7),(255)),timer,new cljs.core.Keyword(null,"down_speed","down_speed",-912046520).cljs$core$IFn$_invoke$arity$1(enemy),new cljs.core.Keyword(null,"radius","radius",-2073122258).cljs$core$IFn$_invoke$arity$1(enemy),((((0) < was_hit))?(new cljs.core.Keyword(null,"life","life",939004719).cljs$core$IFn$_invoke$arity$1(enemy) - was_hit):new cljs.core.Keyword(null,"life","life",939004719).cljs$core$IFn$_invoke$arity$1(enemy)),(new cljs.core.Keyword(null,"y_offset","y_offset",1125597970).cljs$core$IFn$_invoke$arity$1(enemy) + (dt * new cljs.core.Keyword(null,"down_speed","down_speed",-912046520).cljs$core$IFn$_invoke$arity$1(enemy))),(new cljs.core.Keyword(null,"x_offset","x_offset",759077110).cljs$core$IFn$_invoke$arity$1(enemy) + (dt * new cljs.core.Keyword(null,"right_speed","right_speed",-2039906114).cljs$core$IFn$_invoke$arity$1(enemy))),new cljs.core.Keyword(null,"right_speed","right_speed",-2039906114).cljs$core$IFn$_invoke$arity$1(enemy),(function (){var or__4131__auto__ = (new cljs.core.Keyword(null,"x_offset","x_offset",759077110).cljs$core$IFn$_invoke$arity$1(enemy) < ludum44js.core._kill_line);
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
})()]);
});
ludum44js.core.update_projectile = (function ludum44js$core$update_projectile(projectile,dt){
var timer = (dt + new cljs.core.Keyword(null,"timer","timer",-1266967739).cljs$core$IFn$_invoke$arity$1(projectile));
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"timer","timer",-1266967739),new cljs.core.Keyword(null,"down_speed","down_speed",-912046520),new cljs.core.Keyword(null,"duration","duration",1444101068),new cljs.core.Keyword(null,"radius","radius",-2073122258),new cljs.core.Keyword(null,"y_offset","y_offset",1125597970),new cljs.core.Keyword(null,"x_offset","x_offset",759077110),new cljs.core.Keyword(null,"right_speed","right_speed",-2039906114),new cljs.core.Keyword(null,"cleanup","cleanup",1045776959)],[cljs.core.mod.call(null,(new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(projectile) + 0.7),(255)),timer,new cljs.core.Keyword(null,"down_speed","down_speed",-912046520).cljs$core$IFn$_invoke$arity$1(projectile),new cljs.core.Keyword(null,"duration","duration",1444101068).cljs$core$IFn$_invoke$arity$1(projectile),new cljs.core.Keyword(null,"radius","radius",-2073122258).cljs$core$IFn$_invoke$arity$1(projectile),(new cljs.core.Keyword(null,"y_offset","y_offset",1125597970).cljs$core$IFn$_invoke$arity$1(projectile) + (dt * new cljs.core.Keyword(null,"down_speed","down_speed",-912046520).cljs$core$IFn$_invoke$arity$1(projectile))),(new cljs.core.Keyword(null,"x_offset","x_offset",759077110).cljs$core$IFn$_invoke$arity$1(projectile) + (dt * new cljs.core.Keyword(null,"right_speed","right_speed",-2039906114).cljs$core$IFn$_invoke$arity$1(projectile))),new cljs.core.Keyword(null,"right_speed","right_speed",-2039906114).cljs$core$IFn$_invoke$arity$1(projectile),(((new cljs.core.Keyword(null,"y_offset","y_offset",1125597970).cljs$core$IFn$_invoke$arity$1(projectile) > quil.core.height.call(null))) || ((new cljs.core.Keyword(null,"y_offset","y_offset",1125597970).cljs$core$IFn$_invoke$arity$1(projectile) < (0))) || ((new cljs.core.Keyword(null,"x_offset","x_offset",759077110).cljs$core$IFn$_invoke$arity$1(projectile) > quil.core.width.call(null))) || ((new cljs.core.Keyword(null,"x_offset","x_offset",759077110).cljs$core$IFn$_invoke$arity$1(projectile) < (0))) || (((((0) < new cljs.core.Keyword(null,"duration","duration",1444101068).cljs$core$IFn$_invoke$arity$1(projectile))) && ((timer > new cljs.core.Keyword(null,"duration","duration",1444101068).cljs$core$IFn$_invoke$arity$1(projectile))))))]);
});
ludum44js.core.update_player = (function ludum44js$core$update_player(player,dt,player_is_hit){
var took_damage = ((((0) < new cljs.core.Keyword(null,"invulnerability_timer","invulnerability_timer",1704656288).cljs$core$IFn$_invoke$arity$1(player)))?false:player_is_hit);
var inv = (cljs.core.truth_(took_damage)?(1.0 * new cljs.core.Keyword(null,"armor","armor",-829575337).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"upgrades","upgrades",306367012).cljs$core$IFn$_invoke$arity$1(player))):new cljs.core.Keyword(null,"invulnerability_timer","invulnerability_timer",1704656288).cljs$core$IFn$_invoke$arity$1(player));
if(cljs.core.truth_(quil.core.key_pressed_QMARK_.call(null))){
var dkey = quil.core.raw_key.call(null);
var G__23697 = dkey;
switch (G__23697) {
case "d":
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"invulnerability_timer","invulnerability_timer",1704656288),new cljs.core.Keyword(null,"upgrades","upgrades",306367012),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"radius","radius",-2073122258),new cljs.core.Keyword(null,"life","life",939004719),new cljs.core.Keyword(null,"y_offset","y_offset",1125597970),new cljs.core.Keyword(null,"shot_timer","shot_timer",-1952245610),new cljs.core.Keyword(null,"x_offset","x_offset",759077110),new cljs.core.Keyword(null,"shot_period","shot_period",-503894344)],[ludum44js.core.clamp.call(null,(inv - dt),(0),(100)),new cljs.core.Keyword(null,"upgrades","upgrades",306367012).cljs$core$IFn$_invoke$arity$1(player),cljs.core.mod.call(null,(new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(player) + 0.7),(255)),new cljs.core.Keyword(null,"radius","radius",-2073122258).cljs$core$IFn$_invoke$arity$1(player),(cljs.core.truth_(took_damage)?(new cljs.core.Keyword(null,"life","life",939004719).cljs$core$IFn$_invoke$arity$1(player) - (1)):new cljs.core.Keyword(null,"life","life",939004719).cljs$core$IFn$_invoke$arity$1(player)),new cljs.core.Keyword(null,"y_offset","y_offset",1125597970).cljs$core$IFn$_invoke$arity$1(player),new cljs.core.Keyword(null,"shot_timer","shot_timer",-1952245610).cljs$core$IFn$_invoke$arity$1(player),ludum44js.core.clamp.call(null,(new cljs.core.Keyword(null,"x_offset","x_offset",759077110).cljs$core$IFn$_invoke$arity$1(player) + ludum44js.core.motion_sensitivity),(0),quil.core.width.call(null)),new cljs.core.Keyword(null,"shot_period","shot_period",-503894344).cljs$core$IFn$_invoke$arity$1(player)]);

break;
case "a":
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"invulnerability_timer","invulnerability_timer",1704656288),new cljs.core.Keyword(null,"upgrades","upgrades",306367012),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"radius","radius",-2073122258),new cljs.core.Keyword(null,"life","life",939004719),new cljs.core.Keyword(null,"y_offset","y_offset",1125597970),new cljs.core.Keyword(null,"shot_timer","shot_timer",-1952245610),new cljs.core.Keyword(null,"x_offset","x_offset",759077110),new cljs.core.Keyword(null,"shot_period","shot_period",-503894344)],[ludum44js.core.clamp.call(null,(inv - dt),(0),(100)),new cljs.core.Keyword(null,"upgrades","upgrades",306367012).cljs$core$IFn$_invoke$arity$1(player),cljs.core.mod.call(null,(new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(player) + 0.7),(255)),new cljs.core.Keyword(null,"radius","radius",-2073122258).cljs$core$IFn$_invoke$arity$1(player),(cljs.core.truth_(took_damage)?(new cljs.core.Keyword(null,"life","life",939004719).cljs$core$IFn$_invoke$arity$1(player) - (1)):new cljs.core.Keyword(null,"life","life",939004719).cljs$core$IFn$_invoke$arity$1(player)),new cljs.core.Keyword(null,"y_offset","y_offset",1125597970).cljs$core$IFn$_invoke$arity$1(player),new cljs.core.Keyword(null,"shot_timer","shot_timer",-1952245610).cljs$core$IFn$_invoke$arity$1(player),ludum44js.core.clamp.call(null,(new cljs.core.Keyword(null,"x_offset","x_offset",759077110).cljs$core$IFn$_invoke$arity$1(player) - ludum44js.core.motion_sensitivity),(0),quil.core.width.call(null)),new cljs.core.Keyword(null,"shot_period","shot_period",-503894344).cljs$core$IFn$_invoke$arity$1(player)]);

break;
case "s":
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"invulnerability_timer","invulnerability_timer",1704656288),new cljs.core.Keyword(null,"upgrades","upgrades",306367012),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"radius","radius",-2073122258),new cljs.core.Keyword(null,"life","life",939004719),new cljs.core.Keyword(null,"y_offset","y_offset",1125597970),new cljs.core.Keyword(null,"shot_timer","shot_timer",-1952245610),new cljs.core.Keyword(null,"x_offset","x_offset",759077110),new cljs.core.Keyword(null,"shot_period","shot_period",-503894344)],[ludum44js.core.clamp.call(null,(inv - dt),(0),(100)),new cljs.core.Keyword(null,"upgrades","upgrades",306367012).cljs$core$IFn$_invoke$arity$1(player),cljs.core.mod.call(null,(new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(player) + 0.7),(255)),new cljs.core.Keyword(null,"radius","radius",-2073122258).cljs$core$IFn$_invoke$arity$1(player),(cljs.core.truth_(took_damage)?(new cljs.core.Keyword(null,"life","life",939004719).cljs$core$IFn$_invoke$arity$1(player) - (1)):new cljs.core.Keyword(null,"life","life",939004719).cljs$core$IFn$_invoke$arity$1(player)),ludum44js.core.clamp.call(null,(new cljs.core.Keyword(null,"y_offset","y_offset",1125597970).cljs$core$IFn$_invoke$arity$1(player) + ludum44js.core.motion_sensitivity),(0),quil.core.height.call(null)),new cljs.core.Keyword(null,"shot_timer","shot_timer",-1952245610).cljs$core$IFn$_invoke$arity$1(player),new cljs.core.Keyword(null,"x_offset","x_offset",759077110).cljs$core$IFn$_invoke$arity$1(player),new cljs.core.Keyword(null,"shot_period","shot_period",-503894344).cljs$core$IFn$_invoke$arity$1(player)]);

break;
case "w":
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"invulnerability_timer","invulnerability_timer",1704656288),new cljs.core.Keyword(null,"upgrades","upgrades",306367012),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"radius","radius",-2073122258),new cljs.core.Keyword(null,"life","life",939004719),new cljs.core.Keyword(null,"y_offset","y_offset",1125597970),new cljs.core.Keyword(null,"shot_timer","shot_timer",-1952245610),new cljs.core.Keyword(null,"x_offset","x_offset",759077110),new cljs.core.Keyword(null,"shot_period","shot_period",-503894344)],[ludum44js.core.clamp.call(null,(inv - dt),(0),(100)),new cljs.core.Keyword(null,"upgrades","upgrades",306367012).cljs$core$IFn$_invoke$arity$1(player),cljs.core.mod.call(null,(new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(player) + 0.7),(255)),new cljs.core.Keyword(null,"radius","radius",-2073122258).cljs$core$IFn$_invoke$arity$1(player),(cljs.core.truth_(took_damage)?(new cljs.core.Keyword(null,"life","life",939004719).cljs$core$IFn$_invoke$arity$1(player) - (1)):new cljs.core.Keyword(null,"life","life",939004719).cljs$core$IFn$_invoke$arity$1(player)),ludum44js.core.clamp.call(null,(new cljs.core.Keyword(null,"y_offset","y_offset",1125597970).cljs$core$IFn$_invoke$arity$1(player) - ludum44js.core.motion_sensitivity),(0),quil.core.height.call(null)),new cljs.core.Keyword(null,"shot_timer","shot_timer",-1952245610).cljs$core$IFn$_invoke$arity$1(player),new cljs.core.Keyword(null,"x_offset","x_offset",759077110).cljs$core$IFn$_invoke$arity$1(player),new cljs.core.Keyword(null,"shot_period","shot_period",-503894344).cljs$core$IFn$_invoke$arity$1(player)]);

break;
default:
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"invulnerability_timer","invulnerability_timer",1704656288),new cljs.core.Keyword(null,"upgrades","upgrades",306367012),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"radius","radius",-2073122258),new cljs.core.Keyword(null,"life","life",939004719),new cljs.core.Keyword(null,"y_offset","y_offset",1125597970),new cljs.core.Keyword(null,"shot_timer","shot_timer",-1952245610),new cljs.core.Keyword(null,"x_offset","x_offset",759077110),new cljs.core.Keyword(null,"shot_period","shot_period",-503894344)],[ludum44js.core.clamp.call(null,(inv - dt),(0),(100)),new cljs.core.Keyword(null,"upgrades","upgrades",306367012).cljs$core$IFn$_invoke$arity$1(player),cljs.core.mod.call(null,(new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(player) + 0.7),(255)),new cljs.core.Keyword(null,"radius","radius",-2073122258).cljs$core$IFn$_invoke$arity$1(player),(cljs.core.truth_(took_damage)?(new cljs.core.Keyword(null,"life","life",939004719).cljs$core$IFn$_invoke$arity$1(player) - (1)):new cljs.core.Keyword(null,"life","life",939004719).cljs$core$IFn$_invoke$arity$1(player)),new cljs.core.Keyword(null,"y_offset","y_offset",1125597970).cljs$core$IFn$_invoke$arity$1(player),new cljs.core.Keyword(null,"shot_timer","shot_timer",-1952245610).cljs$core$IFn$_invoke$arity$1(player),new cljs.core.Keyword(null,"x_offset","x_offset",759077110).cljs$core$IFn$_invoke$arity$1(player),new cljs.core.Keyword(null,"shot_period","shot_period",-503894344).cljs$core$IFn$_invoke$arity$1(player)]);

}
} else {
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"invulnerability_timer","invulnerability_timer",1704656288),new cljs.core.Keyword(null,"upgrades","upgrades",306367012),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"radius","radius",-2073122258),new cljs.core.Keyword(null,"life","life",939004719),new cljs.core.Keyword(null,"y_offset","y_offset",1125597970),new cljs.core.Keyword(null,"shot_timer","shot_timer",-1952245610),new cljs.core.Keyword(null,"x_offset","x_offset",759077110),new cljs.core.Keyword(null,"shot_period","shot_period",-503894344)],[ludum44js.core.clamp.call(null,(inv - dt),(0),(100)),new cljs.core.Keyword(null,"upgrades","upgrades",306367012).cljs$core$IFn$_invoke$arity$1(player),cljs.core.mod.call(null,(new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(player) + 0.7),(255)),new cljs.core.Keyword(null,"radius","radius",-2073122258).cljs$core$IFn$_invoke$arity$1(player),(cljs.core.truth_(took_damage)?(new cljs.core.Keyword(null,"life","life",939004719).cljs$core$IFn$_invoke$arity$1(player) - (1)):new cljs.core.Keyword(null,"life","life",939004719).cljs$core$IFn$_invoke$arity$1(player)),new cljs.core.Keyword(null,"y_offset","y_offset",1125597970).cljs$core$IFn$_invoke$arity$1(player),new cljs.core.Keyword(null,"shot_timer","shot_timer",-1952245610).cljs$core$IFn$_invoke$arity$1(player),new cljs.core.Keyword(null,"x_offset","x_offset",759077110).cljs$core$IFn$_invoke$arity$1(player),new cljs.core.Keyword(null,"shot_period","shot_period",-503894344).cljs$core$IFn$_invoke$arity$1(player)]);
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
return cljs.core.filterv.call(null,(function (p1__23699_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"cleanup","cleanup",1045776959).cljs$core$IFn$_invoke$arity$1(p1__23699_SHARP_));
}),col);
});
ludum44js.core.spawn_new_random_enemy = (function ludum44js$core$spawn_new_random_enemy(){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"timer","timer",-1266967739),new cljs.core.Keyword(null,"down_speed","down_speed",-912046520),new cljs.core.Keyword(null,"radius","radius",-2073122258),new cljs.core.Keyword(null,"life","life",939004719),new cljs.core.Keyword(null,"y_offset","y_offset",1125597970),new cljs.core.Keyword(null,"x_offset","x_offset",759077110),new cljs.core.Keyword(null,"right_speed","right_speed",-2039906114),new cljs.core.Keyword(null,"cleanup","cleanup",1045776959)],[(0),(0),200.0,(20),(1),(quil.core.height.call(null) * (0)),(quil.core.width.call(null) * quil.core.random.call(null,1.0)),(0),false]);
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
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"player","player",-97687400),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"invulnerability_timer","invulnerability_timer",1704656288),new cljs.core.Keyword(null,"projectiles","projectiles",-1303310399),new cljs.core.Keyword(null,"upgrades","upgrades",306367012),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"radius","radius",-2073122258),new cljs.core.Keyword(null,"life","life",939004719),new cljs.core.Keyword(null,"y_offset","y_offset",1125597970),new cljs.core.Keyword(null,"shot_timer","shot_timer",-1952245610),new cljs.core.Keyword(null,"x_offset","x_offset",759077110),new cljs.core.Keyword(null,"shot_period","shot_period",-503894344)],[new cljs.core.Keyword(null,"invulnerability_timer","invulnerability_timer",1704656288).cljs$core$IFn$_invoke$arity$1(player),new cljs.core.Keyword(null,"projectiles","projectiles",-1303310399).cljs$core$IFn$_invoke$arity$1(player),new cljs.core.Keyword(null,"upgrades","upgrades",306367012).cljs$core$IFn$_invoke$arity$1(player),new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(player),new cljs.core.Keyword(null,"radius","radius",-2073122258).cljs$core$IFn$_invoke$arity$1(player),new cljs.core.Keyword(null,"life","life",939004719).cljs$core$IFn$_invoke$arity$1(player),new cljs.core.Keyword(null,"y_offset","y_offset",1125597970).cljs$core$IFn$_invoke$arity$1(player),(new cljs.core.Keyword(null,"shot_period","shot_period",-503894344).cljs$core$IFn$_invoke$arity$1(player) * new cljs.core.Keyword(null,"fire_rate","fire_rate",324969557).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"upgrades","upgrades",306367012).cljs$core$IFn$_invoke$arity$1(player))),new cljs.core.Keyword(null,"x_offset","x_offset",759077110).cljs$core$IFn$_invoke$arity$1(player),new cljs.core.Keyword(null,"shot_period","shot_period",-503894344).cljs$core$IFn$_invoke$arity$1(player)]),new cljs.core.Keyword(null,"shots","shots",-1155689265),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"timer","timer",-1266967739),new cljs.core.Keyword(null,"down_speed","down_speed",-912046520),new cljs.core.Keyword(null,"duration","duration",1444101068),new cljs.core.Keyword(null,"radius","radius",-2073122258),new cljs.core.Keyword(null,"y_offset","y_offset",1125597970),new cljs.core.Keyword(null,"x_offset","x_offset",759077110),new cljs.core.Keyword(null,"right_speed","right_speed",-2039906114),new cljs.core.Keyword(null,"cleanup","cleanup",1045776959)],[(66),(0),((-400) * new cljs.core.Keyword(null,"bullet_speed","bullet_speed",138403856).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"upgrades","upgrades",306367012).cljs$core$IFn$_invoke$arity$1(player))),(3),((5) * new cljs.core.Keyword(null,"bullet_size","bullet_size",-1738026655).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"upgrades","upgrades",306367012).cljs$core$IFn$_invoke$arity$1(player))),(new cljs.core.Keyword(null,"y_offset","y_offset",1125597970).cljs$core$IFn$_invoke$arity$1(player) - new cljs.core.Keyword(null,"radius","radius",-2073122258).cljs$core$IFn$_invoke$arity$1(player)),new cljs.core.Keyword(null,"x_offset","x_offset",759077110).cljs$core$IFn$_invoke$arity$1(player),((((10) * (quil.core.random.call(null,2.0) - (1))) * new cljs.core.Keyword(null,"bullet_speed","bullet_speed",138403856).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"upgrades","upgrades",306367012).cljs$core$IFn$_invoke$arity$1(player))) * new cljs.core.Keyword(null,"fire_spread","fire_spread",1695562775).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"upgrades","upgrades",306367012).cljs$core$IFn$_invoke$arity$1(player))),false])], null)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"player","player",-97687400),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"invulnerability_timer","invulnerability_timer",1704656288),new cljs.core.Keyword(null,"projectiles","projectiles",-1303310399),new cljs.core.Keyword(null,"upgrades","upgrades",306367012),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"radius","radius",-2073122258),new cljs.core.Keyword(null,"life","life",939004719),new cljs.core.Keyword(null,"y_offset","y_offset",1125597970),new cljs.core.Keyword(null,"shot_timer","shot_timer",-1952245610),new cljs.core.Keyword(null,"x_offset","x_offset",759077110),new cljs.core.Keyword(null,"shot_period","shot_period",-503894344)],[new cljs.core.Keyword(null,"invulnerability_timer","invulnerability_timer",1704656288).cljs$core$IFn$_invoke$arity$1(player),new cljs.core.Keyword(null,"projectiles","projectiles",-1303310399).cljs$core$IFn$_invoke$arity$1(player),new cljs.core.Keyword(null,"upgrades","upgrades",306367012).cljs$core$IFn$_invoke$arity$1(player),new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(player),new cljs.core.Keyword(null,"radius","radius",-2073122258).cljs$core$IFn$_invoke$arity$1(player),new cljs.core.Keyword(null,"life","life",939004719).cljs$core$IFn$_invoke$arity$1(player),new cljs.core.Keyword(null,"y_offset","y_offset",1125597970).cljs$core$IFn$_invoke$arity$1(player),ludum44js.core.clamp.call(null,(new cljs.core.Keyword(null,"shot_timer","shot_timer",-1952245610).cljs$core$IFn$_invoke$arity$1(player) - dt),(0),new cljs.core.Keyword(null,"shot_period","shot_period",-503894344).cljs$core$IFn$_invoke$arity$1(player)),new cljs.core.Keyword(null,"x_offset","x_offset",759077110).cljs$core$IFn$_invoke$arity$1(player),new cljs.core.Keyword(null,"shot_period","shot_period",-503894344).cljs$core$IFn$_invoke$arity$1(player)]),new cljs.core.Keyword(null,"shots","shots",-1155689265),cljs.core.PersistentVector.EMPTY], null);
}
});
ludum44js.core.game_update_draw_state = (function ludum44js$core$game_update_draw_state(state,dt){
var old_player = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(state);
var old_enemies = new cljs.core.Keyword(null,"enemies","enemies",2114285722).cljs$core$IFn$_invoke$arity$1(state);
var old_projectiles = new cljs.core.Keyword(null,"projectiles","projectiles",-1303310399).cljs$core$IFn$_invoke$arity$1(state);
var updated_enemies = ludum44js.core.cleanup.call(null,cljs.core.map.call(null,((function (old_player,old_enemies,old_projectiles){
return (function (p1__23700_SHARP_){
return ludum44js.core.update_enemy.call(null,p1__23700_SHARP_,dt,old_projectiles);
});})(old_player,old_enemies,old_projectiles))
,old_enemies));
var updated_projectiles = ludum44js.core.cleanup.call(null,cljs.core.map.call(null,((function (old_player,old_enemies,old_projectiles,updated_enemies){
return (function (p1__23701_SHARP_){
return ludum44js.core.update_projectile.call(null,p1__23701_SHARP_,dt);
});})(old_player,old_enemies,old_projectiles,updated_enemies))
,old_projectiles));
var spawn_needed = (quil.core.frame_count.call(null) > (new cljs.core.Keyword(null,"last_spawn","last_spawn",-1436338511).cljs$core$IFn$_invoke$arity$1(state) + (3)));
var new_enemies = ludum44js.core.spawn_enemies.call(null,(quil.core.frame_count.call(null) > (new cljs.core.Keyword(null,"last_spawn","last_spawn",-1436338511).cljs$core$IFn$_invoke$arity$1(state) + (3))),updated_enemies);
var player_is_hit = ((0) < cljs.core.count.call(null,ludum44js.core.check_collision.call(null,old_player,new_enemies)));
var player_is_firing = ludum44js.core.check_player_firing.call(null,old_player,dt);
var new_player = ((function (old_player,old_enemies,old_projectiles,updated_enemies,updated_projectiles,spawn_needed,new_enemies,player_is_hit,player_is_firing){
return (function (p1__23702_SHARP_){
return ludum44js.core.update_player.call(null,p1__23702_SHARP_,dt,player_is_hit);
});})(old_player,old_enemies,old_projectiles,updated_enemies,updated_projectiles,spawn_needed,new_enemies,player_is_hit,player_is_firing))
.call(null,new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(player_is_firing));
var new_player_projectiles = new cljs.core.Keyword(null,"shots","shots",-1155689265).cljs$core$IFn$_invoke$arity$1(player_is_firing);
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"level_time_elapsed","level_time_elapsed",-737725489),(dt + new cljs.core.Keyword(null,"level_time_elapsed","level_time_elapsed",-737725489).cljs$core$IFn$_invoke$arity$1(state)),new cljs.core.Keyword(null,"last_spawn","last_spawn",-1436338511),((spawn_needed)?quil.core.frame_count.call(null):new cljs.core.Keyword(null,"last_spawn","last_spawn",-1436338511).cljs$core$IFn$_invoke$arity$1(state)),new cljs.core.Keyword(null,"frame_count","frame_count",-122201924),quil.core.frame_count.call(null),new cljs.core.Keyword(null,"player","player",-97687400),new_player,new cljs.core.Keyword(null,"enemies","enemies",2114285722),new_enemies,new cljs.core.Keyword(null,"projectiles","projectiles",-1303310399),ludum44js.core.cleanup.call(null,cljs.core.into.call(null,updated_projectiles,new_player_projectiles)),new cljs.core.Keyword(null,"images","images",1757475080),new cljs.core.Keyword(null,"images","images",1757475080).cljs$core$IFn$_invoke$arity$1(state)], null);
});
ludum44js.core.interstitial_update_draw_state = (function ludum44js$core$interstitial_update_draw_state(state,dt){
cljs.core.println.call(null,"interstitial draw state");

if(cljs.core.truth_(quil.core.key_pressed_QMARK_.call(null))){
var dkey_23704 = quil.core.raw_key.call(null);
var G__23703_23705 = dkey_23704;
switch (G__23703_23705) {
case "a":
cljs.core.println.call(null,"Increasing stakes");

break;
case "d":
cljs.core.println.call(null,"Decreasing stakes");

break;
case "1":
cljs.core.println.call(null,"Buying fire rate");

break;
case "2":
cljs.core.println.call(null,"Buying fire spread");

break;
case "3":
cljs.core.println.call(null,"Buying armor");

break;
case "4":
cljs.core.println.call(null,"Buying bullet size");

break;
case "5":
cljs.core.println.call(null,"Buying bullet speed");

break;
case "6":
cljs.core.println.call(null,"Buying vessel size");

break;
case " ":
cljs.core.println.call(null,"Going to next level");

break;
default:
cljs.core.println.call(null,"*whistle*");

}
} else {
}

return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"level_time_elapsed","level_time_elapsed",-737725489),new cljs.core.Keyword(null,"level_time_elapsed","level_time_elapsed",-737725489).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"last_spawn","last_spawn",-1436338511),new cljs.core.Keyword(null,"last_spawn","last_spawn",-1436338511).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"frame_count","frame_count",-122201924),quil.core.frame_count.call(null),new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"enemies","enemies",2114285722),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"projectiles","projectiles",-1303310399),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"images","images",1757475080),new cljs.core.Keyword(null,"images","images",1757475080).cljs$core$IFn$_invoke$arity$1(state)], null);
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

cljs.core.swap_BANG_.call(null,ludum44js.core.current_level,((function (dt,new_time_elapsed){
return (function (old){
return ((1) + old);
});})(dt,new_time_elapsed))
);
} else {
cljs.core.println.call(null,"Time elapsed",new_time_elapsed);
}

var G__23707 = cljs.core.deref.call(null,ludum44js.core.current_scene);
var G__23707__$1 = (((G__23707 instanceof cljs.core.Keyword))?G__23707.fqn:null);
switch (G__23707__$1) {
case "GAME":
return ludum44js.core.game_update_draw_state.call(null,state,dt);

break;
case "INTERSTITIAL":
return ludum44js.core.interstitial_update_draw_state.call(null,state,dt);

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
var G__23709 = cljs.core.deref.call(null,ludum44js.core.current_scene);
var G__23709__$1 = (((G__23709 instanceof cljs.core.Keyword))?G__23709.fqn:null);
switch (G__23709__$1) {
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
quil.core.background.call(null,(0),(0),(255));

var player = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(state);
var enemies = new cljs.core.Keyword(null,"enemies","enemies",2114285722).cljs$core$IFn$_invoke$arity$1(state);
var projectiles = new cljs.core.Keyword(null,"projectiles","projectiles",-1303310399).cljs$core$IFn$_invoke$arity$1(state);
quil.core.text.call(null,["Bullets: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,projectiles))].join(''),(15),(45));

ludum44js.core.draw_player.call(null,player);

var seq__23711_23719 = cljs.core.seq.call(null,enemies);
var chunk__23712_23720 = null;
var count__23713_23721 = (0);
var i__23714_23722 = (0);
while(true){
if((i__23714_23722 < count__23713_23721)){
var enemy_23723 = cljs.core._nth.call(null,chunk__23712_23720,i__23714_23722);
ludum44js.core.draw_enemy.call(null,enemy_23723);


var G__23724 = seq__23711_23719;
var G__23725 = chunk__23712_23720;
var G__23726 = count__23713_23721;
var G__23727 = (i__23714_23722 + (1));
seq__23711_23719 = G__23724;
chunk__23712_23720 = G__23725;
count__23713_23721 = G__23726;
i__23714_23722 = G__23727;
continue;
} else {
var temp__5457__auto___23728 = cljs.core.seq.call(null,seq__23711_23719);
if(temp__5457__auto___23728){
var seq__23711_23729__$1 = temp__5457__auto___23728;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23711_23729__$1)){
var c__4550__auto___23730 = cljs.core.chunk_first.call(null,seq__23711_23729__$1);
var G__23731 = cljs.core.chunk_rest.call(null,seq__23711_23729__$1);
var G__23732 = c__4550__auto___23730;
var G__23733 = cljs.core.count.call(null,c__4550__auto___23730);
var G__23734 = (0);
seq__23711_23719 = G__23731;
chunk__23712_23720 = G__23732;
count__23713_23721 = G__23733;
i__23714_23722 = G__23734;
continue;
} else {
var enemy_23735 = cljs.core.first.call(null,seq__23711_23729__$1);
ludum44js.core.draw_enemy.call(null,enemy_23735);


var G__23736 = cljs.core.next.call(null,seq__23711_23729__$1);
var G__23737 = null;
var G__23738 = (0);
var G__23739 = (0);
seq__23711_23719 = G__23736;
chunk__23712_23720 = G__23737;
count__23713_23721 = G__23738;
i__23714_23722 = G__23739;
continue;
}
} else {
}
}
break;
}

var seq__23715 = cljs.core.seq.call(null,projectiles);
var chunk__23716 = null;
var count__23717 = (0);
var i__23718 = (0);
while(true){
if((i__23718 < count__23717)){
var bullet = cljs.core._nth.call(null,chunk__23716,i__23718);
ludum44js.core.draw_bullet.call(null,bullet);


var G__23740 = seq__23715;
var G__23741 = chunk__23716;
var G__23742 = count__23717;
var G__23743 = (i__23718 + (1));
seq__23715 = G__23740;
chunk__23716 = G__23741;
count__23717 = G__23742;
i__23718 = G__23743;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__23715);
if(temp__5457__auto__){
var seq__23715__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23715__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__23715__$1);
var G__23744 = cljs.core.chunk_rest.call(null,seq__23715__$1);
var G__23745 = c__4550__auto__;
var G__23746 = cljs.core.count.call(null,c__4550__auto__);
var G__23747 = (0);
seq__23715 = G__23744;
chunk__23716 = G__23745;
count__23717 = G__23746;
i__23718 = G__23747;
continue;
} else {
var bullet = cljs.core.first.call(null,seq__23715__$1);
ludum44js.core.draw_bullet.call(null,bullet);


var G__23748 = cljs.core.next.call(null,seq__23715__$1);
var G__23749 = null;
var G__23750 = (0);
var G__23751 = (0);
seq__23715 = G__23748;
chunk__23716 = G__23749;
count__23717 = G__23750;
i__23718 = G__23751;
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

ludum44js.core.draw_image.call(null,state,new cljs.core.Keyword(null,"test","test",577538877),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null));

ludum44js.core.draw_level_complete.call(null,new cljs.core.Keyword(null,"level","level",1290497552).cljs$core$IFn$_invoke$arity$1(state));

ludum44js.core.draw_bet_dialog.call(null,new cljs.core.Keyword(null,"bet","bet",-674763365).cljs$core$IFn$_invoke$arity$1(state));

ludum44js.core.draw_money_progress.call(null,new cljs.core.Keyword(null,"prior_balance","prior_balance",-1065749218).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"prior_bet","prior_bet",1519906242).cljs$core$IFn$_invoke$arity$1(state));

ludum44js.core.draw_store.call(null,state);

return state;
});
ludum44js.core.draw_level_complete = (function ludum44js$core$draw_level_complete(level){
return quil.core.text.call(null,["Level",cljs.core.str.cljs$core$IFn$_invoke$arity$1((level - (1))),"Complete!"].join(''),(200),(200));
});
ludum44js.core.draw_bet_dialog = (function ludum44js$core$draw_bet_dialog(){
quil.core.text.call(null,"Make Your Bet!",(200),(300));

return quil.core.text.call(null,["\"I can beat the next level with ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((6))," life pips\""].join(''),(200),(330));
});
ludum44js.core.draw_money_progress = (function ludum44js$core$draw_money_progress(){
quil.core.text.call(null,"Bank",(200),(400));

quil.core.text.call(null,"Bid",(230),(400));

quil.core.text.call(null,"Multiplier",(260),(400));

return quil.core.text.call(null,["$$$ = ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((24))," + (",cljs.core.str.cljs$core$IFn$_invoke$arity$1((5))," x 5) = ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((49))].join(''),(170),(425));
});
ludum44js.core.draw_store = (function ludum44js$core$draw_store(){
return null;
});
ludum44js.core.run_sketch = (function ludum44js$core$run_sketch(){
ludum44js.core.ludum44js = (function ludum44js$core$run_sketch_$_ludum44js(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"ludum44js",new cljs.core.Keyword(null,"mouse-clicked","mouse-clicked",-199339421),((cljs.core.fn_QMARK_.call(null,ludum44js.core.do_circle))?(function() { 
var G__23752__delegate = function (args){
return cljs.core.apply.call(null,ludum44js.core.do_circle,args);
};
var G__23752 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23753__i = 0, G__23753__a = new Array(arguments.length -  0);
while (G__23753__i < G__23753__a.length) {G__23753__a[G__23753__i] = arguments[G__23753__i + 0]; ++G__23753__i;}
  args = new cljs.core.IndexedSeq(G__23753__a,0,null);
} 
return G__23752__delegate.call(this,args);};
G__23752.cljs$lang$maxFixedArity = 0;
G__23752.cljs$lang$applyTo = (function (arglist__23754){
var args = cljs.core.seq(arglist__23754);
return G__23752__delegate(args);
});
G__23752.cljs$core$IFn$_invoke$arity$variadic = G__23752__delegate;
return G__23752;
})()
:ludum44js.core.do_circle),new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,ludum44js.core.update_state))?(function() { 
var G__23755__delegate = function (args){
return cljs.core.apply.call(null,ludum44js.core.update_state,args);
};
var G__23755 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23756__i = 0, G__23756__a = new Array(arguments.length -  0);
while (G__23756__i < G__23756__a.length) {G__23756__a[G__23756__i] = arguments[G__23756__i + 0]; ++G__23756__i;}
  args = new cljs.core.IndexedSeq(G__23756__a,0,null);
} 
return G__23755__delegate.call(this,args);};
G__23755.cljs$lang$maxFixedArity = 0;
G__23755.cljs$lang$applyTo = (function (arglist__23757){
var args = cljs.core.seq(arglist__23757);
return G__23755__delegate(args);
});
G__23755.cljs$core$IFn$_invoke$arity$variadic = G__23755__delegate;
return G__23755;
})()
:ludum44js.core.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(600),(800)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,ludum44js.core.setup))?(function() { 
var G__23758__delegate = function (args){
return cljs.core.apply.call(null,ludum44js.core.setup,args);
};
var G__23758 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23759__i = 0, G__23759__a = new Array(arguments.length -  0);
while (G__23759__i < G__23759__a.length) {G__23759__a[G__23759__i] = arguments[G__23759__i + 0]; ++G__23759__i;}
  args = new cljs.core.IndexedSeq(G__23759__a,0,null);
} 
return G__23758__delegate.call(this,args);};
G__23758.cljs$lang$maxFixedArity = 0;
G__23758.cljs$lang$applyTo = (function (arglist__23760){
var args = cljs.core.seq(arglist__23760);
return G__23758__delegate(args);
});
G__23758.cljs$core$IFn$_invoke$arity$variadic = G__23758__delegate;
return G__23758;
})()
:ludum44js.core.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,ludum44js.core.draw_state))?(function() { 
var G__23761__delegate = function (args){
return cljs.core.apply.call(null,ludum44js.core.draw_state,args);
};
var G__23761 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23762__i = 0, G__23762__a = new Array(arguments.length -  0);
while (G__23762__i < G__23762__a.length) {G__23762__a[G__23762__i] = arguments[G__23762__i + 0]; ++G__23762__i;}
  args = new cljs.core.IndexedSeq(G__23762__a,0,null);
} 
return G__23761__delegate.call(this,args);};
G__23761.cljs$lang$maxFixedArity = 0;
G__23761.cljs$lang$applyTo = (function (arglist__23763){
var args = cljs.core.seq(arglist__23763);
return G__23761__delegate(args);
});
G__23761.cljs$core$IFn$_invoke$arity$variadic = G__23761__delegate;
return G__23761;
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
