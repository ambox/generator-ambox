'use strict';

var camelCase = require('lodash.camelcase');
var path = require('path');
var fsx = require('fs-extra');

exports.readJsonSync = function(filepath, opts){
  if(typeof filepath === 'string')
    return fsx.readJsonSync(filepath, Object.assign({ throws:false }, opts));
  return {};
};

exports.hasFeature = function(val, feature){
  return Array.isArray(val)? !!~val.indexOf(feature) : !!val;
};

exports.appname = function(value){
  if(typeof value === 'string'){
    value = camelCase(value);
    return value[0].toUpperCase() + value.substr(1);
  }
  return path.basename(process.cwd()).replace(/[^\w\s]+?/g, ' ');
};
