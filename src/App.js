import React from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import history from "./history";
import Login from "./pages/Login";
import Shops from "./pages/shops/Shops";
import ProductDetails from "./pages/shops/ProductDetails";
import Header from "./components/Header";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

function App() {
  const DefaultContainer = () => (
    <div>
      <div className="mainwrapper">
        <Header />
        <Route path="/shop" component={Shops} />
        <Route path="/product-details" component={ProductDetails} />
      </div>
    </div>
  );

  const LoginContainer = () => (
    <div className="container">
      <Route exact path="/" render={() => <Redirect to="/" />} />
      <Route path="/" component={Login} />
    </div>
  );

  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={LoginContainer} />
          <Route component={DefaultContainer} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
