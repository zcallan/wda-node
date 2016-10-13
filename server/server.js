'use strict';
let express = require( 'express' );
let cors = require( 'cors' );
let bodyParser = require( 'body-parser' );
let morgan = require( 'morgan' );
let mongoose = require( 'mongoose' );
let config = require( '../config' );
let routes = require( './routes.json' );
let api = require( './api-routes.json' );
let Users = require( './models/users' );
let jwt = require( 'jsonwebtoken' );

let app = express();
let apiRoutes = express.Router();


/* Middleware for Cross-Origin calls, posting forms and dev console logs. */
app.use( cors() );
app.use( bodyParser.urlencoded( { extended: false } ) );
app.use( bodyParser.json() );
app.use( morgan( 'dev' ) );

app.set( 'apiSecret', config.secret );


apiRoutes.use( ( req, res, next ) => {
  let token = req.body.token || req.query.token || req.headers['x-access-token'];

  if ( token ) {
    jwt.verify( token, app.get( 'apiSecret' ), ( err, decoded ) => {
      if ( err ) {
        res.status( 403 ).json({
          success: false,
          message: 'Failed to authenticate token.'
        })
      } else {
        req.decoded = decoded;
        next();
      }
    });
  } else {
    return res.status( 403 ).send({
      success: false,
      message: 'No token provided.'
    })
  }
});


/* General routes. */
routes.map( route => {
  app[route.method]( route.path, require( route.controller ) );
});

/* API routes. */
api.map( route => {
  apiRoutes[route.method]( route.path, require( route.controller ) );
});
/* Prefix API routes with /api. */
app.use( '/api', apiRoutes );


app.get( '/api', ( req, res, next ) => {
  res.send( 'Hello!' );
});

app.post( '/register', ( req, res, next ) => {
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
});


app.post( '/authenticate', ( req, res, next ) => {
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
        let token = jwt.sign( payload, app.get( 'apiSecret' ) );

        res.send({
          success: true,
          message: 'Authentication successful!',
          token
        })
      }
    }
  });
});

app.post( '/login', ( req, res, next ) => {
  res.json({
    loggingIn: true
  });
});

/* Startup the server with the mongo database. */
mongoose.connect( config.database, () => {
  console.log( '=> Started MongoDB.' );

  app.listen( 3001, () => {
    console.log( '=> Server listening on port 3001' );
  });
});
