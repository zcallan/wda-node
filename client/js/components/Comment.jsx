import React, { Component } from 'react';


class Comment extends Component {
  render() {
    let { comment } = this.props;

    return (
      <blockquote>
        <div key={comment._id}>
          <h4><b>{comment.username}</b> says "<i>{comment.title}</i>"</h4>
          <h5>{comment.message}</h5>
        </div>
      </blockquote>
    );
  }
}

export default Comment;
