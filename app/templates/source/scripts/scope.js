/* global define, window, $, Class */
define([], function() {
	'use strict';

	// Application namespace
	// ---------------------

	// namespace: global namespace
	var namespace = '<%= _.slugify(appname) %>';
	var scope = window.scope = window[namespace] = (window[namespace] || {});

    // externalize
	return scope;
});
