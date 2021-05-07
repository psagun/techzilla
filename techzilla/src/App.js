
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Home from './components/homepage/Home';
import Footer from '../src/components/footer/Footer'
import Navbar from './components/Navbar'
import Login from '../src/components/LoginSignUpPage/login.component'
import SignUp from '../src/components/LoginSignUpPage/signup.component'
import Account from '../src/components/Account/Account'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Products from './components/homepage/Products';
import UserProfile from './components/Account/UserProfile';
import OrderHistory from './components/Account/OrderHistory';
import PaymentMethods from './components/Account/PaymentMethods';

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
          <Route path='/account' exact component={Account}/>
          <Route path='/Account/UserProfile' exact component={UserProfile} />
          <Route path='/Account/OrderHistory' exact component={OrderHistory} />
          <Route path='/Account/PaymentMethods' exact component={PaymentMethods} />

        </Switch>
        </div>
      </Router>
     
    
  );
}

export default App;
