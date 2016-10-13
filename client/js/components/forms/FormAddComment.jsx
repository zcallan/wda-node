import React, { Component } from 'react';
import { Button, FormGroup, FormControl, Col, Panel, ControlLabel } from 'react-bootstrap';

class FormAddComment extends Component {
  componentWillMount() {
    this.setState({
      commentTitle: '',
      commentMessage: '',
      commentTitleValidation: '',
      commentMessageValidation: '',
    });
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
        username: this.props.username,
        title: this.state.commentTitle,
        message: this.state.commentMessage,
        _id: this.props.contentId,
        type: this.props.commentType,
      }).then( () => {
        if ( this.props.commentType == 'movie' ) {
          this.props.fetchMovies( this.props.movieSlug );
        } else {
          this.props.fetchBlogs( this.props.blogSlug );
        }
      });
    }
  }

  render() {
    return (
      <Col sm={4}>
        <Panel>
          <form>
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
