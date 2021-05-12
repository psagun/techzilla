import React from 'react';
import App from './App';
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

export default function RouteComponent() {
  return (

    <div className="App">
      <Router>
        <nav>
          <Link to='/'>
          Home
          </Link>
          <Link to='/forum'>
          Forum
          </Link>
        </nav>
      <Switch>
        <Route exact path="/forum">
          <Forum/>
        </Route>
        <Route path="/add">
          <AddQuestion />
        </Route>
        <Route path="/:id" component={QuestionDetails} />
      </Switch>
    </Router> 

    </div>
  );
}
