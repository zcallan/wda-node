'use strict';
let Users = require( '../models/users' );


module.exports = function( req, res ) {
  let user = new Users({
    username: req.body.username,
    password: req.body.password,
    admin: false
  });

  user.save( err => {
    if ( err ) throw err;

    console.log( user.username + ' saved successfully!' );
    res.json( { success: true } );
  });
};