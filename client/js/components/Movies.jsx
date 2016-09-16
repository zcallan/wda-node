import React, { Component } from 'react';


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
        <div key={movie._id}>
          <p>Title: {movie.title}</p>
          <p>Rating: {movie.rating} / 10</p>
          <hr />
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <h1>Movies</h1>
        <hr />
        {this.renderMovies()}
      </div>
    );
  }
}

export default Movies;
