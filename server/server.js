const express = require('express');
const morgan = require('morgan');
const app = express();
const PORT = process.env.PORT || 9001;
const path = require('path');

// Middleware:
process.env.NODE_ENV === 'production'
  ? app.use(morgan('common'))
  : app.use(morgan('dev'));

// Tell node where to serve static files from
app.use(express.static(path.join(__dirname, '../client/assets')));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/index.html'));
});

app.get('/profiles/karsten', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/karsten.html'));
});

app.use(function (req, res) {
  res.status(418).send("I'm a teapot.");
});

app.listen(PORT).on('listening', () => {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
