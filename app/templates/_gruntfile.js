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

	function execute(path, gruntConfig, vendors, pack) {
		pack.scaffold.vendors = vendors;
		gruntConfig(grunt, {
			data: pack,
			configPath: path.join(process.cwd(), 'tasks'),
			loadGruntTasks: {
				config: pack,
				scope: 'devDependencies'
			}
		});
	}

	execute(require('path'), require('load-grunt-config'),
		grunt.file.readJSON('.bowerrc').directory,
		grunt.file.readJSON('package.json')
	);
};