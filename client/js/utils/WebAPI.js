import axios from 'axios';
// import authentication from '../reducers/authenticationReducer';


class WebAPI {
  constructor() {
    this.apiCall = axios.create({
      baseURL: 'http://localhost:3001/api/',
      // baseURL: 'http://kaln.io:3001/',
      // timeout: 1000,
    });
  }

  setToken( token ) {
    this.apiCall.defaults.headers['x-access-token'] = token;
  }

  clearToken() {
    this.apiCall.defaults.headers['x-access-token'] = null;
  }

  getBlogs( blog ) {
    return this.apiCall.get( `blogs/${blog || ''}` );
  }

  getMovies( movie ) {
    return this.apiCall.get( `movies/${movie || ''}` );
  }

  postMovie( movie ) {
    return this.apiCall.post( 'movies', movie );
  }

  postBlog( blog ) {
    return this.apiCall.post( 'blogs', blog );
  }

  putMovie( movie ) {
    return this.apiCall.put( 'movies', movie );
  }

  putBlog( blog ) {
    return this.apiCall.put( 'blogs', blog );
  }

  login( user ) {
    return axios.post( 'http://localhost:3001/authenticate', user );
  }

  logout() {
    return this.clearToken();
  }
}

export default ( new WebAPI() );
