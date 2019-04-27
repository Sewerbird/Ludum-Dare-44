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
ludum44js.core.motion_sensitivity = 0.01;
ludum44js.core.current_scene = cljs.core.atom.call(null,new cljs.core.Keyword(null,"GAME","GAME",-1201089127));
ludum44js.core.setup = (function ludum44js$core$setup(){
quil.core.frame_rate.call(null,(30));

quil.core.color_mode.call(null,new cljs.core.Keyword(null,"hsb","hsb",-753472031));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"color","color",1011675173),(0),new cljs.core.Keyword(null,"radius","radius",-2073122258),(100),new cljs.core.Keyword(null,"x_offset","x_offset",759077110),0.5,new cljs.core.Keyword(null,"y_offset","y_offset",1125597970),0.0], null),new cljs.core.Keyword(null,"enemy","enemy",-956472047),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"color","color",1011675173),(0),new cljs.core.Keyword(null,"radius","radius",-2073122258),(100),new cljs.core.Keyword(null,"x_offset","x_offset",759077110),0.5,new cljs.core.Keyword(null,"y_offset","y_offset",1125597970),0.0], null)], null);
});
ludum44js.core.update_enemy = (function ludum44js$core$update_enemy(enemy){
if(cljs.core.truth_(quil.core.key_pressed_QMARK_.call(null))){
var dkey = quil.core.raw_key.call(null);
var G__4192 = dkey;
switch (G__4192) {
case "s":
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x_offset","x_offset",759077110),new cljs.core.Keyword(null,"x_offset","x_offset",759077110).cljs$core$IFn$_invoke$arity$1(enemy),new cljs.core.Keyword(null,"y_offset","y_offset",1125597970),ludum44js.core.clamp.call(null,(new cljs.core.Keyword(null,"y_offset","y_offset",1125597970).cljs$core$IFn$_invoke$arity$1(enemy) + ludum44js.core.motion_sensitivity),(0),(1)),new cljs.core.Keyword(null,"color","color",1011675173),cljs.core.mod.call(null,(new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(enemy) + 0.7),(255)),new cljs.core.Keyword(null,"radius","radius",-2073122258),(100)], null);

break;
case "w":
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x_offset","x_offset",759077110),new cljs.core.Keyword(null,"x_offset","x_offset",759077110).cljs$core$IFn$_invoke$arity$1(enemy),new cljs.core.Keyword(null,"y_offset","y_offset",1125597970),ludum44js.core.clamp.call(null,(new cljs.core.Keyword(null,"y_offset","y_offset",1125597970).cljs$core$IFn$_invoke$arity$1(enemy) - ludum44js.core.motion_sensitivity),(0),(1)),new cljs.core.Keyword(null,"color","color",1011675173),cljs.core.mod.call(null,(new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(enemy) + 0.7),(255)),new cljs.core.Keyword(null,"radius","radius",-2073122258),(100)], null);

break;
default:
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x_offset","x_offset",759077110),new cljs.core.Keyword(null,"x_offset","x_offset",759077110).cljs$core$IFn$_invoke$arity$1(enemy),new cljs.core.Keyword(null,"y_offset","y_offset",1125597970),new cljs.core.Keyword(null,"y_offset","y_offset",1125597970).cljs$core$IFn$_invoke$arity$1(enemy),new cljs.core.Keyword(null,"color","color",1011675173),cljs.core.mod.call(null,(new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(enemy) + 0.7),(255)),new cljs.core.Keyword(null,"radius","radius",-2073122258),(100)], null);

}
} else {
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x_offset","x_offset",759077110),new cljs.core.Keyword(null,"x_offset","x_offset",759077110).cljs$core$IFn$_invoke$arity$1(enemy),new cljs.core.Keyword(null,"y_offset","y_offset",1125597970),new cljs.core.Keyword(null,"y_offset","y_offset",1125597970).cljs$core$IFn$_invoke$arity$1(enemy),new cljs.core.Keyword(null,"color","color",1011675173),cljs.core.mod.call(null,(new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(enemy) + 0.7),(255)),new cljs.core.Keyword(null,"radius","radius",-2073122258),(100)], null);
}
});
ludum44js.core.update_player = (function ludum44js$core$update_player(player){
if(cljs.core.truth_(quil.core.key_pressed_QMARK_.call(null))){
var dkey = quil.core.raw_key.call(null);
var G__4194 = dkey;
switch (G__4194) {
case "d":
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x_offset","x_offset",759077110),ludum44js.core.clamp.call(null,(new cljs.core.Keyword(null,"x_offset","x_offset",759077110).cljs$core$IFn$_invoke$arity$1(player) + ludum44js.core.motion_sensitivity),(0),(1)),new cljs.core.Keyword(null,"y_offset","y_offset",1125597970),new cljs.core.Keyword(null,"y_offset","y_offset",1125597970).cljs$core$IFn$_invoke$arity$1(player),new cljs.core.Keyword(null,"color","color",1011675173),cljs.core.mod.call(null,(new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(player) + 0.7),(255)),new cljs.core.Keyword(null,"radius","radius",-2073122258),(100)], null);

break;
case "a":
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x_offset","x_offset",759077110),ludum44js.core.clamp.call(null,(new cljs.core.Keyword(null,"x_offset","x_offset",759077110).cljs$core$IFn$_invoke$arity$1(player) - ludum44js.core.motion_sensitivity),(0),(1)),new cljs.core.Keyword(null,"y_offset","y_offset",1125597970),new cljs.core.Keyword(null,"y_offset","y_offset",1125597970).cljs$core$IFn$_invoke$arity$1(player),new cljs.core.Keyword(null,"color","color",1011675173),cljs.core.mod.call(null,(new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(player) + 0.7),(255)),new cljs.core.Keyword(null,"radius","radius",-2073122258),(100)], null);

break;
default:
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x_offset","x_offset",759077110),new cljs.core.Keyword(null,"x_offset","x_offset",759077110).cljs$core$IFn$_invoke$arity$1(player),new cljs.core.Keyword(null,"y_offset","y_offset",1125597970),new cljs.core.Keyword(null,"y_offset","y_offset",1125597970).cljs$core$IFn$_invoke$arity$1(player),new cljs.core.Keyword(null,"color","color",1011675173),cljs.core.mod.call(null,(new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(player) + 0.7),(255)),new cljs.core.Keyword(null,"radius","radius",-2073122258),(100)], null);

}
} else {
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x_offset","x_offset",759077110),new cljs.core.Keyword(null,"x_offset","x_offset",759077110).cljs$core$IFn$_invoke$arity$1(player),new cljs.core.Keyword(null,"y_offset","y_offset",1125597970),new cljs.core.Keyword(null,"y_offset","y_offset",1125597970).cljs$core$IFn$_invoke$arity$1(player),new cljs.core.Keyword(null,"color","color",1011675173),cljs.core.mod.call(null,(new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(player) + 0.7),(255)),new cljs.core.Keyword(null,"radius","radius",-2073122258),(100)], null);
}
});
ludum44js.core.game_update_draw_state = (function ludum44js$core$game_update_draw_state(state){
var player = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(state);
var enemy = new cljs.core.Keyword(null,"enemy","enemy",-956472047).cljs$core$IFn$_invoke$arity$1(state);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"player","player",-97687400),ludum44js.core.update_player.call(null,player),new cljs.core.Keyword(null,"enemy","enemy",-956472047),ludum44js.core.update_enemy.call(null,enemy)], null);
});
ludum44js.core.update_state = (function ludum44js$core$update_state(state){
var G__4196 = cljs.core.deref.call(null,ludum44js.core.current_scene);
var G__4196__$1 = (((G__4196 instanceof cljs.core.Keyword))?G__4196.fqn:null);
switch (G__4196__$1) {
case "GAME":
return ludum44js.core.game_update_draw_state.call(null,state);

break;
default:
return state;

}
});
ludum44js.core.do_circle = (function ludum44js$core$do_circle(state){
var diam = quil.core.random.call(null,(100));
var x = quil.core.random.call(null,quil.core.width.call(null));
var y = quil.core.random.call(null,quil.core.height.call(null));
quil.core.ellipse.call(null,x,y,diam,diam);

return state.call(null);
});
ludum44js.core.draw_state = (function ludum44js$core$draw_state(state){
quil.core.background.call(null,(240));

var player = new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(state);
var enemy = new cljs.core.Keyword(null,"enemy","enemy",-956472047).cljs$core$IFn$_invoke$arity$1(state);
quil.core.fill.call(null,new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(player),(255),(255));

var x_offset_4198 = new cljs.core.Keyword(null,"x_offset","x_offset",759077110).cljs$core$IFn$_invoke$arity$1(player);
var x_4199 = (quil.core.width.call(null) * x_offset_4198);
var y_4200 = (quil.core.width.call(null) * 0.9);
var tr__1734__auto___4201 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
quil.core.push_matrix.call(null);

try{quil.core.translate.call(null,tr__1734__auto___4201);

quil.core.ellipse.call(null,x_4199,y_4200,(100),(100));
}finally {quil.core.pop_matrix.call(null);
}
quil.core.fill.call(null,new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(enemy),(255),(255));

var y_offset = new cljs.core.Keyword(null,"y_offset","y_offset",1125597970).cljs$core$IFn$_invoke$arity$1(enemy);
var y = (quil.core.height.call(null) * y_offset);
var x = (quil.core.width.call(null) * 0.9);
var tr__1734__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null);
quil.core.push_matrix.call(null);

try{quil.core.translate.call(null,tr__1734__auto__);

return quil.core.ellipse.call(null,x,y,(100),(100));
}finally {quil.core.pop_matrix.call(null);
}});
ludum44js.core.run_sketch = (function ludum44js$core$run_sketch(){
ludum44js.core.ludum44js = (function ludum44js$core$run_sketch_$_ludum44js(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"ludum44js",new cljs.core.Keyword(null,"mouse-clicked","mouse-clicked",-199339421),((cljs.core.fn_QMARK_.call(null,ludum44js.core.do_circle))?(function() { 
var G__4202__delegate = function (args){
return cljs.core.apply.call(null,ludum44js.core.do_circle,args);
};
var G__4202 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__4203__i = 0, G__4203__a = new Array(arguments.length -  0);
while (G__4203__i < G__4203__a.length) {G__4203__a[G__4203__i] = arguments[G__4203__i + 0]; ++G__4203__i;}
  args = new cljs.core.IndexedSeq(G__4203__a,0,null);
} 
return G__4202__delegate.call(this,args);};
G__4202.cljs$lang$maxFixedArity = 0;
G__4202.cljs$lang$applyTo = (function (arglist__4204){
var args = cljs.core.seq(arglist__4204);
return G__4202__delegate(args);
});
G__4202.cljs$core$IFn$_invoke$arity$variadic = G__4202__delegate;
return G__4202;
})()
:ludum44js.core.do_circle),new cljs.core.Keyword(null,"update","update",1045576396),((cljs.core.fn_QMARK_.call(null,ludum44js.core.update_state))?(function() { 
var G__4205__delegate = function (args){
return cljs.core.apply.call(null,ludum44js.core.update_state,args);
};
var G__4205 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__4206__i = 0, G__4206__a = new Array(arguments.length -  0);
while (G__4206__i < G__4206__a.length) {G__4206__a[G__4206__i] = arguments[G__4206__i + 0]; ++G__4206__i;}
  args = new cljs.core.IndexedSeq(G__4206__a,0,null);
} 
return G__4205__delegate.call(this,args);};
G__4205.cljs$lang$maxFixedArity = 0;
G__4205.cljs$lang$applyTo = (function (arglist__4207){
var args = cljs.core.seq(arglist__4207);
return G__4205__delegate(args);
});
G__4205.cljs$core$IFn$_invoke$arity$variadic = G__4205__delegate;
return G__4205;
})()
:ludum44js.core.update_state),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(500),(500)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,ludum44js.core.setup))?(function() { 
var G__4208__delegate = function (args){
return cljs.core.apply.call(null,ludum44js.core.setup,args);
};
var G__4208 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__4209__i = 0, G__4209__a = new Array(arguments.length -  0);
while (G__4209__i < G__4209__a.length) {G__4209__a[G__4209__i] = arguments[G__4209__i + 0]; ++G__4209__i;}
  args = new cljs.core.IndexedSeq(G__4209__a,0,null);
} 
return G__4208__delegate.call(this,args);};
G__4208.cljs$lang$maxFixedArity = 0;
G__4208.cljs$lang$applyTo = (function (arglist__4210){
var args = cljs.core.seq(arglist__4210);
return G__4208__delegate(args);
});
G__4208.cljs$core$IFn$_invoke$arity$variadic = G__4208__delegate;
return G__4208;
})()
:ludum44js.core.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,ludum44js.core.draw_state))?(function() { 
var G__4211__delegate = function (args){
return cljs.core.apply.call(null,ludum44js.core.draw_state,args);
};
var G__4211 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__4212__i = 0, G__4212__a = new Array(arguments.length -  0);
while (G__4212__i < G__4212__a.length) {G__4212__a[G__4212__i] = arguments[G__4212__i + 0]; ++G__4212__i;}
  args = new cljs.core.IndexedSeq(G__4212__a,0,null);
} 
return G__4211__delegate.call(this,args);};
G__4211.cljs$lang$maxFixedArity = 0;
G__4211.cljs$lang$applyTo = (function (arglist__4213){
var args = cljs.core.seq(arglist__4213);
return G__4211__delegate(args);
});
G__4211.cljs$core$IFn$_invoke$arity$variadic = G__4211__delegate;
return G__4211;
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
