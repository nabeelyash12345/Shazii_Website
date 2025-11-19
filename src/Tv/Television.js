import React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';


import './Tv.css'
import Navabr from '../Component/Navbar/Nav'
import Footer from '../Component/Footer/Footer';
import ServiceData from './Component/Service/ServiceData';
import ChooseData from './Component/Choose/ChooseData';
import TeamData from './Component/Team/TeamData';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
function Television() {
  return (
    <div>
        <Navabr />
       
    </div>
  )
}
export default Television;