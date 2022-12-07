import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Map from './pages/Map';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <div className="wrapper">
            <Switch>
              <Route path={"/"} exact component={Map} />
              
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

render(<App />, document.getElementById('root'));
