import React, { Component } from 'react';
import { PageHeader } from 'react-bootstrap';
import FormRegister from '../containers/formRegisterContainer';

class Register extends Component {
  render() {
    return (
      <div>
        <PageHeader>$ ls ~/register</PageHeader>
        <FormRegister />
      </div>
    );
  }
}

export default Register;
