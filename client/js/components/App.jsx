import React from 'react';
import { Nav, Navbar, NavItem, Col } from 'react-bootstrap';
import { Link } from 'react-router';
import ButtonLoginLogout from '../containers/buttonLoginLogoutContainer';


export default function App( { children } ) {
  return (
    <div>
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">Mavericks Inc.</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem componentClass={Link} href="/" to="/">Home</NavItem>
            <NavItem componentClass={Link} href="blogs" to="blogs">Blogs</NavItem>
            <NavItem componentClass={Link} href="about" to="about">About</NavItem>
            <ButtonLoginLogout />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Col sm={12}>
        <div>{children}</div>
      </Col>
    </div>
  );
}

App.propTypes = {
  children: React.PropTypes.object,
};

/* TODO

Loading spinners
Login admin/user
Add shit

 */