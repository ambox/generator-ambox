module.exports = function (grunt) {
	'use strict';

	// Stylish reporter for JSHint.
	// @see https://github.com/sindresorhus/jshint-stylish
	var stylish = require('jshint-stylish');

	// Validate files with JSHint.
	// @see https://github.com/gruntjs/grunt-contrib-jshint
	return {
		options: {
			ignores: ['node_modules', '<%%= scaffold.source %>/scripts/{,*/}*.bundle.js'],
			predef: ['require', 'define'<% if (includeModernizr) { %>, 'Modernizr'<% } %>],
			reporter: stylish,
			browserify: true,
			quotmark: true,
			indent: 2,
			esnext: true,
			browser: true,
			node: true,
			bitwise: false,
			camelcase: true,
			curly: true,
			eqeqeq: true,
			immed: true,
			latedef: true,
			newcap: true,
			noarg: true,
			undef: true,
			unused: false,
			strict: true,
			expr: true,
			trailing: true
		},
		static: [
			'<%%= scaffold.source %>/scripts/**/*.js',
			'!<%%= scaffold.vendors %>/**/*.js'
		]
	}
};


  