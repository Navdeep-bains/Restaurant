import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchKey: null,
      dataFound: false,
      searchData:null
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
            searchData: data,
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
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
    //var key = this.state.searchKey;
    fetch("http://localhost:3000/restaurants?q=" + this.state.searchKey).then(
      (response) => {
        response.json().then((result) => {
          //console.log(result)
          if(result.length>0){
            this.setState({
                searchData: result,
                dataFound:false
              });
          }
          else{
            this.setState({
                searchData: null,
                dataFound:true
              });
          }
        });
      }
    );
    //console.log(this.state)
  }
  render() {
    return (
      <React-Fragment>
          <div className="text-center container">
        <h3>Restaurant Search</h3>
        <form>
          <input
            type="text"
            className="form-control"
            placeholder="Search"
            name="searchKey"
            onChange={(e) => {
              this.handleChange(e);
            }}
          />
          <div>
          {this.state.searchData ? (
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
                {this.state.searchData.map((data, index) => {
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
        ): (
                ""
            )}
            {this.state.dataFound ? <p>No Data Found</p> : null}
          </div>
        </form>
        </div>
      </React-Fragment>
    );
  }
}
