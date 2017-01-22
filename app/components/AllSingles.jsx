'use strict';
import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

const AllSingles = ({ boys, girls }) => {
  // const allBoys = boys && boys.map((boy, index) => {
  //   boy.indexId = index;
  //   return boy;
  // });
  // const allGirls = girls && girls.map((girl, index) => {
  //   girl.indexId = index;
  //   return girl;
  // });
  let people = boys && girls ? [...boys, ...girls] : null;
  people = people ? people.sort((personA, personB) => {
    if (personA.lastName < personB.lastName) return -1;
    if (personA.lastName > personB.lastName) return 1;
    return 0;
  }) : null;

  return (
    <section className="product-grid container">
      <div className="row">
      {
        people && people.map((single) =>
          <div key={single.id} className="col col-md-4 demo-card-square mdl-shadow--2dp">
            <Link to={`/boys/${single.indexId}`}>
              <div className="mdl-card__title mdl-card--expand">
                <img src={ single.image } />
              </div>
              <div className="mdl-card__title-text">
                {`${single.firstName} ${single.lastName}`}
              </div>
            </Link>
          </div>
        )
      }
    </div>
  </section>
  );
};

const mapState = ({ singles }) => ({
  boys: singles.list.boys,
  girls: singles.list.girls
});
export default connect(mapState)(AllSingles);
