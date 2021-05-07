import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button'

class PaymentMethods extends Component {
    render() {
        return(
            <div className='payment-container' style={{
                margin: 'auto',
                maxWidth: '1000px',
                paddingTop: '25px',
                borderBottomStyle:'solid',
                borderWidth: 'thin'
                }}>
                <Link to='/Account'>Your Account</Link> <> {'> Payment Methods'} </>
                <h2>Payment Methods</h2>
                <div>
                    <h4 style={{paddingTop:'15px'}}>Wallet</h4>
                    <h5>Your credit and debit cards</h5>
                    <div className='creditcards' style={{
                        borderBottomStyle:'solid',
                        borderWidth:'thin'
                        }}>   
                    </div>
                    <h4>Add a New Payment Method</h4>
                <div className='addcards'>
                    <form id='addcardform'>
                        <div className='cardname'>
                            <TextField label='Name' type='text' /> 
                        </div>
                        <div className='cardname'>
                            <TextField label='Card Number' type='text'/>
                        </div>
                        <div className='cardname'>
                            <TextField label='Expiration mm/yy' type='text'/>
                        </div>
                        <Button variant='dark' as="input" type="submit" value="Submit"/>
                    </form>
                </div>
                </div>
            </div>
        )

    }
}

export default PaymentMethods;