import { createAction } from 'redux-actions';
import WebAPI from '../utils/WebAPI';


export const fetchMovies = createAction( 'FETCH_MOVIES', ( movieId = null ) => {
  return {
    promise: WebAPI.getMovies( movieId ),
  };
});

export const addMovie = createAction( 'ADD_MOVIE', movie => {
  return {
    promise: WebAPI.postMovie( movie ),
  };
});
