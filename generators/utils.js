'use strict';

var camelCase = require('lodash.camelcase');
var path = require('path');
var fsx = require('fs-extra');

exports.readJsonSync = function(filepath, opts){
  if(typeof filepath === 'string')
    return fsx.readJsonSync(filepath, Object.assign({ throws:false }, opts));
  return {};
};

exports.appname = function(val){
  if(typeof val === 'string'){
    val = camelCase(val);
    return val[0].toUpperCase() + val.substr(1);
  }
  return path.basename(process.cwd()).replace(/[^\w\s]+?/g, ' ');
};

exports.tstringify = function(val){
  val = String(val).replace(/\s{1,}/g, ' ').trim().split(',').map(function(tag){
    return tag.trim();
  }).filter(function(tag){
    return tag.trim() !== '';
  });
  return JSON.stringify(val.length > 1? val : val[0]);
};

exports.hasFeature = function(scope, keys){
  return String(keys).trim().split('|').some(function(feature){;
    return Array.isArray(scope)? !!~scope.indexOf(feature) :
    Object(scope) === scope? !!scope[feature] : !!scope;
  });
};
