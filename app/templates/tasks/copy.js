module.exports = function (grunt) {
	'use strict';

	// Put files not handled in other tasks here
	// @see https://github.com/gruntjs/grunt-contrib-copy
	return {
		static: {
			files: [{
				expand: true,
				dot: true,
				cwd: '<%= scaffold.source %>',
				dest: '<%= scaffold.static %>',
				src: [
					'index.html',
					'views/**/*.{html,swf}',
					'*.{ico,png,txt}',
					'images/**/*.webp',
					'styles/typography/**/*.*'
				]
			}]
		}
	};
};
