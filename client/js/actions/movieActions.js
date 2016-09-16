import { createAction } from 'redux-actions';
import { getMovies } from '../utils/WebAPI';


export const fetchMovies = createAction( 'FETCH_MOVIES', () => {
  return {
    promise: getMovies(),
  };
});
