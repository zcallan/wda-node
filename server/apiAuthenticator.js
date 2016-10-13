'use strict';
let jwt = require( 'jsonwebtoken' );
let config = require( '../config' );


module.exports = function( req, res, next ) {
  let token = req.body.token || req.query.token || req.headers['x-access-token'];

  if ( token ) {
    jwt.verify( token, config.secret, ( err, decoded ) => {
      if ( err ) {
        res.status( 403 ).json({
          success: false,
          message: 'Failed to authenticate token.'
        });
      } else {
        req.decoded = decoded;
        next();
      }
    });
  } else {
    return res.status( 403 ).send({
      success: false,
      message: 'No token provided.'
    });
  }
};