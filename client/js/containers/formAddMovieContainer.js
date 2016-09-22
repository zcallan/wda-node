import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import FormAddMovie from '../components/forms/FormAddMovie.jsx';
import { addMovie } from '../actions/movieActions';


function mapStateToProps( state ) {
  return {};
}

function mapDispatchToProps( dispatch ) {
  return bindActionCreators( { addMovie }, dispatch );
}

export default connect( mapStateToProps, mapDispatchToProps )( FormAddMovie );
