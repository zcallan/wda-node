import React, { Component } from 'react';
import { PageHeader } from 'react-bootstrap';
import FormAddMovie from '../../containers/formAddMovieContainer';


class AddMovie extends Component {
  render() {
    return (
      <div>
        <PageHeader>$ ls ~/add-movie</PageHeader>
        <FormAddMovie />
      </div>
    );
  }
}

export default AddMovie;
