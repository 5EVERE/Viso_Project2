import { Fragment } from "react/jsx-runtime";
import Header from "./Components/Header";
import Login from "./Components/Login";
import { Route, Switch, Redirect } from "react-router-dom";
import Items from "./Components/Items";
import ItemDetails from "./Components/ItemDetails";
import Register from "./Components/Register";
import NotFound from "./Components/NotFound";
import Profile from "./Components/Profile";
function App() {
  return (
    <Fragment>
      <Header></Header>

      <Switch>
        <Route path="/" exact>
          <Redirect to="/login" />
        </Route>
        <Route path="/items-list" exact>
          <Items></Items>
        </Route>
        <Route path="/items-list/:itemId">
          <ItemDetails />
        </Route>
        <Route path="/register" exact>
          <Register></Register>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="/profile">
          <Profile></Profile>
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Fragment>
  );
}

export default App;
