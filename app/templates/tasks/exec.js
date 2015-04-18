module.exports = function (grunt) {
	'use strict';

	// Open in localhost
	var launch = function(uri) {
		return [
			'$(python -c \'import webbrowser; import os; import socket; import getpass;',
				'webbrowser.open("http://" + socket.gethostbyname(socket.gethostname()) + os.path.join(',
					'os.path.abspath(".").replace(',
						'os.path.expanduser("~/Sites"), "/~" + getpass.getuser()',
					'), "'+ uri +'"))',
			'\');'
		].join(' ')
	};

	// Grunt plugin for executing shell commands.
	// @see https://github.com/jharding/grunt-exec
	return {
		server: 'python <%= scaffold.server %>/manage.py runserver 0.0.0.0:8000',
		launch: launch('<%= scaffold.static %>/index.html?debug=3')
	};
};