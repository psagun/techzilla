import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Explore these Popular accessories of this Month!</h1><h3>These are the most bought items at techZilla.</h3>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-1.jpg'
              text='Explore our latest MacBook with different color and sizes'
              label='Shop Now'
              path='/products'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Explore our latest Windows PCs. with different color and sizes'
              label='Shop Now'
              path='/products'
            />
            <CardItem
              src='images/img-1.jpg'
              text='Explore our latest HP Laptops with different color and sizes'
              label='Shop Now'
              path='/products'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-2.jpg'
              text='Explore our latest Surface Pro with different color and sizes'
              label='Shop Now'
              path='/products'
            />
            <CardItem
              src='images/img-1.jpg'
              text='Explore new accessories and hardware products'
              label='Shop Now'
              path='/products'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Explore our latest Laptops with intel core processor i15'
              label='Shop Now'
              path='/products'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
