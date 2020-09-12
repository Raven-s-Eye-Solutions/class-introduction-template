const express = require('express');
const morgan = require('morgan');
const app = express();
const PORT = process.env.PORT || 9001;
const path = require('path');
const api = require('./api');

// Middleware:
process.env.NODE_ENV === 'production'
  ? app.use(morgan('common'))
  : app.use(morgan('dev'));

// Tell node where to serve static files from
app.use(express.static(path.join(__dirname, '../client/assets')));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/index.html'));
});

// API routes
app.use('/api', api);

app.get('/profiles/karsten', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/karsten.html'));
});

app.get('/profiles/tom', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/tom.html'));
});

app.get('/profiles/jon', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/jon.html'));
});

app.get('/profiles/james', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/james.html'));
});

app.get('/profiles/sammantha', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/sammantha.html'));
});
app.get('/profiles/dave', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dave.html'));
});

app.get('/profiles/madison', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/madison.html'));
});

app.get('/profiles/dodge', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dodge.html'));
});

app.use(function (req, res) {
  res.status(418).send("I'm a teapot.");
});

app.listen(PORT).on('listening', () => {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
