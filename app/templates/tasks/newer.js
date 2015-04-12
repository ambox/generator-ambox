module.exports = function (grunt) {
	'use strict';

	// Configure Grunt tasks to run with newer files only.
	// @see https://github.com/tschaub/grunt-newer
	return {
		options: {
			cache: 'node_modules/grunt-newer/.cache'
		}
	};
};