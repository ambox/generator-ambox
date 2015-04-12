module.exports = function (grunt) {
	'use strict';

	// Compile Sass to CSS.
	// @see https://github.com/sindresorhus/grunt-sass
	return {
		static: {
			options: {
				includePaths: ['<%= scaffold.vendors %>']
			},
			files: {
				'<%= scaffold.source %>/styles/app.css': [
					'<%= scaffold.source %>/styles/app.sass'
				]
			}
		}
	};
};