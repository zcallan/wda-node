'use strict';
let mongoose = require( 'mongoose' );
let Schema = mongoose.Schema;
let bcrypt = require( 'bcrypt-nodejs' );


var UsersSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  admin: {
    type: Boolean,
    required: true
  }
});

/*
// Execute before each user.save() call
UsersSchema.pre( 'save', function( callback ) {
  var user = this;

  // Break out if the password hasn't changed
  if ( !user.isModified( 'password' ) ) return callback();

  // Password changed so we need to hash it
  bcrypt.genSalt( 5, ( err, salt ) => {
    if ( err ) return callback( err );

    bcrypt.hash( user.password, salt, null, ( err, hash ) => {
      if ( err ) return callback( err );
      user.password = hash;
      callback();
    });
  });
});

UsersSchema.methods.verifyPassword = function( password, cb ) {
  bcrypt.compare( password, this.password, ( err, isMatch ) => {
    if ( err ) return cb( err );
    cb( null, isMatch );
  });
};*/

module.exports = mongoose.model( 'Users', UsersSchema );