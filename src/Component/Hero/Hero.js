import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import { Typography, Button } from '@mui/material';




import'./Hero.css';
import mian from'../../Assets/main.png'
import MainCard from '../ItemCard/ItemCard';
import Navabr from './../Navbar/Nav';
import Footer from './../Footer/Footer'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
function Hero() {
  return (
   <>
      <Navabr />
       <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} >
        <Grid xs={12} sm={12} md={12} lg={6} className="gird-container">
          <Item className='main-container'>
           <div style={{margin: 'auto 70px'}}  className="gird-container">
              <Typography className="main-heading" variant='h3' style={{ fontWeight: "300", textAlign: "left", marginTop: '20' }}>
                A Digital and Daily life
                using Product Agency
              </Typography>
              <Typography variant="body1"className='main-para' paragraph sx={{ textAlign: 'left', margin: '30px auto' }}>
                Leading digital agency with solid design and development expertise. We build readymade websites, mobile applications, and elaborate online  business services.
              </Typography>
            <div style={{ textAlign: 'left' }}>
                <Button className='btn_main'>
                    Click Me
                </Button>
            </div>
           </div>
          </Item>
        </Grid>
        <Grid xs={12} sm={12} md={12} lg={6}>
         <img src={mian} alt='img' className='responsivee-img' />
        </Grid>
        
      </Grid>
    </Box>
   <Box>
      <div className='Card_container'>
        <MainCard />
      </div>
      <div>
        <Footer />
      </div>
   </Box>
   </>


  );
}

export default Hero;