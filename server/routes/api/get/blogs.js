'use strict';
let mongoose = require( 'mongoose' );
let Blogs = require( '../../../models/blogs');

module.exports = function( req, res ) {
  let query = ( req.params.blogId ) ? { slug: req.params.blogId } : {};

  Blogs.find( query, ( err, result ) => {
    if ( err ) throw err;
    res.send( result );
  });
};
