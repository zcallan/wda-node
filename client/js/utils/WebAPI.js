import axios from 'axios';
import config from '../../../config';


class WebAPI {
  constructor() {
    this.apiCall = axios.create({
      // baseURL: 'http://localhost:3001/api/',
      baseURL: config.serverUrl,
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
    return this.apiCall.get( `api/blogs/${blog || ''}` );
  }

  getMovies( movie ) {
    return this.apiCall.get( `api/movies/${movie || ''}` );
  }

  postMovie( movie ) {
    return this.apiCall.post( 'api/movies', movie );
  }

  postBlog( blog ) {
    return this.apiCall.post( 'api/blogs', blog );
  }

  putMovie( movie ) {
    return this.apiCall.put( 'api/movies', movie );
  }

  putBlog( blog ) {
    return this.apiCall.put( 'api/blogs', blog );
  }

  login( user ) {
    return this.apiCall.post( 'authenticate', user );
  }

  logout() {
    return this.clearToken();
  }

  register( user ) {
    return this.apiCall.post( 'register', user );
  }
}

export default ( new WebAPI() );
