import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Movies from '../components/movie/Movies.jsx';
import { fetchMovies } from '../actions/movieActions';


function mapStateToProps( state ) {
  return {
    movies: state.promiseMovies.movies,
    error: state.promiseMovies.error,
    fetching: state.promiseMovies.fetching,
    fetched: state.promiseMovies.fetched,
    authentication: state.authentication
  };
}

function mapDispatchToProps( dispatch ) {
  return bindActionCreators( { fetchMovies }, dispatch );
}

export default connect( mapStateToProps, mapDispatchToProps )( Movies );
