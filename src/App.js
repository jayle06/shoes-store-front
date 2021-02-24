import './css/App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './components/Header.js';
import Home from './components/Home.js'

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/product">
            <Header />
            <Home />
          </Route>
          <Route path="/contact">
            <Header />
            <h1>Contact</h1>
          </Route>
          <Route path="/about">
            <Header />
            <h1>About</h1>
          </Route>
          <Route path="/login">
            <h1>Login</h1>
          </Route>
          <Route path="/cart">
            <h1>Cart</h1>
          </Route>
          <Route path="/">
            <Header />
            <h1>Home Page </h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
