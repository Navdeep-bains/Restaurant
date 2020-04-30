import React, { Component } from "react";

export default class Create extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      address: "",
      rating: "",
    };
  }
  handleChange(e) {
    this.setState({
      [e.target.name]:e.target.value
    });
    console.log(this.state);
  }
  formSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/restaurants" , {
      method:"Post",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(this.state)
    }).then( (result) => result.json()).then( (elem) => {
      console.log(elem);
    })
    this.setState({
      name:'',
      email:'',
      address:'',
      rating:''
    })
  }
  render() {
    return (
      <div className="text-center container">
        <h3>Restaurant Create</h3>
        <form onSubmit={(e) => {this.formSubmit(e)}}>
          <input
            className="form-control"
            onChange={(e) => this.handleChange(e)}
            name="name"
            placeholder="Enter Name"
            value={this.state.name}
          />
          <br />
          <input
            className="form-control"
            onChange={(e) => this.handleChange(e)}
            name="email"
            placeholder="Enter Email"
            value={this.state.email}
          />
          <br />
          <input
            className="form-control"
            onChange={(e) => this.handleChange(e)}
            name="address"
            placeholder="Enter Address"
            value={this.state.address}
          />
          <br />
          <input
            className="form-control"
            onChange={(e) => this.handleChange(e)}
            name="rating"
            placeholder="Enter Rating"
            value={this.state.rating}
          />
          <br />
          <button type="submit" className="btn btn-primary">
            Add Restaurant
          </button>
        </form>
      </div>
    );
  }
}
