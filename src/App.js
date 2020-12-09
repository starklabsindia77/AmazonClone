import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import Payment from "./components/Payment";
import Orders from "./components/Orders";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { auth } from "./firebase";
import { useStateValue } from "./State/StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51HPvU9DFg5koCdLGJJbNo60QAU99BejacsvnKvT8xnCu1wFLCuQP3WBArscK3RvSQmSIB3N0Pbsc7TtbQiJ1vaOi00X9sIbazL"
);

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
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/login">
            <Login /> {/* Login Component */}
          </Route>
          <Route path="/checkout">
            <Header /> {/* Header Component */}
            <Elements stripe={promise}>
              <Payment /> {/* Checkout Component */}
            </Elements>
          </Route>
          <Route path="/cart">
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
