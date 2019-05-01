// Compiled by ClojureScript 1.10.520 {}
goog.provide('ludum44js.core');
goog.require('cljs.core');
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
var path = [ludum44js.core.path,cljs.core.name.call(null,image),".png"].join('');
cljs.core.println.call(null,"Loading",path);

return quil.core.load_image.call(null,path);
});
ludum44js.core.load_font = (function ludum44js$core$load_font(font){
var path = [ludum44js.core.path,cljs.core.name.call(null,font)].join('');
cljs.core.println.call(null,"Loading",path);

return quil.core.load_font.call(null,path);
});
ludum44js.core.draw_image = (function ludum44js$core$draw_image(state,k,p__17971,w,h){
var vec__17972 = p__17971;
var x = cljs.core.nth.call(null,vec__17972,(0),null);
var y = cljs.core.nth.call(null,vec__17972,(1),null);
if(cljs.core.truth_((function (){var or__4131__auto__ = w;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return h;
}
})())){
cljs.core.println.call(null,"Resizing to ",w,h);

quil.core.resize.call(null,cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"images","images",1757475080),k], null)),w,h);
} else {
}

return quil.core.image.call(null,cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"images","images",1757475080),k], null)),x,y);
});
ludum44js.core.draw_text = (function ludum44js$core$draw_text(state,font,message,p__17975){
var vec__17976 = p__17975;
var x = cljs.core.nth.call(null,vec__17976,(0),null);
var y = cljs.core.nth.call(null,vec__17976,(1),null);
quil.core.text_font.call(null,"Arial",(30));

return quil.core.text.call(null,message,x,y);
});
ludum44js.core.images = new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bg","bg",-206688421),new cljs.core.Keyword(null,"test","test",577538877),"bid0","bid1","bid2","bid3","bid4","bid5","bid6","bid7","bid8","bid9",new cljs.core.Keyword(null,"upgradepip","upgradepip",1065500056),new cljs.core.Keyword(null,"pew","pew",248942754),"baddie1","baddie2","baddie3",new cljs.core.Keyword(null,"player","player",-97687400)], null);
ludum44js.core.fonts = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"earthorbiteracad","earthorbiteracad",29589921)], null);
ludum44js.core.motion_sensitivity = 10.0;
ludum44js.core.current_scene = cljs.core.atom.call(null,new cljs.core.Keyword(null,"GAME","GAME",-1201089127));
ludum44js.core.current_level = cljs.core.atom.call(null,(1));
ludum44js.core.prior_bet_bid = cljs.core.atom.call(null,(0));
ludum44js.core.current_bet_bid = cljs.core.atom.call(null,(5));
ludum44js.core.wallet_balance = cljs.core.atom.call(null,(0));
ludum44js.core.life_for_player = cljs.core.atom.call(null,(10));
ludum44js.core.time_now = cljs.core.atom.call(null,(0));
ludum44js.core.time_of_last_purchase = cljs.core.atom.call(null,(-10));
ludum44js.core.time_of_last_bid_change = cljs.core.atom.call(null,(-10));
ludum44js.core.purchases = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"fire_rate","fire_rate",324969557),(0),new cljs.core.Keyword(null,"fire_spread","fire_spread",1695562775),(0),new cljs.core.Keyword(null,"vessel_size","vessel_size",1804918021),(0),new cljs.core.Keyword(null,"armor","armor",-829575337),(0),new cljs.core.Keyword(null,"bullet_size","bullet_size",-1738026655),(0),new cljs.core.Keyword(null,"bullet_speed","bullet_speed",138403856),(0)], null));
ludum44js.core.reinitialize_player = (function ludum44js$core$reinitialize_player(player){
var new_player = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"invulnerability_timer","invulnerability_timer",1704656288),new cljs.core.Keyword(null,"upgrades","upgrades",306367012),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"saturation","saturation",-14247929),new cljs.core.Keyword(null,"radius","radius",-2073122258),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"life","life",939004719),new cljs.core.Keyword(null,"y_offset","y_offset",1125597970),new cljs.core.Keyword(null,"luminosity","luminosity",-483901643),new cljs.core.Keyword(null,"shot_timer","shot_timer",-1952245610),new cljs.core.Keyword(null,"x_offset","x_offset",759077110),new cljs.core.Keyword(null,"purchases","purchases",-1215855274),new cljs.core.Keyword(null,"shot_period","shot_period",-503894344)],[(0),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"fire_rate","fire_rate",324969557),(1.0 * ((1) / new cljs.core.Keyword(null,"fire_rate","fire_rate",324969557).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ludum44js.core.purchases)))),new cljs.core.Keyword(null,"fire_spread","fire_spread",1695562775),((0.75 * new cljs.core.Keyword(null,"fire_spread","fire_spread",1695562775).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ludum44js.core.purchases))) + 1.0),new cljs.core.Keyword(null,"vessel_size","vessel_size",1804918021),((1.0 / new cljs.core.Keyword(null,"vessel_size","vessel_size",1804918021).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ludum44js.core.purchases))) * 1.0),new cljs.core.Keyword(null,"armor","armor",-829575337),((0.3 * new cljs.core.Keyword(null,"armor","armor",-829575337).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ludum44js.core.purchases))) + 1.0),new cljs.core.Keyword(null,"bullet_size","bullet_size",-1738026655),((0.2 * new cljs.core.Keyword(null,"bullet_size","bullet_size",-1738026655).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ludum44js.core.purchases))) + 1.0),new cljs.core.Keyword(null,"bullet_speed","bullet_speed",138403856),((0.5 * new cljs.core.Keyword(null,"bullet_speed","bullet_speed",138403856).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ludum44js.core.purchases))) + 1.0)], null),(180),(255),(50),((50) * ((1) / (function (){var x__4219__auto__ = (1);
var y__4220__auto__ = new cljs.core.Keyword(null,"vessel_size","vessel_size",1804918021).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ludum44js.core.purchases));
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})())),cljs.core.deref.call(null,ludum44js.core.life_for_player),(quil.core.height.call(null) * 0.9),(255),0.5,(100),cljs.core.deref.call(null,ludum44js.core.purchases),0.5]);
return new_player;
});
ludum44js.core.update_enemy = (function ludum44js$core$update_enemy(enemy,dt,projectiles){
var timer = (dt + new cljs.core.Keyword(null,"timer","timer",-1266967739).cljs$core$IFn$_invoke$arity$1(enemy));
var was_hit = cljs.core.count.call(null,ludum44js.core.check_collision.call(null,enemy,projectiles));
return cljs.core.merge.call(null,enemy,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"cleanup","cleanup",1045776959),(function (){var or__4131__auto__ = (new cljs.core.Keyword(null,"x_offset","x_offset",759077110).cljs$core$IFn$_invoke$arity$1(enemy) < ludum44js.core._kill_line);
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
})(),new cljs.core.Keyword(null,"timer","timer",-1266967739),timer,new cljs.core.Keyword(null,"life","life",939004719),((((0) < was_hit))?(new cljs.core.Keyword(null,"life","life",939004719).cljs$core$IFn$_invoke$arity$1(enemy) - was_hit):new cljs.core.Keyword(null,"life","life",939004719).cljs$core$IFn$_invoke$arity$1(enemy)),new cljs.core.Keyword(null,"y_offset","y_offset",1125597970),(new cljs.core.Keyword(null,"y_offset","y_offset",1125597970).cljs$core$IFn$_invoke$arity$1(enemy) + (dt * new cljs.core.Keyword(null,"down_speed","down_speed",-912046520).cljs$core$IFn$_invoke$arity$1(enemy))),new cljs.core.Keyword(null,"x_offset","x_offset",759077110),(new cljs.core.Keyword(null,"x_offset","x_offset",759077110).cljs$core$IFn$_invoke$arity$1(enemy) + (dt * new cljs.core.Keyword(null,"right_speed","right_speed",-2039906114).cljs$core$IFn$_invoke$arity$1(enemy)))], null));
});
ludum44js.core.update_projectile = (function ludum44js$core$update_projectile(projectile,dt){
var timer = (dt + new cljs.core.Keyword(null,"timer","timer",-1266967739).cljs$core$IFn$_invoke$arity$1(projectile));
return cljs.core.merge.call(null,projectile,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cleanup","cleanup",1045776959),(((new cljs.core.Keyword(null,"y_offset","y_offset",1125597970).cljs$core$IFn$_invoke$arity$1(projectile) > quil.core.height.call(null))) || ((new cljs.core.Keyword(null,"y_offset","y_offset",1125597970).cljs$core$IFn$_invoke$arity$1(projectile) < (0))) || ((new cljs.core.Keyword(null,"x_offset","x_offset",759077110).cljs$core$IFn$_invoke$arity$1(projectile) > quil.core.width.call(null))) || ((new cljs.core.Keyword(null,"x_offset","x_offset",759077110).cljs$core$IFn$_invoke$arity$1(projectile) < (0))) || (((((0) < new cljs.core.Keyword(null,"duration","duration",1444101068).cljs$core$IFn$_invoke$arity$1(projectile))) && ((timer > new cljs.core.Keyword(null,"duration","duration",1444101068).cljs$core$IFn$_invoke$arity$1(projectile)))))),new cljs.core.Keyword(null,"timer","timer",-1266967739),timer,new cljs.core.Keyword(null,"x_offset","x_offset",759077110),(new cljs.core.Keyword(null,"x_offset","x_offset",759077110).cljs$core$IFn$_invoke$arity$1(projectile) + (dt * new cljs.core.Keyword(null,"right_speed","right_speed",-2039906114).cljs$core$IFn$_invoke$arity$1(projectile))),new cljs.core.Keyword(null,"y_offset","y_offset",1125597970),(new cljs.core.Keyword(null,"y_offset","y_offset",1125597970).cljs$core$IFn$_invoke$arity$1(projectile) + (dt * new cljs.core.Keyword(null,"down_speed","down_speed",-912046520).cljs$core$IFn$_invoke$arity$1(projectile)))], null));
});
ludum44js.core.update_player = (function ludum44js$core$update_player(player,dt,player_is_hit){
var took_damage = ((((0) < new cljs.core.Keyword(null,"invulnerability_timer","invulnerability_timer",1704656288).cljs$core$IFn$_invoke$arity$1(player)))?false:player_is_hit);
var inv = (cljs.core.truth_(took_damage)?(1.0 * new cljs.core.Keyword(null,"armor","armor",-829575337).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"upgrades","upgrades",306367012).cljs$core$IFn$_invoke$arity$1(player))):new cljs.core.Keyword(null,"invulnerability_timer","invulnerability_timer",1704656288).cljs$core$IFn$_invoke$arity$1(player));
var _player = cljs.core.merge.call(null,player,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"invulnerability_timer","invulnerability_timer",1704656288),ludum44js.core.clamp.call(null,(inv - dt),(0),(100)),new cljs.core.Keyword(null,"shot_timer","shot_timer",-1952245610),((cljs.core._EQ_.call(null,(0),new cljs.core.Keyword(null,"shot_timer","shot_timer",-1952245610).cljs$core$IFn$_invoke$arity$1(player)))?(new cljs.core.Keyword(null,"shot_period","shot_period",-503894344).cljs$core$IFn$_invoke$arity$1(player) * new cljs.core.Keyword(null,"fire_rate","fire_rate",324969557).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"upgrades","upgrades",306367012).cljs$core$IFn$_invoke$arity$1(player))):ludum44js.core.clamp.call(null,(new cljs.core.Keyword(null,"shot_timer","shot_timer",-1952245610).cljs$core$IFn$_invoke$arity$1(player) - dt),(0),new cljs.core.Keyword(null,"shot_period","shot_period",-503894344).cljs$core$IFn$_invoke$arity$1(player))),new cljs.core.Keyword(null,"life","life",939004719),(cljs.core.truth_(took_damage)?(new cljs.core.Keyword(null,"life","life",939004719).cljs$core$IFn$_invoke$arity$1(player) - (1)):new cljs.core.Keyword(null,"life","life",939004719).cljs$core$IFn$_invoke$arity$1(player)),new cljs.core.Keyword(null,"luminosity","luminosity",-483901643),((255) * (1.0 - new cljs.core.Keyword(null,"invulnerability_timer","invulnerability_timer",1704656288).cljs$core$IFn$_invoke$arity$1(player)))], null));
if(cljs.core.truth_(quil.core.key_pressed_QMARK_.call(null))){
var dkey = quil.core.raw_key.call(null);
var G__17979 = dkey;
switch (G__17979) {
case "d":
return cljs.core.merge.call(null,_player,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x_offset","x_offset",759077110),ludum44js.core.clamp.call(null,(new cljs.core.Keyword(null,"x_offset","x_offset",759077110).cljs$core$IFn$_invoke$arity$1(player) + ludum44js.core.motion_sensitivity),(0),quil.core.width.call(null))], null));

break;
case "a":
return cljs.core.merge.call(null,_player,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x_offset","x_offset",759077110),ludum44js.core.clamp.call(null,(new cljs.core.Keyword(null,"x_offset","x_offset",759077110).cljs$core$IFn$_invoke$arity$1(player) - ludum44js.core.motion_sensitivity),(0),quil.core.width.call(null))], null));

break;
case "s":
return cljs.core.merge.call(null,_player,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y_offset","y_offset",1125597970),ludum44js.core.clamp.call(null,(new cljs.core.Keyword(null,"y_offset","y_offset",1125597970).cljs$core$IFn$_invoke$arity$1(player) + ludum44js.core.motion_sensitivity),(0),quil.core.height.call(null))], null));

break;
case "w":
return cljs.core.merge.call(null,_player,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y_offset","y_offset",1125597970),ludum44js.core.clamp.call(null,(new cljs.core.Keyword(null,"y_offset","y_offset",1125597970).cljs$core$IFn$_invoke$arity$1(player) - ludum44js.core.motion_sensitivity),(0),quil.core.height.call(null))], null));

break;
default:
return _player;

}
} else {
return _player;
}
});
ludum44js.core.check_player_firing = (function ludum44js$core$check_player_firing(player,dt){
if(cljs.core._EQ_.call(null,(0),new cljs.core.Keyword(null,"shot_timer","shot_timer",-1952245610).cljs$core$IFn$_invoke$arity$1(player))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"timer","timer",-1266967739),new cljs.core.Keyword(null,"saturation","saturation",-14247929),new cljs.core.Keyword(null,"down_speed","down_speed",-912046520),new cljs.core.Keyword(null,"duration","duration",1444101068),new cljs.core.Keyword(null,"radius","radius",-2073122258),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"y_offset","y_offset",1125597970),new cljs.core.Keyword(null,"luminosity","luminosity",-483901643),new cljs.core.Keyword(null,"x_offset","x_offset",759077110),new cljs.core.Keyword(null,"right_speed","right_speed",-2039906114),new cljs.core.Keyword(null,"cleanup","cleanup",1045776959)],[(66),(0),(255),((-400) * new cljs.core.Keyword(null,"bullet_speed","bullet_speed",138403856).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"upgrades","upgrades",306367012).cljs$core$IFn$_invoke$arity$1(player))),(3),((5) * new cljs.core.Keyword(null,"bullet_size","bullet_size",-1738026655).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"upgrades","upgrades",306367012).cljs$core$IFn$_invoke$arity$1(player))),((5) * new cljs.core.Keyword(null,"bullet_size","bullet_size",-1738026655).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"upgrades","upgrades",306367012).cljs$core$IFn$_invoke$arity$1(player))),(new cljs.core.Keyword(null,"y_offset","y_offset",1125597970).cljs$core$IFn$_invoke$arity$1(player) - new cljs.core.Keyword(null,"radius","radius",-2073122258).cljs$core$IFn$_invoke$arity$1(player)),(255),new cljs.core.Keyword(null,"x_offset","x_offset",759077110).cljs$core$IFn$_invoke$arity$1(player),(((10) * (quil.core.random.call(null,2.0) - (1))) * new cljs.core.Keyword(null,"fire_spread","fire_spread",1695562775).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"upgrades","upgrades",306367012).cljs$core$IFn$_invoke$arity$1(player))),false])], null);
} else {
return cljs.core.PersistentVector.EMPTY;
}
});
ludum44js.core.check_collision = (function ludum44js$core$check_collision(tgt,colliders){

return cljs.core.filterv.call(null,(function (a){
var wa = (cljs.core.truth_(new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(a))?new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(a):new cljs.core.Keyword(null,"radius","radius",-2073122258).cljs$core$IFn$_invoke$arity$1(a));
var wtgt = (cljs.core.truth_(new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(tgt))?new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(tgt):new cljs.core.Keyword(null,"radius","radius",-2073122258).cljs$core$IFn$_invoke$arity$1(tgt));
var dx = (new cljs.core.Keyword(null,"x_offset","x_offset",759077110).cljs$core$IFn$_invoke$arity$1(a) - new cljs.core.Keyword(null,"x_offset","x_offset",759077110).cljs$core$IFn$_invoke$arity$1(tgt));
var dy = (new cljs.core.Keyword(null,"y_offset","y_offset",1125597970).cljs$core$IFn$_invoke$arity$1(a) - new cljs.core.Keyword(null,"y_offset","y_offset",1125597970).cljs$core$IFn$_invoke$arity$1(tgt));
var dd = Math.sqrt(((dx * dx) + (dy * dy)));
var r = (wa + wtgt);
return (dd < (r / (2)));
}),colliders);
});
ludum44js.core.cleanup = (function ludum44js$core$cleanup(col){
return cljs.core.filterv.call(null,(function (p1__17981_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"cleanup","cleanup",1045776959).cljs$core$IFn$_invoke$arity$1(p1__17981_SHARP_));
}),col);
});
ludum44js.core.spawn_enemies = (function ludum44js$core$spawn_enemies(is_needed,old_enemies){
if(cljs.core.truth_(is_needed)){
return cljs.core.conj.call(null,old_enemies,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"timer","timer",-1266967739),new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"saturation","saturation",-14247929),new cljs.core.Keyword(null,"down_speed","down_speed",-912046520),new cljs.core.Keyword(null,"radius","radius",-2073122258),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"life","life",939004719),new cljs.core.Keyword(null,"y_offset","y_offset",1125597970),new cljs.core.Keyword(null,"luminosity","luminosity",-483901643),new cljs.core.Keyword(null,"x_offset","x_offset",759077110),new cljs.core.Keyword(null,"right_speed","right_speed",-2039906114),new cljs.core.Keyword(null,"cleanup","cleanup",1045776959)],[(0),(0),(1),(255),200.0,(20),(20),(1),(quil.core.height.call(null) * (0)),(255),(quil.core.width.call(null) * quil.core.random.call(null,1.0)),(0),false]));
} else {
return old_enemies;
}
});
ludum44js.core.over_update_draw_state = (function ludum44js$core$over_update_draw_state(state,dt){
if(cljs.core.truth_(quil.core.key_pressed_QMARK_.call(null))){
var dkey_17983 = quil.core.raw_key.call(null);
var G__17982_17984 = dkey_17983;
switch (G__17982_17984) {
case " ":
ludum44js.core._STAR_js.call(null,"window.location.reload(false);");

break;
default:

}
} else {
}

return state;
});
ludum44js.core.draw_game_over_state = (function ludum44js$core$draw_game_over_state(state){
quil.core.background.call(null,(0));

quil.core.text.call(null,"You Died!",(250),(400));

quil.core.text.call(null,"Refresh this page to try again!",(100),(450));

return state;
});
ludum44js.core.game_update_draw_state = (function ludum44js$core$game_update_draw_state(state,dt){
var updated_enemies = ludum44js.core.cleanup.call(null,cljs.core.map.call(null,(function (p1__17986_SHARP_){
return ludum44js.core.update_enemy.call(null,p1__17986_SHARP_,dt,new cljs.core.Keyword(null,"projectiles","projectiles",-1303310399).cljs$core$IFn$_invoke$arity$1(state));
}),new cljs.core.Keyword(null,"enemies","enemies",2114285722).cljs$core$IFn$_invoke$arity$1(state)));
var updated_projectiles = ludum44js.core.cleanup.call(null,cljs.core.map.call(null,((function (updated_enemies){
return (function (p1__17987_SHARP_){
return ludum44js.core.update_projectile.call(null,p1__17987_SHARP_,dt);
});})(updated_enemies))
,new cljs.core.Keyword(null,"projectiles","projectiles",-1303310399).cljs$core$IFn$_invoke$arity$1(state)));
var spawn_needed = (quil.core.frame_count.call(null) > (new cljs.core.Keyword(null,"last_spawn","last_spawn",-1436338511).cljs$core$IFn$_invoke$arity$1(state) + (3)));
var new_enemies = ludum44js.core.spawn_enemies.call(null,(quil.core.frame_count.call(null) > (new cljs.core.Keyword(null,"last_spawn","last_spawn",-1436338511).cljs$core$IFn$_invoke$arity$1(state) + (3))),updated_enemies);
var player_is_hit = ((0) < cljs.core.count.call(null,ludum44js.core.check_collision.call(null,new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(state),new_enemies)));
var new_player = ludum44js.core.update_player.call(null,new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(state),dt,player_is_hit);
var new_player_projectiles = ludum44js.core.check_player_firing.call(null,new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(state),dt);
return cljs.core.merge.call(null,state,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"level_time_elapsed","level_time_elapsed",-737725489),(dt + new cljs.core.Keyword(null,"level_time_elapsed","level_time_elapsed",-737725489).cljs$core$IFn$_invoke$arity$1(state)),new cljs.core.Keyword(null,"last_spawn","last_spawn",-1436338511),((spawn_needed)?quil.core.frame_count.call(null):new cljs.core.Keyword(null,"last_spawn","last_spawn",-1436338511).cljs$core$IFn$_invoke$arity$1(state)),new cljs.core.Keyword(null,"frame_count","frame_count",-122201924),quil.core.frame_count.call(null),new cljs.core.Keyword(null,"player","player",-97687400),new_player,new cljs.core.Keyword(null,"enemies","enemies",2114285722),new_enemies,new cljs.core.Keyword(null,"projectiles","projectiles",-1303310399),ludum44js.core.cleanup.call(null,cljs.core.into.call(null,updated_projectiles,new_player_projectiles))], null));
});
ludum44js.core.finish_level = (function ludum44js$core$finish_level(state){
cljs.core.println.call(null,"Finishing level!");

cljs.core.swap_BANG_.call(null,ludum44js.core.wallet_balance,(function (old){
return (old + cljs.core.deref.call(null,ludum44js.core.current_bet_bid));
}));

return cljs.core.swap_BANG_.call(null,ludum44js.core.current_scene,(function (old){
return new cljs.core.Keyword(null,"INTERSTITIAL","INTERSTITIAL",137061923);
}));
});
ludum44js.core.draw_sprite = (function ludum44js$core$draw_sprite(state,obj){
quil.core.fill.call(null,new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(obj),new cljs.core.Keyword(null,"saturation","saturation",-14247929).cljs$core$IFn$_invoke$arity$1(obj),new cljs.core.Keyword(null,"luminosity","luminosity",-483901643).cljs$core$IFn$_invoke$arity$1(obj));

var x = new cljs.core.Keyword(null,"x_offset","x_offset",759077110).cljs$core$IFn$_invoke$arity$1(obj);
var y = new cljs.core.Keyword(null,"y_offset","y_offset",1125597970).cljs$core$IFn$_invoke$arity$1(obj);
var r = new cljs.core.Keyword(null,"radius","radius",-2073122258).cljs$core$IFn$_invoke$arity$1(obj);
return quil.core.ellipse.call(null,x,y,r,r);
});
ludum44js.core.draw_game_state = (function ludum44js$core$draw_game_state(state){
quil.core.background.call(null,(0),(0),(0));

var player = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(state);
var enemies = new cljs.core.Keyword(null,"enemies","enemies",2114285722).cljs$core$IFn$_invoke$arity$1(state);
var projectiles = new cljs.core.Keyword(null,"projectiles","projectiles",-1303310399).cljs$core$IFn$_invoke$arity$1(state);
quil.core.scale.call(null,0.5);

var seq__17988_18000 = cljs.core.seq.call(null,cljs.core.range.call(null,(new cljs.core.Keyword(null,"life","life",939004719).cljs$core$IFn$_invoke$arity$1(player) - (1))));
var chunk__17989_18001 = null;
var count__17990_18002 = (0);
var i__17991_18003 = (0);
while(true){
if((i__17991_18003 < count__17990_18002)){
var i_18004 = cljs.core._nth.call(null,chunk__17989_18001,i__17991_18003);
ludum44js.core.draw_image.call(null,state,new cljs.core.Keyword(null,"upgradepip","upgradepip",1065500056),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((0) + (i_18004 * (30))),(0)], null));


var G__18005 = seq__17988_18000;
var G__18006 = chunk__17989_18001;
var G__18007 = count__17990_18002;
var G__18008 = (i__17991_18003 + (1));
seq__17988_18000 = G__18005;
chunk__17989_18001 = G__18006;
count__17990_18002 = G__18007;
i__17991_18003 = G__18008;
continue;
} else {
var temp__5457__auto___18009 = cljs.core.seq.call(null,seq__17988_18000);
if(temp__5457__auto___18009){
var seq__17988_18010__$1 = temp__5457__auto___18009;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17988_18010__$1)){
var c__4550__auto___18011 = cljs.core.chunk_first.call(null,seq__17988_18010__$1);
var G__18012 = cljs.core.chunk_rest.call(null,seq__17988_18010__$1);
var G__18013 = c__4550__auto___18011;
var G__18014 = cljs.core.count.call(null,c__4550__auto___18011);
var G__18015 = (0);
seq__17988_18000 = G__18012;
chunk__17989_18001 = G__18013;
count__17990_18002 = G__18014;
i__17991_18003 = G__18015;
continue;
} else {
var i_18016 = cljs.core.first.call(null,seq__17988_18010__$1);
ludum44js.core.draw_image.call(null,state,new cljs.core.Keyword(null,"upgradepip","upgradepip",1065500056),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((0) + (i_18016 * (30))),(0)], null));


