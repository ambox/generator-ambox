module.exports = function (grunt, options) {
	'use strict';

	var config = {};

	// Run each command for each modules
	options.scaffold.modules.forEach(function (module) {
		// Optimize RequireJS projects using r.js
		// @see https://github.com/gruntjs/grunt-contrib-requirejs
		config[module] = {
			options: {
				baseUrl: '<%= scaffold.src %>/scripts',
				include: ['requirejs', 'config-'+ module],
				mainConfigFile: '<%= scaffold.src %>/scripts/config-'+ module +'.js',
				out: '<%= scaffold.tmp %>/scripts/body-'+ module +'.min.js',
				optimize: 'none', // none|uglify2
				optimizeCss: 'none',
				uglify2: { mangle: false },
				fileExclusionRegExp: /^(.git|node_modules)$/,
				preserveLicenseComments: false,
				findNestedDependencies: true,
				generateSourceMaps: false,
				removeCombined: true,
				useStrict: true,
				wrap: {
					start: '(function(window, document, undefined){',
					end: '})(this, document);'
				}
			}
		};
	});
	
	// @see tasks/scaffold.js
	return config;
};