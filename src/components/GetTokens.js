import React,{useState} from 'react';
import './GetTokens.css'
import { ethers, BigNumber } from "ethers";
import { useFormik } from "formik";
import * as Yup from "yup";
import icon from '../images/icon-ethereum.svg';
import ButtonCard from './ButtonCard';
import {
  Ethereum,
  DAI,
  USDT
} from '../constants/Address/addressStore.js'

const GetTokens = () => {
  const [formToken, setFormToken] = useState(null)

  const formik = useFormik({
    initialValues: {
      fromToken: "",
      fromAmount:"",
      toToken: "",
      toAmount:""
    },
    validationSchema: Yup.object({
      fromToken: Yup.string().oneOf([Ethereum,DAI,USDT]).required("Required"),
      fromAmount: Yup.string().required("Required"),
       toToken: Yup.string().required("Required"),
    }),
    onSubmit:  async (values) => {



        },
});

  return (
    
    <div>
    <form  onSubmit={formik.handleSubmit}>
    <main className="container">
    <section className="main-card">
    <h1 className="title">Swap</h1>
    <h2  className="title">From</h2>
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
            <input type="text" className="form__input" id="fromAmount" placeholder="Enter Amount" {...formik.getFieldProps("fromAmount")} />
            {/* <label for="fromAmount" className="form__label">Enter Amount</label> */}
            {formik.touched.fromAmount  ? (
           <div >{formik.errors.fromAmount}</div>
            ) : null}
          </div>
            
      </span>
   
      <div className="text-container">
      <h1 className="title">YOU GET</h1>
       
        <div className="creator-info">
         
         <ButtonCard/>
        </div>
      </div>
    </section>
  </main>
  </form> 

 
</div>
  )
}

export default GetTokens