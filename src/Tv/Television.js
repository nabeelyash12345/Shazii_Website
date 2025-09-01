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
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                <Item>
                    <div className='martketoos_container'>
                        <div>

                        </div>
                       <div className='marketoos_contain'>
                            <h2>IT Solution for <br /> Your Business</h2>
                            <p>Leading digital agency with solid design and <br />development expertise. We build readymade <br/> websites, mobile applications, and elaborate online <br /> business services.</p>
                            <button>Contact Now</button>
                       </div>
                    </div>
                </Item>
                </Grid>
            </Grid>
        </Box>
        <div>
          <ServiceData />
        </div>
        <div>
          <ChooseData />
        </div>
        <div>
          <TeamData />
        </div>
        <div>
            <Footer />
        </div>
        
    </div>
  )
}
export default Television;