var G__18017 = cljs.core.next.call(null,seq__17988_18010__$1);
var G__18018 = null;
var G__18019 = (0);
var G__18020 = (0);
seq__17988_18000 = G__18017;
chunk__17989_18001 = G__18018;
count__17990_18002 = G__18019;
i__17991_18003 = G__18020;
continue;
}
} else {
}
}
break;
}

quil.core.scale.call(null,2.0);

ludum44js.core.draw_sprite.call(null,state,player);

var seq__17992_18021 = cljs.core.seq.call(null,enemies);
var chunk__17993_18022 = null;
var count__17994_18023 = (0);
var i__17995_18024 = (0);
while(true){
if((i__17995_18024 < count__17994_18023)){
var enemy_18025 = cljs.core._nth.call(null,chunk__17993_18022,i__17995_18024);
ludum44js.core.draw_sprite.call(null,state,enemy_18025);


var G__18026 = seq__17992_18021;
var G__18027 = chunk__17993_18022;
var G__18028 = count__17994_18023;
var G__18029 = (i__17995_18024 + (1));
seq__17992_18021 = G__18026;
chunk__17993_18022 = G__18027;
count__17994_18023 = G__18028;
i__17995_18024 = G__18029;
continue;
} else {
var temp__5457__auto___18030 = cljs.core.seq.call(null,seq__17992_18021);
if(temp__5457__auto___18030){
var seq__17992_18031__$1 = temp__5457__auto___18030;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17992_18031__$1)){
var c__4550__auto___18032 = cljs.core.chunk_first.call(null,seq__17992_18031__$1);
var G__18033 = cljs.core.chunk_rest.call(null,seq__17992_18031__$1);
var G__18034 = c__4550__auto___18032;
var G__18035 = cljs.core.count.call(null,c__4550__auto___18032);
var G__18036 = (0);
seq__17992_18021 = G__18033;
chunk__17993_18022 = G__18034;
count__17994_18023 = G__18035;
i__17995_18024 = G__18036;
continue;
} else {
var enemy_18037 = cljs.core.first.call(null,seq__17992_18031__$1);
ludum44js.core.draw_sprite.call(null,state,enemy_18037);


var G__18038 = cljs.core.next.call(null,seq__17992_18031__$1);
var G__18039 = null;
var G__18040 = (0);
var G__18041 = (0);
seq__17992_18021 = G__18038;
chunk__17993_18022 = G__18039;
count__17994_18023 = G__18040;
i__17995_18024 = G__18041;
continue;
}
} else {
}
}
break;
}

