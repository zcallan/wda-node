import React, { Component } from 'react';
import { PageHeader } from 'react-bootstrap';
import Movies from '../containers/movieContainer';


class Home extends Component {
  render() {
    return (
      <div>
        <PageHeader>Home</PageHeader>
        <Movies />
      </div>
    );
  }
}

export default Home;
