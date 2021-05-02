import React from 'react'
import '../../App.css';
import Login from './login.component'
import SignUp from './signup.component'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function LoginSignUp() {
    return (
        <>
        <div className="App" style={{ 
                    backgroundRepeat: 'no-repeat', 
                    backgroundSize: 'cover', 
                    minWidth: '100%', 
                    minHeight: '100%' }}>
        <Router>
            <Switch>
            <Route path='/signup' exact component={SignUp} />
            <Route path='/login' exact component={Login} />
            </Switch>
        </Router>
        </div>
        </>
    )
}

export default LoginSignUp
