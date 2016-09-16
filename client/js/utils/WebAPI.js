import axios from 'axios';

export function getBlogs() {
  return axios.get( 'http://localhost:3001/api/blogs' );
}

export function getMovies() {
  return axios.get( 'http://localhost:3001/api/movies' );
}