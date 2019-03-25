import React, { Component } from "react";
import { Button } from "react-bootstrap";
import Service from "./Service";

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
    this.setState({ [event.target.id]: event.target.value });
    event.preventDefault();
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
        <Button type="submit" onClick={this.handlerequest} label="hello world">
          Hello Worlds
        </Button>
      </div>
    );
  }
}
