import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>View our popular Items</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='logo1.png'
              text='Desktops/PC'
              label='Shop now'
              path='/services'
            />
            <CardItem
              src='logo1.png'
              text='Desktops/PC'
              label='Shop now'
              path='/products'
            />
            <CardItem
              src='logo1.png'
              text='Desktops/PC'
              label='Shop now'
              path='/products'
            />
            </ul>
            <ul className='cards__items'>
            <CardItem
              src='logo1.png'
              text='Systems/OS'
              label='Shop now'
              path='/products'
            />
            <CardItem
              src='logo1.png'
              text='Systems/OS'
              label='Shop now'
              path='/products'
            />
            <CardItem
              src='logo1.png'
              text='Systems/OS'
              label='Shop now'
              path='/products'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;