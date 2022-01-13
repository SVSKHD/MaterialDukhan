import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


// pages
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Faq from "./pages/faq";
import NotFound from "./pages/NotFound";
// crud
import ProductCrud from "./pages/crud/Product"
import CategoryCrud from "./pages/crud/Category";
// // Auth
// import Signup from "./pages/Auth/Signup";
// import Signin from "./pages/Auth/Signin";


import Products from "./pages/Products";
import Product from "./pages/Product";

import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/category/crud" component={CategoryCrud}/>
          <Route exact path="/product/crud" component={ProductCrud}/>
          <Route exact path="/products" component={Products} />
          <Route exact path="/product/:name" component={Product} />
          <Route exact path="/faq" component={Faq} />
          <Route exact path="*" component={NotFound} />
          <Route />
        </Switch>
    </Router>
  );
}

export default App;
