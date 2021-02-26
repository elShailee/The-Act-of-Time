const express = require('express');
const middleware = require('./middleware/middleware');
const app = express();
const PORT = 8000;

//on startup
app.listen(PORT, () => {
	console.log('Listening on port ' + PORT);
});

//middlewares
app.use((req, res, next) => {
	middleware(req, res);
	next();
});

//api
app.get('/api/actions/', (req, res) => {
	const activeActions = require('./data/activeActionsExampleData.json');
	res.send(activeActions);
});
