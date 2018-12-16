const express = require('express');
const path = require('path');
const hbs = require('express-handlebars');
const { birthdayCalc } = require('./lib/date');

const app = express();
app.engine('hbs', hbs({extname: 'hbs', defaultLayout: 'layout', layoutsDir: __dirname + '/views/layouts/'}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.post('/hola', (req, res) => {
  res.render(`index`, {title: "ciao"});
});

// eslint-disable-next-line no-console
app.listen(3000, () => console.log('Available at http://localhost:3000'));
