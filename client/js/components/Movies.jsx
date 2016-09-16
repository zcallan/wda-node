import '../../scss/movieCard.scss';
import React, { Component } from 'react';
import MovieCard from './MovieCard.jsx';


class Movies extends Component {
  componentWillMount() {
    this.props.fetchMovies();
  }

  renderMovies() {
    if ( this.props.error ) {
      return <p>An error has occurred! Is this server running? (see README)</p>;
    }
    else if ( !this.props.movies.length ) {
      return <p>No movies to show!</p>;
    }

    return this.props.movies.map( movie => {
      return (
        <MovieCard
          key={movie._id}
          title={movie.title}
          rating={movie.rating}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <div className="movie-card-container">
          {this.renderMovies()}
        </div>
      </div>
    );
  }
}

export default Movies;
