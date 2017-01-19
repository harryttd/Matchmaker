'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const { resolve } = require('path');
const db = require('./db.json');
const app = express();

// console.log(__dirname);
module.exports = app
  .use(bodyParser.urlencoded({ extended: true }), bodyParser.json(), require('volleyball'))
  .use(express.static(resolve(__dirname, 'public')))
  .use('/api', require('./api'))
  // Send index.html for anything else.
  .get('/*', (_, res) => res.sendFile(resolve(__dirname, 'public', 'index.html')));
  // .get('/all', (req, res, next) => res.json(db))
  // .get('/boys', (req, res, next) => res.json(db.boys))
  // .get('/boys/:id', (req, res, next) => res.json(db.boys[req.params.id]))
  // .get('/girls', (req, res, next) => res.json(db.girls))
  // .get('/girls/:id', (req, res, next) => res.json(db.girls[req.params.id]))

const server = app.listen(process.env.PORT || 3000, () => {
  console.log(`Listening on ${JSON.stringify(server.address())}`);
});
