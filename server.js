'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const { resolve } = require('path');
const db = require('./db.json');
const app = express();

module.exports = app
  .use(bodyParser.urlencoded({ extended: true }), bodyParser.json(), require('volleyball'), express.static(resolve(__dirname, 'public')))
  .use('/api', require('./api'))
  // Send index.html for anything else.
  .use('/node_modules', express.static(resolve(__dirname, 'node_modules')))
  .get('/*', (_, res) => res.sendFile(resolve(__dirname, 'public', 'index.html')));

const server = app.listen(process.env.PORT || 3000, () => {
  console.log(`Listening on ${JSON.stringify(server.address())}`);
});
