import React, { Component } from "react";
import Axios from "axios";
import "./css/main.css";
import { Deneme } from "./Deneme";
import { Button } from 'primereact/button';
import "primereact/resources/themes/nova-light/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      surname: "",
      email: "",
      password: "",
      confirmpassword: ""
    };
  }
  handle = event => {
    let deneme = new Deneme(5, 6);
    console.log(deneme.a);
    this.setState({ [event.target.id]: event.target.value });

    event.preventDefault();
  };
  createUser = () => {
    Axios.post("http://localhost:8080/api/users", this.state).then(response => {
      console.log(response.status);
    });
  };
  render() {
    return (
      <div className="Register">
        <input
          type="text"
          id="name"
          value={this.state.name}
          onChange={this.handle}
        />{" "}
        <br />
        <input
          type="text"
          id="surname"
          value={this.state.surname}
          onChange={this.handle}
        />
        <br />
        <input
          type="text"
          id="email"
          value={this.state.email}
          onChange={this.handle}
        />
        <br />
        <input
          type="password"
          id="password"
          value={this.state.password}
          onChange={this.handle}
        />
        <br />
        <input
          type="password"
          id="confirmpassword"
          value={this.state.confirmpassword}
          onChange={this.handle}
        />
        <br />
        <Button  variant="primary" type="submit" onClick={this.createUser} label="hello world">
          
        </Button>
        <Button label="Save" />
 
      </div>
    );
  }
}
