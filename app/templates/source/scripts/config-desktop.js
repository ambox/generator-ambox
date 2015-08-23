/* global require */
require.config({
	waitSeconds:10,
	baseUrl:'scripts',
	paths:{
		'requirejs':'vendors/requirejs/require',
		
		// Common
		'trace':'vendors/trace/trace',
		'class':'vendors/class/dist/class',
		
		// jQuery
		'jquery': 'vendors/jquery/jquery',
		'jquery.gsap': 'vendors/gsap/jquery.gsap',
		
		// Zepto
		'zepto':'vendors/zepto/src/zepto',
		'zepto.selector':'vendors/zepto/src/selector',
		'zepto.event':'vendors/zepto/src/event',
		'zepto.ajax':'vendors/zepto/src/ajax',
		'zepto.form':'vendors/zepto/src/form',
		'zepto.ie':'vendors/zepto/src/ie',
		'zepto.touch':'vendors/zepto/src/touch',
		'zepto.callbacks':'vendors/zepto/src/callbacks',
		'zepto.data':'vendors/zepto/src/data',
		'zepto.assets':'vendors/zepto/src/assets',
		'zepto.deferred':'vendors/zepto/src/deferred',
		'zepto.detect':'vendors/zepto/src/detect',
		'zepto.fx_methods':'vendors/zepto/src/fx_methods',
		'zepto.fx':'vendors/zepto/src/fx',
		'zepto.gesture':'vendors/zepto/src/gesture',
		'zepto.ios3':'vendors/zepto/src/ios3',
		'zepto.stack':'vendors/zepto/src/stack',

		// GSAP
		'gsap.EasePack': 'vendors/gsap/easing/EasePack',
		'gsap.CSSPlugin': 'vendors/gsap/plugins/CSSPlugin',
		'gsap.BezierPlugin': 'vendors/gsap/plugins/BezierPlugin',
		'gsap.DirectionalRotationPlugin': 'vendors/gsap/plugins/DirectionalRotationPlugin',
		'gsap.AttrPlugin': 'vendors/gsap/plugins/AttrPlugin',
		'gsap.RoundPropsPlugin': 'vendors/gsap/plugins/RoundPropsPlugin',
		'gsap.ColorPropsPlugin': 'vendors/gsap/plugins/ColorPropsPlugin',
		'gsap.CSSRulePlugin': 'vendors/gsap/plugins/CSSRulePlugin',
		'gsap.EaselPlugin': 'vendors/gsap/plugins/EaselPlugin',
		'gsap.KineticPlugin': 'vendors/gsap/plugins/KineticPlugin',
		'gsap.RaphaelPlugin': 'vendors/gsap/plugins/RaphaelPlugin',
		'gsap.ScrollToPlugin': 'vendors/gsap/plugins/ScrollToPlugin',
		'gsap.TextPlugin': 'vendors/gsap/plugins/TextPlugin',
		'gsap.EndArrayPlugin': 'vendors/gsap/plugins/EndArrayPlugin',
		'gsap.TEMPLATE_Plugin': 'vendors/gsap/plugins/TEMPLATE_Plugin',
		'gsap.Draggable': 'vendors/utils/Draggable',
		'TimelineLite': 'vendors/gsap/TimelineLite',
		'TimelineMax': 'vendors/gsap/TimelineMax',
		'TweenLite': 'vendors/gsap/TweenLite',
		'TweenMax': 'vendors/gsap/TweenMax'
	},
	shim:{
		// jQuery
		'jquery': {
			exports: '$'
		},
		'jquery.gsap': {
			deps: ['gsap.CSSPlugin', 'jquery']
		},

		// Zepto
		'zepto':{
			exports:'$'
		},
		'zepto.selector':{
			deps:['zepto']
		},
		'zepto.event':{
			deps:['zepto']
		},
		'zepto.ajax':{
			deps:['zepto']
		},
		'zepto.form':{
			deps:['zepto']
		},
		'zepto.ie':{
			deps:['zepto']
		},
		'zepto.touch':{
			deps:['zepto']
		},
		'zepto.callbacks':{
			deps:['zepto']
		},
		'zepto.data':{
			deps:['zepto']
		},
		'zepto.assets':{
			deps:['zepto']
		},
		'zepto.deferred':{
			deps:['zepto']
		},
		'zepto.detect':{
			deps:['zepto']
		},
		'zepto.fx_methods':{
			deps:['zepto']
		},
		'zepto.fx':{
			deps:['zepto']
		},
		'zepto.gesture':{
			deps:['zepto']
		},
		'zepto.ios3':{
			deps:['zepto']
		},
		'zepto.stack':{
			deps:['zepto']
		},
		'zepto.serializeObject':{
			deps:['zepto', 'zepto.form']
		},

		// GSAP
		'gsap.Draggable': {
			deps: ['gsap.CSSPlugin'],
		},
		'gsap.EndArrayPlugin': {
			deps: ['TweenLite']
		},
		'gsap.ColorPropsPlugin': {
			deps: ['TweenLite']
		},
		'gsap.CSSRulePlugin': {
			deps: ['gsap.CSSPlugin']
		},
		'gsap.EaselPlugin': {
			deps: ['TweenLite']
		},
		'gsap.KineticPlugin': {
			deps: ['TweenLite']
		},
		'gsap.RaphaelPlugin':{
			deps: ['TweenLite']
		},
		'gsap.ScrollToPlugin': {
			deps: ['TweenLite']
		},
		'gsap.TextPlugin': {
			deps: ['TweenLite']
		},
		'gsap.EasePack': {
			deps: ['TweenLite']
		},
		'gsap.CSSPlugin': {
			deps: ['TweenLite']
		},
		'gsap.BezierPlugin': {
			deps: ['TweenLite']
		},
		'gsap.DirectionalRotationPlugin': {
			deps: ['TweenLite']
		},
		'gsap.AttrPlugin': {
			deps: ['TweenLite']
		},
		'gsap.RoundPropsPlugin': {
			deps: ['TweenLite']
		},
		'TweenLite': {
			exports: 'TweenLite'
		},
		'TweenMax': {
			deps: [/* TweenMax deps */'TimelineMax', 'gsap.EasePack', 'gsap.CSSPlugin', 'gsap.BezierPlugin', 'gsap.DirectionalRotationPlugin', 'gsap.AttrPlugin', 'gsap.RoundPropsPlugin', /* Activate */'gsap.ScrollToPlugin'],
			exports: 'TweenMax'
		},
		'TimelineLite': {
			deps: ['TweenLite'],
			exports: 'TimelineLite'
		},
		'TimelineMax': {
			deps: ['TimelineLite'],
			exports: 'TimelineMax'
		},

		// Facade
		'app/main':{
			deps:['trace', 'class', 'zepto', 'zepto.selector', 'zepto.event', 'zepto.fx']
		}
	},
	callback:function(){
		'use strict';
		require(['app/main']);
	}
});