'use strict';
let Users = require( '../../../models/users');

module.exports = function( req, res ) {
  Users.find( (err, users) => {
    if ( err )res.send( err );
    res.json( users );
  });
};
