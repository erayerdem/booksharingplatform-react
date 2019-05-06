import React, { PureComponent } from 'react';
import { Button,Alert,ButtonToolbar,Navbar,Nav,FormControl,Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import "./deneme.css";

class NavigationBarNonLogin extends React.Component {

  render() {
    return (
<div>


  <Navbar bg="primary" variant="dark"className="navigation-bar">
    <Navbar.Brand href="#">Ana Sayfa</Navbar.Brand>
    <Navbar.Brand href="#home">Kitaplar</Navbar.Brand>
    <Navbar.Brand href="#home">Etkinlikler</Navbar.Brand>
    <Navbar.Brand href="#home">Pricing</Navbar.Brand>
      <Form inline className="navibar-right">
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-light">Search</Button>
      </Form>
      <Form className="navigation-bar-right">
      <Navbar.Brand href="#signup">Üye Ol</Navbar.Brand>
      <Navbar.Brand href="#signin">Giriş Yap</Navbar.Brand>
      </Form>
  </Navbar>




  </div>


    );
  }

}

export default NavigationBarNonLogin;
