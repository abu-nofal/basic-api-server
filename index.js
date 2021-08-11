'use strict';
require('dotenv').config();

const {start} = require('./src/server');
const {db} = require('./src/models/index'); //destructuring es6
// first connect to my Database then start my server

db.sync().then(()=> {
    start(process.env.PORT|| 8000);
})
.catch(console.error);