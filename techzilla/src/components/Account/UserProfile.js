import React, { Component } from 'react';
import { Link } from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import Button from 'react-bootstrap/Button'
import Footer from '../footer/Footer';
import './UserProfile.css';

class UserProfile extends Component {
    render() {
        return(
            <div className='profile-page-container'>
                <div className='profile-container'>
                    <Link to='/Account'>Your Account</Link> <> {'> Your Profile'} </>
                    <h2>Profile</h2>
                    <div className='information-container'>
                        <div className='current-information'>
                            <h5>Current Information</h5>
                            <address>
                                Name:<br/>
                                Email:<br/>
                                Phone:<br/>
                                Address:
                            </address>
                        </div>
                        <div className='modify-information'>
                            <h5>Modify Information</h5>
                            <form id='editinformation' style={{width:'500px'}}>
                                <div className='email'>
                                    <TextField label='Email' type='text' fullWidth/>
                                </div>
                                <div className='phone'>
                                    <TextField label='Phone Number' type='text' fullWidth/>
                                </div>
                                <div className='address'>
                                    <h6>ADDRESS</h6>
                                    <div className='country'>
                                        <TextField label='Country' type='text' fullWidth/>
                                    </div>   
                                    <div className='street-address'>
                                        <TextField label='Street Address' type='text' fullWidth/>
                                    </div>
                                    <div style={{display:'flex'}}>
                                        <div className='city'>
                                            <TextField label='City' type='text'/>
                                        </div>
                                        <div className='state'>
                                            <TextField label='State' type='text'/>
                                        </div>
                                        <div className='zip-code'>
                                            <TextField label='Zip Code' type='text'/>
                                        </div>
                                    </div>
                                </div>          
                                <Button variant='dark' as="input" type="submit" value="Save Changes" style={{marginTop:'5px'}}/>
                            </form>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default UserProfile;