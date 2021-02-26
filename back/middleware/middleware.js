const chalk = require('chalk');
const CORS = require('./cors');

module.exports = (req, res) => {
	console.log(chalk.yellow(' --- contact made --- '));
	console.log('at: ' + new Date());
	console.log('to: ' + chalk.bold(req.url));

	CORS(res);
};
