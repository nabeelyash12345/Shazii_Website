import React from 'react'


import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';


import img from '../../Assets/profile.png'
import pay from '../../Assets/pay.png'
import './Paymethod.css'
function Paymethod() {
  return (
    <div>
        <div className='pay_container'>
            <div className='pay_icon'>
                <ArrowBackIosIcon />
            </div>
            <div className='pay_profile'>
                <h3>Bank Account</h3>
                <img src={img} />
            </div>
        </div>
        <div className='pay_img'>
            <img src={pay} />
            <br/>
            <div className='easy' >
                <input type='radio' style={{marginLeft: '20px'}}/>
                <h3 style={{marginLeft: '10px'}}>Esypaisa</h3>
            </div>
            <br/>
            <div className='easy'>
            <input type='radio' style={{marginLeft: '20px'}}/>
                <h3 style={{marginLeft: '10px'}}>Bank Account</h3>
            </div>
            <br/>
            <div className='easy'>
            <input type='radio' style={{marginLeft: '20px',}}/>
                <h3 style={{marginLeft: '10px'}}>Jazz Cash</h3>
            </div>
            <br/ >
            <button className='next'>Next</button>
            <br/>
        </div>
    </div>
  )
}

export default Paymethod