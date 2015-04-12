module.exports = function (grunt) {
	'use strict';

	// Grunt task to run nodemon.
	// @see https://github.com/ChrisWren/grunt-nodemon
	return {
		options: {},
		server: {
			script : 'server.js'
		}
	};
};