import React from 'react';
import { Nav, Navbar, NavItem, Col } from 'react-bootstrap';
import { Link } from 'react-router';


export default function App( { children } ) {
  return (
    <div>
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">Mavericks Inc.</Link>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem componentClass={Link} href="/" to="/">Home</NavItem>
          <NavItem componentClass={Link} href="movies" to="movies">Movies</NavItem>
          <NavItem componentClass={Link} href="blogs" to="blogs">Blogs</NavItem>
          <NavItem componentClass={Link} href="about" to="about">About</NavItem>
        </Nav>
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
