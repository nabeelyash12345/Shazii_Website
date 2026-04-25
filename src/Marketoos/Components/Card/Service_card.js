import React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

//Components
// import CardData from './ServiceCardData';
import ServiceCardData from './ServiceCardData'


//Images
import graphic from '../../../Assets/graphic.png'
import web from '../../../Assets/web.png'
import flutter from '../../../Assets/flutter.png'
import book from '../../../Assets/book.png'
import market from '../../../Assets/market.png'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
function Card() {
    return (
        <div className='card-wrapper'>
          <h2 className='market_main'>Our Service</h2>
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={0}>
          <Grid item lg={4} sm={6} xs={12} md={6}>
            <ServiceCardData 
                imgsrc={graphic}
                title="Graphic"
                dec="We present you a proposal and discuss niffty-gritty like"    
            />
          </Grid>
          <Grid item lg={4} sm={6} xs={12} md={6}>
            <ServiceCardData
                imgsrc={web}
                title="Web development"
                dec="We present you a proposal and discuss niffty-gritty like"    
            />
          </Grid>
          <Grid item lg={4} sm={6} xs={12} md={6}>
            <ServiceCardData 
                imgsrc={flutter}
                title="App development"
                dec="We present you a proposal and discuss niffty-gritty like"    
            />
          </Grid>
          <Grid item lg={4} sm={6} xs={12} md={6}>
            <ServiceCardData
                imgsrc={book}
                title="Account and Bookkeeping"
                dec="We present you a proposal and discuss niffty-gritty like"    
            />
          </Grid>
          <Grid item lg={4} sm={6} xs={12} md={6}>
            <ServiceCardData
                imgsrc={market}
                title="Digital Marketing"
                dec="We present you a proposal and discuss niffty-gritty like"    
            />
          </Grid>
          <Grid item lg={4} sm={6} xs={12} md={6}>
            <ServiceCardData 
                imgsrc={market}
                title="Tuff Tiles"
                dec="We present you a proposal and discuss niffty-gritty like"    
            />
          </Grid>
        </Grid>
      </Box>
        </div>

    );
  }
  export default Card;


