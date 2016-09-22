import '../../../scss/blog-card.scss';
import React, { Component } from 'react';
import { Link } from 'react-router';
import TextTruncate from 'react-text-truncate';


class BlogCard extends Component {
  render() {
    return (
      <div className="blog-card">
        <Link to={`/b/${this.props.slug}`}>
          <div className="backdrop" />
          <h3>{this.props.title}</h3>
          <small>{this.props.tags.map( ( tag, i ) => i ? `, ${tag}` : tag ) }</small>
          <TextTruncate
            line={3}
            truncateText="..."
            text={this.props.content}
            textTruncateChild="Read more"
          />
        </Link>
      </div>
    );
  }
}

export default BlogCard;