import axios from 'axios';

var apiCall = axios.create({
  baseURL: 'http://localhost:3001/',
  // timeout: 1000,
  // auth: {
  //   username: 'callan',
  //   password: 'password'
  // },
});

export function getBlogs( blog ) {
  return apiCall.get( `api/blogs/${blog || ''}`, { auth: { username: 'callan', password: 'password' } } );
}

export function getMovies( movie ) {
  return apiCall.get( `api/movies/${movie || ''}`, { auth: { username: 'callan', password: 'password' } } );
}

export function postMovie( movie ) {
  return apiCall.post( 'api/movies', movie );
}

export function postBlog( blog ) {
  return apiCall.post( 'api/blogs', blog );
}

export function putMovie( movie ) {
  return apiCall.put( 'api/movies', movie );
}

export function putBlog( blog ) {
  return apiCall.put( 'api/blogs', blog );
}

export function login() {
  return axios.post( 'users', { auth: { username: 'callan', password: 'password' } } );
}