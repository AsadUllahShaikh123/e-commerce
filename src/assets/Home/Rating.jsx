import React from 'react'
import {AiFillStar,AiOutlineStar} from 'react-icons/ai'
const Rating = ({rating}) => {
  return (
    <>
        {
          [...Array(5)].map((_,i)=>(
            <span>
              {
                rating > i ? (
                  <AiFillStar fontsize = '15px'/>
                ):(
                  <AiOutlineStar fontsize='15px'/>
                )
              }
            </span>
          ))
        }
    </>
  )
}

export default Rating