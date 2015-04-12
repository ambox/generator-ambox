module.exports = function (grunt) {
	'use strict';

	// Connect middleware for adding the livereload script to the response.
	// @see https://github.com/intesso/connect-livereload
	var port = 35729;
	var connection = require('connect-livereload')({ port: port });
	var mountFolder = function(connect, dir) {
		return connect.static(require('path').resolve(dir));
	};

	// Run tasks whenever watched files change.
	// @see https://github.com/gruntjs/grunt-contrib-watch
	return {
		options: {
			livereload: port,
			spawn: false
		},
		scripts: {
			files: ['<%= scaffold.source %>/scripts/**/*.js', '!<%= scaffold.vendors %>/**/*.js'],
			tasks: ['scripts']
		},
		styles: {
			files: ['<%= scaffold.source %>/styles/**/*.{scss,sass}'],
			tasks: ['styles']
		},
		images: {
			files: ['<%= scaffold.source %>/images/**/*.{png,jpg,jpeg,gif,webp,ico}'],
			tasks: ['images']
		},
		markup: {
			files: ['<%= scaffold.source %>/{,*/}*.{html,jade}'],
			tasks: ['markup']
		}
	};
};