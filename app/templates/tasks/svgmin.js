module.exports = function (grunt) {
	'use strict';

	// Minify SVG.
	// @see https://github.com/sindresorhus/grunt-svgmin
	return {
		options: {
			plugins: [
				{ removeViewBox: true },
				{ removeUselessStrokeAndFill: true },
				{ removeEmptyAttrs: true }
			]
		},
		static: {
			files: [{
				expand: true,
				cwd: '<%= scaffold.source %>/images/',
				src: '**/*.svg',
				dest: '<%= scaffold.static %>/images/'
			}]
		}
	};
};