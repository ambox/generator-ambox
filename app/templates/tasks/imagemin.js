module.exports = function (grunt) {
	'use strict';

	// mozjpeg plugin for imagemin.
	// @see https://github.com/imagemin/imagemin-mozjpeg
	var mozjpeg = require('imagemin-mozjpeg');
	
	// Minify PNG and JPEG images.
	// @see https://github.com/gruntjs/grunt-contrib-imagemin
	return {
		options: {
			optimizationLevel: 2,
			svgoPlugins: [{ removeViewBox: false }],
			use: [mozjpeg({ quality: '65-80' })],
			cache: false
		},
		static: {
			files: [{
				expand: true,
				cwd: '<%= scaffold.source %>/images/',
				src: ['**/*.{png,jpg,jpeg,gif}'],
				dest: '<%= scaffold.static %>/images/'
			}]
		}
	};
};