import {BrowserRouter as Router , Route , Switch} from "react-router-dom"



// pages
import Home from "./pages/Home"
import Contact from "./pages/Contact";


function App() {
  return (
    <Router>
      <Switch>
      <Route exact path="/"  component={Home}/>
      <Route exact path="/contact" component={Contact}/>
      </Switch>
    </Router>
  );
}

export default App;
