const express = require('express');
const ejs = require('ejs');
const path = require('path');

const app = express();

// template engine ejs
app.set('view engine', 'ejs');

// middleware
app.use(express.static('public'));

// routes
const port = 3000;

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/add', (req, res) => {
  res.render('add');
});

app.listen(port, () => {
  console.log(`sunucu ${port} portunda çalışmaya başlamıştır.. `);
});
