'use strict';
let express = require( 'express' );
let cors = require( 'cors' );
let bodyParser = require( 'body-parser' );
let morgan = require( 'morgan' );
let jwt = require( 'jsonwebtoken' );
let mongoose = require( 'mongoose' );
let config = require( '../config' );
let routes = require( './routes.json' );
let app = express();

app.set( 'secret', config.secret );


app.use( cors() );
app.use( bodyParser.urlencoded( { extended: true } ) );
app.use( bodyParser.json() );
app.use( morgan( 'dev' ) );


routes.map( route => {
  app[route.method]( route.path, require( route.controller ) );
});

// apiRoutes.use( ( req, res, next ) => {
//   /* Search for tokens to authenticate user. */
//   var token = req.body.token || req.query.token || req.headers['x-access-token'];
//
//   /* Verify the secret we set, and that it's not expired. */
//   if ( token ) {
//     jwt.verify( token, app.get( 'secret' ), ( err, decoded ) => {
//       if ( err ) {
//         return res.json( { success: false, message: 'Failed to authenticate token.' } );
//       } else {
//         req.decoded = decoded;
//         next();
//       }
//     });
//   }
//   else {
//     /* 403 Forbidden Error. */
//     return res.status( 403 ).send({
//       success: false,
//       message: 'No token provided.'
//     });
//   }
// });
//
// apiRoutes.get( '/', function(req, res) {
//   res.json({ message: 'Welcome to the coolest API on earth!' });
// });
//
// apiRoutes.get( '/users', function(req, res) {
//   User.find({}, function(err, users) {
//     res.json(users);
//   });
// });
//
// app.use('/api', apiRoutes);

mongoose.connect( config.database, () => {
  console.log( '=> Started MongoDB.' );

  app.listen( 3001, () => {
    console.log( '=> Server listening on port 3001' );
  });
});
