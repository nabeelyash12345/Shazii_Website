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
        <div className='market_component'>
            <Service_card />
        </div>
        <div>
            <Choose />
        </div>
        <div>
            <Team />
        </div>
        <div>
            <Footer />
        </div>
    </div>
  )
}
export default Marketoos;