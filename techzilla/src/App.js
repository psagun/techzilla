//import logo from './components/assets/images/logo1.png';
import "./App.css";
import Home from "./components/homepage/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/auth/Login";

function App() {
	return (
		<>
			<Login />
			{/* <Router>
        <Switch>
          <Route path='/' exact component={Home} />
        </Switch>
      </Router> */}
		</>
	);
}

export default App;
