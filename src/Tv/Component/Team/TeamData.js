import React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

//Components
import './Team.css'
import Team from './Team';

//Images
import book from '../../../Assets/book.png'
import market from '../../../Assets/market.png'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
function TeamData() {
    return (
        <div className='card-wrapper'>
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={0}>
            <Grid item lg={12} sm={12} xs={12} md={12}>
            <h2 className='heading'>Our Expert Team</h2>
            </Grid>
          <Grid item lg={4} sm={6} xs={12} md={6}>
           
            <Team
                imgsrc={book}
                title="Account and Bookkeeping"
                dec="We present you a proposal and discuss niffty-gritty like"    
            />
          </Grid>
          <Grid item lg={4} sm={6} xs={12} md={6}>
            <Team
                imgsrc={market}
                title="Digital Marketing"
                dec="We present you a proposal and discuss niffty-gritty like"    
            />
          </Grid>
          <Grid item lg={4} sm={6} xs={12} md={6}>
            <Team 
                imgsrc={market}
                title="Tuff Tiles"
                dec="We present you a proposal and discuss niffty-gritty like"    
            />
          </Grid>
          <Grid item lg={4} sm={6} xs={12} md={6}>
            <Team 
                imgsrc={market}
                title="Tuff Tiles"
                dec="We present you a proposal and discuss niffty-gritty like"    
            />
          </Grid>
          <Grid item lg={4} sm={6} xs={12} md={6}>
            <Team 
                imgsrc={market}
                title="Tuff Tiles"
                dec="We present you a proposal and discuss niffty-gritty like"    
            />
          </Grid>
          <Grid item lg={4} sm={6} xs={12} md={6}>
            <Team 
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
  export default TeamData;


