'use strict';
import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

const SingleGirl = ({ auth, selectedPerson }) => {
  const girl = selectedPerson;
  return auth ?
    (<div>
      <ol className="breadcrumb">
        <li><Link to="/all">All Singles</Link></li>
        <li><Link to="/girls">Girls</Link></li>
        <li className="active">{`${girl.firstName}`}</li>
      </ol>
      <div>
        <img src={ girl.image } className="col col-md-6" />
        <h2>{`${girl.firstName} ${girl.lastName}`}</h2>
      </div>
      <div>
        <h3>Address: { girl.address }</h3>
        <h3>Birthday: { girl.birthday }</h3>
        <h3>Height: { girl.height }</h3>
        <h3>Religious background: { girl.religiousBackground }</h3>
        <h3>Willing to relocate: { girl.relocate }</h3>
      </div>
      <div>
        <h5>Tags: { girl.tags }</h5>
      </div>
      <Link to={`/${girl.firstName}%20${girl.lastName}/match`}>
        <button>Make match</button>
      </Link>
    </div>
  ) : <h1>You are not signed in</h1>;
};

const mapState = ({ auth, selectedPerson }) => ({ auth, selectedPerson });
export default connect(mapState)(SingleGirl);
