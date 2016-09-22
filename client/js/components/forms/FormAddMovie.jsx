import React, { Component } from 'react';
import { Button, FormGroup, FormControl, Col, Panel, ControlLabel } from 'react-bootstrap';

class FormAddMovie extends Component {
  componentWillMount() {
    this.setState({
      movieTitle: '',
      movieDescription: '',
      movieRating: '',
      movieActors: '',
      moviePosterUrl: '',
      movieTitleValidation: '',
      movieDescriptionValidation: '',
      movieRatingValidation: '',
      movieActorsValidation: '',
      moviePosterUrlValidation: '',
    });
  }
  changeTitle( event ) {
    let valid = ( !event.target.value ) ? 'warning' : '';
    this.setState({
      movieTitle: event.target.value,
      movieTitleValidation: valid,
    })
  }

  changeDescription( event ) {
    let valid = ( !event.target.value ) ? 'warning' : '';
    this.setState({
      movieDescription: event.target.value,
      movieDescriptionValidation: valid,
    })
  }

  changeRating( event ) {
    let valid = ( !event.target.value ) ? 'warning' : '';
    this.setState({
      movieRating: event.target.value,
      movieRatingValidation: valid,
    })
  }

  changeActors( event ) {
    let valid = ( !event.target.value ) ? 'warning' : '';
    this.setState({
      movieActors: event.target.value,
      movieActorsValidation: valid,
    })
  }

  changePosterUrl( event ) {
    let valid = ( !event.target.value ) ? 'warning' : '';
    this.setState({
      moviePosterUrl: event.target.value,
      moviePosterUrlValidation: valid,
    })
  }

  handleSubmit() {
    let valid = true;
    if ( !this.state.movieTitle ) {
      this.setState( { movieTitleValidation: 'error' } );
      valid = false;
    }
    if ( !this.state.movieDescription ) {
      this.setState( { movieDescriptionValidation: 'error' } );
      valid = false;
    }
    if ( !this.state.movieRating ) {
      this.setState( { movieRatingValidation: 'error' } );
      valid = false;
    }
    if ( !this.state.movieActors ) {
      this.setState( { movieActorsValidation: 'error' } );
      valid = false;
    }
    if ( !this.state.moviePosterUrl ) {
      this.setState( { moviePosterUrlValidation: 'error' } );
      valid = false;
    }
    if ( valid ) {
      /* Call server method to create movie. */
      this.props.addMovie({
        title: this.state.movieTitle,
        description: this.state.movieDescription,
        rating: this.state.movieRating,
        actors: this.state.movieActors,
        posterUrl: this.state.moviePosterUrl,
      });
      /* Redirect to home. */
      this.context.router.push( '/' );
    }
  }

  render() {
    return (
      <Col sm={8} smOffset={2}>
        <Panel>
          <form>
            <FormGroup validationState={this.state.movieTitleValidation}>
              <ControlLabel>Title</ControlLabel>
              <FormControl
                type="text"
                value={this.state.movieTitle}
                placeholder="Title"
                onChange={::this.changeTitle}
              />
            </FormGroup>

            <FormGroup validationState={this.state.movieDescriptionValidation}>
              <ControlLabel>Description</ControlLabel>
              <FormControl
                componentClass="textarea"
                value={this.state.movieDescription}
                placeholder="Description"
                onChange={::this.changeDescription}
              />
            </FormGroup>

            <FormGroup validationState={this.state.movieRatingValidation}>
              <ControlLabel>Rating</ControlLabel>
              <FormControl
                type="text"
                value={this.state.movieRating}
                placeholder="7.5"
                onChange={::this.changeRating}
              />
            </FormGroup>

            <FormGroup validationState={this.state.movieActorsValidation}>
              <ControlLabel>Actors</ControlLabel>
              <FormControl
                type="text"
                value={this.state.movieActors}
                placeholder="Actor 1,Actor 2,Actor 3"
                onChange={::this.changeActors}
              />
            </FormGroup>

            <FormGroup validationState={this.state.moviePosterUrlValidation}>
              <ControlLabel>Poster URL</ControlLabel>
              <FormControl
                type="text"
                value={this.state.moviePosterUrl}
                placeholder="http://example.com/image.png"
                onChange={::this.changePosterUrl}
              />
            </FormGroup>

            <Button
              type="button"
              bsStyle="success"
              onClick={::this.handleSubmit}
              className="pull-right"
            >
              Add Movie
            </Button>
          </form>
        </Panel>
      </Col>
    );
  }
}

FormAddMovie.contextTypes = {
  router: React.PropTypes.object,
};

export default FormAddMovie;