var seq__17996 = cljs.core.seq.call(null,projectiles);
var chunk__17997 = null;
var count__17998 = (0);
var i__17999 = (0);
while(true){
if((i__17999 < count__17998)){
var bullet = cljs.core._nth.call(null,chunk__17997,i__17999);
ludum44js.core.draw_sprite.call(null,state,bullet);


var G__18042 = seq__17996;
var G__18043 = chunk__17997;
var G__18044 = count__17998;
var G__18045 = (i__17999 + (1));
seq__17996 = G__18042;
chunk__17997 = G__18043;
count__17998 = G__18044;
i__17999 = G__18045;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__17996);
if(temp__5457__auto__){
var seq__17996__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17996__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__17996__$1);
var G__18046 = cljs.core.chunk_rest.call(null,seq__17996__$1);
var G__18047 = c__4550__auto__;
var G__18048 = cljs.core.count.call(null,c__4550__auto__);
var G__18049 = (0);
seq__17996 = G__18046;
chunk__17997 = G__18047;
count__17998 = G__18048;
i__17999 = G__18049;
continue;
} else {
var bullet = cljs.core.first.call(null,seq__17996__$1);
ludum44js.core.draw_sprite.call(null,state,bullet);


var G__18050 = cljs.core.next.call(null,seq__17996__$1);
var G__18051 = null;
var G__18052 = (0);
var G__18053 = (0);
seq__17996 = G__18050;
chunk__17997 = G__18051;
count__17998 = G__18052;
i__17999 = G__18053;
continue;
}
} else {
return null;
}
}
break;
}
});
ludum44js.core.interstitial_update_draw_state = (function ludum44js$core$interstitial_update_draw_state(state,dt){
var old_player = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(state);
var new_player = ludum44js.core.reinitialize_player.call(null,old_player);
if(cljs.core.truth_(quil.core.key_pressed_QMARK_.call(null))){
var dkey_18055 = quil.core.raw_key.call(null);
var G__18054_18056 = dkey_18055;
switch (G__18054_18056) {
case "a":
ludum44js.core.modify_stakes.call(null,state,(1));

break;
case "d":
ludum44js.core.modify_stakes.call(null,state,(-1));

break;
case "1":
ludum44js.core.purchase.call(null,state,new cljs.core.Keyword(null,"fire_spread","fire_spread",1695562775));

break;
case "2":
ludum44js.core.purchase.call(null,state,new cljs.core.Keyword(null,"fire_rate","fire_rate",324969557));

break;
case "3":
ludum44js.core.purchase.call(null,state,new cljs.core.Keyword(null,"armor","armor",-829575337));

break;
case "4":
ludum44js.core.purchase.call(null,state,new cljs.core.Keyword(null,"bullet_size","bullet_size",-1738026655));

break;
case "5":
ludum44js.core.purchase.call(null,state,new cljs.core.Keyword(null,"vessel_size","vessel_size",1804918021));

break;
case "6":
ludum44js.core.purchase.call(null,state,new cljs.core.Keyword(null,"bullet_speed","bullet_speed",138403856));

break;
case " ":
ludum44js.core.go_to_next_level.call(null);

break;
default:
cljs.core.println.call(null,"*whistle*");

}
} else {
}

return cljs.core.merge.call(null,state,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"level_time_elapsed","level_time_elapsed",-737725489),(0),new cljs.core.Keyword(null,"frame_count","frame_count",-122201924),quil.core.frame_count.call(null),new cljs.core.Keyword(null,"player","player",-97687400),new_player,new cljs.core.Keyword(null,"enemies","enemies",2114285722),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"projectiles","projectiles",-1303310399),cljs.core.PersistentVector.EMPTY], null));
});
ludum44js.core.modify_stakes = (function ludum44js$core$modify_stakes(state,amount){
if((0.25 < (cljs.core.deref.call(null,ludum44js.core.time_now) - cljs.core.deref.call(null,ludum44js.core.time_of_last_bid_change)))){
cljs.core.swap_BANG_.call(null,ludum44js.core.time_of_last_bid_change,(function (old){
return cljs.core.deref.call(null,ludum44js.core.time_now);
}));

cljs.core.swap_BANG_.call(null,ludum44js.core.current_bet_bid,(function (old){
return ludum44js.core.clamp.call(null,(old + amount),(0),(9));
}));

cljs.core.swap_BANG_.call(null,ludum44js.core.life_for_player,(function (old){
return ((10) - cljs.core.deref.call(null,ludum44js.core.current_bet_bid));
}));
} else {
}

return state;
});
ludum44js.core.go_to_next_level = (function ludum44js$core$go_to_next_level(state){
cljs.core.swap_BANG_.call(null,ludum44js.core.prior_bet_bid,(function (old){
return cljs.core.deref.call(null,ludum44js.core.current_bet_bid);
}));

cljs.core.swap_BANG_.call(null,ludum44js.core.life_for_player,(function (old){
return ((10) - cljs.core.deref.call(null,ludum44js.core.current_bet_bid));
}));

cljs.core.swap_BANG_.call(null,ludum44js.core.current_scene,(function (old){
return new cljs.core.Keyword(null,"GAME","GAME",-1201089127);
}));

return state;
});
ludum44js.core.purchase = (function ludum44js$core$purchase(state,upgrade){
if((((cljs.core.deref.call(null,ludum44js.core.wallet_balance) >= (5))) && ((0.5 < (cljs.core.deref.call(null,ludum44js.core.time_now) - cljs.core.deref.call(null,ludum44js.core.time_of_last_purchase)))))){
var new_purchases_18058 = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"fire_rate","fire_rate",324969557),((cljs.core._EQ_.call(null,upgrade,new cljs.core.Keyword(null,"fire_rate","fire_rate",324969557)))?((1) + new cljs.core.Keyword(null,"fire_rate","fire_rate",324969557).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"purchases","purchases",-1215855274).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(state)))):new cljs.core.Keyword(null,"fire_rate","fire_rate",324969557).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"purchases","purchases",-1215855274).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(state)))),new cljs.core.Keyword(null,"fire_spread","fire_spread",1695562775),((cljs.core._EQ_.call(null,upgrade,new cljs.core.Keyword(null,"fire_spread","fire_spread",1695562775)))?((1) + new cljs.core.Keyword(null,"fire_spread","fire_spread",1695562775).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"purchases","purchases",-1215855274).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(state)))):new cljs.core.Keyword(null,"fire_spread","fire_spread",1695562775).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"purchases","purchases",-1215855274).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(state)))),new cljs.core.Keyword(null,"armor","armor",-829575337),((cljs.core._EQ_.call(null,upgrade,new cljs.core.Keyword(null,"armor","armor",-829575337)))?((1) + new cljs.core.Keyword(null,"armor","armor",-829575337).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"purchases","purchases",-1215855274).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(state)))):new cljs.core.Keyword(null,"armor","armor",-829575337).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"purchases","purchases",-1215855274).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(state)))),new cljs.core.Keyword(null,"bullet_size","bullet_size",-1738026655),((cljs.core._EQ_.call(null,upgrade,new cljs.core.Keyword(null,"bullet_size","bullet_size",-1738026655)))?((1) + new cljs.core.Keyword(null,"bullet_size","bullet_size",-1738026655).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"purchases","purchases",-1215855274).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(state)))):new cljs.core.Keyword(null,"bullet_size","bullet_size",-1738026655).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"purchases","purchases",-1215855274).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(state)))),new cljs.core.Keyword(null,"bullet_speed","bullet_speed",138403856),((cljs.core._EQ_.call(null,upgrade,new cljs.core.Keyword(null,"bullet_speed","bullet_speed",138403856)))?((1) + new cljs.core.Keyword(null,"bullet_speed","bullet_speed",138403856).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"purchases","purchases",-1215855274).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(state)))):new cljs.core.Keyword(null,"bullet_speed","bullet_speed",138403856).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"purchases","purchases",-1215855274).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(state)))),new cljs.core.Keyword(null,"vessel_size","vessel_size",1804918021),((cljs.core._EQ_.call(null,upgrade,new cljs.core.Keyword(null,"vessel_size","vessel_size",1804918021)))?((1) + new cljs.core.Keyword(null,"vessel_size","vessel_size",1804918021).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"purchases","purchases",-1215855274).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(state)))):new cljs.core.Keyword(null,"vessel_size","vessel_size",1804918021).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"purchases","purchases",-1215855274).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(state))))], null);
cljs.core.swap_BANG_.call(null,ludum44js.core.time_of_last_purchase,((function (new_purchases_18058){
return (function (old){
return cljs.core.deref.call(null,ludum44js.core.time_now);
});})(new_purchases_18058))
);

