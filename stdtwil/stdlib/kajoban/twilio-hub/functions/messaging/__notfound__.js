var regExMatch = require('../../helpers/regExMatch')
var JSONMaker = require('../../helpers/JSONmaker')
let m = require('../../helpers/mongo');
/**
* Not found handler - handles all SMS 
@returns {string}
*/
module.exports = (tel = '', body = '', media = null, from = {}, to = {}, callback) => {

	if (regExMatch(body) == true){

<<<<<<< HEAD
		let json_obj = JSONMaker(body)

=======
		json_obj = JSONMaker(body)
>>>>>>> parent of 206e05b... retreive list of entities
		console.log(json_obj)

		m.insertData(json_obj)

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
