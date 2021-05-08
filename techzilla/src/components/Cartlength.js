import React, { Component } from 'react'
import CartIcon from './assets/images/cart1.png'
import { Link } from 'react-router-dom'
import './Navbar.css';
import {DataContext} from './Context'

export class Cartlength extends Component {
    static contextType = DataContext;
    render() {
        const { cart } = this.context;
        return (
            <div>
                {/* Shopping cart */}
                <li className="nav-cart">
                    <span>{cart.length}</span>
                    <Link
                        to='/cart'>
                        <img src={CartIcon} alt="" width="28"/>
                        </Link>
                </li>
                {/* Shopping cart */}

            </div>
        )
    }
}

export default Cartlength

