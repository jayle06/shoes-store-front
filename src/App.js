import './css/App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './components/Header.js';
import Home from './components/Home.js'

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/">
            <Header />
            <Home />
          </Route>
          <Route path="/product">
            <h1>Hello Product</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
