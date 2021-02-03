const express = require('express');
const app = express();
const PORT = 8000;

app.listen(PORT, () => {
  console.log('Listening on port ' + PORT);
});

//Allow CORS Access (Cross Origin Resource Sharing)
//Needed in order to send data to web browser.
app.use((req, res, next) => {
  res.setHeader('access-control-allow-origin', '*');
  next();
});

app.get('/api/actions/', (req, res) => {
  console.log('contact made.');
  const activeActions = require('./data/activeActionsExampleData.json');
  res.send(activeActions);
});
