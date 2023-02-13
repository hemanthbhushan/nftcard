import React from 'react';
import './NftCard.css';
import icon from '../images/icon-ethereum.svg';
import clock from '../images/icon-clock.svg'
import equilibrium from '../images/image-equilibrium.jpg'
import view from '../images/icon-view.svg'
import avatar from '../images/image-avatar.png'
import DeadlineCard from './DeadlineCard';
import ButtonCard from './ButtonCard'


const NftCard = ({detail}) => {
  

     
  return (
    <div>
        <main className="container">
    <section className="main-card">
      <div className="image-container">
        <img src={equilibrium} alt="nft" className="main-image"/>
        <div className="overlay"></div>
        <img src={view} alt="view icon" className="view"/>
      </div>
      <div className="text-container">
        <h1 className="title">{detail.songName}</h1>
        <p className="description">{detail.discription}</p>
        <div className="eth-info">
          <div className="info">
            <img src={icon}alt="ETH" className="icon"/><span className="eth">{detail.priceInEth}</span>
          </div>
          <div className="info">
            <img src={clock} alt="clock" className="icon"/><span><DeadlineCard detail = {detail} /> days left</span>
          </div>
        </div>
        <div className="creator-info">
          <img src={avatar} alt="Jules Wyvern" className="avatar"/>
          <p className="creator-text">Music By <span className="creator-name">{detail.composerName}</span></p>
          <ButtonCard>Buy</ButtonCard>
        </div>
      </div>
    </section>
  </main>
</div>

  )
}

export default NftCard