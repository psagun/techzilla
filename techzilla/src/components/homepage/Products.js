import React from 'react';
import '../../App.css';
import ProductItem from '../products/ProductItem';

function Products() {
  return (
    <div className='products'>
      <div className='products__container'>
        <div className='products__wrapper'>
          <ul className='products__items'>
            <ProductItem
              src='images/img-1.jpg'
              text='Explore our latest MacBook with different color and sizes'
              label='Shop Now'
              path='/products'
            />
            <ProductItem
              src='images/img-2.jpg'
              text='Explore our latest Windows PCs. with different color and sizes'
              label='Shop Now'
              path='/products'
            />
            <ProductItem
              src='images/img-1.jpg'
              text='Explore our latest HP Laptops with different color and sizes'
              label='Shop Now'
              path='/products'
            />
          </ul>
          <ul className='products__items'>
            <ProductItem
              src='images/img-2.jpg'
              text='Explore our latest Surface Pro with different color and sizes'
              label='Shop Now'
              path='/products'
            />
            <ProductItem
              src='images/img-1.jpg'
              text='Explore new accessories and hardware products'
              label='Shop Now'
              path='/products'
            />
            <ProductItem
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

export default Products;