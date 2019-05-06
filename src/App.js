import React from "react";
import Register from "./Register";
import {MyHeader} from "./Myheader";
import { HashRouter, Switch, Route } from "react-router-dom";
import Book from "./Book";
import HomePage from "./HomePage"
import SignUp from "./SignUp";
import SignIn from "./SignIn";
      class App extends React.Component {
        render() {
    return (
      <div className="App">
        <HashRouter>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/page2" component={MyHeader} />
              <Route path="/book" component={Book} />
              <Route path="/signup" component={SignUp} />
              <Route path="/signin" component={SignIn} />
          </Switch>

      </HashRouter>
      

      </div>
    );
  }
}

export default App;
