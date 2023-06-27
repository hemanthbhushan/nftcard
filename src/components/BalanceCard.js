import React from 'react';
import { getProvider,getSigner,getContract } from '../commonEthFunc';
import { NUSD } from '../constants/Address/addressStore';

const BalanceCard = ({setBalance}) => {
        

      const balanceHandler = async ()=>{
           const provider =  getProvider();
           const signer  = getSigner(provider);
           const contract = getContract(NUSD,signer);
           
          console.log('contract', contract)


      }      


  return (
    <div>
      contract
    </div>
  )
}

export default BalanceCard