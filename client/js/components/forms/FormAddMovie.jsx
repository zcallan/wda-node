import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Button } from 'react-bootstrap';


class FormAddMovie extends Component {
  handleSubmit() {
    console.log( 'submit' );
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Title</label>
          <Field name="title" component="input" type="text" />
        </div>

        <div>
          <label>Rating</label>
          <Field name="rating" component="input" type="text" />
        </div>

        <div>
          <label>Actors</label>
          <Field name="actors" component="input" type="text" />
        </div>

        <Button type="submit">Add Movie</Button>
      </form>
    );
  }
}

FormAddMovie = reduxForm({
  form: 'movie' // a unique name for this form
})( FormAddMovie );

export default FormAddMovie;
