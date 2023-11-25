//curl -X POST -H "Content-Type: application/json" -d '{"key": "value"}' http://localhost:3000/receive
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware to parse incoming request bodies as JSON
app.use(bodyParser.json());

// POST endpoint to handle incoming data
app.post('/receive', (req, res) => {
  const receivedData = req.body;
  console.log('Received data:', receivedData);

  // Perform necessary operations with the received data

  res.status(200).send('Data received successfully'); // Respond to the incoming request
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});