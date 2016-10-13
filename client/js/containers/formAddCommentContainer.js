import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import FormAddComment from '../components/forms/FormAddComment.jsx';
import { addComment } from '../actions/actions';
import { fetchMovies } from '../actions/movieActions';
import { fetchBlogs } from '../actions/blogActions';


function mapStateToProps( state ) {
  let movie = state.promiseMovies.movies[0];
  let blog = state.promiseBlogs.blogs[0];
  return {
    username: state.authentication.username,
    movieSlug: movie && movie.slug || '',
    blogSlug: blog && blog.slug || '',
  };
}

function mapDispatchToProps( dispatch ) {
  return bindActionCreators( { addComment, fetchMovies, fetchBlogs }, dispatch );
}

export default connect( mapStateToProps, mapDispatchToProps )( FormAddComment );
