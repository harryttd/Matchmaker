'use strict';
import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { PageHeader } from 'react-bootstrap';

const Girls = ({ girls }) => {
  return (
    <div>
      <PageHeader className="header">Girls</PageHeader>
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
  );
};

const mapState = ({ singles }) => ({ girls: singles.girls });
export default connect(mapState)(Girls);
