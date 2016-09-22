import React, { Component } from 'react';
import { PageHeader } from 'react-bootstrap';
import FormAddBlog from '../forms/FormAddBlog.jsx';


class AddBlog extends Component {
  render() {
    return (
      <div>
        <PageHeader>$ ls ~/add-bog</PageHeader>
        <FormAddBlog />
      </div>
    );
  }
}

export default AddBlog;
