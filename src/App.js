import './App.css';
import Main from "./Components/Main.js"
import Signin from "./Components/Signin"
import Signup from "./Components/Signup"
import Done from "./Components/Done"
import Pc from "./Components/Pc"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
          <Route exact path="/">  <Main/> <Pc/> </Route>
          <Route exact path="/signup">  <Signup/> </Route>
          <Route exact path="/signin"> <Signin/> </Route>
          <Route exact path="/done"> <Done/> </Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
