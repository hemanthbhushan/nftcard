import { Contract, ethers } from "ethers";
import closedSea_abi from "./constants/ABI/closedSea_abi.json";


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
