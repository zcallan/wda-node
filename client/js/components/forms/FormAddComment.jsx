import React, { Component } from 'react';
import { Button, FormGroup, FormControl, Col, Panel, ControlLabel } from 'react-bootstrap';

class FormAddComment extends Component {
  componentWillMount() {
    this.setState({
      commentUsername: '',
      commentTitle: '',
      commentMessage: '',
      commentUsernameValidation: '',
      commentTitleValidation: '',
      commentMessageValidation: '',
    });
  }

  changeUsername( event ) {
    let valid = ( !event.target.value ) ? 'warning' : '';
    this.setState({
      commentUsername: event.target.value,
      commentUsernameValidation: valid,
    })
  }

  changeTitle( event ) {
    let valid = ( !event.target.value ) ? 'warning' : '';
    this.setState({
      commentTitle: event.target.value,
      commentTitleValidation: valid,
    })
  }

  changeComment( event ) {
    let valid = ( !event.target.value ) ? 'warning' : '';
    this.setState({
      commentMessage: event.target.value,
      commentMessageValidation: valid,
    })
  }

  handleSubmit() {
    let valid = true;
    if ( !this.state.commentUsername ) {
      this.setState( { commentUsernameValidation: 'error' } );
      valid = false;
    }
    if ( !this.state.commentTitle ) {
      this.setState( { commentTitleValidation: 'error' } );
      valid = false;
    }
    if ( !this.state.commentMessage ) {
      this.setState( { commentMessageValidation: 'error' } );
      valid = false;
    }
    if ( valid ) {
      this.props.addComment({
        username: this.state.commentUsername,
        title: this.state.commentTitle,
        message: this.state.commentMessage,
        _id: this.props.contentId,
        type: this.props.commentType,
      });
    }
  }

  render() {
    return (
      <Col sm={4}>
        <Panel>
          <form>
            <FormGroup validationState={this.state.commentUsernameValidation}>
              <ControlLabel>Username</ControlLabel>
              <FormControl
                type="text"
                value={this.state.commentUsername}
                placeholder="Username"
                onChange={::this.changeUsername}
              />
            </FormGroup>

            <FormGroup validationState={this.state.commentTitleValidation}>
              <ControlLabel>Title</ControlLabel>
              <FormControl
                type="text"
                value={this.state.commentTitle}
                placeholder="Title"
                onChange={::this.changeTitle}
              />
            </FormGroup>

            <FormGroup validationState={this.state.commentMessageValidation}>
              <ControlLabel>Message</ControlLabel>
              <FormControl
                componentClass="textarea"
                value={this.state.commentMessage}
                placeholder="Message"
                onChange={::this.changeComment}
              />
            </FormGroup>

            <Button
               type="button"
               bsStyle="success"
               onClick={::this.handleSubmit}
               className="pull-right"
            >
              Add Comment
            </Button>
          </form>
        </Panel>
      </Col>
    );
  }
}

export default FormAddComment;
