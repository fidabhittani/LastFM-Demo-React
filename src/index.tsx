import React from "react";
import ReactDOM from "react-dom";
import { Provider as StateProvider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import Root from "./components/app";
import * as serviceWorker from "./serviceWorker";
import store from "./store";

import "toasted-notes/src/styles.css";
import "./index.scss";

const App = () => (
  <Router>
    <StateProvider store={store}>
      <Root />
    </StateProvider>
  </Router>
);

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
