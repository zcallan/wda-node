const initialState = {
  fetching: false,
  fetched: false,
  movies: [],
  error: null,
};

export default function movies( state = initialState, action ) {
  switch ( action.type ) {
    case 'FETCH_MOVIES_PENDING':
      return {
        ...state,
        fetching: true,
        fetched: false,
        error: false,
      };

    case 'FETCH_MOVIES_FULFILLED':
      return {
        ...state,
        fetching: false,
        fetched: true,
        error: false,
        movies: action.payload.data,
      };

    case 'FETCH_MOVIES_REJECTED':
      return {
        ...state,
        fetching: false,
        fetched: false,
        error: action.payload,
      };

    case 'ADD_MOVIE_PENDING':
      return {
        ...state,
        fetching: true,
        fetched: false,
        error: false,
      };

    case 'ADD_MOVIE_FULFILLED':
      return {
        ...state,
        fetching: false,
        fetched: true,
        error: false,
        addedMovie: action.payload.data,
      };

    case 'ADD_MOVIE_REJECTED':
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
