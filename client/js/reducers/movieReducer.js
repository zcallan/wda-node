const initialState = {
  fetching: false,
  fetched: false,
  movies: [],
  selected: null,
  error: null,
};

export default function movies( state = initialState, action ) {
  switch ( action.type ) {
    case 'FETCH_MOVIES_PENDING':
      return {
        ...state,
        fetching: true,
        fetched: false,
      };

    case 'FETCH_MOVIES_FULFILLED':
      return {
        ...state,
        fetching: false,
        fetched: true,
        movies: action.payload.data,
      };

    case 'FETCH_MOVIES_REJECTED':
      return {
        ...state,
        fetching: false,
        fetched: false,
        error: action.payload,
      };

    default:
      return state;
  }
}
