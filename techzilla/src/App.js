//import logo from './components/assets/images/logo1.png';
import './App.css';
import Home from './components/homepage/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Products from './components/homepage/Products';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/products' component={Products} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
