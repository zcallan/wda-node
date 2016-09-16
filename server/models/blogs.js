'use strict';
let mongoose = require( 'mongoose' );
let Schema = mongoose.Schema;

module.exports = mongoose.model( 'Blogs', new Schema({
  title: {
    type: String,
    required: [ true, 'Blog title required!' ],
  },
  content: {
    type: String,
    required: [ true, 'Blog content required!' ],
  },
}));