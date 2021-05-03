import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Explore these Popular accessories of this Month!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
        <h3>Explore our available Operating Systems at Techzilla</h3>
        <h1>-</h1>
          <ul className='cards__items'>
            <CardItem
              src='images/windows.png'
              text='Explore our latest Windows OS accessories'
              label='Shop Now'
              path='/products'
            />
            <CardItem
              src='images/mac1.png'
              text='Explore our latest Mac OS. accessories'
              label='Shop Now'
              path='/products'
            />
            <CardItem
              src='images/linux.jpg'
              text='Explore our latest Linux OS accessories'
              label='Shop Now'
              path='/products'
            />
          </ul>
          <h3>Explore our most popular items browsed by tecZilla Members</h3>
          <h1>-</h1>
          <ul className='cards__items'>
            <CardItem
              src='images/fav1.jpg'
              text='HP 23.8" All-in-One Desktop Computer Full HD Touch Display'
              label='Shop Now'
              path='/products'
            />
            <CardItem
              src='images/mac2.jfif'
              text='Explore new accessories and hardware products'
              label='Shop Now'
              path='/products'
            />
            <CardItem
              src='images/fav3.jpg'
              text='Lenovo Thinkbook 14s Premium Business Ultrabook,SD'
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
