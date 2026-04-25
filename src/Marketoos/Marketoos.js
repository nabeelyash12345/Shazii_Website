import React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';


import './Marketoos.css'
import Navabr from '../Component/Navbar/Nav'
import Service_card from './Components/Card/Service_card'
import Choose from './Components/Choose/Choose'
import Team from './Components/Team/Team';
import Footer from '../Component/Footer/Footer';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
function Marketoos() {
  return (
    <div>
        <Navabr />
      
      
     
    </div>
  )
}
export default Marketoos;