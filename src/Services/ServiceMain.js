import React from 'react'
import Nav from '../Component/Navbar/Nav'
import Service from '../Component/Service/Service'


import './ServiceMain.css'
function ServiceMain() {
  return (
    <div>
        <Nav />
       <div className='service_main'>
          <Service />
       </div>
    </div>
  )
}

export default ServiceMain