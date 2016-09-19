import axios from 'axios';

export function getBlogs() {
  return axios.get( 'http://localhost:3001/api/blogs' );
}

export function getMovies( movie ) {
  let movieId = ( movie ) ? `/${movie}` : '';
  return axios.get( 'http://localhost:3001/api/movies' + movieId );
}

export function postMovie( movie ) {
  console.log( movie );
  return axios.post( 'http://localhost:3001/api/movies', movie );
}

export function putMovie( movie ) {
  return axios.put( 'http://localhost:3001/api/movies', movie );
}