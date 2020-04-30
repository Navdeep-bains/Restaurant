import React, { Component } from "react";
import { Button } from "reactstrap";
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      password: "",
    };
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  Login() {
    fetch("http://localhost:3000/login?q=" + this.state.name ).then(
      (response) => {
        response.json().then((result) => {
          //console.log(result);
          if(result.length>0){
              localStorage.setItem("login",JSON.stringify(result));
            this.props.history.push("list");
          }
          else{
              alert("please enter valid username and password")
          }
        });
      }
    );
  }
  render() {
      console.log("login",this.props)
    return (
      <div className="text-center container">
        <form>
          <input
            type="text"
            name="name"
            className="text-control"
            placeholder="Enter Name"
            onChange={(e) => this.handleChange(e)}
          />
          <br />
          <input
            type="text"
            name="password"
            className="text-control"
            placeholder="Enter Password"
            onChange={(e) => this.handleChange(e)}
          />
          <br />
          <Button className="btn btn-primary" onClick={(e) => this.Login(e)}>
            Login
          </Button>
        </form>
      </div>
    );
  }
}
