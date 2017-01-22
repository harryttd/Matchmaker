import React from 'react';
import { connect } from 'react-redux';
import { Link, browserHistory } from 'react-router';
// import { logout } from '../reducers/auth';
// import Categories from './Categories';
import { Navbar, Nav, NavDropdown, NavItem, MenuItem } from 'react-bootstrap';

/* -----------------    COMPONENT     ------------------ */

export default class AppBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      auth: {}
    };
    // this.onClickLogout = this.onClickLogout.bind(this);
  }

  // componentWillReceiveProps(nextProps) {
  //   this.setState({ auth: nextProps.auth});
  // }
  // onClickLogout(){
  //   this.props.logout();
  //   browserHistory.push('/');
  // }
  render() {
    // const { auth } = this.props;
    return (
      <Navbar collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">Matchmaker</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavDropdown eventKey={3} title="Singles" id="basic-nav-dropdown">
                <MenuItem eventKey={3.1} onClick={() => browserHistory.push("/all")}>All</MenuItem>
                <MenuItem eventKey={3.2} onClick={() => browserHistory.push("/boys")}>Boys</MenuItem>
                <MenuItem eventKey={3.3} onClick={() => browserHistory.push("/girls")}>Girls</MenuItem>
            </NavDropdown>
            <NavItem eventKey={2} onClick={() => browserHistory.push("/about")}>ABOUT</NavItem>
          </Nav>
          <Nav pullRight>
            <NavItem eventKey={3} href="#">
              <i className="glyphicon glyphicon-search" ></i>
            </NavItem>
            {/* auth && auth.email && auth.password_digest ?
              ( <NavDropdown eventKey={5} title="USER" id="users">
                  <MenuItem href="/profile"></MenuItem>
                  <MenuItem href="/address">Address Book</MenuItem>
                  <MenuItem role="separator" className="divider"></MenuItem>
                  <MenuItem onClick={this.onClickLogout}>Logout</MenuItem>
                </NavDropdown> ) :
              ( <NavDropdown eventKey={6} title="USER" id="users">
                  <MenuItem href="/signup">Register</MenuItem>
                  <MenuItem href="/login">Login</MenuItem>
                </NavDropdown> )
            */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }

}

/* -----------------    CONTAINER     ------------------ */

// const mapProps = ({ auth, categories }) => ({ auth, categories });
//
//
// const mapDispatch = dispatch => ({
//   logout: () => {
//     dispatch(logout());
//     browserHistory.push('/');
//   }
// });
//
// export default connect(mapProps, mapDispatch)(AppBar);
