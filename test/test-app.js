'use strict';

var path = require('path');
var helpers = require('yeoman-generator').test;

describe('ambox:app', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../app'))
      .withOptions({ skipInstall: true })
      .withPrompts({ someOption: true })
      .on('end', done);
  });
});
