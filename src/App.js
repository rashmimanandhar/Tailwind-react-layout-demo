import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import LogRocket from 'logrocket';
import { Component } from "react";
import { Route, Switch } from "react-router";
import "./App.css";
import Home from "./pages";
import Interpreter from "./pages/Interpreter";

class App extends Component {
  componentDidMount = () => {
    LogRocket.init('v98y6o/kudo-meeting-app');
    library.add(fab, fas, far);
  
  }
  render() {

    return (
      <>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Interpreter" component={Interpreter} />
        </Switch>
      </>
    );
  }
}

export default App;
