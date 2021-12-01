import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// pages
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Faq from "./pages/faq"
import NotFound from "./pages/NotFound"
// Auth
import Signup from "./pages/Auth/Signup";
import Signin from "./pages/Auth/Signin";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/signin" component={Signin} />
        <Route exact path="/faq" component={Faq}/>
        <Route exact path="*" component={NotFound}/>
        <Route />
      </Switch>
    </Router>
  );
}

export default App;
