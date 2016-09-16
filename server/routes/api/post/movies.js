'use strict';
let mongoose = require( 'mongoose' );


module.exports = function( req, res ) {
  let db = mongoose.model( 'movies', new mongoose.Schema({ title: String }) );

  db.find( {} );
    // if ( err ) return console.log( err );

    console.log( 'Successfully saved to database!' );
};
