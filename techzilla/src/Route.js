import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Home from './components/homepage/Home';
import Products from './components/homepage/Products';
import Login from '../src/components/LoginSignUpPage/login.component'
import SignUp from '../src/components/LoginSignUpPage/signup.component'
import AddQuestion from './components/AddQuestion';
import QuestionDetails from './components/QuestionDetails';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from 'react-router-dom';
import Forum from './components/Forum';
import Navbar from './components/Navbar'

export default function RouteComponent() {
  return (
    <Router>
      <div className="App">
      <Navbar/>
      <Switch>
      <Route path='/' exact component={Home} />
          <Route path='/signup' exact component={SignUp} />
          <Route path='/login' exact component={Login} />
          <Route path='/products' component={Products} />
        <Route exact path="/forum">
          <Forum />
        </Route>
        <Route path="/add">
          <AddQuestion />
        </Route>
        <Route path="/:id" component={QuestionDetails} />
      </Switch>
      </div>
    </Router>
  );
}
