import React, { Component } from "react";
import TextField from '@material-ui/core/TextField';
import { Link } from "react-router-dom";


export default class Login extends Component {
    render() {
        return (
            <div className="login" >
               
                <div className="auth-wrapper" >
                <div className="auth-inner" style={{position: 'absolute', left: '50%', top: '50%',transform: 'translate(-50%, -50%)'}}>
                    <form>
                        <div className="login-sign-up-nav">
                            <Link className="nav-link" to='/signup'>Sign up</Link>
                            <Link className="nav-link current" to='/login'>Login</Link>
                        </div>

                        <div className="form-group">
                            <TextField label="Username" type="text" fullWidth/>
                        </div>

                        <div className="form-group">
                            <TextField label="Password" type="password" fullWidth error id="standard-error-helper-text" 
                                        defaultValue="Hello World"
                                        helperText="Incorrect password."/>
                        </div>

                        <br></br>

                        <Link className="btn btn-danger btn-block" to='/'>Login</Link>
                        {/*<p className="forgot-password text-right">
                            Forgot <a href="#">password?</a></p>*/}
                    </form>
                </div>
                </div>
            </div>
        );
    }
}
