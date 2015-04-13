module.exports = function (grunt) {
	'use strict';

	// Compress html with htmlcompressor.
	// @see https://code.google.com/p/htmlcompressor/
	// @see https://github.com/jney/grunt-htmlcompressor
	return {
		options: {
			type: 'html',
			preserveSsi: true,
			preserveServerScript: true
		},
		static: {
			files: [{
				expand: true,
				cwd: '<%= scaffold.static %>/',
				src: ['{,*/}*.html'],
				dest: '<%= scaffold.static %>/'
			}]
		}
	};
};