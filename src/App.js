import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import List from "./components/List";
import Detail from "./components/Detail";
import Create from "./components/Create";
import Update from "./components/Update";
import Search from "./components/Search";
import Home from "./components/Home";
import Login from "./components/Login";
import NavBarMenu from './components/NavBarMenu';
import Logout from "./components/Logout";
export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <NavBarMenu/>
          <Route path="/list">
            <List />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
          <Route path="/logout">
            <Logout />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/detail">
            <Detail />
          </Route>
          <Route
            render={(props) => <Update {...props} />}
            path="/update/:id"
          ></Route>
          {/*  */}
          <Route render={(props) => <Login {...props} />} path="/login"></Route>
          {/*  */}
          <Route path="/" exact>
            <Home />
          </Route>
        </Router>
      </div>
    );
  }
}
