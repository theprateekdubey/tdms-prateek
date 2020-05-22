import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import { Provider } from "react-redux";
import store from "./store";
import Dashboard from "./components/Dashboard";
import Editor from "./components/Editor";
import LeftMenu from "./components/layout/LeftMenu";

function App() {
  return (
    <div>
      <Provider store={store}>
        <Router>
          <Header />
          <LeftMenu />

          <Footer />
          <Route path="/createDocument" component={Editor} />
        </Router>
      </Provider>
    </div>
  );
}

export default App;
