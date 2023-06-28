// import React from 'react'
// import { getAccount} from '../commonEthFunc'

// const ConnectWallet = ({setAccount,setConnButtonText}) => {


//     const connectWalletHandler = async() => {
   
//         try {
//           if (window.ethereum && window.ethereum.isMetaMask) {
    
//             const account = await getAccount()
//              accountChangedHandler(account)
//              console.log('account', account)
           
           
//             setConnButtonText(account === null? "-": account? `${account.substring(0, 6)}...${account.substring(account.length - 5)}`: "")
//             console.log("im here")
            
//            } else {
//              alert("Please install Mask");
             
//            }
          
//         } catch (error) {
//           console.log(error)
          
//         } 
//     };
    
//       // update account, will cause component re-render
//       const accountChangedHandler = (newAccount) => {
//         setAccount(newAccount);
       
//       };
    
//       const chainChangedHandler = () => {
//         // reload the page to avoid any errors with chain change mid use of application
//         window.location.reload();
//       };
      
    
//        // listen for account changes
//         if(window.ethereum && window.ethereum.isMetaMask){
//           window.ethereum.on("accountsChanged", accountChangedHandler);
      
//         window.ethereum.on("chainChanged", chainChangedHandler);
      
//         }
     
//   return (
//     <div>{connectWalletHandler}</div>
//   )
// }

// export default ConnectWallet