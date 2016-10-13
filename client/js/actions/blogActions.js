import { createAction } from 'redux-actions';
import WebAPI from '../utils/WebAPI';


export const addBlog = createAction( 'ADD_BLOG', blog => {
  return {
    promise: WebAPI.postBlog( blog ),
  };
});

export const fetchBlogs = createAction( 'FETCH_BLOGS', ( blogId = null ) => {
  return {
    promise: WebAPI.getBlogs( blogId ),
  };
});
