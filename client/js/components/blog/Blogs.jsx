import React, { Component } from 'react';
import { PageHeader, Button } from 'react-bootstrap';
import { Link } from 'react-router';
import BlogCard from './BlogCard.jsx';


class Blogs extends Component {
  componentWillMount() {
    this.props.fetchBlogs();
  }

  renderBlogs() {
    if ( this.props.error ) {
      if ( !this.props.error.response.data.success) {
        this.context.router.push( '/login' );
      }
      return <p>An error has occurred! Check console.</p>;
    }
    else if ( !this.props.blogs.length ) {
      return <p>No blogs to show!</p>;
    }

    return this.props.blogs.map( ( blog, i ) => {
      return (
        <BlogCard
          key={i}
          title={blog.title}
          content={blog.content}
          tags={blog.tags}
          slug={blog.slug}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <PageHeader>
          $ ls ~/blogs
          <Link to="add-blog">
            <Button
              bsStyle="success"
              className="pull-right"
              type="button"
            >
              Add Blog
            </Button>
          </Link>
        </PageHeader>
        <div className="blog-card-container">
          {this.renderBlogs()}
        </div>
      </div>
    );
  }
}

Blogs.contextTypes = {
  router: React.PropTypes.object,
};

export default Blogs;
