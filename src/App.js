import React from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import history from "./history";
import Login from "./pages/Login";
import Shops from "./pages/shops/Shops";
import Newshop from "./pages/shops/NewShop";
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
        <Route path="/shops" component={Shops} />
        <Route path="/add-new-shop" component={Newshop} />
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
