import React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

//Components
import './Choose.css'
import Choose from './Choose';

//Images
import support from '../../../Assets/support.png'
import world from '../../../Assets/world.png'
import user from '../../../Assets/user.png'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
function ChooseData() {
    return (
        <div className='card-wrapper'>
          <h2 className='market_main'>Why Choose Us</h2>
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={0}>
          <Grid item lg={4} sm={6} xs={12} md={6}>
            <Choose
                imgsrc={support}
                title="Graphic"
                dec="We present you a proposal and discuss niffty-gritty like"    
            />
          </Grid>
          <Grid item lg={4} sm={6} xs={12} md={6}>
            <Choose
                imgsrc={world}
                title="Web development"
                dec="We present you a proposal and discuss niffty-gritty like"    
            />
          </Grid>
          <Grid item lg={4} sm={6} xs={12} md={6}>
            <Choose 
                imgsrc={user}
                title="App development"
                dec="We present you a proposal and discuss niffty-gritty like"    
            />
          </Grid>
        </Grid>
      </Box>
        </div>

    );
  }
  export default ChooseData;


