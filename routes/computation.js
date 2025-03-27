const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    let x;
    if (req.query.x !== undefined) {
        x = parseFloat(req.query.x);
    } else {
        x = Math.random() * 200 - 100;
    }
    const y = Math.trunc(x);
    res.send(`trunc applied to ${x} is ${y}`);
});

// Make sure this is the last line
module.exports = router;