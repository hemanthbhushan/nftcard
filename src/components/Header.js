import React,{useState} from 'react'
import { getAccount,getChainId } from '../commonEthFunc'

import logo from "../images/logo.svg";
import icon from '../images/icon-ethereum.svg';
import "./Header.css";
import BalanceCard from './BalanceCard';


import { getProvider,getSigner,getContract } from '../commonEthFunc';
import { closedSea } from '../constants/Address/addressStore';



const Header = () => {
 
  
  const [account, setAccount] = useState(null);
  const [chainId, setChainId] = useState(null)
  const [connButtonText, setConnButtonText] = useState("Connect Wallet");
  const [balance, setBalance] = useState(null)

  const connectWalletHandler = async() => {
   
    try {
      if (window.ethereum && window.ethereum.isMetaMask) {

        const account = await getAccount()
        accountChangedHandler(account)
        setConnButtonText(account === null? "-": account? `${account.substring(0, 6)}...${account.substring(account.length - 5)}`: "")
      
        balanceHandler()
        
       } else {
         alert("Please install Mask");
         
       }
      
    } catch (error) {
      console.log(error)
      
    } 
};


const balanceHandler = async ()=>{
  const provider =  getProvider();
  const signer  = await getSigner(provider);
  const contract = await getContract(closedSea,signer);
   const balance  = await contract.balanceOf(signer.address)
   console.log('balance ', balance )
   setBalance(balance);
}


  // update account, will cause component re-render
  const accountChangedHandler = (newAccount) => {
    setAccount(newAccount);
   
  };

  const chainChangedHandler = () => {
    // reload the page to avoid any errors with chain change mid use of application
    window.location.reload();
  };
  

   // listen for account changes
    if(window.ethereum && window.ethereum.isMetaMask){
      window.ethereum.on("accountsChanged", accountChangedHandler);
  
    window.ethereum.on("chainChanged", chainChangedHandler);
  
    }
    
  



 
  
  

  
  return (
    <header className="header">
      <div className="header-container">
        <img src={logo} alt="" className="logo" />
        <button
          className="menu-btn"
        >
          <img
            alt=""
            className="menu-btn-icon"
          />
        </button>
        <nav >
          <ul className="nav-links">
            <li>
              <a href="/"  className="nav-link">
                About
              </a>
            </li>
            <li>
              <a href="/"  className="nav-link">
                Discover
              </a>
            </li>
            <li>
              <a href="/" className="nav-link">
                Get Tokens
              </a>
            </li>
            <li>
            <span className="icon"> 🤖</span>
            <span className="nav-link" onClick={()=>connectWalletHandler()}>{connButtonText}</span>
            </li> 
            {balance? <>
              <li>
            <img src={icon}alt="ETH" className="icon"/>
            <span className="nav-link" >{balance}</span>
            </li></> : "" 
            

            }
                    
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;


