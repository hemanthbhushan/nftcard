import { Contract, ethers } from "ethers";
import closedSea_abi from "./constants/ABI/closedSea_abi.json";
import router_abi from "./constants/ABI/router_abi.json";
import {
  Ethereum,
  DAI,
  USDT,
  router_address
} from './constants/Address/addressStore.js' 


export function getProvider() {
  return new ethers.BrowserProvider(window.ethereum);
}

export function getSigner(provider) {
  return provider.getSigner();
}

export async function getContract(address, signer) {
  return new ethers.Contract(address, closedSea_abi, signer);
}

export async function getNetwork(provider) {
  const network = await provider.getNetwork();
  return network.chainId;
}

export async function getAccount() {
  const accounts = await window.ethereum.request({
    method: "eth_requestAccounts",
  });

  return accounts[0];
}

export async function getChainId() {
  return await window.ethereum.request({ method: "eth_chainId" });
}

export async function getDecimals(token) {
  const decimals = await token.decimals().then((result) => {
      return result;
    }).catch((error) => {
      console.log('No tokenDecimals function for this token, set to 0');
      return 0;
    });
    return decimals;
}
export function getRouter(address, signer) {
  return new Contract(address, router_abi, signer);
}

export async function getAmountOut(
  address1,
  address2,
  amountIn,
  routerContract,
  signer
) {
  try {
    // if(address1 === Ethereum ){
      const token1 = new Contract(address1, closedSea_abi, signer);
      const token1Decimals = await getDecimals(token1);
      const values_out = await routerContract.getAmountsOut(
        ethers.parseUnits(String(amountIn), token1Decimals),
        
        [address1, address2]
      );

      const token2 = new Contract(address2, closedSea_abi, signer);
      const token2Decimals = await getDecimals(token2);
      const amount_out = values_out[1]*10**(-token2Decimals);
      console.log('amount out: ', amount_out)
      return Number(amount_out);

    // }
   } catch(e) {
    return e;
  }
}
// export async function swapTokens(
//   address1,
//   address2,
//   amount,
//   routerContract,
//   accountAddress,
//   signer
// ) {
//   const tokens = [address1, address2];
//   const time = Math.floor(Date.now() / 1000) + 200000;
//   const deadline = ethers.from(time);

//   const token1 = new Contract(address1, closedSea_abi, signer);
//   const tokenDecimals = await getDecimals(token1);
  
//   const amountIn = ethers.parseUnits(amount, tokenDecimals);
//   const amountOut = await routerContract.callStatic.getAmountsOut(
//     amountIn,
//     tokens
//   );

//   await token1.approve(routerContract.address, amountIn);
//   const wethAddress = await routerContract.WETH();

//   if (address1 === wethAddress) {
//     // Eth -> Token
//     await routerContract.swapExactETHForTokens(
//       amountOut[1],
//       tokens,
//       accountAddress,
//       deadline,
//       { value: amountIn }
//     );
//   } else if (address2 === wethAddress) {
//     // Token -> Eth
//     await routerContract.swapExactTokensForETH(
//       amountIn,
//       amountOut[1],
//       tokens,
//       accountAddress,
//       deadline
//     );
//   } else {
//     await routerContract.swapExactTokensForTokens(
//       amountIn,
//       amountOut[1],
//       tokens,
//       accountAddress,
//       deadline
//     );
//   }
// }