cljs.core.println.call(null,"Purchasing ",upgrade," for 5");

cljs.core.swap_BANG_.call(null,ludum44js.core.wallet_balance,((function (new_purchases_18058){
return (function (old){
return (old - (5));
});})(new_purchases_18058))
);

cljs.core.swap_BANG_.call(null,ludum44js.core.purchases,((function (new_purchases_18058){
return (function (old){
return new_purchases_18058;
});})(new_purchases_18058))
);
} else {
cljs.core.println.call(null,"Insufficient vespene gas");
}

return state;
});
ludum44js.core.draw_interstitial_state = (function ludum44js$core$draw_interstitial_state(state){
quil.core.background.call(null,(0));

quil.core.fill.call(null,(0),(0),(255));

ludum44js.core.draw_image.call(null,state,new cljs.core.Keyword(null,"bg","bg",-206688421),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null));

ludum44js.core.draw_bet_dialog.call(null,state);

ludum44js.core.draw_money_progress.call(null,state);

return ludum44js.core.draw_store.call(null,state);
});
ludum44js.core.draw_bet_dialog = (function ludum44js$core$draw_bet_dialog(state){
return ludum44js.core.draw_image.call(null,state,["bid",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ludum44js.core.current_bet_bid))].join(''),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(115),(360)], null),(0),(55));
});
ludum44js.core.draw_money_progress = (function ludum44js$core$draw_money_progress(state){
return ludum44js.core.draw_text.call(null,state,new cljs.core.Keyword(null,"earthorbiteracad","earthorbiteracad",29589921),["Balance: $",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ludum44js.core.wallet_balance))].join(''),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(400),(500)], null));
});
ludum44js.core.draw_store = (function ludum44js$core$draw_store(state){
var seq__18059_18087 = cljs.core.seq.call(null,cljs.core.zipmap.call(null,cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.deref.call(null,ludum44js.core.purchases))),cljs.core.deref.call(null,ludum44js.core.purchases)));
var chunk__18060_18088 = null;
var count__18061_18089 = (0);
var i__18062_18090 = (0);
while(true){
if((i__18062_18090 < count__18061_18089)){
var vec__18075_18091 = cljs.core._nth.call(null,chunk__18060_18088,i__18062_18090);
var i_18092 = cljs.core.nth.call(null,vec__18075_18091,(0),null);
var vec__18078_18093 = cljs.core.nth.call(null,vec__18075_18091,(1),null);
var kind_18094 = cljs.core.nth.call(null,vec__18078_18093,(0),null);
var purchase_18095 = cljs.core.nth.call(null,vec__18078_18093,(1),null);
var locs_18096 = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"fire_spread","fire_spread",1695562775),(0),new cljs.core.Keyword(null,"fire_rate","fire_rate",324969557),(1),new cljs.core.Keyword(null,"armor","armor",-829575337),(2),new cljs.core.Keyword(null,"bullet_size","bullet_size",-1738026655),(3),new cljs.core.Keyword(null,"vessel_size","vessel_size",1804918021),(4),new cljs.core.Keyword(null,"bullet_speed","bullet_speed",138403856),(5)], null);
quil.core.text.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(((1) + purchase_18095)),((80) + (kind_18094.call(null,locs_18096) * (95))),(600));


