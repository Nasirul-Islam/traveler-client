import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login';
import NotFound from "./Pages/NotFound/NotFound";
import AddOrder from "./Pages/Orders/AddOrder/AddOrder";
import ManageOrder from "./Pages/Orders/ManageOrder/ManageOrder";
import MyOrder from "./Pages/Orders/MyOrder/MyOrder";
import Purchase from './Pages/Purchase/Purchase';
import Footer from './Pages/Shared/Footer/Footer';
import Navigation from './Pages/Shared/Navigation/Navigation';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation></Navigation>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/purchase">
            <Purchase></Purchase>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/myOrder">
            <MyOrder></MyOrder>
          </Route>
          <Route path="/manageOrder">
            <ManageOrder></ManageOrder>
          </Route>
          <Route path="/addOrder">
            <AddOrder></AddOrder>
          </Route>
          <Route exact path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
