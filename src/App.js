import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import { Provider } from "react-redux";
import store from "./store";

import { HashRouter as Router, Link } from "react-router-dom";
import routes from "./routes";

class App extends Component {
  render() {
    console.log(this.props);
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Welcome to React</h1>
              <Link to="/">Home</Link>
              <Link to="/todos">Todos</Link>
              <Link to="/compose">Make Todo</Link>
            </header>
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
            {routes}
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
