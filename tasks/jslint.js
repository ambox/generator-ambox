module.exports = function(gulp, data, util){
	'use strict';

	// The classic and strict javascript lint-tool for gulp.js.
	// @see https://www.npmjs.com/package/gulp-jslint
	var jslint = require('gulp-jslint');

	return function(actionName, callback){
		return gulp.src([
      util.dir.scripts('**/*.js'),
      util.dir.tests('**/*.js')
    ]).pipe(jslint())
			.pipe(jslint.reporter('default'))
		;
	};
};
