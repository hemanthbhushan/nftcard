import { ethers } from "ethers";
import nusd_abi from "./constants/ABI/nusd_abi.json";

export function getProvider() {
  return new ethers.BrowserProvider(window.ethereum);
}

export function getSigner(provider) {
  return provider.getSigner();
}

export async function getContract(address, signer) {
  return new ethers.Contract(address, nusd_abi, signer);
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
  const decimals = await token
    .decimals()
    .then((result) => {
      return result;
    })
    .catch((error) => {
      console.log("No tokenDecimals function for this token, set to 0");
      return 0;
    });
  return decimals;
}