import React from 'react'
import {AiFillStar,AiOutlineStar} from 'react-icons/ai'
const Rating = ({rating , onClick , style}) => {
  return (
    <>
        {
          [...Array(5)].map((_,i)=>(
            <span key={i} style={style} onClick={()=> onClick(i)}>
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