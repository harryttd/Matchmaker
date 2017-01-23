'use strict';
import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { PageHeader } from 'react-bootstrap';
const Matches = ({ selectedPerson, matches }) => {

  console.log("MATCHES COMPONENT", selectedPerson, "MATCHES", matches);
  return (
    <div>
      <ol className="breadcrumb">
        <li><Link to="/all">All Singles</Link></li>
        <li><Link to={`/${selectedPerson.gender}s`}>{`${selectedPerson.gender}s`}</Link></li>
        <li><Link to={`/${selectedPerson.gender}s/${selectedPerson.indexId}`}>{`${selectedPerson.firstName}`}</Link></li>
        <li className="active">Matches</li>
      </ol>
      <PageHeader className="header">
        {matches.length} matches found for {selectedPerson.firstName}
      </PageHeader>
      <section className="container">
        <div className="row">
          {
            matches.length && matches.map(match =>
              <div key={match.id} className="col col-md-4 demo-card-square mdl-shadow--2dp" onClick={() => browserHistory.push(`/${match.gender}s/${match.indexId}`)}>
                <Link>
                  <div className="mdl-card__title mdl-card--expand">
                    <img src={ match.image } />
                  </div>
                  <div className="mdl-card__title-text">
                    {`${match.firstName} ${match.lastName}`}
                  </div>
                </Link>
                <div className="mdl-card__supporting-text">
                  Age: { new Date().getFullYear() - match.birthday.match(/\d{4}/)[0] }
                </div>
              </div>
            )
          }
        </div>
      </section>
    </div>
  );
};

const mapState = ({ selectedPerson, matches }) => ({ selectedPerson, matches });
export default connect(mapState)(Matches);
