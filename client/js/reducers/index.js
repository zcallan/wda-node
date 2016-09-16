import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import blogs from './blogReducer';
import movies from './movieReducer';

export default combineReducers({
  promiseBlogs: blogs,
  promiseMovies: movies,
  routing,
});
