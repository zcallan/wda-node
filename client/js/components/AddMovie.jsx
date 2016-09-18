import React, { Component } from 'react';
import { PageHeader } from 'react-bootstrap';
import SimpleForm from '../components/forms/SimpleForm.jsx';


class AddMovie extends Component {
  render() {
    return (
      <div>
        <PageHeader>Add Movie</PageHeader>
        <SimpleForm />
      </div>
    );
  }
}

export default AddMovie;
