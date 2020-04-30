import React, { Component } from "react";

export default class Update extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      address: "",
      rating: "",
    };
  }
  componentDidMount() {
    fetch("http://localhost:3000/restaurants/" + this.props.match.params.id)
      .then((response) => response.json())
      .then((elem) =>
        this.setState({
          name: elem.name,
          email: elem.email,
          address: elem.address,
          rating: elem.rating,
        })
      );
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
    // console.log(this.state);
  }
  formUpdate(e) {
    e.preventDefault();
    fetch("http://localhost:3000/restaurants/"+this.props.match.params.id, {
      method: "Put",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(this.state),
    })
      .then((result) => result.json())
      .then((elem) => {
        alert("restaurant has updated");
      });
    this.setState({
      name: "",
      email: "",
      address: "",
      rating: "",
    });
  }
  render() {
    //console.log(this.props.match.params.id);
    return (
      <div>
        <form
          onSubmit={(e) => {
            this.formUpdate(e);
          }}
        >
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
            Update Restaurant
          </button>
        </form>
      </div>
    );
  }
}
