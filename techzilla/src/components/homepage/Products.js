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
              src='images/fav3.jpg'
              text='Explore our latest MacBook with different color and sizes'
              label='$1299.99'
              button= 'Add to cart'
            />
            <ProductItem
              src='images/img-2.jpg'
              text='Explore our latest Windows PCs. with different color and sizes'
              label='$699.99'
              button= 'Add to cart'
            />
            <ProductItem
              src='images/fav3.jpg'
              text='Explore our latest HP Laptops with different color and sizes'
              label='$899.99'
              button= 'Add to cart'
            />
          </ul>
          <ul className='products__items'>
            <ProductItem
              src='images/fav3.jpg'
              text='Explore our latest Surface Pro with different color and sizes'
              label='$899.99'
              button= 'Add to carts'
            />
            <ProductItem
              src='images/img-1.jpg'
              text='Explore new accessories and hardware products'
              label='$899.99'
              button= 'Add to cart'
            />
            <ProductItem
              src='images/fav3.jpg'
              text='Explore our latest Laptops with intel core processor i15'
              label='$899.99'
              button= 'Add to carts'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Products;