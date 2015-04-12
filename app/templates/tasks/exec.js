module.exports = function (grunt) {
	'use strict';

	// Grunt plugin for executing shell commands.
	// @see https://github.com/jharding/grunt-exec
	return {
		server: 'python manage.py runserver 0.0.0.0:8000',
		launch: [
			'$(python -c \'import webbrowser; import os; import socket; import getpass;',
				'webbrowser.open("http://" + socket.gethostbyname(socket.gethostname()) + os.path.join(',
					'os.path.abspath(".").replace(',
						'os.path.expanduser("~/Sites"), "/~" + getpass.getuser()',
					'), "client/index.html?debug=3"))',
			'\');'
		].join(' ')
	};
};