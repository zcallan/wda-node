import React, { Component } from 'react';
import MovieCard from './MovieCard.jsx';


class Movie extends Component {
  componentWillMount() {
    console.log( 'test' );
    this.props.fetchMovies( this.props.params.movieId );
  }

  render() {
    if ( this.props.error ) {
      return <p>An error has occurred! Is this server running? (see README)</p>;
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
          <MovieCard
            key={movie._id}
            title={movie.title}
            rating={movie.rating}
            posterUrl={movie.posterUrl}
          />
        </div>
      );
    }

    return <p>An error has occurred.</p>;
  }
}

export default Movie;
