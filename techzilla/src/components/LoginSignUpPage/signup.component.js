import React, { Component } from "react";
import TextField from '@material-ui/core/TextField';
import { Link } from "react-router-dom";


export default class SignUp extends Component {
    render() {
        return (
            
            <div className="signup">
               
                <div className="auth-wrapper">
                <div className="auth-inner" style={{position: 'absolute', left: '50%', top: '50%',transform: 'translate(-50%, -50%)'}}>
                    <form>
                        <div className="login-sign-up-nav">
                            <Link className="nav-link current" to='/signup'>Sign up</Link>
                            <Link className="nav-link" to='/login'>Login</Link>
                        </div>

                        <div className="form-group">
                            <TextField label="First name" type="text" fullWidth/>
                        </div>

                        <div className="form-group">
                            <TextField label="Last name" type="text" fullWidth/>
                        </div>

                        <div className="form-group">
                            <TextField label="Email" type="email" fullWidth/>
                        </div>

                        <div className="form-group">
                            <TextField label="Username" type="text" fullWidth/>
                        </div>

                        <div className="form-group">
                            <TextField label="Password" type="password" fullWidth/>
                        </div>

                        <br></br>

                        <Link className="btn btn-danger btn-block" to='/signup'>Sign up</Link>
                        <p className="forgot-password text-right">
                            Already registered? <Link to='/login'>Login</Link>
                        </p>
                    </form>
                </div>
                </div>
            </div>
        );
    }
}