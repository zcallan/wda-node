import '../../scss/movie-card.scss';
import React, { Component } from 'react';
import { Button, PageHeader } from 'react-bootstrap';
import { Link } from 'react-router';
import FormLogin from '../containers/formLoginContainer';




const buttonStyle = {
  marginBottom: 20
};

class Login extends Component {
  render() {
    return (
      <div>
        <PageHeader>
          $ ls ~/login
          <Link to="register">
            <Button
              bsStyle="success"
              type="button"
              className="pull-right"
              style={buttonStyle}
            >
              Register
            </Button>
          </Link>
        </PageHeader>

        <FormLogin />
      </div>
    );
  }
}

export default Login;
