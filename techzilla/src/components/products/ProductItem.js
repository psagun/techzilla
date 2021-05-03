import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Button = styled.button`
    position: absolute;
    background-color: black;
    color: white;
    border-radius: 5px;
    outline: 0;
    cursor: pointer;
    box-shadow: 0px 2px 2px lightgray;
    transition: ease background-color 250ms;
    &:hover {
      background-color: #74b72e;
    }
`

function clickMe(){
  alert('Added to Cart Successfully.');
}

function ProductItem(props) {
  return (
    <>
      <li className='products__item'>
        <Link className='products__item__link' to={props.path}>
          <figure className='products__item__pic-wrap' data-category={props.label}>
            <img
              className='products__item__img'
              alt='Computer Image'
              src={props.src}
            />
          </figure>
          <div className='products__item__info'>
            <h5 className='products__item__text'>{props.text}</h5>
            <div className='products__item__button'><Button onClick={clickMe}>{props.button}</Button></div></div>
        </Link>
      </li>
    </>
  );
}

export default ProductItem;
