const express = require('express');
const router = express.Router();
const tomData = require('./constants');

router.get('/tomData', (req, res) => {
  res.json(tomData);
});

module.exports = router;
