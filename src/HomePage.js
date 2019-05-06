import PropTypes from 'prop-types'
import 'bootstrap/dist/css/bootstrap.css';
import NavigationBarNonLogin from "./NavigationBarNonLogin";
import React, { Component } from 'react';

class HomePage extends Component {

  render() {
    return (
      <div>
        <NavigationBarNonLogin></NavigationBarNonLogin>
      </div>
    );
  }

}

export default HomePage;
