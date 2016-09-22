import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Blog from '../components/blog/Blog.jsx';
import { fetchBlogs } from '../actions/blogActions';


function mapStateToProps( state ) {
  return {
    blogs: state.promiseBlogs.blogs,
    error: state.promiseBlogs.error,
    fetching: state.promiseBlogs.fetching,
    fetched: state.promiseBlogs.fetched,
  };
}

function mapDispatchToProps( dispatch ) {
  return bindActionCreators( { fetchBlogs }, dispatch );
}

export default connect( mapStateToProps, mapDispatchToProps )( Blog );
