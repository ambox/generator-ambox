module.exports = function (grunt) {
	'use strict';

	// Minify files with UglifyJS.
	// @see https://github.com/gruntjs/grunt-contrib-uglify
	return {<% if (hasHTML5Feat) { %>
		aids: {
			files: {<% if (includeModernizr) { %>
				'<%%= scaffold.static %>/scripts/modernizr.min.js': [
					'<%%= scaffold.vendors %>/modernizr/modernizr.js'
				]<% } else { if (includeHTML5Shiv) { %>
				'<%%= scaffold.static %>/scripts/html5shiv.min.js': [
					'<%%= scaffold.vendors %>/html5shiv/dist/html5shiv.js'
				]<% }} %>
			}
		},<% } %>
		boot: {
			options: {
				mangle: false,
				sourceMap: '<%%= scaffold.static %>/scripts/boot.min.map'
			},
			files: {
				'<%%= scaffold.static %>/scripts/boot.min.js': [
					'<%%= scaffold.source %>/scripts/boot.bundle.js'
				]
			}
		}
	};
};