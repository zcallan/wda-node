import React, { Component } from 'react';
import { PageHeader, Button } from 'react-bootstrap';
import { Link } from 'react-router';
import Movies from '../containers/moviesContainer';


class Home extends Component {
  render() {
    return (
      <div>
        <PageHeader>
          $ ls ~
          <Link to="add-movie">
            <Button
              bsStyle="success"
              className="pull-right"
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
