'use strict';
let mongoose = require( 'mongoose' );
let Schema = mongoose.Schema;

module.exports = mongoose.model( 'Users', new Schema({
  username: String,
  password: String,
  admin: Boolean
}));