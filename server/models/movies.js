'use strict';
let mongoose = require( 'mongoose' );
let Schema = mongoose.Schema;

module.exports = mongoose.model( 'Movies', new Schema({
  title: {
    type: String,
    required: [ true, 'Movie title required!' ],
  },
  rating: {
    type: Number,
    required: [ true, 'Movie rating required!' ],
  },
}));