import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Landing from './components/Landing';
import Login from './components/Login';
import Signup from './components/SignUp'
import NavBar from './components/NavBar';
import Recipe from './components/Recipe'
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
          <Route path='/signup'>
            <Signup />
          </Route>
          <Route path='/recipe/:id'>
            <Recipe />
          </Route>
          <Route path='/newRecipe'>
          <NewRecipe />
          </Route>
          {/* testing */}
          <Route path='/nav'>
            <NavBar />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;