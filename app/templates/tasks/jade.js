module.exports = function (grunt) {
	'use strict';

	// Compile Jade templates.
	// @see https://github.com/gruntjs/grunt-contrib-jade
	return {
		options: {
			timestamp: '<%= grunt.template.today() %>',
			compileDebug: true,
			namespace: false,
			client: false,
			pretty: true
		},
		index: {
			files: {
				'<%= scaffold.source %>/index.html': [
					'<%= scaffold.source %>/views/*.jade', '<%= scaffold.source %>/index.jade'
				]
			}
		},
		views: {
			files: [{
				expand: true,
				cwd: '<%= scaffold.source %>/views/_jade_',
				src: ['**/*.jade'],
				dest: '<%= scaffold.source %>/views/',
				ext: '.html'
			}]
		}
	};
};
