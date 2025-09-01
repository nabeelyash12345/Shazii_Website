import React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

//Components
import CardData from './CardData';


//Images
import img from '../../Assets/profile.png'
import img1 from '../../Assets/2.png'
import img2 from '../../Assets/3.png'
import img3 from '../../Assets/4.png'
import img4 from '../../Assets/5.png'

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
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={0}>
          <Grid item lg={4} sm={6} xs={12} md={6}>
            <CardData 
                imgsrc={img}
                title="Tuff Tiles"
                dec="We present you a proposal and discuss niffty-gritty like"    
            />
          </Grid>
          <Grid item lg={4} sm={6} xs={12} md={6}>
            <CardData 
                imgsrc={img3}
                title="Tuff Tiles"
                dec="We present you a proposal and discuss niffty-gritty like"    
            />
          </Grid>
          <Grid item lg={4} sm={6} xs={12} md={6}>
            <CardData 
                imgsrc={img4}
                title="Tuff Tiles"
                dec="We present you a proposal and discuss niffty-gritty like"    
            />
          </Grid>
          <Grid item lg={4} sm={6} xs={12} md={6}>
            <CardData 
                imgsrc={img2}
                title="Tuff Tiles"
                dec="We present you a proposal and discuss niffty-gritty like"    
            />
          </Grid>
          <Grid item lg={4} sm={6} xs={12} md={6}>
            <CardData 
                imgsrc={img}
                title="Tuff Tiles"
                dec="We present you a proposal and discuss niffty-gritty like"    
            />
          </Grid>
          <Grid item lg={4} sm={6} xs={12} md={6}>
            <CardData 
                imgsrc={img1}
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


