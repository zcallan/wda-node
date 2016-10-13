import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import FormLogin from '../components/forms/FormLogin.jsx';
import { login } from '../actions/authenticationActions';


function mapStateToProps( state ) {
  return {
    authorized: state.authentication.authenticated
  };
}

function mapDispatchToProps( dispatch ) {
  return bindActionCreators( { login }, dispatch );
}

export default connect( mapStateToProps, mapDispatchToProps )( FormLogin );
