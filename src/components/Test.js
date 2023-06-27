import React, { useState } from "react";
import "./GetTokens.css";

import { useFormik } from "formik";
import * as Yup from "yup";
import icon from "../images/icon-ethereum.svg";
import ButtonCard from "./ButtonCard";
import { getProvider, getSigner } from "../commonEthFunc";

const Test = ({ connected }) => {
  const [amountOut, setAmountOut] = useState(null);

  const depositFormik = useFormik({
    initialValues: {
      fromToken: "",
      fromAmount: "",
      toToken: "",
      toAmount: "",
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
      const signer = await getSigner(provider);
    },
  });
  return (
    <div>
      <form onSubmit={depositFormik.handleSubmit}>
        <main className="container">
          <section className="main-card">
            <h1 className="title">GetEthBackedToken</h1>

            <span className="far fa-user">
              <div className="form__group">
                <input
                  type="text"
                  className="form__input"
                  id="deposit"
                  placeholder="Enter Amount"
                  {...depositFormik.getFieldProps("deposit")}
                />
                {/* <label for="fromAmount" className="form__label">Enter Amount</label> */}
                {depositFormik.touched.deposit ? (
                  <div className="error">{depositFormik.errors.fromAmount}</div>
                ) : null}
              </div>
            </span>

            <div className="text-container">
              <h1 className="title">YOU GET {amountOut} </h1>

              <div className="creator-info"></div>
              <button className="btn" type="submit">
                SWAP
              </button>
            </div>
          </section>
        </main>
      </form>
    </div>
  );
};

export default Test;
