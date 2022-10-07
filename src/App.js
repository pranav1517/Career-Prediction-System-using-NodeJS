import './App.css';
import Main from "./Components/Main.js"
import Signin from "./Components/Signin"
import Signup from "./Components/Signup"
import Done from "./Components/Done"
import Pc from "./Components/Pc"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  const user = localStorage.getItem('token');
  return (
    
    <div className="App">
      <Router>
      <Switch>
          <Route exact path="/"> <Pc/></Route>
          <Route exact path="/signup">  <Signup/> </Route>
          <Route exact path="/signin"> <Signin/> </Route>
          <Route exact path="/done"> <Done/> </Route>
          <Route exact path="/" element={<Link to="/login"/>}/>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
