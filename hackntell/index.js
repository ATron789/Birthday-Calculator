const express = require('express');
const { birthdayCalc } = require('./lib/date');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.post('/hola', (req, res) => {
  console.log(typeof req.body.date);
  res.send(`Hello ${birthdayCalc(req.body.date)}`);
});

// eslint-disable-next-line no-console
app.listen(3000, () => console.log('Available at http://localhost:3000'));
