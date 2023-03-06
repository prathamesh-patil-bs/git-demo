const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello');
});

app.post('/feature1', (req, res) => {
  res.send('FEATURE 1 COMPLETED');
});

app.put('/', (req, res) => {
  res.send('Feature 3');
})

app.listen(4000, () => { console.log('Server is up and running at 4000') });