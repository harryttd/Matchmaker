'use strict';
import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { PageHeader } from 'react-bootstrap';

const Girls = ({ auth, girls }) => {
  return auth ?
    (<div>
      <ol className="breadcrumb">
        <li><Link to="/all">All Singles</Link></li>
        <li className="active">Girls</li>
      </ol>
      <section className="product-grid container">
        <div className="row">
          {
            girls.length && girls.map((girl, index) =>
              <div key={girl.id} className="col col-md-4 demo-card-square mdl-shadow--2dp" onClick={() => browserHistory.push(`/girls/${girl.indexId}`)}>
                <Link>
                  <div className="mdl-card__title mdl-card--expand">
                    <img src={ girl.image } />
                  </div>
                  <div className="mdl-card__title-text">
                    {`${girl.firstName} ${girl.lastName}`}
                  </div>
                </Link>
                <div className="mdl-card__supporting-text">
                  Age: { new Date().getFullYear() - girl.birthday.match(/\d{4}/)[0] }
                </div>
              </div>
            )
          }
        </div>
      </section>
    </div>
  ) : <h1>You are not signed in</h1>;
};

const mapState = ({ auth, singles }) => ({
  auth,
  girls: singles.girls.sort((personA, personB) => {
  return personA.lastName < personB.lastName ? -1 : personA.lastName > personB.lastName ? 1 : 0;
  })
});
export default connect(mapState)(Girls);
