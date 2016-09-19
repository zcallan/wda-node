import '../../scss/movies.scss';
import React, { Component } from 'react';
import MovieCard from './MovieCard.jsx';


class Movies extends Component {
  componentWillMount() {
    this.props.fetchMovies();
  }

  renderMovies() {
    if ( this.props.error ) {
      return <p>An error has occurred! Server or database may be down. Devs check console.</p>;
    }
    else if ( this.props.fetching ) {
      return <p>Loading...</p>;
    }
    else if ( this.props.fetched && !this.props.movies.length ) {
      return <p>No movies to show!</p>;
    }
    else if ( this.props.fetched ) {
      return this.props.movies.map( movie => {
        return (
          <MovieCard
            key={movie._id}
            title={movie.title}
            rating={movie.rating}
            posterUrl={movie.posterUrl}
            slug={movie.slug}
          />
        );
      });
    }

    return <p>An error has occurred.</p>;
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
