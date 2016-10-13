import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import FormRegister from '../components/forms/FormRegister.jsx';
import { register } from '../actions/authenticationActions';


function mapStateToProps( state ) {
  return {
    authorized: state.authentication.authenticated
  };
}

function mapDispatchToProps( dispatch ) {
  return bindActionCreators( { register }, dispatch );
}

export default connect( mapStateToProps, mapDispatchToProps )( FormRegister );
