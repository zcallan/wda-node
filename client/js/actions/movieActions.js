import { createAction } from 'redux-actions';
import { getMovies, postMovie } from '../utils/WebAPI';


export const fetchMovies = createAction( 'FETCH_MOVIES', () => {
  return {
    promise: getMovies(),
  };
});

export const addMovie = createAction( 'ADD_MOVIE', movie => {
  return {
    promise: postMovie( movie ),
  };
});
