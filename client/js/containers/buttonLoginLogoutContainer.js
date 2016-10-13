import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ButtonLoginLogout from '../components/ButtonLoginLogout.jsx';
import { logout } from '../actions/authenticationActions';


function mapStateToProps( state ) {
  return {
    authorized: state.authentication.authenticated
  };
}

function mapDispatchToProps( dispatch ) {
  return bindActionCreators( { logout }, dispatch );
}

export default connect( mapStateToProps, mapDispatchToProps )( ButtonLoginLogout );
