import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/App.jsx';
import About from './components/About.jsx';
import Login from './components/Login.jsx';
import Blogs from './containers/blogsContainer';
import Home from './components/Home.jsx';
import AddMovie from './components/movie/AddMovie.jsx';
import AddBlog from './components/blog/AddBlog.jsx';
import Movie from './containers/movieContainer';
import Blog from './containers/blogContainer';
import store from './store';


ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="about" component={About} />
        <Route path="blogs" component={Blogs} />
        <Route path="login" component={Login} />
        <Route path="add-movie" component={AddMovie} />
        <Route path="add-blog" component={AddBlog} />
        <Route path="m/:movieId" component={Movie} />
        <Route path="b/:blogId" component={Blog} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById( 'root' )
);
