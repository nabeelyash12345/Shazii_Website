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
import EventBrightos from './Tv/Component/EventBrightos/EventBrightos';
import FashionHands from './Tv/Component/FashionHands/FashionHands';
import Donate from './Tv/Component/Donate/Donate';
import Aboutusjan from './Component/Marke/Aboutusjan'
import JanService from "./Component/Service/JanService"
import ShaziienterprisesServices from './Component/Service/shaziienterprisesServices'
import HandCrafts from './Component/HandCrafts/HandCrafts';
import SocialMasterClass from './Component/SocialMasterClass/SocialMasterClass';
import AbooraChai from './Component/AbooraChai/AbooraChai';
import EventHome from './Component/Marke/EventHome';
function App() {
  return (
    <div>
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Hero /> }/>
        <Route path='/Services' element={<Services />}/>
        <Route path='/Marke' element={<Marke />}/>
        <Route path='/Television' element={<Television />}/>
        <Route path='/EventBrightos' element={<EventBrightos />}/>
        <Route path='/FashionHands' element={<FashionHands />}/>
        <Route path='/Donate' element={<Donate />}/>
        <Route path='/Aboutusjan' element={<Aboutusjan />}/>
        <Route path='/JanService' element={<JanService />}/>
        <Route path='/HandCrafts' element={<HandCrafts />}/>
        <Route path='/SocialMasterClass' element={<SocialMasterClass />}/>
        <Route path='/AbooraChai' element={<AbooraChai />}/>
        <Route path='/EventHome' element={<EventHome />}/>


      <Route
          path="/shaziienterprisesServices"
          element={<ShaziienterprisesServices />}
        />


        

        

       





     
      </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App

