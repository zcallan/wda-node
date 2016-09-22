import '../../scss/movie-card.scss';
import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class Login extends Component {
  handleSubmit() {
    console.log( 'submit!' );
    this.props.login
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input type="text" className="form-control" name="email" />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control" name="password" />
          </div>

          <button type="submit" className="btn btn-warning btn-lg">Login</button>
        </form>
      </div>
    );
  }
}

export default Login;
