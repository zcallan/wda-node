import React, { Component } from 'react';
import { PageHeader } from 'react-bootstrap';
import FormAddBlog from '../../containers/formAddBlogContainer';


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
