import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Footer from '../footer/Footer';
import './OrderHistory.css';

class OrderHistory extends Component {
    render() {
        return(
            <div className='order-page-container'>
                <div className='order-container'>
                    <Link to='/Account'>Your Account </Link> <> {'> Your Orders'} </>
                    <h2>Your Orders</h2>
                    <div className='orders'>Orders
                        <ul> list of orders here

                        </ul>
                    </div>      
                </div>
                <Footer/>
            </div>
        )
    }
}

export default OrderHistory;