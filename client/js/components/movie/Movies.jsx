import '../../../scss/movies.scss';
import React, { Component } from 'react';
import MovieCard from './MovieCard.jsx';


class Movies extends Component {
  componentWillMount() {
    this.props.fetchMovies();
  }

  renderMovies() {
    if ( this.props.error ) {
      if ( !this.props.error.response.data.success) {
        this.context.router.push( '/login' );
      }
      return <p>An error has occurred! Check console.</p>;
    }
    else if ( this.props.fetching ) {
      return <p>Loading...</p>;
    }
    else if ( this.props.fetched && !this.props.movies.length ) {
      return <p>No movies to show!</p>;
    }
    else if ( this.props.fetched ) {
      return this.props.movies.map( ( movie, i ) => {
        return (
          <MovieCard
            key={i}
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

Movies.contextTypes = {
  router: React.PropTypes.object,
};

export default Movies;
