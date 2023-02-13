import React from 'react'
import NftCard from './NftCard'
import details from '../Store.json';



const RenderNftCard = () => {
   
return (
    details.map((details,index)=><NftCard detail = {details} key={index}/>)
  
  )
}

export default RenderNftCard