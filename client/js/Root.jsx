import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/App.jsx';
import About from './components/About.jsx';
import Movies from './containers/movieContainer';
import Blogs from './containers/blogContainer';
import Home from './components/Home.jsx';
import store from './store';


ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="about" component={About} />
        <Route path="blogs" component={Blogs} />
        <Route path="movies" component={Movies} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById( 'root' )
);
