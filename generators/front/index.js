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
    this.option('skip-message', { type:Boolean, desc:'Skip hello', defaults:false });
  },

  initializing:function(){
    this.on('end', this._onEnd);
    this.pack = Utils.readJsonSync(path.join(__dirname, '../../package.json'));
    this.name = Utils.appname(this.name);
  },

  messaging:function(){
    if(!this.options['skip-message']){
      this.log(yosay('Welcome to the wondrous '+ chalk.green('Ambox front-end project') +' generator!'));
    }
  },

  prompting:function(){
    this.answers = {};
  },

  ask4Gulp:function(){
    var done = this.async();
    this.prompt([{
      type:'confirm',
      name:'gulp',
      message:'Would you like to use Gulp?',
      default:false
    }], function(answers){
      this.answers.gulp = answers.gulp;
      done();
    }.bind(this));
  },

  ask4Grunt:function(){
    var done = this.async();
    this.prompt([{
      type:'confirm',
      name:'grunt',
      message:'Would you like to use Grunt?',
      default:false
    }], function(answers){
      this.answers.grunt = answers.grunt;
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
        name:'main',
        message:'entry point:'
      },
      {
        type:'input',
        name:'repository',
        message:'repository:'
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
      answers.main = Utils.tstringify(answers.main);
      answers.repository = answers.repository;
      answers.author = answers.author;
      answers.license = answers.license;
      answers.useTaskManager = this.grunt || this.gulp;
      this.answers.package = answers;
      done();
    }.bind(this));
  },

  writing:
  {
    scripts:function()
    {
    },
    styles:function()
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
      console.log(chalk.green('Installing front-end dependencies for you....'));
      console.log(chalk.yellow('This may take a couple minutes.'));
      this.spawnCommand('npm', ['start'], { cwd:'./' });
    }
  }
});

module.exports = FrontEndGenerator;
