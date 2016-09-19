'use strict';
let mongoose = require( 'mongoose' );
let slug = require( 'slug' );
let Schema = mongoose.Schema;


/* Generate a comments schema so movie comments each have their own unique ID. */
let CommentSchema = new Schema({
  title: {
    type: String,
    required: [ true, 'Comment title required!' ],
  },
  message: {
    type: String,
    required: [ true, 'Comment message required!' ],
  },
});


let MoviesSchema = new Schema({
  title: {
    type: String,
    required: [ true, 'Movie title required!' ],
  },
  rating: {
    type: Number,
    required: [ true, 'Movie rating between 0-10 required!' ],
    min: 0,
    max: 10,
  },
  posterUrl: {
    type: String,
    required: [ true, 'Movie poster URL required!' ],
  },
  comments: {
    type: [CommentSchema]
  },
  slug: {
    type: String,
  },
  description: {
    type: String,
    required: [ true, 'Movie description required!' ],
  },
  actors: {
    type: Array,
    required: [ true, 'Movie actors required!' ],
  },
});


/* Create a slug auto-value for the movie URL. */
MoviesSchema.pre( 'save', function( next ) {
  this.slug = slug( this.title );
  next();
});

MoviesSchema.pre( 'validate', function( next ) {
  /* A very choppy hack to split each actor up by comma and store it as an array. */
  let actors = this.actors[0].split( ',' );
  this.actors = [];
  actors.map( current => this.actors.push( current ) );
  next();
});



module.exports = mongoose.model( 'Movies', MoviesSchema );
