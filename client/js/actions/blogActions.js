import { createAction } from 'redux-actions';
import { getBlogs, postBlog } from '../utils/WebAPI';


export const addBlog = createAction( 'ADD_BLOG', blog => {
  return {
    promise: postBlog( blog ),
  };
});

export const fetchBlogs = createAction( 'FETCH_BLOGS', ( blogId = null ) => {
  return {
    promise: getBlogs( blogId ),
  };
});
