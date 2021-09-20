import './App.css';
import Blog from './blog/Blog';
import Dashboard from './dashboard/Dashboard';
import { Route, Switch, HashRouter } from 'react-router-dom'
import TopBar from './topbar/TopBar';
import React from 'react';

function App() {
  return (
    <React.StrictMode>
      <HashRouter>
        <section>
          <TopBar />
          <Dashboard />
          <Switch>
            <Route exact path="/">
              <Blog src="posts/post.md"/>
            </Route>
            <Route exact path="/kotlin">
              <Blog src="posts/post.md"/>
            </Route>
            <Route exact path="/react">
              <Blog src="posts/post.md"/>
            </Route>
            <Route exact path="/laravel">
              <Blog src="posts/post.md"/>
            </Route>
            <Route exact path="/spring">
              <Blog src="posts/post.md"/>
            </Route>
          </Switch>
        </section>
      </HashRouter>
    </React.StrictMode>
  );
}

export default App;
