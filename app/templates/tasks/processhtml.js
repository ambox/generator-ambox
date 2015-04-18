module.exports = function (grunt) {
	'use strict';

	// Process html files at build time to modify them depending on the release environment.
	// @see https://github.com/dciccale/grunt-processhtml
	return {
		options: {
			includeBase: null,
			process: false,
			data: {}
		},
		index: {
			files: {
				'<%%= scaffold.static %>/index.html': [<% if (includeJade) { %>
					'<%%= scaffold.static %>/index.html'<% } else { %>
					'<%%= scaffold.source %>/index.html'<% } %>
				]
			}
		}
	};
};