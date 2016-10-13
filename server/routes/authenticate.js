'use strict';
let Users = require( '../models/users' );
let jwt = require( 'jsonwebtoken' );
let config = require( '../../config' );

module.exports = function( req, res ) {
  Users.findOne({
    username: req.body.username
  }, ( err, user ) => {
    if ( err ) throw err;

    if ( !user ) {
      res.json({
        success: false,
        message: 'Authentication failed. User not found.'
      })
    } else {
      if ( user.password != req.body.password ) {
        res.json({
          success: false,
          message: 'Authentication failed. Password does not match.'
        });
      } else {
        let payload = {};
        payload[user.username] = user.password;
        let token = jwt.sign( payload, config.secret );

        res.send({
          success: true,
          message: 'Authentication successful!',
          token,
          username: user.username
        })
      }
    }
  });
};
