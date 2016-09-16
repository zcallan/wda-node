'use strict';
let Blogs = require( '../../../models/blogs');


module.exports = function( req, res, next ) {
  Blogs.create( req.body, ( err, result ) => {
    if ( err ) {
      console.log( err.message );
      res.send( err.message );
      return next();
    }
    console.log( 'Created blog!' );
    res.send( result );
  });
};
