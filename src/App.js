import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { auth } from "./firebase";
import { useStateValue } from "./State/StateProvider";

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      //console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login /> {/* Login Component */}
          </Route>
          <Route path="/checkout">
            <Header /> {/* Header Component */}
            <Checkout /> {/* Checkout Component */}
          </Route>
          <Route path="/">
            <Header /> {/* Header Component */}
            <Home /> {/* Home Component */}
          </Route>
        </Switch>
        <div className="Footer">
          <h3>Developed By Varun Pratap Singh</h3>
        </div>
      </div>
    </Router>
  );
}

export default App;