var G__18097 = seq__18059_18087;
var G__18098 = chunk__18060_18088;
var G__18099 = count__18061_18089;
var G__18100 = (i__18062_18090 + (1));
seq__18059_18087 = G__18097;
chunk__18060_18088 = G__18098;
count__18061_18089 = G__18099;
i__18062_18090 = G__18100;
continue;
} else {
var temp__5457__auto___18101 = cljs.core.seq.call(null,seq__18059_18087);
if(temp__5457__auto___18101){
var seq__18059_18102__$1 = temp__5457__auto___18101;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18059_18102__$1)){
var c__4550__auto___18103 = cljs.core.chunk_first.call(null,seq__18059_18102__$1);
var G__18104 = cljs.core.chunk_rest.call(null,seq__18059_18102__$1);
var G__18105 = c__4550__auto___18103;
var G__18106 = cljs.core.count.call(null,c__4550__auto___18103);
var G__18107 = (0);
seq__18059_18087 = G__18104;
chunk__18060_18088 = G__18105;
count__18061_18089 = G__18106;
i__18062_18090 = G__18107;
continue;
} else {
var vec__18081_18108 = cljs.core.first.call(null,seq__18059_18102__$1);
var i_18109 = cljs.core.nth.call(null,vec__18081_18108,(0),null);
var vec__18084_18110 = cljs.core.nth.call(null,vec__18081_18108,(1),null);
var kind_18111 = cljs.core.nth.call(null,vec__18084_18110,(0),null);
var purchase_18112 = cljs.core.nth.call(null,vec__18084_18110,(1),null);
var locs_18113 = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"fire_spread","fire_spread",1695562775),(0),new cljs.core.Keyword(null,"fire_rate","fire_rate",324969557),(1),new cljs.core.Keyword(null,"armor","armor",-829575337),(2),new cljs.core.Keyword(null,"bullet_size","bullet_size",-1738026655),(3),new cljs.core.Keyword(null,"vessel_size","vessel_size",1804918021),(4),new cljs.core.Keyword(null,"bullet_speed","bullet_speed",138403856),(5)], null);
quil.core.text.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(((1) + purchase_18112)),((80) + (kind_18111.call(null,locs_18113) * (95))),(600));


