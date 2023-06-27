import React, { useState } from "react";
import "./GetTokens.css";

import { useFormik } from "formik";
import * as Yup from "yup";

import { getProvider, getSigner, getContract } from "../commonEthFunc";
import { NUSD } from "../constants/Address/addressStore.js";
// const { BigNumber } = require("ethers");

// function expandTo18Decimals(n) {
//   return BigNumber.from(n).mul(BigNumber.from(10).pow(18));
// }

const Test = ({ connected }) => {
  const [amountOut, setAmountOut] = useState(null);

  const depositFormik = useFormik({
    initialValues: {
      deposit: "",
    },
    validationSchema: Yup.object({
      deposit: Yup.string().required("Required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        const provider = getProvider();
        const signer = await getSigner(provider);
        const contract = await getContract(NUSD, signer);
        const val = values.deposit;

        await contract.deposit({ value: val.toString() });
      } catch {
        console.error();
      }
    },
  });
  const redeemFormik = useFormik({
    initialValues: {
      redeem: "",
    },
    validationSchema: Yup.object({
      redeem: Yup.string().required("Required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        const provider = getProvider();
        const signer = await getSigner(provider);
        const contract = await getContract(NUSD, signer);
        const val = values.redeem;
        console.log(val, "val");

        await contract.redeem(val.toString());
      } catch {
        console.error();
      }
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
                <label>deposit ETH</label>
                <input
                  type="text"
                  className="form__input"
                  id="deposit"
                  placeholder="Enter Amount"
                  {...depositFormik.getFieldProps("deposit")}
                />

                {depositFormik.touched.deposit ? (
                  <div className="error">{depositFormik.errors.deposit}</div>
                ) : null}
              </div>
            </span>

            <div className="text-container">
              <div className="creator-info">GEt</div>
              <button className="btn" type="submit">
                Deposit
              </button>
            </div>
          </section>
        </main>
      </form>

      <form onSubmit={redeemFormik.handleSubmit}>
        <main className="container">
          <section className="main-card">
            <h1 className="title">redeemToken</h1>

            <span className="far fa-user">
              <div className="form__group">
                <label>Reedim ETH</label>
                <input
                  type="text"
                  className="form__input"
                  id="redeem"
                  placeholder="Enter Amount"
                  {...redeemFormik.getFieldProps("redeem")}
                />
                {/* <label for="fromAmount" className="form__label">Enter Amount</label> */}
                {depositFormik.touched.redeem ? (
                  <div className="error">{redeemFormik.errors.redeem}</div>
                ) : null}
              </div>
            </span>

            <div className="text-container">
              <div className="creator-info"></div>
              <button className="btn" type="submit">
                Redeem
              </button>
            </div>
          </section>
        </main>
      </form>
    </div>
  );
};

export default Test;
