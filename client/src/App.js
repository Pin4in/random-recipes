import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Provider } from "react-redux"

import Ingredients from './containers/Ingredients';
import Recipe from './containers/Recipe';
import Home from './containers/Home';
import store from './store/store';

import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className='container'>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/ingredients">Ingredients</Link>
              </li>
              <li>
                <Link to="/recipe">Recipe</Link>
              </li>
            </ul>

            <hr />

            <Route exact path="/" component={Home} />
            <Route exact path="/ingredients" component={Ingredients} />
            <Route exact path="/recipe" component={Recipe} />
            {/* <Route path="/about" component={About} />
            <Route path="/topics" component={Topics} /> */}
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
