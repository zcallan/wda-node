import React, { Component } from 'react';
import { Field, Form } from 'react-redux-form';


class FormAddMovie extends Component {
  handleSubmit( movie ) {
    /* POST data to database. */
    this.props.addMovie( movie );
    /* Redirect to home page. */
    this.context.router.push( '/' );
  }

  render() {
    let { movie } = this.props;

    return (
      <Form
        model="movie"
        onSubmit={( movie ) => this.handleSubmit( movie )}
      >
        <Field model="movie.title">
          <label>Title</label>
          <input type="text" />
        </Field>

        <Field model="movie.rating">
          <label>Rating</label>
          <input type="text" />
        </Field>

        <button type="submit">
          Add { movie.title }
        </button>
      </Form>
    );
  }
}

FormAddMovie.contextTypes = {
  router: React.PropTypes.object,
};

export default FormAddMovie;
