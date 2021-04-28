import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Landing from './components/Landing';
import Login from './components/Login';
import './App.css';
import NewRecipe from './components/NewRecipe';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/'>
            <Landing />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/new-recipe'>
            <NewRecipe />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
