'use strict';
let Movies = require( '../../../models/movies');


module.exports = function( req, res, next ) {
  if ( !req.body._id ) {
    res.send( 'Error: Movie ID to insert comment into is missing.' );
    next();
  }
  Movies.findByIdAndUpdate(
    req.body._id, {
      $push: {
        "comments": {
          title: req.body.title,
          message: req.body.message
        }
      }
    }, {
      safe: true,
      upsert: true
    }, ( err, result ) => {
      if ( err ) {
        console.log( err.message );
        res.send( err.message );
        return next();
      }
      console.log( 'Inserted comment!' );
      res.send( result );
    }
  );
};
