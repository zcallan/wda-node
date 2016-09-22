import '../../scss/movie-card.scss';
import React, { Component } from 'react';
import { Link } from 'react-router';


class MovieCard extends Component {
  render() {
    return (
      <div className="movie-card">
        <Link to={`/m/${this.props.slug}`}>
          <div className="movie-card-backdrop" />
          <div className="movie-card-image">
            <img src={this.props.posterUrl} role="presentation" />
          </div>
          <div className="movie-card-label">
            <p>{this.props.title}</p>
            <p>{this.props.rating}</p>
          </div>
        </Link>
      </div>
    );
  }
}

export default MovieCard;