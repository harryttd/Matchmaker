'use strict';
import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { PageHeader } from 'react-bootstrap';
const Matches = class Matches extends Component {
  constructor(props) {
    super(props);
    this.state = {
      matches: this.props.matches
    };
  }

  render() {
    const { matches, selectedPerson } = this.props;
    return (
      <div>
        <PageHeader className="header">
          {matches.length} match{matches.length > 1 ? 'es' : null} found for {selectedPerson.firstName}
        </PageHeader>
        <section className="container">
          <div className="row">
            {

            }
          </div>
        </section>
      </div>
    );
  }
};

const mapState = ({ selectedPerson, matches }) => ({ selectedPerson, matches });
export default connect(mapState)(Matches);
