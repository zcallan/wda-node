import '../../scss/movie-card.scss';
import React, { Component } from 'react';
import { Button, PageHeader } from 'react-bootstrap';
import FormAddComment from '../containers/formAddCommentContainer';
import Comment from './Comment.jsx';


class Movie extends Component {
  componentWillMount() {
    this.props.fetchMovies( this.props.params.movieId );
  }

  renderComments() {
    if ( this.props.fetched ) {
      if ( !this.props.movies[0].comments.length ) {
        return <p>No comments yet.</p>;
      }

      return this.props.movies[0].comments.map( comment => {
        return <Comment comment={comment} />;
      });
    }
    return <p>An error has occurred.</p>;
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
          <PageHeader>$ ls ~/m/{movie.slug}</PageHeader>
          <div className="movie">
            <img src={movie.posterUrl} role="presentation" />
            <div>
              <h2>{movie.title}</h2>
              <h4>Rating: {movie.rating}/10</h4>

              <hr />

              <h4>Description</h4>
              <p>{movie.description}</p>

              <h4>Actors</h4>
              <p>{movie.actors.map( ( actor, i ) => i ? `, ${actor}` : actor ) }</p>
            </div>
          </div>

          <hr />

          <div>
            <h2>Comments</h2>
            {this.renderComments()}
            <hr />
            <FormAddComment
              commentType="movie"
              contentId={movie._id}
            />
          </div>
        </div>
      );
    }

    return <p>An error has occurred.</p>;
  }
}

export default Movie;
