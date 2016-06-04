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
    var done = this.async();
    var prompts = [
      {
        type:'input',
        name:'dirname',
        message:'...?\n',
        default:'./'
      }
    ];
    if(/^win/.test(process.platform)){
      prompts = prompts.concat([
      ]);
    }else{
      prompts.push({});
    }
    this.prompt(prompts, Proto.bind(function(answers){
      if(/^win/.test(process.platform)){
      }else{
      }
      done();
    }, this));
  },

  writing:{
    scripts:function(){
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
