const express = require('express');
const router = express.Router();

router.get('/',(req, res) => { res.send('You reached the root via Router!')} );

module.exports = router;