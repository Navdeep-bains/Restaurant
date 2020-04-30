import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faHome,
  faPlus,
  faList,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
export default class NavBarMenu extends Component {
  render() {
    return (
      <div>
        <ul>
          {/* <li>
            <Link to="/">Login</Link>
          </li> */}

          <li>
            <Link to="/">
              <FontAwesomeIcon icon={faHome} />
              Home
            </Link>
          </li>
          <li>
            <Link to="list">
              <FontAwesomeIcon icon={faList} />
              List
            </Link>
          </li>
          <li>
            <Link to="create">
              <FontAwesomeIcon icon={faPlus} />
              Create
            </Link>
          </li>
          <li>
            <Link to="search">
              <FontAwesomeIcon icon={faSearch} />
              Search
            </Link>
          </li>
          <li>
            <Link to="detail">Detail</Link>
          </li>
          {localStorage.getItem("login") ? 
            <li>
              <Link to="/logout">Logout</Link>
            </li>
           : 
            <li>
              <Link to="/login">Login</Link>
            </li>
          }
        </ul>
      </div>
    );
  }
}
