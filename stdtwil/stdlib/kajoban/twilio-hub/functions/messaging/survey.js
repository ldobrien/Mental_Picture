/**
* SURVEY prompt
*/
module.exports = (tel = '', body = '', from = {}, to = {}, callback) => {

	callback(
		null,
		[
			`\n`,
			`This is the start of the survey`,
			``,
			`On a scale of 1 to 5 how do you feel today?`,
			``,
			`How many hours have you slept today?`,
			``,
			`How many calories did you consume today?`,
			``,
			`How many hours have you worked out today?`
		].join('\n')
	);

};