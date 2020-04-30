import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };
  }
  componentDidMount() {
    this.data();
  }
  data(){
    fetch(" http://localhost:3000/restaurants")
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          list: data,
        });
      });
  }
  deleteData = (id) => {
    fetch("http://localhost:3000/restaurants/"+id,{
      method:"Delete",
      headers:{"Content-type":"application/json"}
    }).then( (response) => response.json().then((result) => 
    alert("restaurant has deleted")))
    //alert(id);
    this.data();
  };
  render() {
    return (
      <div className="container">
        <h3 className="text-center">Restaurant List</h3>
        {this.state.list ? (
          <div>
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Location</th>
                  <th scope="col">Rating</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {this.state.list.map((data, index) => {
                  return (
                    <tr key={index}>
                      <td>{data.id}</td>
                      <td>{data.name}</td>
                      <td>{data.address}</td>
                      <td>{data.rating}</td>
                      <td>
                        <Link to={"/update/" + data.id}>
                          <FontAwesomeIcon icon={faEdit} color="orange" />
                        </Link>
                        <span
                          onClick={() => {
                            this.deleteData(data.id);
                          }}
                        >
                          <FontAwesomeIcon icon={faTrash} color="red" />
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        ) : (
          <p>none</p>
        )}
      </div>
    );
  }
}
