import React, { Component } from 'react';
import { Button, FormGroup, FormControl, Col, Panel, ControlLabel } from 'react-bootstrap';

class FormAddBlog extends Component {
  componentWillMount() {
    this.setState({
      blogTitle: '',
      blogContent: '',
      blogTags: '',
      blogTitleValidation: '',
      blogContentValidation: '',
      blogTagsValidation: '',
    });
  }
  changeTitle( event ) {
    let valid = ( !event.target.value ) ? 'warning' : '';
    this.setState({
      blogTitle: event.target.value,
      blogTitleValidation: valid,
    })
  }

  changeContent( event ) {
    let valid = ( !event.target.value ) ? 'warning' : '';
    this.setState({
      blogContent: event.target.value,
      blogContentValidation: valid,
    })
  }

  changeTags( event ) {
    let valid = ( !event.target.value ) ? 'warning' : '';
    this.setState({
      blogTags: event.target.value,
      blogTagsValidation: valid,
    })
  }

  handleSubmit() {
    let valid = true;
    if ( !this.state.blogTitle ) {
      this.setState( { blogTitleValidation: 'error' } );
      valid = false;
    }
    if ( !this.state.blogContent ) {
      this.setState( { blogContentValidation: 'error' } );
      valid = false;
    }
    if ( !this.state.blogTags ) {
      this.setState( { blogTagsValidation: 'error' } );
      valid = false;
    }
    if ( valid ) {
      /* Call server method to create movie. */
      this.props.addBlog({
        title: this.state.blogTitle,
        content: this.state.blogContent,
        tags: this.state.blogTags,
      });
      /* Redirect to home. */
      this.context.router.push( '/blogs' );
    }
  }

  render() {
    return (
      <Col sm={8} smOffset={2}>
        <Panel>
          <form>
            <FormGroup validationState={this.state.blogTitleValidation}>
              <ControlLabel>Title</ControlLabel>
              <FormControl
                type="text"
                value={this.state.blogTitle}
                placeholder="Title"
                onChange={::this.changeTitle}
              />
            </FormGroup>

            <FormGroup validationState={this.state.blogContentValidation}>
              <ControlLabel>Content</ControlLabel>
              <FormControl
                componentClass="textarea"
                rows={10}
                value={this.state.blogContent}
                placeholder="Description"
                onChange={::this.changeContent}
              />
            </FormGroup>

            <FormGroup validationState={this.state.blogTagsValidation}>
              <ControlLabel>Tags</ControlLabel>
              <FormControl
                type="text"
                value={this.state.blogTags}
                placeholder="tag 1,tag 2,tag 3"
                onChange={::this.changeTags}
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
