module.exports = function (grunt) {
	'use strict';

	// Run grunt tasks concurrently.
	// @see https://github.com/sindresorhus/grunt-concurrent
	return {
		images: ['newer:imagemin', 'newer:svgmin']
	};
};