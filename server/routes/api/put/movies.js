'use strict';
let Movies = require( '../../../models/movies');


module.exports = function( req, res, next ) {
  if ( !req.body._id ) {
    res.send( 'Error: Movie ID to insert comment into is missing.' );
    console.log( 'ID missing!' );
    return next();
  }
  Movies.findByIdAndUpdate(
    req.body._id, {
      $push: {
        "comments": {
          username: req.body.username,
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
