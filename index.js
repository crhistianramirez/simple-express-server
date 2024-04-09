const express = require('express');
const app = express();
const port = 4451;

// Middleware to parse JSON bodies
app.use(express.json());

// Define a route that handles POST requests
app.post('/test', (req, res) => {
  // Log the body to the console
  console.log(req.body);

  // Send a response back to the client
  res.json({ message: 'JSON received and parsed!' });
});

// Start the server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});