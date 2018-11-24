/**
* Not found handler - handles all SMS / MMS that don't match a command
*/

module.exports = (tel = '', body = '', media = null, from = {}, to = {}, callback) => {

	console.log(body)
	
	return callback(
		null,
		`\nThank you for your response!`
	);

};
