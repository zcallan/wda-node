import React, { Component } from 'react';
import { NavItem } from 'react-bootstrap';
import { Link } from 'react-router';


class LoginLogoutButton extends Component {
  logout() {
    this.props.logout();
  }

  render() {
    if ( this.props.authorized ) {
      return <NavItem componentClass={Link} href="/" to="/" onClick={() => this.logout()}>Logout</NavItem>
    }

    return <NavItem componentClass={Link} href="login" to="login">Login</NavItem>;
  }
}

export default LoginLogoutButton;