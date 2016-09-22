import { createAction } from 'redux-actions';
import { putMovie, putBlog } from '../utils/WebAPI';


export const addComment = createAction( 'ADD_COMMENT', comment => {
  switch ( comment.type ) {
    case 'movie':
      return {
        promise: putMovie( comment ),
      };

    case 'blog':
      return {
        promise: putBlog( comment ),
      };

    default:
  }
});
