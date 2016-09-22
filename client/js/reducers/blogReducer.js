const initialState = {
  fetching: false,
  fetched: false,
  blogs: [],
  error: null,
};

export default function blogs( state = initialState, action ) {
  switch ( action.type ) {
    case 'FETCH_BLOGS_PENDING':
      return {
        ...state,
        fetching: true,
        fetched: false,
        error: false,
      };

    case 'FETCH_BLOGS_FULFILLED':
      return {
        ...state,
        fetching: false,
        fetched: true,
        error: false,
        blogs: action.payload.data,
      };

    case 'FETCH_BLOGS_REJECTED':
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
