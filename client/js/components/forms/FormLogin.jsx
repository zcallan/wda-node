import React, { Component } from 'react';
import { Button, FormGroup, FormControl, Col, Panel, ControlLabel } from 'react-bootstrap';
import WebAPI from '../../utils/WebAPI';

class FormAddBlog extends Component {
  componentWillMount() {
    if ( this.props.authorized ) {
      this.context.router.push( '/' );
    }

    this.setState({
      username: '',
      usernameValidation: '',
      password: '',
      passwordValidation: ''
    });
  }

  changeUsername( event ) {
    let valid = ( !event.target.value ) ? 'warning' : '';
    this.setState({
      username: event.target.value,
      usernameValidation: valid,
    })
  }

  changePassword( event ) {
    let valid = ( !event.target.value ) ? 'warning' : '';
    this.setState({
      password: event.target.value,
      passwordValidation: valid,
    })
  }

  handleSubmit() {
    let valid = true;
    if ( !this.state.username ) {
      this.setState( { usernameValidation: 'error' } );
      valid = false;
    }
    if ( !this.state.password ) {
      this.setState( { passwordValidation: 'error' } );
      valid = false;
    }
    if ( valid ) {
      /* Call server method to create movie. */
      console.log( 'logging in' );
      this.props.login({
        username: this.state.username,
        password: this.state.password,
      }).then( data => {
        let payload = data.action.payload;

        if ( payload.data.success ) {
          let token = payload.data.token || '';
          WebAPI.setToken( token );
          console.log( 'logged in!' );
          this.context.router.push( '/' );
        } else {
          console.log( 'error: ' + payload.data.messsage );
          this.setState({
            usernameValidation: 'error',
            passwordValidation: 'error'
          });

        }
      });
    }
  }

  render() {
    return (
      <Col sm={8} smOffset={2}>
        <Panel>
          <form>
            <FormGroup validationState={this.state.usernameValidation}>
              <ControlLabel>Username</ControlLabel>
              <FormControl
                type="text"
                value={this.state.username}
                placeholder="Username"
                onChange={::this.changeUsername}
              />
            </FormGroup>

            <FormGroup validationState={this.state.passwordValidation}>
              <ControlLabel>Password</ControlLabel>
              <FormControl
                type="password"
                rows={10}
                value={this.state.password}
                placeholder="Password"
                onChange={::this.changePassword}
              />
            </FormGroup>

            <Button
              type="button"
              bsStyle="success"
              onClick={::this.handleSubmit}
              className="pull-right"
            >
              Add Blog
            </Button>
          </form>
        </Panel>
      </Col>
    );
  }
}

FormAddBlog.contextTypes = {
  router: React.PropTypes.object,
};

export default FormAddBlog;
