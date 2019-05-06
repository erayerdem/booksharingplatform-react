import React, {Component} from 'react';
import NavigationBarNonLogin from "./NavigationBarNonLogin";
import "./deneme.css";
import Axios from "axios";
import {
    Button,
    Alert,
    ButtonToolbar,
    Navbar,
    Nav,
    FormControl,
    Form
} from 'react-bootstrap';
import {withRouter} from "react-router";


class SignUp extends Component {
    state = {

        user: {
            name: "",
            surname: "",
            username: "",
            password: "",
            confirmpassword: ""
        },
        exception: "",
        show: false,
        variant: "danger",
        signupurl: "http://localhost:8080/api/users"
    };

    handle = (event) => {
        const {user} = {...this.state};
        const currentState = user;
        const {id, value} = event.target;
        currentState[id] = value;

        this.setState({user: currentState});
        event.preventDefault()
    };
    navigateme = () => {

        this.props.history.push("/signin");


    };
    createUser = () => {

        Axios.post(this.state.signupurl, this.state.user).then(response => {
            if (response.status === 201) {


                this.navigateme();
            }
        }).catch((error) => {
            const a = error.response.data.message;
            this.setState({
                exception: a,
                show: true,
                variant: "danger"

            })
            ;


        });
    };


    render() {
        console.log("render");
        return (
            <div>
                <NavigationBarNonLogin></NavigationBarNonLogin>
                <Form className="signuppage-form">
                    <Form.Group>
                        <Form.Control type="text" placeholder="Ad" value={this.state.user.name}
                                      id={"name"} onChange={this.handle}/>

                        <Form.Control type="text" className="buttonpad"
                                      placeholder="Soyad" value={this.state.user.surname} id={"surname"}
                                      onChange={this.handle}/>

                        <Form.Control type="email" className="buttonpad"
                                      placeholder="Mail" value={this.state.user.username} id={"username"}
                                      onChange={this.handle}/>

                        <Form.Control type="password" className="buttonpad"
                                      placeholder="Parola" value={this.state.user.password} id={"password"}
                                      onChange={this.handle}/>

                        <Form.Control type="password" className="buttonpad"
                                      placeholder="Parola Onay" value={this.state.user.confirmpassword}
                                      id={"confirmpassword"} onChange={this.handle}/>

                    </Form.Group>
                    <Button variant="primary" type={"submit"} block="block" onClick={this.createUser}>Kayıt Ol</Button>
                    <Alert variant={this.state.variant} show={this.state.show} className="buttonpad" type="hidden">
                        {this.state.exception}

                    </Alert>
                </Form>


            </div>);
    }

}

export default withRouter(SignUp);