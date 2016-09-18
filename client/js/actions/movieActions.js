import { createAction } from 'redux-actions';
import { getMovies, postMovie } from '../utils/WebAPI';


export const fetchMovies = createAction( 'FETCH_MOVIES', ( movieId = null ) => {
  return {
    promise: getMovies( movieId ),
  };
});

export const addMovie = createAction( 'ADD_MOVIE', movie => {
  return {
    promise: postMovie( movie ),
  };
});
