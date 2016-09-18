import React, { Component } from 'react';
import { Field, Form } from 'react-redux-form';
import { Button } from 'react-bootstrap';

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

        <Field model="movie.posterUrl">
          <label>Poster URL</label>
          <input type="text" />
        </Field>

        <Button
          type="submit"
          bsStyle="success"
        >
          Add { movie.title }
        </Button>
      </Form>
    );
  }
}

FormAddMovie.contextTypes = {
  router: React.PropTypes.object,
};

export default FormAddMovie;
