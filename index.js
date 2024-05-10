const express = require('express');
const app = express();
const PORT = 3000; // Hard-coded port for the server

app.use(express.json()); // Middleware to parse JSON bodies

// Basic route for testing the server
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/message', (req, res) => {
  const { message } = req.body;
  // Here you would typically call your machine learning model to generate a response
  const response = `Received your message: ${message}`;
  res.json({ response });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});