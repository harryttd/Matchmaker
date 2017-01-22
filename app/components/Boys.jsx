'use strict';
import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
import { connect } from 'react-redux';

const Boys = ({ boys }) => {
  return (
    <section className="product-grid container">
      <div className="row">
        {
          boys.length && boys.map((boy, index) =>
            <div key={boy.id} className="col col-md-4 demo-card-square mdl-shadow--2dp" onClick={() => browserHistory.push(`/boys/${boy.indexId}`)}>
              <Link>
                <div className="mdl-card__title mdl-card--expand">
                  <img src={ boy.image } />
                </div>
                <div className="mdl-card__title-text">
                  {`${boy.firstName} ${boy.lastName}`}
                </div>
              </Link>
              <div className="mdl-card__supporting-text">
                Age: { new Date().getFullYear() - boy.birthday.match(/\d{4}/)[0] }
              </div>
            </div>
          )
        }
      </div>
    </section>
  );
};

const mapState = ({ singles }) => ({ boys: singles.boys });
export default connect(mapState)(Boys);
