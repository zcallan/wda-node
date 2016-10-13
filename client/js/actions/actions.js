import { createAction } from 'redux-actions';
import WebAPI from '../utils/WebAPI';


export const addComment = createAction( 'ADD_COMMENT', comment => {
  switch ( comment.type ) {
    case 'movie':
      return {
        promise: WebAPI.putMovie( comment ),
      };

    case 'blog':
      return {
        promise: WebAPI.putBlog( comment ),
      };

    default:
  }
});
