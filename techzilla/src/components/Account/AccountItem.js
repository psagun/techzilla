import React from 'react';
import { Link } from 'react-router-dom';
import './Account.css';

function AccountItem(props) {
    return (
        <>
            <li className='account-item'>
                <Link className='account-item-link' to={props.path}>
                    <img 
                        className='account-item-icon'
                        alt=''
                        src={props.src}
                    />
                    <div className='account-item-info'>
                        <h2 className='account-item-title'>{props.title}</h2>
                        <p className='account-item-description'>{props.description}</p>
                    </div>
                </Link>
            </li>
        </>
    );
}

export default AccountItem;