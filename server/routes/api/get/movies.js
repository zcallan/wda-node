'use strict';
let mongoose = require( 'mongoose' );
let Movies = require( '../../../models/movies');

module.exports = function( req, res ) {
  let query = ( req.params.movieId ) ? { slug: req.params.movieId } : {};

  Movies.find( query, ( err, result ) => {
    if ( err ) throw err;
    res.send( result );
  });
};
