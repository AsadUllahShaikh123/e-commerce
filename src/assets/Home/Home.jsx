import React from 'react'
import { CartState } from '../context/Context'
import Filters from './Filters';
import SingleProduct from './SingleProduct';
import './style.css'
const Home = () => {

  let {state:{products}}= CartState();

  return (
    <div className='home'>
      <Filters/>
      <div className='productContainer'>
          {products.map(product=> <SingleProduct product={product} key={product.name}/>)}
      </div>
    </div> 
  )
}

export default Home