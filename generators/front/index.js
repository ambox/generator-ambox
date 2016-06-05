'use strict';

var Utils = require('../utils');
var Proto = require('Proto');
var yogen = require('yeoman-generator');
var mkdirp = require('mkdirp');
var yosay = require('yosay');
var chalk = require('chalk');
var path = require('path');

var FrontEndGenerator = new Proto(yogen.NamedBase, {
  constructor:function(args, options){
    this.super(args, options);
    this.option('skip-message', { type:Boolean, desc:'Skips the welcome message', defaults:false });
  },

  initializing:function(){
    this.on('end', this._onEnd);
    this.pack = Utils.readJsonSync(path.join(__dirname, '../../package.json'));
    this.name = Utils.appname(this.name);
    this.answers = {};
  },

  prompting:function(){
    if(!this.options['skip-message']){
      this.log(yosay('Welcome to the wondrous '+ chalk.green('Ambox front-end project') +' generator!'));
    }
  },

  ask4ModuleLoader:function(){
    var done = this.async();
    this.prompt([{
      type:'confirm',
      name:'require',
      message:'Would you like to use RequireJS?',
      default:false
    }, {
      type:'confirm',
      name:'browserify',
      message:'Would you like to use Browserify?',
      default:false,
      when:function(answers){
        return !answers.require;
      }
    }, {
      type:'confirm',
      name:'es6',
      message:'Would you like to use ES6?',
      default:false,
      when:function(answers){
        return !answers.require;
      }
    }, {
      type:'confirm',
      name:'ts',
      message:'Would you like to use TypeScript?',
      default:false,
      when:function(answers){
        return !answers.require;
      }
    }], function(answers){
      this.answers.require = !!(answers.require);
      this.answers.browserify = !!(answers.browserify);
      this.answers.es6 = !!(answers.es6);
      this.answers.ts = !!(answers.ts);
      this.answers.useModuleLoader = Utils.hasFeature(this.answers, 'require|browserify|es6|ts');
      done();
    }.bind(this));
  },

  ask4PreProcessor:function(){
    var done = this.async();
    this.prompt([{
      type:'confirm',
      name:'styl',
      message:'Would you like to use Stylus?',
      default:false
    }, {
      type:'confirm',
      name:'sass',
      message:'Would you like to use Sass?',
      default:false,
      when:function(answers){
        return !answers.styl;
      }
    }, {
      type:'confirm',
      name:'sass_syntax',
      message:'Would you like to use a indentation-oriented syntax for Sass?',
      default:false,
      when:function(answers){
        return answers.sass;
      }
    }], function(answers){
      this.answers.styl = !!(answers.styl);
      this.answers.sass = !!(answers.sass && answers.sass_syntax);
      this.answers.scss = !!(answers.sass && !answers.sass_syntax);
      this.answers.useCSSPreProcessor = Utils.hasFeature(this.answers, 'styl|sass|scss');
      done();
    }.bind(this));
  },

  ask4TaskRunner:function(){
    var done = this.async();
    this.prompt([{
      type:'confirm',
      name:'gulp',
      message:'Would you like to use Gulp?',
      default:false
    }, {
      type:'confirm',
      name:'grunt',
      message:'Would you like to use Grunt?',
      default:false,
      when:function(answers){
        return !answers.gulp;
      }
    }], function(answers){
      this.answers.gulp = !!(answers.gulp);
      this.answers.grunt = !!(answers.grunt);
      this.answers.useTaskRunner = Utils.hasFeature(this.answers, 'grunt|gulp');
      done();
    }.bind(this));
  },

  ask4Package:function(){
    var done = this.async();
    this.log([
      'This utility will walk you through creating a '+ chalk.gray('package.json') +' file.',
      'It only covers the most common items, and tries to guess sensible defaults.', '',
      'See '+ chalk.green('`npm help json`') +' for definitive documentation on these fields',
      'and exactly what they do.', '',
      'Use '+ chalk.green('`npm install <pkg> --save`') +' afterwards to install a package and',
      'save it as a dependency in the '+ chalk.gray('package.json') +' file.'
    ].join('\n'));
    this.prompt([
      {
        type:'input',
        name:'name',
        message:'name:',
        default:Utils.appname()
      },
      {
        type:'input',
        name:'version',
        message:'version:',
        default:this.pack.version
      },
      {
        type:'input',
        name:'description',
        message:'description:'
      },
      {
        type:'input',
        name:'entry_point',
        message:'entry point:'
      },
      {
        type:'input',
        name:'test_command',
        message:'test command:'
      },
      {
        type:'input',
        name:'repository',
        message:'repository:'
      },
      {
        type:'input',
        name:'keywords',
        message:'keywords:'
      },
      {
        type:'input',
        name:'author',
        message:'author:',
        default:'Adrian C. Miranda'
      },
      {
        type:'input',
        name:'license',
        message:'license:',
        default:'ISC'
      }
    ], function(answers){
      answers.name = answers.name;
      answers.version = answers.version;
      answers.description = answers.description;
      answers.entry_point = Utils.tstringify(answers.entry_point);
      answers.test_command = answers.test_command;
      answers.repository = answers.repository;
      answers.keywords = [].concat(Utils.tstringify(answers.keywords));
      answers.author = answers.author;
      answers.license = answers.license;
      this.answers.package = answers;
      done();
    }.bind(this));
  },

  ask4Continue:function(){
    var done = this.async();
    this.log(chalk.cyan.underline.bold('Answers:\n'), JSON.stringify(this.answers, null, 2));
    this.prompt([{
      type:'input',
      name:'continue',
      message:'Is this ok?',
      default:true
    }], function(answers){
      !!answers.continue && done();
    }.bind(this));
  },

  writing:
  {
    moduleLoader:function()
    {
    },
    scripts:function()
    {
    },
    styles:function()
    {
    },
    taskRunners:function()
    {
    },
    package:function()
    {
      this.fs.copyTpl
      (
        this.templatePath('_package.json'),
        this.destinationPath('package.json'),
        this.answers.package
      );
    }
  },

  _onEnd:function(){
    if(!this.options['skip-install']){
      // console.log(chalk.green('Installing front-end dependencies for you....'));
      // console.log(chalk.yellow('This may take a couple minutes.'));
      // this.spawnCommand('npm', ['start'], { cwd:'./' });
    }
  }
});

module.exports = FrontEndGenerator;
