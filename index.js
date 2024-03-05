var _ = require('lodash');
module.exports = {
	isEmpty: function(data) {
	  return data === undefined || data === null || data === '';
	},

	countEmpty: function(data) {
		if (!Array.isArray(data)) return 0;
		let count = 0;
		for (let i = 0; i < data.length; i++)
			if (_.isEmpty(data[i])) count++;
		return count;
	}
}