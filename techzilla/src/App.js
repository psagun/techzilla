
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Home from './components/homepage/Home';
import Products from './components/homepage/Products';
import Products from './components/homepage/Products'
import Navbar from './components/Navbar'
import Login from '../src/components/LoginSignUpPage/login.component'
import SignUp from '../src/components/LoginSignUpPage/signup.component'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { DataProvider } from './components/Context'

function App() {
  return (
    
    
        <Router>
        <div className="App">
        <Navbar/>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/signup' exact component={SignUp} />
          <Route path='/login' exact component={Login} />
          <Route path='/products' component={Products} />
            <Route path='/products' component={Products} exact />

        </Switch>
        </div>
      </Router>
     
    
  );
}

export default App;
