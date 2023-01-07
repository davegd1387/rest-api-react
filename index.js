
require('dotenv').config();
const express           = require('express');
const app               = express();
const bcrypt            = require("bcrypt");
const session           = require('express-session');
const cors              = require('cors');
const pg                = require('pg');

const port              = process.env.PORT || 3000;
const router            = require('./routes/index')

// app.get('/',(req, res) => { res.send('You reached the root!')}  );
app.use('/', router);
app.listen(port,() =>console.log(`My REST API server listening on port ${port}`));
