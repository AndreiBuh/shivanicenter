const fetch = require('node-fetch');

const apiUrl = process.env.SAPPER_APP_API_URL;

const wakeDyno = (apiUrl, interval = 25, callback) => {
	const milliseconds = interval * 60000;
	setTimeout(() => {
		try {
			console.log(`setTimeout called.`);
			// HTTP GET request to the dyno's url
			fetch(apiUrl).then(() => console.log(`Fetching ${apiUrl}.`));
		} catch (err) {
			// catch fetch errors
			console.log(`Error fetching ${apiUrl}: ${err.message}
            Will try again in ${interval} minutes...`);
		} finally {
			try {
				callback(); // execute callback, if passed
			} catch (e) {
				// catch callback error
				callback ? console.log('Callback failed: ', e.message) : null;
			} finally {
				// do it all again
				return wakeDyno(apiUrl, interval, callback);
			}
		}
	}, milliseconds);
};

module.exports = wakeDyno;
