import { createAction } from 'redux-actions';
import { getBlogs } from '../utils/WebAPI';


export function selectBlog( blog ) {
  return {
    type: 'SELECT_BLOG',
    payload: blog,
  };
}

export const fetchBlogs = createAction( 'FETCH_BLOGS', () => {
  return {
    promise: getBlogs(),
  };
});
