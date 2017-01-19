'use strict';
const api = module.exports = require('express').Router();

api.use('/', require('./singles'))

// Send along any errors
api.use((err, req, res, next) => {
  res.status(500).send(err);
});

// No routes matched? 404.
api.use((req, res) => res.status(404).end());
