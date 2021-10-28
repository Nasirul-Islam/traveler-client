import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './component/Home/Home';
import Footer from './component/shared/Footer/Footer';
import Navigation from './component/shared/Navigation/Navigation';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation></Navigation>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
