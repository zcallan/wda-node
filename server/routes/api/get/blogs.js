'use strict';
let mongoose = require( 'mongoose' );
let Blogs = require( '../../../models/blogs');

function createBlog() {

}

module.exports = function( req, res ) {
  Blogs.find( {}, ( err, result ) => {
    if ( err ) throw err;
    res.send( result );
  });
};