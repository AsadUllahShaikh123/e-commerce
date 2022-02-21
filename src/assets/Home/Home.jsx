import React from 'react'
import { CartState } from '../context/Context'

const Home = () => {

  let {state:{products}}= CartState();

  return (
    <div className='home'>
      {/* <Filters/> */}
      <div className='productContainer'>
          {products.map(value=> <span key={value.name}>{value.name}<br/></span> )}
      </div>
    </div> 
  )
}

export default Home