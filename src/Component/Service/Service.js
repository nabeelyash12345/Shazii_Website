import React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Link, NavLink } from 'react-router-dom'

//Components
import ServiceData from './ServiceData';
import Navbar from '../Navbar/Nav';


//Images
import clean from '../../Assets/cleantroo.png'
import event from '../../Assets/event.png'
import marketoo from '../../Assets/marketoo.png'
import tiles from '../../Assets/tiles.png'
import tv from '../../Assets/tv.PNG'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
function Services() {
    return (
        <div>
          <Navbar />
          <div className='card-wrapper'>
         
         <Box sx={{ flexGrow: 1, marginTop: '30px' }}>
         <Grid container spacing={0}>
           <Grid item lg={4} sm={6} xs={12} md={6}>
             <ServiceData
                 imgsrc={clean}
                 title="Clean Troo"
                 dec="We present you a proposal and discuss niffty-gritty like"    
             />
           </Grid>
       
            <Grid item lg={4} sm={6} xs={12} md={6}>
                  <Link className='link' to="/Marke">
                    <ServiceData
                        imgsrc={marketoo}
                        title="Marketos"
                        dec="We present you a proposal and discuss niffty-gritty like"    
                    />
                  </Link>
              </Grid>
     
           <Grid item lg={4} sm={6} xs={12} md={6}>
             <ServiceData 
                 imgsrc={event}
                 title="Eventhigntos"
                 dec="We present you a proposal and discuss niffty-gritty like"    
             />
           </Grid>
           <Grid item lg={4} sm={6} xs={12} md={6}>
             <ServiceData 
                 imgsrc={tiles}
                 title="J & S Tile"
                 dec="We present you a proposal and discuss niffty-gritty like"    
             />
           </Grid>
           <Grid item lg={4} sm={6} xs={12} md={6}>
            <NavLink to="Television">

            
             <ServiceData 
                 imgsrc={tv}
                 title="STV"
                 dec="We present you a proposal and discuss niffty-gritty like"    
             />
             </NavLink>
           </Grid>
           <Grid item lg={4} sm={6} xs={12} md={6}>
             <Link to="/Television">
                <ServiceData 
                    imgsrc={tv}
                    title="GB Fruits"
                    dec="We present you a proposal and discuss niffty-gritty like"    
                />
             </Link>
           </Grid>
         </Grid>
       </Box>
         </div>
        </div>

    );
  }
  export default Services;


