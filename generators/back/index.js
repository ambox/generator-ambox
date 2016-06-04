'use strict';

var Utils = require('../utils');
var Proto = require('Proto');
var yogen = require('yeoman-generator');
var mkdirp = require('mkdirp');
var yosay = require('yosay');
var chalk = require('chalk');
var path = require('path');

var BackEndGenerator = new Proto(yogen.NamedBase, {
  constructor:function(args, options){
    this.super(args, options);
    this.on('end', this._onEnd);
    this.option('skip-message', { type:Boolean, desc:'Skip hello', defaults:false });
    this.pack = Utils.readJsonSync(path.join(__dirname, '../../package.json'));
    this.name = Utils.appname(this.name);
  },

  message:function(){
    if(!this.options['skip-message']){
      this.log(yosay('Welcome to the wondrous '+ chalk.red('Ambox back-end project') +' generator!'));
    }
  },

  prompting:function(){
    var done = this.async();
    this.prompt([{
      type:'input',
      name:'dirname',
      message:'Em que diretório você deseja gerar o projeto?\n',
      default:'./'
    }], Proto.bind(function(answers){
      done();
    }, this));
  },

  _onEnd:function(){
    if(!this.options['skip-install']){
      console.log(chalk.green('Installing back-end dependencies for you....'));
      console.log(chalk.yellow('This may take a couple minutes.'));
      // this.spawnCommand('bashCommand', ['parameter']);
    }
  }
});

module.exports = BackEndGenerator;
