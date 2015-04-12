'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var fsx = require('fs-extra')

module.exports = yeoman.generators.Base.extend({
  constructor: function() {
    yeoman.generators.Base.apply(this, arguments);
    this.pkg = require('../package.json');
  },

  hasFeature: function(list, feat) {
    return (list || []).indexOf(feat) !== -1;
  },

  hasCfg: function(file) {
    return fsx.readJsonSync(file, { throws: false });
  },

  askFor: function() {
    var done = this.async();
    this.log(yosay('Welcome to the wondrous ' + chalk.red('Ambox') + ' generator!'));
    var prompts = [];
    this.prompt(prompts, function (answers) {
      var features = answers.features;
      done();
    }.bind(this));
  },

  writing: {
    tree: function() {
      this.log(chalk.magenta('Tree:'));
      this.mkdir('source/images');
      this.mkdir('source/scripts');
      this.mkdir('source/styles/env');
      this.mkdir('source/styles/theme/typography');
      this.mkdir('source/styles/theme/modules');
      this.mkdir('source/styles/theme/views');
      this.mkdir('tasks');
    },
    
    work: function() {
      this.copy('README.md', 'readme.md');
    },

    bower: function() {
      this.log(chalk.green(' ✓', chalk.white('Bower')));
      this.template('_component.json', 'component.json', this);
      this.template('_bower.json', 'bower.json', this);
      this.copy('bower.rc', '.bowerrc');
    },
    
    grunt: function() {
      this.log(chalk.green('\n ✓', chalk.white('Grunt')));
      this.copy('_gruntfile.js', 'gruntfile.js');
    },

    npm: function() {
      this.log(chalk.green('\n ✓', chalk.white('NPM')));
      this.template('_package.json', 'package.json', this);
    },
    
    git: function() {
      this.log(chalk.green('\n ✓', chalk.white('Git')));
      this.copy('git.ignore', '.gitignore');
    },

    bem: function () {
      this.log(chalk.green('\n ✓', chalk.white('BEM')));
      this.copy('source/styles/env/_Mixins.sass', 'source/styles/env/_Mixins.sass');
      this.copy('source/styles/env/_Reset.sass', 'source/styles/env/_Reset.sass');
      this.copy('source/styles/env/_Vars.sass', 'source/styles/env/_Vars.sass');
      this.copy('source/styles/theme/_Animations.sass', 'source/styles/theme/_Animations.sass');
      this.copy('source/styles/theme/_Breakpoints.sass', 'source/styles/theme/_Breakpoints.sass');
      this.copy('source/styles/theme/_Elements.sass', 'source/styles/theme/_Elements.sass');
      this.copy('source/styles/theme/_Fonts.sass', 'source/styles/theme/_Fonts.sass');
      this.copy('source/styles/theme/_Layout.sass', 'source/styles/theme/_Layout.sass');
      this.copy('source/styles/theme/_Modules.sass', 'source/styles/theme/_Modules.sass');
      this.copy('source/styles/theme/_States.sass', 'source/styles/theme/_States.sass');
      this.copy('source/styles/theme/_Vars.sass', 'source/styles/theme/_Vars.sass');
      this.copy('source/styles/app.sass', 'source/styles/app.sass');
    },

    images: function() {
      this.log(chalk.green('\n ✓', chalk.white('Images')));
      this.copy('source/images/.gitkeep', 'source/images/.gitkeep');
    },

    scripts: function() {
      this.log(chalk.green('\n ✓', chalk.white('Behaviors')));
      this.copy('source/scripts/boot.js', 'source/scripts/boot.js');
    },

    tasks: function() {
      this.log(chalk.green('\n ✓', chalk.white('Tasks')));
      this.copy('tasks/autoprefixer.js', 'tasks/autoprefixer.js');
      this.copy('tasks/browserify.js', 'tasks/browserify.js');
      this.copy('tasks/clean.js', 'tasks/clean.js');
      this.copy('tasks/concurrent.js', 'tasks/concurrent.js');
      this.copy('tasks/copy.js', 'tasks/copy.js');
      this.copy('tasks/cssmin.js', 'tasks/cssmin.js');
      this.copy('tasks/exec.js', 'tasks/exec.js');
      this.copy('tasks/htmlcompressor.js', 'tasks/htmlcompressor.js');
      this.copy('tasks/imagemin.js', 'tasks/imagemin.js');
      this.copy('tasks/jade.js', 'tasks/jade.js');
      this.copy('tasks/jshint.js', 'tasks/jshint.js');
      this.copy('tasks/newer.js', 'tasks/newer.js');
      this.copy('tasks/nodemon.js', 'tasks/nodemon.js');
      this.copy('tasks/processhtml.js', 'tasks/processhtml.js');
      this.copy('tasks/sass.js', 'tasks/sass.js');
      this.copy('tasks/svgmin.js', 'tasks/svgmin.js');
      this.copy('tasks/uglify.js', 'tasks/uglify.js');
      this.copy('tasks/watch.js', 'tasks/watch.js');
      this.copy('tasks/aliases.yaml', 'tasks/aliases.yaml');
    },

    writeIndex: function() {
      this.template('source/index.jade', 'source/index.jade', this);
    }
  },

  install: function() {
    this.hasCfg('component.json') && this.spawnCommand('component', ['install']);
    this.installDependencies();
    this.bowerInstall();
  }
});
