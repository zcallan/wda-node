import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import FormAddComment from '../components/forms/FormAddComment.jsx';
import { addComment } from '../actions/actions';


function mapStateToProps( state ) {
  return {};
}

function mapDispatchToProps( dispatch ) {
  return bindActionCreators( { addComment }, dispatch );
}

export default connect( mapStateToProps, mapDispatchToProps )( FormAddComment );
