module.exports = function (grunt) {
	'use strict';

	// Grunt task for node-browserify.
	// @see https://github.com/jmreidy/grunt-browserify
	// @see https://github.com/componentjs/component
	// @see https://github.com/thlorenz/browserify-shim
	// @see https://github.com/jaredhanson/deamdify
	// @see https://github.com/eugeneware/deglobalify
	return {
		options: {
			transform: ['browserify-shim', 'deamdify', 'deglobalify'],
			browserifyOptions: {
				extensions: ['.js', '.jsx', '.coffee'],
				debug: true,
				paths: [
					__dirname + '/../<%= scaffold.source %>/scripts/'
				]
			}
		},
		static: {
			files: {
				'<%= scaffold.source %>/scripts/boot.bundle.js': [
					'<%= scaffold.source %>/scripts/boot.js'
				]
			}
		}
	};
};