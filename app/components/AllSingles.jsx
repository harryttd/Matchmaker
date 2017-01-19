'use strict';
import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

const AllSingles = ({ boys, girls }) => {
  const singleBoys = boys && boys.map((boy, index) => {
    boy.indexId = index;
    return boy;
  });
  const singleGirls = girls && girls.map((girl, index) => {
    girl.indexId = index;
    return girl;
  });
  const people = boys && girls ? [...singleBoys, ...singleGirls] : null;

  return (
    <div>
      {
        people && people.map((single) =>
        <Link to={`/${single.gender}s/${single.indexId}`} key={single.id}>
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
