import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import { modelReducer, formReducer } from 'react-redux-form';
import blogs from './blogReducer';
import movies from './movieReducer';

export default combineReducers({
  promiseBlogs: blogs,
  promiseMovies: movies,
  routing,
  movie: modelReducer( 'movie' ),
  movieForm: formReducer( 'movie' ),
});
