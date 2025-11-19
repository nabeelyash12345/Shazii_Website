import React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Link, NavLink } from 'react-router-dom'



import TUFFTILES from '../../../Assets/wed 1.png'
import logo from '../../../Assets/Evenkog.png'
import Navbar from '../../../Component/Navbar/Nav';
import JansonsTiles from '../../../Component/ItemCard/jansons-tiles';
import Footer from '../../../Component/ItemCard/footer';

import Donatemain from './Donatemain';



const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
function Donate() {
    return (
        <div className=' bg-[#F3F3F3]'>
          <div className='  h-56'>
          <Navbar />
          </div>
         
          <section className="w-full  h-64 bg-[#EDF2EE] rounded-3xl shadow-md   flex flex-col md:flex-row items-center justify-between   mx-auto ">
      {/* Left Side Image */}
      <div className="flex-1  justify-center mb-6 md:mb-0 px-20">
        <img
          src={TUFFTILES}
          alt="Tiles background"
          className="w-48 h-64 "
        />
      </div>

      {/* Center Logo & Company Info */}
      <div className="flex-1 text-center md:text-left px-4">
        <div className="flex  flex-row    gap-4 items-center md:items-start">
          <img
            src={logo}
            alt="Jan&Sons Tiles"
            className="w-16 h-16 object-contain rounded-xl mb-3"
          />
          <div>
          <h2 className="text-[#B66C7A] text-2xl font-semibold">
            EventBrightos <span className="text-[#C4AFAE] text-sm"></span>
          </h2>
          <p className="text-gray-500 text-sm mt-1">
            Make  your event Bright with eventbrigtos
          </p>
          </div>
        </div>
      </div>

      {/* Right Side Services */}
      <div className="flex-1     md:text-right  md:mt-0">
        <h3 className="text-[#B66C7A]  text-center text-2xl font-semibold mb-2">Services</h3>
        <ul className="text-gray-500 text-center text-sm space-y-1">
          <li>Wedding</li>
          <li>Birthday party</li>
          <li>Engagement</li>
          <li>Wedding Anniversary</li>
          <li>Pre-wedding </li>
          <li>phhotoshoot</li>
        </ul>
      </div>
    </section>
    <Donatemain/>
<Footer/>
        </div>
        

    );
  }
  export default Donate;