var G__18114 = cljs.core.next.call(null,seq__18059_18102__$1);
var G__18115 = null;
var G__18116 = (0);
var G__18117 = (0);
seq__18059_18087 = G__18114;
chunk__18060_18088 = G__18115;
count__18061_18089 = G__18116;
i__18062_18090 = G__18117;
continue;
}
} else {
}
}
break;
}

if((cljs.core.deref.call(null,ludum44js.core.wallet_balance) < (5))){
quil.core.fill.call(null,quil.core.color.call(null,(0),(0),(0),(100)));

return quil.core.rect.call(null,(0),(450),(600),(220));
} else {
return null;
}
});
ludum44js.core.setup = (function ludum44js$core$setup(){
ludum44js.core.kill_line = (1.25 * quil.core.height.call(null));

quil.core.frame_rate.call(null,(30));

quil.core.color_mode.call(null,new cljs.core.Keyword(null,"hsb","hsb",-753472031));

ludum44js.core.initial_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"images","images",1757475080),cljs.core.zipmap.call(null,ludum44js.core.images,cljs.core.map.call(null,ludum44js.core.load_image,ludum44js.core.images)),new cljs.core.Keyword(null,"last_spawn","last_spawn",-1436338511),(0),new cljs.core.Keyword(null,"frame_count","frame_count",-122201924),(0),new cljs.core.Keyword(null,"level_time_elapsed","level_time_elapsed",-737725489),(0),new cljs.core.Keyword(null,"player","player",-97687400),ludum44js.core.reinitialize_player.call(null,null),new cljs.core.Keyword(null,"enemies","enemies",2114285722),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"projectiles","projectiles",-1303310399),cljs.core.PersistentVector.EMPTY], null));

