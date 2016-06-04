'use strict';

var camelCase = require('lodash.camelcase');
var capitalize = require('lodash.capitalize');
var path = require('path');
var fsx = require('fs-extra');

exports.readJsonSync = function(filepath, opts){
  if(typeof filepath === 'string')
    return fsx.readJsonSync(filepath, Object.assign({ throws:false }, opts));
  return {};
};

exports.hasFeature = function(list, feature){
  return !!~(Array.isArray(list)? list : []).indexOf(feature);
};

exports.appname = function(value){
  if(value){
    value = camelCase(value);
    return value[0].toUpperCase() + value.substr(1);
  }
  return path.basename(process.cwd()).replace(/[^\w\s]+?/g, ' ');
};
