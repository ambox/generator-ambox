// Generated on <%= (new Date).toISOString().split('T')[0] %> using <%= pkg.name %> <%= pkg.version %>
module.exports = function (grunt) {
	'use strict';

	// Globbing
	// for performance reasons we're only matching one level down:
	// 'test/spec/{,*/}*.js'

	// use this if you want to recursively match all subfolders:
	// 'test/spec/**/*.js'
  
  // Load multiple grunt tasks using globbing patterns
	// @see https://www.npmjs.com/package/load-grunt-tasks
	require('load-grunt-tasks')(grunt);
	
  // Display the elapsed execution time of grunt tasks
	// @see https://www.npmjs.com/package/time-grunt
	require('time-grunt')(grunt);
	
	var readOptionalJSON = function(filepath) {
		var data = {};
		try {
			data = JSON.parse(require('strip-json-comments')(
				require('fs').readFileSync(filepath, { encoding: 'utf8' })
			));
		} catch(e){}
		return data;
	};

	var execute = function(pack<% if (includeBower) { %>, bowerrc<% } %>) {<% if (includeBower) { %>
		pack.scaffold.vendors = bowerrc.directory;<% } %>
		// Grunt plugin that lets you break up your Gruntfile config by task
		// @see https://www.npmjs.com/package/load-grunt-config
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
