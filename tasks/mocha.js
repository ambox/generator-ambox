module.exports = function(gulp, data, util){
  'use strict';

  // Run Mocha tests.
  // @see https://www.npmjs.com/package/gulp-mocha
  var mocha = require('gulp-mocha');

  return function(actionName, callback){
    return gulp.src([
      util.dir.tests('**/*.js'),
      util.dir.scripts('**/*.js')
    ], { read:false }).pipe(mocha({ reporter:'nyan' }));
  };
};
