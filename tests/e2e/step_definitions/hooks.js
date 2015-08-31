var browserUtils = require('./../support/helpers/browserUtils');

module.exports = function () {
	this.After(function (callback) {
		browserUtils.clearLocalStorage()
			.then(callback);
	});
};