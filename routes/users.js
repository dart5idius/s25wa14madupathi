const express = require('express');
const router = express.Router();
const ratio = 0.75;

router.get('/', function(req, res, next) {
  // Initialize acc if it doesn't exist
  if (!req.app.locals.acc) {
    req.app.locals.acc = 1000;
  }

  // Update the value
  req.app.locals.acc = req.app.locals.acc * ratio;

  // Send the response
  res.send(`Value is: ${req.app.locals.acc}`);
});

module.exports = router;