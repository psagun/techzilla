import React from 'react';
import '../products/Products.css';
import ProductItem from '../products/ProductItem';

 function Products() {
  /* const [products] = useState([
    {
      image: 'images/fav3.jpg',
      name: 'Macbook latest PCs with different colors',
      label: '$1299.00',
      button: 'Add to Cart'
      }
  ]); */

  return (
    <div className='products'>
      <div className='products__container'>
        <div className='products__wrapper'>
          <ul className='products__items'>
            <ProductItem
              src='images/fav3.jpg'
              text='Explore our latest MacBook with different color and sizes'
              path='/details'
              label='$1299.99'
              button= 'Add to Cart'
              path1='/carts'
            />
            <ProductItem
              src='images/img-2.jpg'
              text='Explore our latest Windows PCs. with different color and sizes'
              path='/details'
              label='$1299.99'
              button= 'Add to Cart'
              path1='/carts'
            />
            <ProductItem
              src='images/fav3.jpg'
              text='Explore our latest HP Laptops with different color and sizes'
              path='/details'
              label='$1299.99'
              button= 'Add to Cart'
              path1='/carts'
            />
          </ul>
          <ul className='products__items'>
            <ProductItem
              src='images/fav3.jpg'
              text='Explore our latest Surface Pro with different color and sizes'
              path='/details'
              label='$1299.99'
              button= 'Add to Cart'
              path1='/carts'
            />
            <ProductItem
              src='images/img-1.jpg'
              text='Explore new accessories and hardware products'
              path='/details'
              label='$1299.99'
              button= 'Add to Cart'
              path1='/carts'
            />
            <ProductItem
              src='images/fav3.jpg'
              text='Explore our latest Laptops with intel core processor i15'
              path='/details'
              label='$1299.99'
              button= 'Add to Cart'
              path1='/carts'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Products;