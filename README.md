# WDA-2016 Node Application

Assignment 2 Part 2 for RMIT University Web Database Applications Semester 2.

There is a frontend server (referred to as 'client') and a backend server ('server').
 This makes it easier to port onto mobile in react-native in the future.
 While this assignment does not require a mobile application, it is believed to be good practice.
 
 The frontend is written in [React](https://facebook.github.io/react/) using a [Redux](https://github.com/reactjs/react-redux) methodology to control data flow.
 Using Redux for a smaller application like this is probably overkill,
 however it's good to get used to abiding its principles in application development.
 
 The backend uses Express to make the coding minimal and easier to write out.
 The MongoDB database is hosted at [mLab](http://mlab.com/) under a free sandbox deployment.
 The authentication server used is [Keycloak](http://www.keycloak.org/).


###Stack
- Node JS v4.5.0
- Express v4.14.0
- React v15.1.0
- React Router v2.8.0
- React Router Redux v4.0.5
- Bootstrap / React Bootstrap v0.30.3
- Sass v3.8.0
- Webpack v1.13.1
- Redux v3.5.2
    - Thunk v2.1.0
    - Logger v2.6.1
    - Promise v0.5.3
    - Actions v0.12.0
- Babel v6.10.4
- Axios v0.14.0
- Lodash v4.15.0
- Moment v2.14.1
- MongoDB v2.2.10
- Keycloak Connect v2.2.0

A more complete, thorough version control list can be viewed in 'package.json'.

## Getting Started

To get started, first install all the necessary dependencies.
```
> npm install
```

Run an initial webpack build.
```
> npm run webpack
```

Start the frontend server.
```
> npm run start
```

To view the project, go to: [http://localhost:3000/](http://localhost:3000/)


###Starting the server and database.

Open a new shell and run this command.
```
> npm run server
```

You should now see data in the frontend.