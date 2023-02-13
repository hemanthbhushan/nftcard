import React from 'react'
import './App.css'
import Header from './components/Header'
import RenderNftCard from './components/RenderNftCard';
import GetTokens from './components/GetTokens';
import Home from './components/Home';



const App = () => {
  return (
    <div className=''>
      {/* <BrowserRouter>
      <Routes>
        <Route path='/' element = {<Header/>} /> 
          <Route index element={<Home />} /> 
          <Route path="nftCard" element={<RenderNftCard/>}/>
            <Route path="getTokens" element={<GetTokens/>} />
          
        </Routes>
    </BrowserRouter> */}
    
    <Header/>
    
    {/* <RenderNftCard/> */}
    <GetTokens/>
      
      
      
      
      </div>
  )
}

export default App