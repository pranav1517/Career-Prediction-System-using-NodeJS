import './App.css';
import Main from "./Components/Main.js"
import Profile from "./Components/Profile"
import Signin from "./Components/Signin"
import Signup from "./Components/Signup"
import Info from "./Components/Info"
import Dob from "./Components/Dob"
import Gender from "./Components/Gender"
import Done from "./Components/Done"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      {/* <Main/> */}
      {/* <Profile/> */}
      <Router>
      <Switch>
          <Route exact path="/signup">  <Signup/> </Route>
          <Route exact path="/signup/info"> <Info/> </Route>
          <Route exact path="/signup/dob"> <Dob/> </Route>
          <Route exact path="/signup/gender"> <Gender/> </Route>
          <Route exact path="/signin"> <Signin/> </Route>
          <Route exact path="/done"> <Done/> </Route>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
