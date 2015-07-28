'use strict';

var Client = require('ifrau').Client;

module.exports = function() {
	var client = new Client();
	return client.connect().then(function() {
		return client.request('isRtl');
	});
};
