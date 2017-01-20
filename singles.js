const router = require('express').Router();
const db = require('./db.json');
const _intersection = require('lodash').intersection;

const getTags = (tags) => tags.match(/\w+(?:\s\w+)?/g).map(tag => tag.toLowerCase());

const createMatches = (gender, personId) => {
  const personLookingFor = db[gender][personId];
  if (personLookingFor.matches) return personLookingFor.matches;
  const oppositeGender = gender === 'boys' ? 'girls' : 'boys';
  const tags = getTags(personLookingFor.tags);
  console.log("TAGS:", tags, "OPPOSITE GENDER", oppositeGender);
  const findMatches = db[oppositeGender].filter((person) => {
    const potentialMatchTags = getTags(person.tags);
    console.log("POTENTIAL MATCH TAGS", potentialMatchTags);
    const matchedTags = _intersection(tags, potentialMatchTags);
    person.numberOfMatchedTags = matchedTags.length;
    if (person.numberOfMatchedTags > 0) return person;
  });
  return findMatches.sort((a, b) => b.numberOfMatchedTags - a.numberOfMatchedTags);
};

module.exports = router
  .get('/all', (req, res, next) => res.json(db))
  .get('/boys', (req, res, next) => res.json(db.boys))
  .get('/boys/:id', (req, res, next) => res.json(db.boys[req.params.id]))
  .get('/girls', (req, res, next) => res.json(db.girls))
  .get('/girls/:id', (req, res, next) => res.json(db.girls[req.params.id]))
  .get('/:gender/match/:id', (req, res, next) => {
    console.log("REQ>PARAMS", req.params.gender, req.params.id);
    const matches = createMatches(`${req.params.gender}s`, req.params.id);
    console.log("MATCHES:", matches);
    res.json(matches);
  });
