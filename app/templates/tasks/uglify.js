module.exports = function (grunt) {
	'use strict';

	// Minify files with UglifyJS.
	// @see https://github.com/gruntjs/grunt-contrib-uglify
	return {
		aids: {
			files: {
				'<%= scaffold.static %>/scripts/modernizr.min.js': [
					'<%= scaffold.vendors %>/modernizr/modernizr.js'
				]
			}
		},
		boot: {
			files: {
				'<%= scaffold.static %>/scripts/boot.min.js': [
					'<%= scaffold.source %>/scripts/boot.bundle.js'
				]
			}
		}
	};
};