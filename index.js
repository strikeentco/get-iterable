'use strict';

module.exports = function (iterable) {
	if (!iterable) {
		return Promise.reject(new Error('Expected a iterable'));
	}

	var ret = [];

	for (let item of iterable) {
		ret.push(item);
	}

	return ret;
};
