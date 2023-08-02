const express = require('express');
const app = express();
const phonesData = require('../data/phones.json');

app.get('/phones', (req, res) => {
  res.json(phonesData);
});

app.get('/phones/:id', (req, res) => {
  const phoneId = req.params.id;
  const phone = phonesData.find((phone) => phone.id === phoneId);
  if (phone) {
    res.json(phone);
  } else {
    res.status(404).json({ error: 'Phone not found' });
  }
});

const port = 5000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});