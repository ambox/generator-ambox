module.exports = function (grunt) {
	'use strict';

	// Compress CSS files.
	// @see https://github.com/gruntjs/grunt-contrib-cssmin
	return {
		static: {
			files: [{
				expand: true,
				cwd: '<%= scaffold.source %>/styles/',
				src: ['*.css', '!*.min.css'],
				dest: '<%= scaffold.static %>/styles/',
				ext: '.min.css'
			}]
		}
	};
};