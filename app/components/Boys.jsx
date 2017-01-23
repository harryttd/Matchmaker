'use strict';
import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { PageHeader } from 'react-bootstrap';

const Boys = ({ auth, boys }) => {
  return auth ?
    (<div>
      <ol className="breadcrumb">
        <li><Link to="/all">All Singles</Link></li>
        <li className="active">Boys</li>
      </ol>
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
    </div>
  ) : <h1>You are not signed in</h1>;
};

const mapState = ({ auth, singles }) => ({
  auth,
  boys: singles.boys.sort((personA, personB) => {
  return personA.lastName < personB.lastName ? -1 : personA.lastName > personB.lastName ? 1 : 0;
  })
});
export default connect(mapState)(Boys);
