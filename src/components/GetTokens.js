import React,{useState} from 'react';
import './GetTokens.css'
import { ethers, BigNumber } from "ethers";
import { useFormik } from "formik";
import * as Yup from "yup";
import icon from '../images/icon-ethereum.svg';
// import ButtonCard from './ButtonCard';
import './ButtonCard.css'

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
      // fromAmount: Yup.string().required("Required"),  
      fromAmount: Yup.string().matches(
        /(?=.*?\d)^\$?(([1-9]\d{0,2}(,\d{3})*)|\d+)?(\.\d{1,2})?$/,
        "not valid"
      ).required("Required"), 
     

       toToken: Yup.string().required("Required"),
    }),
    onSubmit:  async (values) => {

      console.log('values.fromAmount', values.fromAmount)



        },
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
      <h1 className="title">YOU GET</h1>
       
        <div className="creator-info">
        {/* <div className="containerb">
           <div className="btn" type="submit" ><a>Swap</a></div>

         </div> */}
         
         {/* <ButtonCard type="submit"/> */}
        </div>
        <button className='btn' type="submit">Send</button>
      </div>
      
    </section>
  </main>
     
  </form> 

 
</div>
  )
}

export default GetTokens