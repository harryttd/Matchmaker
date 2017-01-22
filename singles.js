const router = require('express').Router();
const db = require('./db.json');
const userdb = require('./userdb.json');
const _intersection = require('lodash').intersection;

const getTags = (tags) => tags.match(/\w+(?:\s\w+)?/g).map(tag => tag.toLowerCase());

const createMatches = (gender, personId) => {
  const personLookingFor = db[gender][personId];
  if (personLookingFor.matches && personLookingFor.matches.length) return personLookingFor.matches;
  const oppositeGender = gender === 'boys' ? 'girls' : 'boys';
  const tags = getTags(personLookingFor.tags);
  console.log("TAGS:", tags, "OPPOSITE GENDER", oppositeGender);
  const findMatches = db[oppositeGender].filter((person) => {
    const potentialMatchTags = getTags(person.tags);
    console.log("POTENTIAL MATCH TAGS", potentialMatchTags);
    const matchedTags = _intersection(tags, potentialMatchTags);
    person.numberOfMatchedTags = matchedTags.length;
    if (person.numberOfMatchedTags > 0) return person;
  }).sort((matchA, matchB) => matchB.numberOfMatchedTags - matchA.numberOfMatchedTags);
  return findMatches;
};

module.exports = router
  .post('/login', (req, res, next) => {
    const user = userdb.users.find(person => {
      return person.email === req.body.email && person.password === req.body.password;
    });
    if (user) {
      req.session.userId = user.id;
      res.json(user);
    } else {
      res.sendStatus(401);
    }
  })
  .get('/logout', (req, res, next) => {
    req.session.destroy();
    res.status(204).redirect('/');
  })
  .post('/me', function (req, res, next) {
    if (req.session.userId) res.json(userdb.users.find(person => person.id === req.session.userId));
    else res.sendStatus(401);
  })
  .get('/all', (req, res, next) => {
    if (req.session.userId) res.json(db);
    else res.sendStatus(401);
  })
  .get('/boys', (req, res, next) => {
    if (req.session.userId) res.json(db.boys);
    else res.sendStatus(401);
  })
  .get('/boys/:id', (req, res, next) => {
    if (req.session.userId) res.json(db.boys[req.params.id]);
    else res.sendStatus(401);
  })
  .get('/girls', (req, res, next) => {
    if (req.session.userId) res.json(db.girls);
    else res.sendStatus(401);
  })
  .get('/girls/:id', (req, res, next) => {
    if (req.session.userId) res.json(db.girls[req.params.id]);
    else res.sendStatus(401);
  })
  .get('/:gender/match/:id', (req, res, next) => {
    console.log("REQ>PARAMS", req.params.gender, req.params.id);
    const matches = createMatches(`${req.params.gender}s`, req.params.id);
    console.log("MATCHES:", matches);
    res.json(matches);
  });
