import React,{useState} from 'react';
import './GetTokens.css'
import { ethers, BigNumber } from "ethers";
import { useFormik } from "formik";
import * as Yup from "yup";
import icon from '../images/icon-ethereum.svg';
import ButtonCard from './ButtonCard';
import { getAmountOut,getProvider,getSigner,getRouter ,getAccount} from '../commonEthFunc';


import {
  Ethereum,
  DAI,
  USDT,
  router_address
} from '../constants/Address/addressStore.js'

const Test = ({connected}) => {
  const [formToken, setFormToken] = useState(null)
  const [amountOut, setAmountOut] = useState(null)

  const formik = useFormik({
    initialValues: {
        fromToken: "",
        fromAmount:"",
        toToken: "",
        toAmount:""
    },
    validationSchema: Yup.object({
        // fromToken: Yup.string().oneOf([Ethereum,DAI,USDT]).required("Required"),
        // fromAmount: Yup.string().required("Required"),  
        // fromAmount: Yup.string().matches(
        //   /(?=.*?\d)^\$?(([1-9]\d{0,2}(,\d{3})*)|\d+)?(\.\d{1,2})?$/,
        //   "not valid"
        // ).required("Required"), 
       
  
        //  toToken: Yup.string().required("Required"),
    }),
    onSubmit: async (values, { resetForm }) => {
     
      
        const provider = getProvider();
        const signer = await getSigner(provider)
        const routerContract =getRouter(router_address,signer)  
        console.log('signer , routerContract', signer , await routerContract.factory())     

      const amountOut =  await getAmountOut(values.fromToken,values.toToken,values.toAmount,routerContract,signer);
     console.log('amountOut', amountOut)
     
        
        
       
    }

      
  });
  return (
     
    <div>
    <form  onSubmit={formik.handleSubmit}>
    <main className="container">
    <section className="main-card">
    <h1 className="title">Swap</h1>
    <span className="custom-dropdown big image-container">
     <select 
      id='fromToken'
      name='fromToken'
      placeholder='Select One'
      type = 'text'
      {...formik.getFieldProps("fromToken")}
        > 
            <option value = "">Select One</option>   
            <option value={Ethereum}>Ethereum</option>
            <option value={DAI}>DAI</option>  
            <option value={USDT}>USDT</option>
            
        </select>
     </span>
    <span className="far fa-user">
          <div class="form__group">
            <input type="text" className="form__input" id="fromAmount" placeholder="Enter Amount" min="1" {...formik.getFieldProps("fromAmount")} />
            {/* <label for="fromAmount" className="form__label">Enter Amount</label> */}
            {formik.touched.fromAmount  ? (
           <div className='error' >{formik.errors.fromAmount}</div>
            ) : null}
          </div>
            
      </span>
   
      <div className="text-container">
      <h1 className="title">YOU GET {amountOut} </h1>
       
        <div className="creator-info">
       
         
         
        </div>
        <button className='btn' type="submit">SWAP</button>

     
      </div>
      
    </section>
  </main>
     
  </form> 

 
</div>
   
  )
}

export default Test