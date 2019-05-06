import React, {Component} from 'react';
import NavigationBarNonLogin from "./NavigationBarNonLogin";
import {Alert, Button, Form} from "react-bootstrap";
import "./deneme.css";
import Axios from "axios";

class SignIn extends Component {
    state = {
        user: {
            username: "",
            password: ""
        },
        signinurl: "http://localhost:8080/login",
        show: false
    };

    handle = (event) => {
        const {user} = {...this.state};
        const currentState = user;
        const {id, value} = event.target;
        currentState[id] = value;

        this.setState({user: currentState});
        event.preventDefault()
    };
    beLogin = (event) => {
        console.log("hello world");
        Axios.post(this.state.signinurl, this.state.user).then(response => {
            if (response.status === 200) {
            console.log(response);

            }
        }).catch(error => console.log("hata"));
        event.preventDefault();
    };


    render() {
        return (
            <div>
                <NavigationBarNonLogin/>
                <Form className="signuppage-form">
                    <Form.Group>


                        <Form.Control type="email" className="buttonpad"
                                      placeholder="E-Posta Adresi" value={this.state.user.username} id={"username"}
                                      onChange={this.handle}/>

                        <Form.Control type="password" className="buttonpad"
                                      placeholder="Parola" value={this.state.user.password} id={"password"}
                                      onChange={this.handle}/>

                    </Form.Group>
                    <Button variant="primary" type={"submit"} block="block" onClick={this.beLogin}>Kayıt
                        Ol</Button>
                    <Alert variant={"danger"} show={this.state.show} className="buttonpad" type="hidden">
                        {"Giriş Başarısız"}

                    </Alert>
                </Form>
            </div>
        );
    }
}


export default SignIn;