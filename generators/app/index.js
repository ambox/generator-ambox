'use strict';

var FrontEndGenerator = require('../front/index');
var BackEndGenerator = require('../back/index');
var Utils = require('../utils');
var yogen = require('yeoman-generator');
var yosay = require('yosay');
var chalk = require('chalk');
var Proto = require('Proto');
var path = require('path');

var FullStackGenerator = new Proto(yogen.Base, {
  constructor:function(){
    this.super(args, options);
    this.option('skip-message', { type:Boolean, desc:'Skip hello', defaults:true });
    this.argument('name', { type:String, defaults:Utils.appname(), required:false });
  },

  initializing:function(){
    this.on('end', this._onEnd);
    this.pack = Utils.readJsonSync(path.join(__dirname, '../../package.json'));
    this.name = Utils.appname(this.pack.name.replace(/^generator\-/, ''));
    this.composeWith(this.name +':back', { options:this.options, args:this.args });
    this.composeWith(this.name +':front', { options:this.options, args:this.args });
  },

  messaging:function(){
    if(!this.options['skip-message']){
      this.log(yosay('Welcome to the wondrous '+ chalk.red('Ambox fullstack project') +' generator!'));
    }
  },

  _onEnd:function(){
    if(!this.options['skip-install']){
      // N/A yet.
    }
  }
});

module.exports = FullStackGenerator;
