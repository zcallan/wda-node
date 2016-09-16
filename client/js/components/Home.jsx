import React, { Component } from 'react';
import { PageHeader, Button } from 'react-bootstrap';
import { Link } from 'react-router';
import Movies from '../containers/movieContainer';


class Home extends Component {
  render() {
    return (
      <div>
        <PageHeader>Home</PageHeader>
        <PageHeader>
          <small>Movie Listings</small>
          <Link to="add-movie">
            <Button
              className="btn btn-success pull-right"
              type="button"
            >
              Add Movie
            </Button>
          </Link>
        </PageHeader>
        <Movies />
      </div>
    );
  }
}

export default Home;
