const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');

const app = express();

// Use cors middleware and allow all origins
app.use(cors());

app.use('/api', async function(req, res) {
  const url = 'https://ypapi.formz.in/api/public/videos';
  const response = await fetch(url);
  console.log('Response:', response);
  const data = await response.text();
  console.log('Data:', data);
  res.send(data);
});

app.listen(3000);
