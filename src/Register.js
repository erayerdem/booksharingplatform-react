import React, {Component} from "react";
import Axios from "axios";
import {Button} from 'primereact/button';
import "primereact/resources/themes/nova-light/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import NavigationBar from "./NavigationBarNonLogin";

export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            surname: "",
            username: "",
            password: "",
            confirmpassword: ""
        };
    }

    handle = event => {


        event.preventDefault();
    };
    createUser = () => {
        Axios.post("http://localhost:8080/api/users", this.state).then(response => {
            console.log(response.status);
        });
    };
    navigateme = () => {
        setInterval(() => this.props.history.push("/"), 2000);

    };

    render() {
        return (


            <div class Name="Register">
                <div>Hello World <NavigationBar>Hello Word</NavigationBar></div>

                <h1>{this.props.name}</h1>
                <input
                    type="text"
                    id="name"
                    value={this.state.name}
                    onChange={this.handle}
                />{" "}
                <br/>
                <input
                    type="text"
                    id="surname"
                    value={this.state.surname}
                    onChange={this.handle}
                />
                <br/>
                <input
                    type="text"
                    id="email"
                    value={this.state.username}
                    onChange={this.handle}
                />
                <br/>
                <input
                    type="password"
                    id="password"
                    value={this.state.password}
                    onChange={this.handle}
                />
                <br/>
                <input
                    type="password"
                    id="confirmpassword"
                    value={this.state.confirmpassword}
                    onChange={this.handle}
                />
                <br/>
                <Button variant="primary" type="submit" onClick={this.createUser} label="hello world">
                </Button>
                <Button label="Save"/>

            </div>
        );
    }
}
