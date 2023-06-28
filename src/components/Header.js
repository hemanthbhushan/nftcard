import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import { getAccount, getDecimals } from "../commonEthFunc";

import icon from "../images/icon-ethereum.svg";

import "./Header.css";

import { getProvider, getSigner, getContract } from "../commonEthFunc";
import { NUSD } from "../constants/Address/addressStore";

const Header = () => {
  const [account, setAccount] = useState(null);
  const [chainId, setChainId] = useState(null);
  const [connButtonText, setConnButtonText] = useState("Connect Wallet");
  const [balance, setBalance] = useState("Balance");
  const [connected, setConnected] = useState(true);

  const connectWalletHandler = async () => {
    try {
      if (window.ethereum && window.ethereum.isMetaMask) {
        const account = await getAccount();
        accountChangedHandler(account);
        setConnButtonText(
          account === null
            ? "-"
            : account
            ? `${account.substring(0, 6)}...${account.substring(
                account.length - 5
              )}`
            : ""
        );
        setConnected(true);

        balanceHandler();
      } else {
        alert("metamask is not installed");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const balanceHandler = async () => {
    const provider = getProvider();
    const signer = await getSigner(provider);
    const contract = await getContract(NUSD, signer);

    const _balance = await contract.balanceOf(signer.address);
    console.log(_balance);
    const decimals = await getDecimals(contract);

    setBalance(ethers.formatEther(_balance));
  };

  // update account, will cause component re-render
  const accountChangedHandler = (newAccount) => {
    setAccount(newAccount);
  };

  const chainChangedHandler = () => {
    // reload the page to avoid any errors with chain change mid use of application
    window.location.reload();
  };

  // listen for account changes
  if (window.ethereum && window.ethereum.isMetaMask) {
    window.ethereum.on("accountsChanged", accountChangedHandler);

    window.ethereum.on("chainChanged", chainChangedHandler);
  }

  useEffect(() => {
    connectWalletHandler();
    balanceHandler();
  }, [accountChangedHandler]);
  return (
    <header className="header">
      <div className="header-container">
        <img src={icon} alt="" className="logo" />
        <button className="menu-btn">
          <img alt="" className="menu-btn-icon" />
        </button>
        <nav>
          <ul className="nav-links">
            <li><span className="nav-link">Wallet Address</span></li><li>
              <span className="icon"> 🤖</span>
              <span className="nav-link" onClick={() => connectWalletHandler()}>
                {connButtonText}
              </span>
            </li>
            <>
              <li>
                <span className="nav-link">NUSD </span>
                <img src={icon} alt="ETH" className="icon" />
                <span className="nav-link">{balance}</span>
              </li>
            </>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
