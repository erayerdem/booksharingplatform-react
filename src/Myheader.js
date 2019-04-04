import React, { Component } from 'react';
import { withRouter } from "react-router";

export  class MyHeader extends Component{
navigateme = ()=>{
    this.props.history.push("/");

}

  render() {
    return (
      <div className="layout-topbar clearfix">
        <h1>this is My Header page</h1>
      <button onClick={this.navigateme}>Hello Button</button>
      </div>
    );
  
  }
};
export default withRouter(MyHeader);