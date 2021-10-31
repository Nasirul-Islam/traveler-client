import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import AuthProvider from "./context/AuthProvider";
import AddServices from "./Pages/AddServices/AddServices";
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login';
import NotFound from "./Pages/NotFound/NotFound";
import ManageOrder from "./Pages/Orders/ManageOrder/ManageOrder";
import MyOrder from "./Pages/Orders/MyOrder/MyOrder";
import PrivetRoute from "./Pages/PrivetRoute/PrivetRoute";
import Purchase from './Pages/Purchase/Purchase';
import Footer from './Pages/Shared/Footer/Footer';
import Navigation from './Pages/Shared/Navigation/Navigation';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Navigation></Navigation>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivetRoute path="/purchase/:purchaseid">
              <Purchase></Purchase>
            </PrivetRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivetRoute path="/myOrder">
              <MyOrder></MyOrder>
            </PrivetRoute>
            <PrivetRoute path="/manageOrder">
              <ManageOrder></ManageOrder>
            </PrivetRoute>
            <PrivetRoute path="/addServices">
              <AddServices></AddServices>
            </PrivetRoute>
            <Route exact path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
