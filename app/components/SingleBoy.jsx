'use strict';
import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

const SingleBoy = ({ auth, selectedPerson }) => {
  const boy = selectedPerson;
  return auth ?
    (<div>
      <ol className="breadcrumb">
        <li><Link to="/all">All Singles</Link></li>
        <li><Link to="/boys">Boys</Link></li>
        <li className="active">{`${boy.firstName}`}</li>
      </ol>
      <div>
        <img src={ boy.image } />
        <h2>{`${boy.firstName} ${boy.lastName}`}</h2>
        <h3>Address: { boy.address }</h3>
        <h3>Birthday: { boy.birthday }</h3>
        <h3>Height: { boy.height }</h3>
        <h3>Religious background: { boy.religiousBackground }</h3>
        <h3>Willing to relocate: { boy.relocate }</h3>
      </div>
      <div>
        <h5>{ boy.tags }</h5>
      </div>
      <Link to={`/${boy.firstName}%20${boy.lastName}/match`}>
        <button>Make match</button>
      </Link>
    </div>
  ) : <h1>You are not signed in</h1>;
};

const mapState = ({ auth, selectedPerson }) => ({ auth, selectedPerson });
export default connect(mapState)(SingleBoy);
