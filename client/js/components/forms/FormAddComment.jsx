import React, { Component } from 'react';
import { Field, Form } from 'react-redux-form';
import { Button } from 'react-bootstrap';

class FormAddComment extends Component {
  constructor() {
    super();
    this.changeTitle = this.changeTitle.bind( this );
    this.changeComment = this.changeComment.bind( this );
  }

  componentWillMount() {
    this.setState({
      commentTitle: '',
      commentMessage: '',
    });
  }
  changeTitle( event ) {
    console.log( event );
    this.setState({
      commentTitle: '',
    })
  }

  changeComment( event ) {
    console.log( event );
    this.setState({
      commentMessage: '',
    })
  }

  handleSubmit() {
    console.log( 'test ');
    /* POST data to database. */
    // this.props.addComment( null );
  }

  render() {
    return ( this.props.display ) ? (
      <form>
        <input type="text" placeholder="Title" name="title" required onChange={this.changeTitle} />
        <input type="text" placeholder="Comment" name="comment" required onChange={this.changeComment} />
        <Button
          type="button"
          bsStyle="success"
          onClick={this.handleSubmit}
        >
          Submit
        </Button>
      </form>
    ) : <div />;
  }
}

export default FormAddComment;
