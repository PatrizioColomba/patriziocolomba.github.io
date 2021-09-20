import './App.css';
import Blog from './blog/Blog';
import Dashboard from './dashboard/Dashboard';
import { Redirect, Route, Switch, HashRouter } from 'react-router-dom'
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
            <Route key="home" exact path="/">
              <Redirect to="/kotlin" />
            </Route>
            <Route key="kotlin" exact path="/kotlin">
              <Blog section="kotlin"/>
            </Route>
            <Route key="react" exact path="/react">
              <Blog section="react"/>
            </Route>
            <Route key="laravel" exact path="/laravel">
              <Blog section="laravel"/>
            </Route>
            <Route key="spring" exact path="/spring">
              <Blog section="spring"/>
            </Route>
          </Switch>
        </section>
      </HashRouter>
    </React.StrictMode>
  );
}

export default App;
