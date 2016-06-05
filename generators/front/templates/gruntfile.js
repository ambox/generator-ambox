// Generated on <%= date %> using <%= package.name %> <%= package.version %>
module.exports = function(grunt){
  'use strict';

  // Globbing
  // for performance reasons we're only matching one level down:
  // 'test/spec/{,*/}*.js'

  // use this if you want to recursively match all subfolders:
  // 'test/spec/**/*.js'

  // This module contains utilities for handling and transforming file paths.
  // @see https://nodejs.org/api/path.html
  var path = require('path');

  // Specifics of npm's package.json handling.
  // @see https://docs.npmjs.com/files/package.json
  var pack = grunt.file.readJSON('package.json');

  // Grunt plugin that lets you break up your Gruntfile config by task.
  // @see https://www.npmjs.com/package/load-grunt-config
  var loadGruntConfig = require('load-grunt-config');

  // Load multiple grunt tasks using globbing patterns.
  // @see https://www.npmjs.com/package/load-grunt-tasks
  var loadGruntTasks = require('load-grunt-tasks');

  // The name caught from the root directory.
  // @see https://nodejs.org/api/path.html#path_path_dirname_path
  var basename = config.util.path.basename(process.cwd()).replace(/[^\w\s]+?/g, ' ');

  // Yargs the modern, pirate-themed, successor to optimist.
  // @see https://www.npmjs.com/package/yargs
  var argv = require('yargs')
  .default('release', 0).alias('r', 'release')
  .default('arguments', undefined).alias('args', 'arguments').alias('a', 'arguments')
  .default('message', '').alias('msg', 'message').alias('m', 'message')
  .default('tag', pack.version).alias('t', 'tag')
  .default('semver', 'patch').alias('s', 'semver')
  .default('commit', 'SHA').alias('c', 'commit')
  .default('branch', '').alias('b', 'branch')
  .default('files', '').alias('f', 'files')
  .default('server', '')
  .default('remote', '')
  .default('path', '')
  .default('url', '')
  .argv;

  loadGruntTasks(grunt);
  loadGruntConfig(grunt, {
    data:Object.assign({ basename:basename, argv:argv }, pack),
    configPath:path.join(process.cwd(), <% if(taskrunner > 1){ %>'grunt', <% } %> pack.appDirs.tasks),
    loadGruntTasks:{
      config:pack,
      scope:'devDependencies'
    }
  });
};
