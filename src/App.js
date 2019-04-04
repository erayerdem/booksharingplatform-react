import React from "react";
import Register from "./Register";
import {MyHeader} from "./Myheader";
import { HashRouter, Switch, Route } from "react-router-dom";
import Book from "./Book";
      class App extends React.Component {
        render() {
    return (
      <div className="App">
        <div>
          <p>Taken from wikpedia</p>

        </div>
        <HashRouter>
          <Switch>
            <Route>
            <Route exact path="/" component={Register} />
            <Route path="/page2" component={MyHeader} />
            <Route path="/book" component={Book} />
          </Switch>
    </HashRouter>
      </div>
    );
  }
}

export default App;
