import '../../scss/movie-card.scss';
import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import FormAddComment from './forms/FormAddComment.jsx';


class Movie extends Component {
  constructor() {
    super();
    this.showCommentForm = this.showCommentForm.bind( this );
  }

  componentWillMount() {
    this.props.fetchMovies( this.props.params.movieId );

    this.setState({
      addingComment: false,
    });
  }

  renderComments() {
    if ( this.props.fetched && !this.props.movies[0].comments.length ) {
      return <p>No comments yet.</p>;
    }
    else if ( this.props.fetched ) {
      return this.props.movies[0].comments.map( comment => {
        return (
          <div key={comment._id}>
            <h4>{comment.title}</h4>
            <p>{comment.message}</p>
          </div>
        );
      });
    }
    return <p>An error has occurred.</p>;
  }

  showCommentForm() {
    let current = this.state.addingComment;

    this.setState({
      addingComment: !current,
    })
  }

  render() {
    if ( this.props.error ) {
      return <p>An error has occurred! Server or database may be down. Devs check console.</p>;
    }
    else if ( this.props.fetching ) {
      return <p>Loading...</p>;
    }
    else if ( this.props.fetched && !this.props.movies.length ) {
      return <p>Movie not found!</p>;
    }
    else if ( this.props.fetched ) {
      let movie = this.props.movies[0];

      return (
        <div>
          <div className="movie">
            <img src={movie.posterUrl} role="presentation" />
            <div>
              <h2>{movie.title}</h2>
              <h4>Rating: {movie.rating}/10</h4>

              <hr />

              <h4>Description</h4>
              <p>{movie.description}</p>

              <h4>Actors</h4>
              <p>{movie.actors.map( ( actor, i ) => {
                if ( i > 0 ) actor = ', ' + actor;
                return actor;
              })}</p>
            </div>
          </div>

          <hr />

          <div>
            <h2>Comments</h2>
            {this.renderComments()}
            <Button
              bsStyle="success"
              onClick={this.showCommentForm}
            >
              Add Comment
            </Button>
            <FormAddComment display={this.state.addingComment} />
          </div>
        </div>
      );
    }

    return <p>An error has occurred.</p>;
  }
}

export default Movie;
