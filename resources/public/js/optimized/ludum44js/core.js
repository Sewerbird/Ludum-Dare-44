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
ludum44js.core.current_level = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((1));
ludum44js.core.prior_bet_bid = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
ludum44js.core.prior_bet_rate = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
ludum44js.core.prior_balance = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((10));
ludum44js.core.current_bet_bid = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((5));
ludum44js.core.current_bet_rate = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((5));
ludum44js.core.current_balance = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((10));
ludum44js.core.load_image = (function ludum44js$core$load_image(image){
var path = ["/scripts/public/",cljs.core.name(image),".png"].join('');
return quil.core.load_image(path);
});
ludum44js.core.draw_image = (function ludum44js$core$draw_image(state,k,p__21391){
var vec__21392 = p__21391;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21392,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21392,(1),null);
return quil.core.image.cljs$core$IFn$_invoke$arity$3(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$images,k], null)),x,y);
});
