const express = require('express');
const path = require('path');
const hbs = require('express-handlebars');
const date = require('./lib/date');

const app = express();
app.engine('hbs', hbs({extname: 'hbs', defaultLayout: 'layout', layoutsDir: __dirname + '/views/layouts/'}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req,res) => {
  res.render('index', {title: "Birthday Calculator"});
});

app.post('/results', (req, res) => {
  res.render('results', {title: "Results", results: date.birthdayCalc(req.body.date,req.body.name)});
});

app.use(function(req, res, next){
  res.status(404);
  if (req.accepts('html')) {
    res.render('404', { url: req.url });
    return;
  }
});

// eslint-disable-next-line no-console
app.listen(3000, () => console.log('Available at http://localhost:3000'));
