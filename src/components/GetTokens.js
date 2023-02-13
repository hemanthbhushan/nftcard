import React from 'react';
import './GetTokens.css'
/////
import './NftCard.css';
import icon from '../images/icon-ethereum.svg';
import clock from '../images/icon-clock.svg'
import equilibrium from '../images/image-equilibrium.jpg'
import view from '../images/icon-view.svg'
import avatar from '../images/image-avatar.png'
import DeadlineCard from './DeadlineCard';
import ButtonCard from './ButtonCard'

const GetTokens = ({detail}) => {
  return (
    
    <div>
       <div>
        <main className="container">
    <section className="main-card">
    <h1  className="title">From</h1>
    <span class="custom-dropdown big image-container">
     <select> 
            <option>Select One</option>   
            <img src={icon}alt="ETH" className="icon"/> <option>Ethereum</option>
            <option>DAI</option>  
            <option>USDC</option>
            
        </select>
    </span>
      <div className="text-container">
      <h1 className="title">To</h1>
        <div className="eth-info">
          <div className="info">
            <img src={icon}alt="ETH" className="icon"/><span className="eth">pricee</span>
          </div>
          
        </div>
        <div className="creator-info">
         
         <ButtonCard/>
        </div>
      </div>
    </section>
  </main>
</div>
 
</div>
  )
}

export default GetTokens