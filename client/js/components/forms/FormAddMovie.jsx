import React, { Component } from 'react';
import { FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';
import { Field, Form } from 'react-redux-form';


class FormAddMovie extends Component {
  handleSubmit( movie ) {
    this.props.addMovie( movie );
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

export default FormAddMovie;
