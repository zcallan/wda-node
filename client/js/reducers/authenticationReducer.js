const initialState = {
  authenticating: false,
  authenticated: false,
  token: '',
  error: null,
};

export default function authentication( state = initialState, action ) {
  switch ( action.type ) {
    case 'LOGIN_PENDING':
      return {
        ...state,
        authenticating: true,
        authenticated: false,
        error: false,
      };

    case 'LOGIN_FULFILLED':
      return {
        ...state,
        authenticating: false,
        authenticated: true,
        error: false,
        token: action.payload.data.token,
      };

    case 'LOGIN_REJECTED':
      return {
        ...state,
        authenticating: false,
        authenticated: false,
        error: action.payload,
      };

    case 'LOGOUT':
      return {
        ...state,
        authenticating: false,
        authenticated: false,
        token: '',
        error: null,
      };

    default:
      return state;
  }
}
