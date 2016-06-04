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
  initializing:function(){
    this.option('skip-message', { type:Boolean, desc:'Skip hello', defaults:true });
    this.argument('name', { type:String, required:false, defaults:Utils.appname() });
    this.name = Utils.appname(this.name);
    this.pack = Utils.readJsonSync(path.join(__dirname, '../../package.json'));
    this.name = this.pack.name.replace(/^generator\-/, '');
    this.log(yosay('Welcome to the wondrous '+ chalk.red('Ambox fullstack project') +' generator!'));
    this.composeWith(this.name +':back', { options:this.options, args:this.args });
    this.composeWith(this.name +':front', { options:this.options, args:this.args });
  }
});

module.exports = FullStackGenerator;
