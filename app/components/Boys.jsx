'use strict';
import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

const Boys = ({ boys }) => {
  return (
    <section className="product-grid container">
      <div className="row">
        {
          boys.length && boys.map((boy, index) =>
            <div key={boy.id} className="col col-md-4 demo-card-square mdl-shadow--2dp">
              <Link to={`/boys/${boy.indexId}`} key={boy.id}>
                <div className="mdl-card__title mdl-card--expand">
                  <img src={ boy.image } />
                </div>
                <div className="mdl-card__title-text">
                  {`${boy.firstName} ${boy.lastName}`}
                </div>
              </Link>
            </div>
          )
        }
      </div>
    </section>
  );
};

const mapState = ({ singles }) => ({ boys: singles.boys });
export default connect(mapState)(Boys);
