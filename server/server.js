'use strict';
let express = require( 'express' );
let cors = require( 'cors' );
let db, MongoClient = require( 'mongodb' ).MongoClient;
let bodyParser = require( 'body-parser' );
let session = require( 'express-session' );
let memoryStore = new session.MemoryStore();
let Keycloak = require( 'keycloak-connect' );

let app = express();
// let keycloak = new Keycloak( { store: memoryStore } );


app.use( cors() );
app.use( bodyParser.urlencoded( { extended: true } ) );
// app.use( keycloak.middleware() );


app.post( '/api/movies', ( req, res ) => {
  db.collection( 'movies' ).save( req.body, ( err, result ) => {
    if ( err ) return console.log( err );

    console.log( 'Successfully saved to database!' );
    res.redirect( '/' );
  });
});

app.post( '/api/blogs', ( req, res ) => {
  db.collection( 'blogs' ).save( req.body, ( err, result ) => {
    if ( err ) return console.log( err );

    console.log( 'Successfully saved to database!' );
    res.redirect( '/' );
  });
});

app.get( '/api/movies', ( req, res ) => {
  db.collection( 'movies' ).find().toArray( ( err, results ) => {
    res.send( results );
  });
});

app.get( '/api/blogs', ( req, res ) => {
  db.collection( 'blogs' ).find().toArray( ( err, results ) => {
    res.send( results );
  });
});


MongoClient.connect( 'mongodb://wda:wda2016@ds033056.mlab.com:33056/wda' , ( err, database ) => {
  if ( err ) return console.log( err );

  console.log( '=> Started MongoDB.' );
  db = database;

  app.listen( 3001, () => {
    console.log( '=> Server listening on port 3001' );
  });
});
