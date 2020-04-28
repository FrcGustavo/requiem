import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Layout from '../components/Layout';
import Post from '../pages/Post';
import Blog from '../pages/Blog';
import Home from '../pages/Home';
import Error404 from '../pages/Error404';

import '../assets/styles/main.scss';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/not-found" component={Error404} />
        <Route exact path="/:slug" component={Post} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
