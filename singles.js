const express = require('express');
const router = express.Router();
const db = require('./db.json');

module.exports = router
  .get('/all', (req, res, next) => res.json(db))
  .get('/boys', (req, res, next) => res.json(db.boys))
  .get('/boys/:id', (req, res, next) => res.json(db.boys[req.params.id]))
  .get('/girls', (req, res, next) => res.json(db.girls))
  .get('/girls/:id', (req, res, next) => res.json(db.girls[req.params.id]));
