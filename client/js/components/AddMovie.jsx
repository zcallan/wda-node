import React, { Component } from 'react';
import { PageHeader } from 'react-bootstrap';
import FormAddMovie from '../components/forms/FormAddMovie.jsx';


class AddMovie extends Component {
  render() {
    return (
      <div>
        <PageHeader>Add Movie</PageHeader>
        <FormAddMovie />
      </div>
    );
  }
}

export default AddMovie;
