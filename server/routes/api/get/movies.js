'use strict';
let mongoose = require( 'mongoose' );
let Movies = require( '../../../models/movies');

module.exports = function( req, res ) {
  let movie = Movies.find( {}, ( err, result ) => {
    if ( err ) throw err;

    res.send( result );
  });
};
