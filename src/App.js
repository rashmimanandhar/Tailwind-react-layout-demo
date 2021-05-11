import { Route, Switch } from "react-router";
import "./App.css";
import Home from "./pages";
import Interpreter from "./pages/Interpreter";

function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Interpreter" component={Interpreter} />
      </Switch>
    </>
  );
}

export default App;
