'use strict';
let Users = require( '../../../models/users' );
let jwt = require( 'jsonwebtoken' );
let config = require( '../../../../config' );

module.exports = function( req, res ) {
  Users.findOne( {
    name: req.body.username
  }, ( err, user ) => {
    if ( err ) throw err;

    /* Test if username not found. */
    if ( !user ) {
      res.json( { success: false, message: 'Authentication failed. User not found.' } );
    }
    else if ( user ) {
      /* Test if matching password. */
      if ( user.password != req.body.password ) {
        res.json( { success: false, message: 'Authentication failed. Wrong password.' } );
      }
      else {
        /* Create a token if valid login. */
        var token = jwt.sign( user, config.secret, {
          expiresIn: '24hr'
        });

        // return the information including token as JSON
        res.json({
          success: true,
          token: token
        });
      }
    }
  });
};
