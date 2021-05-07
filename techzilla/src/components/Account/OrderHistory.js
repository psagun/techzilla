import React, { Component } from 'react';
import { Link } from "react-router-dom";

class OrderHistory extends Component {
    render() {
        return(
            <div className='order-container' style={{
                margin: 'auto',
                maxWidth: '1000px',
                paddingTop: '25px',
                borderBottomStyle:'solid',
                borderWidth: 'thin'
                }}>
                <Link to='/Account'>Your Account</Link> <> {'> Your Orders'} </>
                <h2>Your Orders</h2>
                <div className='orders'>Orders
                    <ul> list of orders here

                    </ul>
                </div>
            </div>            
        )
    }
}

export default OrderHistory;