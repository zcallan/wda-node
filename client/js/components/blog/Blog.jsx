import '../../scss/movie-card.scss';
import React, { Component } from 'react';
import { Button, Jumbotron, PageHeader } from 'react-bootstrap';
import FormAddComment from '../containers/formAddCommentContainer';
import Comment from './Comment.jsx';


class Blog extends Component {
  componentWillMount() {
    this.props.fetchBlogs( this.props.params.blogId );
  }

  renderComments() {
    if ( this.props.fetched ) {
      if ( !this.props.blogs[0].comments.length ) {
        return <p>No comments yet.</p>;
      }

      return this.props.blogs[0].comments.map( comment => {
        return <Comment comment={comment} />;
      });
    }
    return <p>An error has occurred.</p>;
  }

  render() {
    if ( this.props.error ) {
      return <p>An error has occurred! Server or database may be down. Devs check console.</p>;
    }
    else if ( this.props.fetching ) {
      return <p>Loading...</p>;
    }
    else if ( this.props.fetched && !this.props.blogs.length ) {
      return <p>Blog not found!</p>;
    }
    else if ( this.props.fetched ) {
      let blog = this.props.blogs[0];

      return (
        <div>
          <PageHeader>$ ls ~/m/{blog.slug}</PageHeader>
          <div className="blog">
            <Jumbotron>
              <h1>{blog.title}</h1>
              <p>{blog.tags.map( ( tag, i ) => i ? `, ${tag}` : tag ) }</p>
            </Jumbotron>

            <p>{blog.content}</p>
          </div>

          <hr />

          <div>
            <h2>Comments</h2>
            {this.renderComments()}
            <hr />
            <FormAddComment
              commentType="blog"
              contentId={blog._id}
            />
          </div>
        </div>
      );
    }

    return <p>An error has occurred.</p>;
  }
}

export default Blog;
