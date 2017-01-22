'use strict';
import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

const Girls = ({ girls }) => {
  return (
    <section className="product-grid container">
      <div className="row">
        {
          girls.length && girls.map((girl, index) =>
            <div key={girl.id} className="col col-md-4 demo-card-square mdl-shadow--2dp">
              <Link to={`/girls/${girl.indexId}`} key={girl.id}>
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
  );
};

const mapState = ({ singles }) => ({ girls: singles.girls });
export default connect(mapState)(Girls);
