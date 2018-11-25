var regExMatch = require('../../helpers/regExMatch')
var JSONMaker = require('../../helpers/JSONmaker')
/**
* Not found handler - handles all SMS 
*/
module.exports = (tel = '', body = '', media = null, from = {}, to = {}, callback) => {

	if (regExMatch(body) == true){

		let json_obj = JSONMaker(body)
		console.log(json_obj)

		return callback(
			null,
			`\nThank you for your response!`
		);
	} else {
		return callback(
			null,
			`\nError in response format. Please try again!`
		);
	}

};
