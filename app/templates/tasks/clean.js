module.exports = function (grunt) {
	'use strict';

	// Clean files and folders.
	// @see https://github.com/gruntjs/grunt-contrib-clean
	return {
		scripts: '<%= scaffold.static %>/scripts',
		styles: '<%= scaffold.static %>/styles',
		images: '<%= scaffold.static %>/images',
		markup: '<%= scaffold.static %>/**/*.html',
		tmp: '<%= scaffold.tmp %>/'
	};
};