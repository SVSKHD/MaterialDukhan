import { useReducer, useState , useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


// pages
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Faq from "./pages/faq";
import NotFound from "./pages/NotFound";
// Auth
import Signup from "./pages/Auth/Signup";
import Signin from "./pages/Auth/Signin";

import Products from "./pages/Products";
import Product from "./pages/Product";

// context
import {UserContext} from "./context/userContext"
import { ProductContext } from "./context/ProductContext";
import reducer from "./context/reducer";
import {SET_LOADING ,  SET_PRODUCT} from "./context/action.types"
// firebase
import firebase from "firebase";
import "firebase/auth";
import "firebase/storage"
import firebaseConfig from "./config/config";
firebase.initializeApp(firebaseConfig);




function App() {
  
  const initialState = {
    products: [],
    product: {},
    productToUpdate: null,
    productToUpdateKey: null,
    isLoading: false
  };

  const getProducts = async () => {
    // TODO: load existing data
    dispatch({
      type: SET_LOADING,
      payload: true
    });

    const productsRef = await firebase.database().ref("/products");
    productsRef.on("value", snapshot => {
      dispatch({
        type: SET_PRODUCT,
        payload: snapshot.val()
      });
      dispatch({
        type: SET_LOADING,
        payload: false
      });
    });
  };

  useEffect(() => {getProducts()}, [])

  const [user, setUser] = useState(null);
  const [state , dispatch ]= useReducer(reducer, initialState)
  return (
    <Router>
      <ProductContext.Provider value={{state , dispatch}}>
      <UserContext.Provider value={{ user, setUser }}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/product/:name" component={Product} />
          <Route exact path="/faq" component={Faq} />
          <Route exact path="*" component={NotFound} />
          <Route />
        </Switch>
      </UserContext.Provider>
      </ProductContext.Provider>
    </Router>
  );
}

export default App;
