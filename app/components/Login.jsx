import React from 'react';
import { login } from '../reducers/auth';
import { connect } from 'react-redux';
import { Link, browserHistory } from 'react-router';


const Login = class Login extends React.Component {
  constructor(props) {
    super(props);
    this.onLoginSubmit = this.onLoginSubmit.bind(this);
  }

  onLoginSubmit(event){
    event.preventDefault();
    const credentials = {
      email: event.target.email.value,
      password: event.target.password.value
    };
    console.log('credentials', credentials);
    this.props.login(credentials);
  }

  render() {
    return (
      <div className="login-wrapper">
        <ol className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li className="active">Login</li>
        </ol>
        <section className="container-fluid">
          <div className="row">
            <div className="col-xs-12 col-md-6 col-md-offset-3">
              <form
                className="login-form"
                onSubmit={this.onLoginSubmit}>
                <div className="form-group">
                  <label>Email</label>
                  <input className="form-control" name="email" type="email" />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input className="form-control" name="password" type="password" />
                </div>
                <button type="submit" name="submit">Login</button>
              </form>
            </div>
          </div>
        </section>
      </div>
    );
  }
};

const mapState = null;
const mapDispatch = { login };

export default connect(mapState, mapDispatch)(Login);
