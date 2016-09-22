'use strict';
let mongoose = require( 'mongoose' );
let slug = require( 'slug' );
let Schema = mongoose.Schema;


/* Generate a comments schema so blog comments each have their own unique ID. */
let CommentsSchema = new Schema({
  username: {
    type: String,
    required: [ true, 'Comment username required!' ],
  },
  title: {
    type: String,
    required: [ true, 'Comment title required!' ],
  },
  message: {
    type: String,
    required: [ true, 'Comment message required!' ],
  },
});


let BlogsSchema = new Schema({
  title: {
    type: String,
    required: [ true, 'Blog title required!' ],
  },
  comments: {
    type: [CommentsSchema]
  },
  slug: {
    type: String,
  },
  content: {
    type: String,
    required: [ true, 'Blog content required!' ],
  },
  tags: {
    type: Array,
    required: [ true, 'Blog tags required!' ],
  },
});


/* Create a slug auto-value for the blog URL. */
BlogsSchema.pre( 'save', function( next ) {
  this.slug = slug( this.title );
  next();
});

BlogsSchema.pre( 'validate', function( next ) {
  /* A very choppy hack to split each tag up by comma and store it as an array. */
  let tags = this.tags[0].split( ',' );
  this.tags = [];
  tags.map( current => this.tags.push( current ) );
  next();
});



module.exports = mongoose.model( 'Blogs', BlogsSchema );
