'use strict';
let express = require( 'express' );
let cors = require( 'cors' );
let bodyParser = require( 'body-parser' );
let morgan = require( 'morgan' );
let mongoose = require( 'mongoose' );
let config = require( '../config' );
let routes = require( './routes.json' );
let api = require( './api-routes.json' );
let apiAuthenticator = require( './apiAuthenticator' );

let app = express();
let apiRoutes = express.Router();


/* Middleware for Cross-Origin calls, posting forms and dev console logs. */
app.use( cors() );
app.use( bodyParser.urlencoded( { extended: false } ) );
app.use( bodyParser.json() );
app.use( morgan( 'dev' ) );

/* Require authentication on all /api routes. */
apiRoutes.use( apiAuthenticator );

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


/* Startup the server with the mongo database. */
mongoose.connect( config.database, () => {
  console.log( '=> Started MongoDB.' );

  app.listen( 3001, () => {
    console.log( '=> Server listening on port 3001' );
  });
});
