import React, { Component } from 'react';


class Blogs extends Component {
  componentWillMount() {
    this.props.fetchBlogs();
  }

  renderBlogs() {
    if ( this.props.error ) {
      return <p>An error has occurred! Is this server running? (see README)</p>;
    }
    else if ( !this.props.blogs.length ) {
      return <p>No blogs to show!</p>;
    }

    return this.props.blogs.map( ( blog, i ) => {
      return (
        <div key={i}>
          <p>{blog.title}</p>
          <p>{blog.content}</p>
          <hr />
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <h1>Blogs</h1>
        <hr />
        {this.renderBlogs()}
      </div>
    );
  }
}

export default Blogs;
