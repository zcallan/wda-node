import { createAction } from 'redux-actions';
import WebAPI from '../utils/WebAPI';


export const login = createAction( 'LOGIN', user => {
  return {
    promise: WebAPI.login( user ),
  };
});

export const logout = createAction( 'LOGOUT', () => {
  return {
    promise: WebAPI.logout(),
  };
});
