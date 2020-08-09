import React, {useEffect} from 'react'
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import SignIn from './SignIn';
import RegisterUser from './RegisterUser';
import { useStateValue } from './context/StateContext';
import { auth } from './firebase';



function App() {
  const [{user}, dispatch] = useStateValue();

  useEffect(() => {
    const unsubcribe = auth.onAuthStateChanged(authUser => {
      if(authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser
        });
      }
      else{
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    });
    return () => {
      unsubcribe();
    }
  }, [])

  console.log("User Is ===>>", user)
  return (
    <Router>
    <div className="app">
      <Switch>
        {/* <Route path="/login">
          <Login/>
        </Route> */}
        <Route path="/signin">
          <SignIn/>
        </Route>
        <Route path="/register">
          <RegisterUser/>
        </Route>
        <Route path="/checkout">
           <Header/>
          <Checkout/>
        </Route>
        <Route path="/"> 
            <Header/>
            <Home/>
        </Route>
      </Switch>
    </div>
    </Router>

  )
}

export default App
