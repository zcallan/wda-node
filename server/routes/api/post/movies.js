'use strict';
let Movies = require( '../../../models/movies');


module.exports = function( req, res, next ) {
  Movies.create( req.body, ( err, result ) => {
    if ( err ) {
      console.log( err.message );
      res.send( err.message );
      return next();
    }
    console.log( 'Created movie!' );
    res.send( result );
  });
};
