'use strict';

const app = require('express')();
const cowrap = require('../../');

app.get('/', cowrap(function* (req, res, next) {
  next(new Error('boom'));
}));

app.use(cowrap(function* (err, req, res, next) {
  res.send(`
    Error catched: ${ err.message }
    ${ err.stack || err }
  `);
}));

app.listen(9000, _ => {
  console.log('express demo listening at port 9000');
});