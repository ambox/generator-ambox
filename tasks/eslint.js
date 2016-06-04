module.exports = function(gulp, data, util){
	'use strict';

	// A gulp plugin for processing files with ESLint.
	// @see https://www.npmjs.com/package/gulp-eslint
	var eslint = require('gulp-eslint');

	return function(actionName, callback){
		return gulp.src([
      util.dir.scripts('**/*.js'),
      util.dir.tests('**/*.js')
    ]).pipe(eslint())
			.pipe(eslint.format())
		;
	};
};
