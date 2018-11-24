/**
* Not found handler - handles all SMS / MMS that don't match a command
*/

module.exports = (tel = '', body = '', media = null, from = {}, to = {}, callback) => {

	// We didn't find a command or match anything
	return callback(
		null,
		`\nThank you for your response!`
	);

};
