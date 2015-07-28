'use strict';

module.exports = function(value) {
	return {
		then: function(resolve) {
			setTimeout(function() { resolve(value); }, 0);
		}
	};
};
