/**
* SURVEY ANSWER handler 
*/
module.exports = (tel = '', body = '', from = {}, to = {}, callback) => {
    let message = `Thanks for your responses!`;
    //data processing
	callback(
		null,
		message
	);

};