return cljs.core.deref.call(null,ludum44js.core.initial_state);
});
ludum44js.core.update_state = (function ludum44js$core$update_state(state){
var dt = ((quil.core.frame_count.call(null) - new cljs.core.Keyword(null,"frame_count","frame_count",-122201924).cljs$core$IFn$_invoke$arity$1(state)) / quil.core.target_frame_rate.call(null));
var new_time_elapsed = (dt + new cljs.core.Keyword(null,"level_time_elapsed","level_time_elapsed",-737725489).cljs$core$IFn$_invoke$arity$1(state));
cljs.core.swap_BANG_.call(null,ludum44js.core.time_now,((function (dt,new_time_elapsed){
return (function (old){
return (old + dt);
});})(dt,new_time_elapsed))
);

if((new_time_elapsed > (30))){
ludum44js.core.finish_level.call(null,state);
} else {
}

if(cljs.core._EQ_.call(null,(0),new cljs.core.Keyword(null,"life","life",939004719).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(state)))){
cljs.core.swap_BANG_.call(null,ludum44js.core.current_scene,((function (dt,new_time_elapsed){
return (function (old){
return new cljs.core.Keyword(null,"OVER","OVER",109318442);
});})(dt,new_time_elapsed))
);
} else {
}

var G__18118 = cljs.core.deref.call(null,ludum44js.core.current_scene);
var G__18118__$1 = (((G__18118 instanceof cljs.core.Keyword))?G__18118.fqn:null);
switch (G__18118__$1) {
case "GAME":
return ludum44js.core.game_update_draw_state.call(null,state,dt);

break;
case "INTERSTITIAL":
return ludum44js.core.interstitial_update_draw_state.call(null,state,dt);

break;
case "OVER":
return ludum44js.core.over_update_draw_state.call(null,state,dt);

break;
default:
return state;

}
});
ludum44js.core.draw_state = (function ludum44js$core$draw_state(state){
var G__18120 = cljs.core.deref.call(null,ludum44js.core.current_scene);
var G__18120__$1 = (((G__18120 instanceof cljs.core.Keyword))?G__18120.fqn:null);
switch (G__18120__$1) {
case "GAME":
return ludum44js.core.draw_game_state.call(null,state);

break;
case "INTERSTITIAL":
return ludum44js.core.draw_interstitial_state.call(null,state);

break;
case "OVER":
return ludum44js.core.draw_game_over_state.call(null,state);

break;
default:
return state;

}
});
ludum44js.core.run_sketch = (function ludum44js$core$run_sketch(){
ludum44js.core.ludum44js = (function ludum44js$core$run_sketch_$_ludum44js(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"ludum44js",new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,ludum44js.core.update_state))?(function() { 
var G__18122__delegate = function (args){
return cljs.core.apply.call(null,ludum44js.core.update_state,args);
};
var G__18122 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18123__i = 0, G__18123__a = new Array(arguments.length -  0);
while (G__18123__i < G__18123__a.length) {G__18123__a[G__18123__i] = arguments[G__18123__i + 0]; ++G__18123__i;}
  args = new cljs.core.IndexedSeq(G__18123__a,0,null);
} 
return G__18122__delegate.call(this,args);};
G__18122.cljs$lang$maxFixedArity = 0;
G__18122.cljs$lang$applyTo = (function (arglist__18124){
var args = cljs.core.seq(arglist__18124);
return G__18122__delegate(args);
});
G__18122.cljs$core$IFn$_invoke$arity$variadic = G__18122__delegate;
return G__18122;
})()
:ludum44js.core.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(600),(800)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,ludum44js.core.setup))?(function() { 
var G__18125__delegate = function (args){
return cljs.core.apply.call(null,ludum44js.core.setup,args);
};
var G__18125 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18126__i = 0, G__18126__a = new Array(arguments.length -  0);
while (G__18126__i < G__18126__a.length) {G__18126__a[G__18126__i] = arguments[G__18126__i + 0]; ++G__18126__i;}
  args = new cljs.core.IndexedSeq(G__18126__a,0,null);
} 
return G__18125__delegate.call(this,args);};
G__18125.cljs$lang$maxFixedArity = 0;
G__18125.cljs$lang$applyTo = (function (arglist__18127){
var args = cljs.core.seq(arglist__18127);
return G__18125__delegate(args);
});
G__18125.cljs$core$IFn$_invoke$arity$variadic = G__18125__delegate;
return G__18125;
})()
:ludum44js.core.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,ludum44js.core.draw_state))?(function() { 
var G__18128__delegate = function (args){
return cljs.core.apply.call(null,ludum44js.core.draw_state,args);
};
var G__18128 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18129__i = 0, G__18129__a = new Array(arguments.length -  0);
while (G__18129__i < G__18129__a.length) {G__18129__a[G__18129__i] = arguments[G__18129__i + 0]; ++G__18129__i;}
  args = new cljs.core.IndexedSeq(G__18129__a,0,null);
} 
return G__18128__delegate.call(this,args);};
G__18128.cljs$lang$maxFixedArity = 0;
G__18128.cljs$lang$applyTo = (function (arglist__18130){
var args = cljs.core.seq(arglist__18130);
return G__18128__delegate(args);
});
G__18128.cljs$core$IFn$_invoke$arity$variadic = G__18128__delegate;
return G__18128;
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
