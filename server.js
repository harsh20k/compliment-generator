const express = require('express');
const app = express();
const PORT = 3000;

// Load compliments from JSON
const compliments = require('./compliments.json');

app.get('/compliment', (req, res) => {
  // Pick a random compliment
  const random = compliments[Math.floor(Math.random() * compliments.length)];
  res.json({ compliment: random });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
