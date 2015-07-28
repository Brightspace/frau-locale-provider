'use strict';

var config = require('../config'),
	Client = require('ifrau').Client;

module.exports = function() {
	var client = new Client();
	return client.connect().then(function() {
		return client.request('lang');
	});
};
