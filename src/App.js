import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Hero from './Component/Hero/Hero';
// import ItemCard from './Component/itemCardPage/ItemCard';
// import Feedback from './Component/Feeback/Feedback';
import Services from './Component/Service/Service';
// import ServiceMian from './Services/ServiceMain'
// import Footer from './Component/Footer/Footer';
import Marke from './Component/Marke/Marke';
import Television from './Tv/Television';
import Navbar from './Component/Navbar/Nav'
function App() {
  return (
    <div>
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Hero /> }/>
        <Route path='/Services' element={<Services />}/>
        <Route path='/Marke' element={<Marke />}/>
        <Route path='/Television' element={<Television />}/>
      </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App