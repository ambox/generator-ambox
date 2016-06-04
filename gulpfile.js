'use strict';

var config = require('load-gulp-config');
var pack = config.util.readJSON('./package.json');

config(require('gulp'), {
  configPath:config.util.path.join(pack.frontDirs.tasks, '*.{js,yml}'),
  dirs:Object.assign(pack.backDirs, pack.frontDirs),
  data:pack
});
