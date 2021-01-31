const express = require('express');
const app = express();
const PORT = 8000;

app.listen(PORT, () => {
  console.log('Listening on port ' + PORT);
});

app.get('/api/actions/', (req, res) => {
  console.log('contact made.');
  const data = require('./data/activeActionsExampleData.json');
  res.send(data);
});
