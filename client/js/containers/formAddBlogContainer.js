import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import FormAddBlog from '../components/forms/FormAddBlog.jsx';
import { addBlog } from '../actions/blogActions';


function mapStateToProps( state ) {
  return {};
}

function mapDispatchToProps( dispatch ) {
  return bindActionCreators( { addBlog }, dispatch );
}

export default connect( mapStateToProps, mapDispatchToProps )( FormAddBlog );
