import React from 'react';
import './GetTokens.css'
import { ethers, BigNumber } from "ethers";
import { useFormik } from "formik";
import * as Yup from "yup";
import icon from '../images/icon-ethereum.svg';
import ButtonCard from './ButtonCard'

const GetTokens = () => {


  const formik = useFormik({
    initialValues: {
      fromToken: "",
      toToken: "",
      amountIn: "",
      toAddress:"",
    },
    validationSchema: Yup.object({
        addressToken1: Yup.string().oneOf(["0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6","0x73967c6a0904aa032c103b4104747e88c566b1a2","0x509ee0d083ddf8ac028f2a56731412edd63223b9"]).required("Required"),
        addressToken2: Yup.string().oneOf(["0xBE9ac76dB19b0135D493fa8fFfD7b6093d871432"]).required("Required"),
        amountIn: Yup.string().required("Required"),
        toAddress: Yup.string().required("Required"),
    }),
    onSubmit:  async (values) => {



        },
});

  return (
    
    <div>
       <div>
        <main className="container">
    <section className="main-card">
    <h1  className="title">From</h1>
    <span class="custom-dropdown big image-container">
     <select> 
            <option>Select One</option>   
            <option>Ethereum</option>
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