'use strict';
import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { PageHeader } from 'react-bootstrap';

const AllSingles = ({ auth, boys, girls }) => {
  let people = boys && girls ? [...boys, ...girls] : null;
  people = people ? people.sort((personA, personB) => {
    return personA.lastName < personB.lastName ? -1 : personA.lastName > personB.lastName ? 1 : 0;
  }) : null;

  return auth ?
    (<div>
      <PageHeader className="header">All Singles</PageHeader>
        <section className="container">
          <div className="row">
          {
            people && people.map((single) =>
              <div key={single.id} className="col col-md-4 demo-card-square mdl-shadow--2dp">
                <Link to={`/${single.gender}s/${single.indexId}`}>
                  <div className="mdl-card__title mdl-card--expand">
                    <img src={ single.image } />
                  </div>
                  <div className="mdl-card__title-text">
                    {`${single.firstName} ${single.lastName}`}
                  </div>
                  <div className="mdl-card__supporting-text">
                    Age: { new Date().getFullYear() - single.birthday.match(/\d{4}/)[0] }
                  </div>
                </Link>
              </div>
            )
          }
        </div>
      </section>
    </div>) : <h1>You are not signed in</h1>;
};

const mapState = ({ auth, singles }) => ({
  auth,
  boys: singles.list.boys,
  girls: singles.list.girls
});
export default connect(mapState)(AllSingles);
