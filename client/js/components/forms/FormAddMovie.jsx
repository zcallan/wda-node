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
          <input type="text" placeholder="Movie Title" required />
        </Field>

        <Field model="movie.description">
          <label>Description</label>
          <textarea rows="2" placeholder="About the movie..." required />
        </Field>

        <Field model="movie.rating">
          <label>Rating (out of 10)</label>
          <input type="text" placeholder="7.5" required />
        </Field>

        <Field model="movie.actors">
          <label>Actors (separate actors with a comma)</label>
          <input type="text" placeholder="Actor 1,Actor 2" required />
        </Field>

        <Field model="movie.posterUrl">
          <label>Poster URL</label>
          <input type="text" placeholder="http://example.com/image.png" required />
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
