import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import { formReducer as form } from 'redux-form';
import blogs from './blogReducer';
import movies from './movieReducer';

export default combineReducers({
  form,
  promiseBlogs: blogs,
  promiseMovies: movies,
  routing,
});
