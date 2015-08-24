module.exports = function (grunt, options) {
	'use strict';

	var config = {};

	// Run each command for each modules
	options.scaffold.modules.forEach(function (module) {
		// Optimize RequireJS projects using r.js
		// @see https://github.com/jrburke/r.js/blob/master/build/example.build.js
		config[module] = {
			options: {
				baseUrl: '<%= scaffold.source %>/scripts',
				include: ['requirejs', 'config-'+ module],
				mainConfigFile: '<%= scaffold.source %>/scripts/config-'+ module +'.js',
				out: '<%= scaffold.static %>/scripts/body-'+ module +'.min.js',
				optimize: 'uglify2', // none|uglify2
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
	
	return config;
};