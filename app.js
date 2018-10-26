'use strict';

// [START gae_node_request_example]
const express = require('express');

const app = express();

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.status(200).sendFile(__dirname + '/public/source/index.html');
});

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});
// [END gae_node_request_example]