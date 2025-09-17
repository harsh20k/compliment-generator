const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors()); // allow all origins

const compliments = require('./compliments.json');

app.get('/compliment', (req, res) => {
  const random = compliments[Math.floor(Math.random() * compliments.length)];
  res.json({ compliment: random });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`✅ Hi Harsh, Server running on port ${PORT}`);
});