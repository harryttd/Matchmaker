'use strict';
import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

const AllSingles = ({ singles }) => {
  const boys = singles.boys && singles.boys.map((boy, index) => {
    boy.indexId = index;
    return boy;
  });
  const girls = singles.girls && singles.girls.map((girl, index) => {
    girl.indexId = index;
    return girl;
  });
  const people = boys && girls ? [...boys, ...girls] : null;

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

const mapState = ({ singles }) => ({ singles });
export default connect(mapState)(AllSingles);
