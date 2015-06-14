// Generated on <%= (new Date).toISOString().split('T')[0] %> using <%= pkg.name %> <%= pkg.version %>
module.exports = function (grunt) {
	'use strict';

	// Globbing
	// for performance reasons we're only matching one level down:
	// 'test/spec/{,*/}*.js'

	// use this if you want to recursively match all subfolders:
	// 'test/spec/**/*.js'

	require('load-grunt-tasks')(grunt);
	require('time-grunt')(grunt);

	var execute = function(pack<% if (includeBower) { %>, bowerrc<% } %>) {<% if (includeBower) { %>
		pack.scaffold.vendors = bowerrc.directory;<% } %>
		require('load-grunt-config')(grunt, {
			data: pack,
			configPath: require('path').join(process.cwd(), 'tasks'),
			loadGruntTasks: {
				config: pack,
				scope: 'devDependencies'
			}
		});
	};

	execute(grunt.file.readJSON('package.json')<% if (includeBower) { %>, grunt.file.readJSON('.bowerrc')<% } %>);
};
