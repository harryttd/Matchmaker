'use strict';
import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

const AllSingles = ({ boys, girls }) => {
  const allBoys = boys && boys.map((boy, index) => {
    boy.indexId = index;
    return boy;
  });
  const allGirls = girls && girls.map((girl, index) => {
    girl.indexId = index;
    return girl;
  });
  let people = allBoys && allGirls ? [...allBoys, ...allGirls] : null;
  people = people ? people.sort((personA, personB) => {
    if (personA.lastName < personB.lastName) return -1;
    if (personA.lastName > personB.lastName) return 1;
    return 0;
  }) : null;

  return (
    <div>
      {
        people && people.map((single) =>
          <Link to={`/${single.gender}s/${single.indexId}`} key={single.id} className="col col-md-4">
            <img src={ single.image } />
            <h2>{`${single.firstName} ${single.lastName}`}</h2>
          </Link>
        )
      }
    </div>
  );
};

const mapState = ({ singles }) => ({
  boys: singles.boys,
  girls: singles.girls
});
export default connect(mapState)(AllSingles);
