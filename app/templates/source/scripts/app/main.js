/* global define, Class, window, trace, $ */
define([
	'scope'
], function (scope) {
	'use strict';

	var WebApp = Class.create({
		initialize:function(){
			trace([
			'                      ',
			'   /     \'      /  / ',
			'  /__      ___ (  /   ',
			'  \\--`-\'-|`---\\ |  ',
			'   |\' _/   ` __/ /   ',
			'   \'._  W    ,--\'   ',
			'      |_:_._/         ',
			'                 ambox',
			'~x~x~x~x~x~x~x~x~x~x~x'
			].join('\n'));
		}
	});

	return new WebApp();
});
