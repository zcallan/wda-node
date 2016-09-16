'use strict';
let mongoose = require( 'mongoose' );
let Schema = mongoose.Schema;

module.exports = mongoose.model( 'Movies', new Schema({
  title: String,
  rating: Number,
}));