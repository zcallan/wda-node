import '../../scss/movieCard.scss';
import React, { Component } from 'react';


class MovieCard extends Component {
  render() {
    return (
      <div className="movie-card">
        <div className="movie-card-image">

        </div>
        <div className="movie-card-label">
          <p>{this.props.title}</p>
          <p>{this.props.rating}</p>
        </div>
      </div>
    );
  }
}

export default MovieCard;